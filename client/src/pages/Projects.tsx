import { useState, type FormEvent } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [demoProject, setDemoProject] = useState<string | null>(null);
  const featured = projects[0];

  const requestDemo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Demo Request - ${demoProject}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setDemoProject(null);
  };

  return (
    <SiteLayout path="/projects">
      <section className="page-frame page-intro">
        <span className="eyebrow">Portfolio · Selected work</span>
        <div className="archive-intro">
          <h1 className="display-title">
            Different fields.<br /><em>One thoughtful approach.</em>
          </h1>
          <p className="archive-lead">
            A selection of custom software for teams in photography,
            manufacturing, healthcare, commerce, logistics, and hospitality.
          </p>
        </div>
      </section>

      <section className="page-frame" style={{ paddingBottom: 115 }}>
        <article className="archive-feature">
          <Link href={`/projects/${featured.slug}`} aria-label={`View ${featured.title}`}>
            <img src={featured.image} alt={featured.imageAlt} />
          </Link>
          <div className="archive-feature__copy">
            <span className="section-label">01 / {featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <div className="archive-card__links">
              <button type="button" onClick={() => setDemoProject(featured.title)}>
                Request demo
              </button>
              <Link href={`/projects/${featured.slug}`}>
                Discover the project <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        <Reveal className="archive-mosaic">
          {projects.slice(1).map((project, index) => (
            <article
              className={`archive-card archive-card--${(index % 4) + 1}`}
              key={project.slug}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="archive-card__image"
                aria-label={`Read about ${project.title}`}
              >
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </Link>
              <div className="archive-card__meta">
                <span>{String(index + 2).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>
              <h2>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <p>{project.description}</p>
              <div className="archive-card__links">
                <button type="button" onClick={() => setDemoProject(project.title)}>
                  Request demo
                </button>
                <Link href={`/projects/${project.slug}`}>
                  Read the project <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="project-index" style={{ marginTop: 90 }}>
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className="project-row"
              key={project.slug}
            >
              <span className="project-row__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-row__title">{project.title}</span>
              <span className="project-row__category">{project.category}</span>
              <span className="project-row__tech">
                {project.technologies.slice(0, 2).join(" · ")}
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {demoProject && (
        <div className="demo-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDemoProject(null);
        }}>
          <section
            className="demo-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
          >
            <button
              type="button"
              className="demo-close"
              onClick={() => setDemoProject(null)}
              aria-label="Close demo request"
            >
              <X size={20} />
            </button>
            <span className="section-label">Project enquiry</span>
            <h2 id="demo-title">Request a demo</h2>
            <p>Requesting demo for: <strong>{demoProject}</strong></p>
            <form className="demo-form" onSubmit={requestDemo}>
              <input name="name" placeholder="Your Name" aria-label="Your name" required />
              <input name="email" type="email" placeholder="Your Email" aria-label="Your email" required />
              <textarea name="message" placeholder="Tell me about your interest in this project" aria-label="Your message" />
              <button type="submit" className="action-button">
                Send request <span aria-hidden="true">↗</span>
              </button>
            </form>
          </section>
        </div>
      )}
    </SiteLayout>
  );
}
