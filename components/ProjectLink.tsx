import React from 'react';

export const SERVICE_REQUEST_EVENT = 'speedyrebuilds:service-request';

type ProjectLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  service: string;
};

// Keep the normal anchor destination while carrying the visitor's selection to the form.
const ProjectLink: React.FC<ProjectLinkProps> = ({ service, onClick, children, ...props }) => (
  <a
    {...props}
    href="#contact"
    onClick={(event) => {
      onClick?.(event);
      if (!event.defaultPrevented && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        window.dispatchEvent(new CustomEvent(SERVICE_REQUEST_EVENT, { detail: service }));
      }
    }}
  >
    {children}
  </a>
);

export default ProjectLink;
