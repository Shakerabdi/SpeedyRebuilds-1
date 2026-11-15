import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import ProjectPreview from './ProjectPreview';

const featuredProjects = [
  {
    name: 'Café Velora',
    type: 'Live client project',
    url: 'https://cafevelora.ca/',
    domain: 'cafevelora.ca',
    image: '/cafe-velora-preview.jpg',
    imageAlt: 'Café Velora homepage featuring its coffee cart, purple branding, and event inquiry link',
    imageWidth: 1440,
    imageHeight: 1000,
    previewClass: 'project-preview-cafe',
    screenshot: true,
    summary: 'Mobile coffee and matcha for weddings, corporate events, and celebrations in Windsor-Essex.',
    description:
      'A custom website for a mobile coffee and matcha cart in Windsor-Essex. The site brings together a signature drink menu, event packages, original photography, and an easy-to-use inquiry form.',
    focus: 'Bring the café experience online and make event inquiries simple.',
    highlights: [
      'A signature drink menu and clear event options',
      'A photo gallery that captures the café experience',
      'A mobile-friendly layout with simple event inquiries',
    ],
    stats: ['Live client site', 'Windsor-Essex', 'Coffee and matcha'],
  },
  {
    name: 'Williams Plumbing Services',
    type: 'Live client project',
    url: 'https://williamsplumbingservices.ca/',
    domain: 'williamsplumbingservices.ca',
    image: '/williams-plumbing-preview.jpg',
    imageAlt: 'Williams Plumbing Services website preview',
    previewClass: 'project-preview-williams',
    screenshot: false,
    summary: 'A plumbing website with clear service information, customer reviews, project photos, and easy ways to get in touch.',
    description:
      'A modern website for a plumbing company serving Kitchener-Waterloo. Clear service pages, customer reviews, and project photos help visitors learn about the business and request service.',
    focus: 'Make plumbing services easy to explore and help visitors get in touch.',
    highlights: [
      'Clear information on residential and commercial services',
      'Simple service requests and tap-to-call links',
      'Local search setup, customer reviews, and project photos',
    ],
    stats: ['Live client site', 'Kitchener-Waterloo', 'Easy service requests'],
  },
  {
    name: 'Perspektive Morgen',
    type: 'Live client project',
    url: 'https://perspektivemorgen.de/',
    domain: 'perspektivemorgen.de',
    image: '/perspektive-morgen-preview.jpg',
    imageAlt: 'Perspektive Morgen homepage with separate paths for job seekers and employers',
    imageWidth: 1280,
    imageHeight: 720,
    previewClass: 'project-preview-perspektive',
    screenshot: true,
    summary: 'Staffing and recruitment connecting job seekers and employers in Kassel, Germany.',
    description:
      'A German-language website for a staffing and recruitment company in Kassel. Separate paths for applicants and employers bring together job listings, staffing services, and straightforward ways to apply or send an inquiry.',
    focus: 'Help people find work and businesses find the right staff.',
    highlights: [
      'Separate journeys for job seekers and employers',
      'Job listings and online applications',
      'Clear staffing services and employer inquiries',
    ],
    stats: ['Live client site', 'Kassel, Germany', 'Staffing and recruitment'],
  },
];

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="container-custom section-space work-section">
      <Reveal>
        <p className="eyebrow">Work</p>
        <h2 className="section-title">Real projects. Thoughtful details.</h2>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Explore websites we have built, with different audiences, identities, and ways to connect.
        </p>
      </Reveal>

      {featuredProjects.map((featuredProject, index) => (
        <Reveal key={featuredProject.url} delay={0.04} direction={index % 2 === 0 ? 'left' : 'right'}>
          <article className="card project-card mt-10 overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <ProjectPreview
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
                className={`focus-ring project-preview group relative overflow-hidden lg:min-h-[460px] ${featuredProject.previewClass}`}
                aria-label={`Open the ${featuredProject.name} website`}
              >
                <div className="project-browser relative min-h-[320px] overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-soft">
                  <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surface px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 truncate rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs text-brand-muted">
                      {featuredProject.domain}
                    </span>
                  </div>
                  {featuredProject.screenshot ? (
                    <div>
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.imageAlt}
                        width={featuredProject.imageWidth}
                        height={featuredProject.imageHeight}
                        className="block h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="relative flex flex-wrap gap-2 border-t border-brand-border bg-brand-bg p-4">
                        {featuredProject.stats.map((stat) => (
                          <span key={stat} className="rounded-full border border-brand-border bg-brand-card px-3 py-1 text-xs font-medium text-brand-text">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative min-h-[270px] overflow-hidden">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-text/95 via-brand-text/70 to-blue-950/20" />
                      <div className="relative z-10 max-w-md px-5 py-8 md:px-7 md:py-10">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-200">Client website</p>
                        <p className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">{featuredProject.name}</p>
                        <p className="mt-3 text-sm leading-6 text-blue-50/80">
                          {featuredProject.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {featuredProject.stats.map((stat) => (
                            <span key={stat} className="rounded-full border border-white/20 bg-brand-text/75 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ProjectPreview>

              <div className="project-story p-6 md:p-8 lg:p-10">
                <p className="project-kicker"><span>0{index + 1}</span> {featuredProject.type}</p>
                <h3 className="mt-3 text-2xl font-semibold md:text-4xl">{featuredProject.name}</h3>
                <p className="mt-4 text-brand-muted">{featuredProject.description}</p>
                <p className="project-focus"><span>Project focus</span>{featuredProject.focus}</p>

                <ul className="mt-6 space-y-3 text-sm text-brand-muted">
                  {featuredProject.highlights.map((highlight) => (
                    <li key={highlight} className="inline-flex w-full items-start gap-3">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={featuredProject.url} target="_blank" rel="noreferrer" aria-label={`Visit ${featuredProject.name} online`} className="btn-primary inline-flex items-center justify-center gap-2">
                    View live website <ExternalLink size={17} />
                  </a>
                  <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                    Start a similar project <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}

      <Reveal>
        <div className="work-invitation">
          <p>Different industries. Different ideas. A website that feels like you.</p>
          <a href="#contact" className="text-link">Let’s build yours <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </Reveal>
    </section>
  );
};

export default WorkSection;
