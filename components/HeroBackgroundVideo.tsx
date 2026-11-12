import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const POSTER = '/media/speedyrebuilds-hero-poster.jpg';
// React 18 forwards this browser hint without a warning when it is lowercase.
const POSTER_PRIORITY = { fetchpriority: 'high' };

const HeroBackgroundVideo: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const togglePlayback = useRef<() => void>(() => {});
  const [canControl, setCanControl] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const background = backgroundRef.current;
    if (!video || !background) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const smallScreen = window.matchMedia('(max-width: 767px)');
    let inView = false;
    let disposed = false;
    let failed = false;
    let blocked = false;
    let pendingPlay = false;
    let selectedSource: string | undefined;
    let frameCallback: number | undefined;
    let animationFrame: number | undefined;

    const allowed = () => !reducedMotion.matches && !smallScreen.matches;
    const shouldPlay = () => allowed() && inView && !document.hidden
      && !manuallyPaused.current && !blocked && !failed;

    const syncPlayback = () => {
      if (disposed) return;
      setCanControl(allowed() && !failed);
      video.autoplay = shouldPlay();

      if (!allowed()) {
        video.pause();
        setFrameReady(false);
        // No source exists on phones or with reduced motion, so neither MP4 downloads.
        if (video.hasAttribute('src')) {
          video.removeAttribute('src');
          video.load();
        }
        return;
      }

      if (!shouldPlay()) {
        video.pause();
        return;
      }

      // Pick one rendition for this visit; resizing never downloads the other one.
      if (!selectedSource) {
        selectedSource = window.matchMedia('(min-width: 1440px)').matches
          ? '/media/speedyrebuilds-hero-1080p.mp4'
          : '/media/speedyrebuilds-hero-720p.mp4';
      }
      video.defaultMuted = true;
      video.muted = true;
      if (!video.hasAttribute('src')) video.src = selectedSource;
      if (pendingPlay || !video.paused) return;

      setPlaying(true);
      pendingPlay = true;
      video.play().catch((error: DOMException) => {
        if (disposed || error.name === 'AbortError' || !shouldPlay()) return;
        blocked = true;
        video.autoplay = false;
        video.pause();
        setPlaying(false);
        setFrameReady(false);
      }).finally(() => {
        pendingPlay = false;
        // A quick scroll or preference change may have interrupted the pending play.
        if (!disposed && shouldPlay() && video.paused) syncPlayback();
      });
    };

    const onPlaying = () => {
      if (!shouldPlay()) {
        video.pause();
        return;
      }
      setPlaying(true);
      const revealFrame = () => {
        if (!disposed && shouldPlay() && video.readyState >= 2) setFrameReady(true);
      };
      // Keep the poster underneath until a decoded frame is actually ready to paint.
      if ('requestVideoFrameCallback' in video) {
        frameCallback = video.requestVideoFrameCallback(revealFrame);
      } else {
        animationFrame = requestAnimationFrame(revealFrame);
      }
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      // Removing the source to honor a preference change is not a playback failure.
      if (!video.hasAttribute('src')) return;
      failed = true;
      video.autoplay = false;
      video.pause();
      setPlaying(false);
      setFrameReady(false);
      setCanControl(false);
    };

    togglePlayback.current = () => {
      if (!allowed() || failed) return;
      if (!video.paused || pendingPlay) {
        manuallyPaused.current = true;
      } else {
        manuallyPaused.current = false;
        blocked = false;
      }
      // Call play within the click/keypress gesture so blocked autoplay can be retried.
      syncPlayback();
    };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('pause', onPause);
    video.addEventListener('error', onError);
    reducedMotion.addEventListener('change', syncPlayback);
    smallScreen.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(background);
    syncPlayback();

    return () => {
      disposed = true;
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncPlayback);
      smallScreen.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('error', onError);
      if (frameCallback !== undefined) video.cancelVideoFrameCallback(frameCallback);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
      togglePlayback.current = () => {};
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <>
      <div ref={backgroundRef} className="hero-background" aria-hidden="true">
        <img
          src={POSTER}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          {...POSTER_PRIORITY}
          className="hero-media"
        />
        <video
          ref={videoRef}
          id="hero-background-video"
          className={`hero-media hero-video ${frameReady ? 'is-ready' : ''}`}
          poster={POSTER}
          preload="none"
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="hero-overlay" />
      </div>
      {canControl && (
        <button
          type="button"
          className="hero-playback"
          onClick={() => togglePlayback.current()}
          aria-controls="hero-background-video"
          aria-label={playing ? 'Pause background video' : 'Play background video'}
        >
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          <span>{playing ? 'Pause video' : 'Play video'}</span>
        </button>
      )}
    </>
  );
};

export default HeroBackgroundVideo;
