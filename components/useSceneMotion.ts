import { useEffect, useRef } from 'react';

/** Small, event-driven scene movements. There is no idle animation loop. */
export default function useSceneMotion<T extends HTMLElement>({ distance = 40, tilt = 0 } = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;

    const desktopScreen = matchMedia('(min-width: 1024px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const motionAllowed = () => desktopScreen.matches && !reducedMotion.matches;
    let inView = false;
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;
    const variables = ['--scene-shift', '--scene-rx', '--scene-ry', '--scene-px', '--scene-py'];
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const paint = () => {
      frame = 0;
      if (!inView || !motionAllowed() || document.hidden) return;
      const bounds = scene.getBoundingClientRect();
      const progress = clamp((innerHeight - bounds.top) / (innerHeight + bounds.height), 0, 1);
      const x = pointer && finePointer.matches ? clamp((pointer.x - bounds.left) / bounds.width * 2 - 1, -1, 1) : 0;
      const y = pointer && finePointer.matches ? clamp((pointer.y - bounds.top) / bounds.height * 2 - 1, -1, 1) : 0;
      scene.style.setProperty('--scene-shift', `${((progress - 0.5) * distance).toFixed(2)}px`);
      scene.style.setProperty('--scene-rx', `${(-y * tilt).toFixed(2)}deg`);
      scene.style.setProperty('--scene-ry', `${(x * tilt).toFixed(2)}deg`);
      scene.style.setProperty('--scene-px', `${(x * 32).toFixed(2)}px`);
      scene.style.setProperty('--scene-py', `${(y * 24).toFixed(2)}px`);
    };
    const schedule = () => {
      if (!frame && inView && motionAllowed() && !document.hidden) frame = requestAnimationFrame(paint);
    };
    const cancel = () => { cancelAnimationFrame(frame); frame = 0; };
    const sync = () => {
      const active = inView && motionAllowed() && !document.hidden;
      scene.dataset.sceneMotion = active ? 'on' : 'off';
      if (!active) cancel();
      if (!motionAllowed()) {
        pointer = null;
        variables.forEach((variable) => scene.style.removeProperty(variable));
      }
      schedule();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const leave = () => { pointer = null; schedule(); };
    const onScroll = () => { pointer = null; schedule(); };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(scene);
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(scene);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', sync, { passive: true });
    scene.addEventListener('pointermove', move, { passive: true });
    scene.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', sync);
    desktopScreen.addEventListener('change', sync);
    reducedMotion.addEventListener('change', sync);
    finePointer.addEventListener('change', leave);
    sync();

    return () => {
      cancel();
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sync);
      scene.removeEventListener('pointermove', move);
      scene.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', sync);
      desktopScreen.removeEventListener('change', sync);
      reducedMotion.removeEventListener('change', sync);
      finePointer.removeEventListener('change', leave);
      variables.forEach((variable) => scene.style.removeProperty(variable));
      delete scene.dataset.sceneMotion;
    };
  }, [distance, tilt]);

  return ref;
}
