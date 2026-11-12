import React from 'react';
import useSceneMotion from './useSceneMotion';

const ProjectPreview: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
  const ref = useSceneMotion<HTMLAnchorElement>({ distance: 28, tilt: 5 });

  return (
    <a {...props} ref={ref}>
      <div className="project-stage-light" aria-hidden="true" />
      <div className="project-stage-grid" aria-hidden="true" />
      {children}
    </a>
  );
};

export default ProjectPreview;
