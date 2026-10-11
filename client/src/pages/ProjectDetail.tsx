import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";
import NotFound from "@/pages/not-found";
import type { PortfolioProject } from "@/data/portfolio";

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="story-breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <Link href="/projects">Projects</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{title}</span>
    </nav>
  );
}

function ProjectHero({ project, index }: { project: PortfolioProject; index: number }) {
  const image = (
    <Reveal className="story-image-reveal">
      <img className="story-hero__image" src={project.image} alt={project.imageAlt} />
    </Reveal>
  );

  switch (project.layout) {
    case "photography":
      return (
        <section className="story-hero story-hero--photography">
          <Breadcrumbs title={project.title} />
          <div className="story-hero__top">
            <div>
              <span className="eyebrow">{project.category}</span>
              <h1 className="story-hero__title">{project.title}</h1>
            </div>
            <span className="story-hero__category">Project {String(index + 1).padStart(2, "0")}</span>
          </div>
          {image}
        </section>
      );
    case "manufacturing":
      return (
        <section className="story-hero story-hero--manufacturing">
          <Breadcrumbs title={project.title} />
          <div className="manufacturing-heading">
            <span className="section-label">Case file / {String(index + 1).padStart(2, "0")}</span>
            <h1 className="story-hero__title">{project.title}</h1>
          </div>
          <div className="manufacturing-image">{image}</div>
        </section>
      );
    case "healthcare":
      return (
        <section className="story-hero story-hero--healthcare">
          <Breadcrumbs title={project.title} />
          <div className="healthcare-heading">
            <span className="eyebrow">{project.category}</span>
            <h1 className="story-hero__title">{project.title}</h1>
          </div>
          <div className="healthcare-image">{image}</div>
        </section>
      );
    case "commerce":
      return (
        <section className="story-hero story-hero--commerce">
          <Breadcrumbs title={project.title} />
          <div className="commerce-hero">
            <div>
              <span className="eyebrow">{project.category}</span>
              <h1 className="story-hero__title">{project.title}</h1>
            </div>
            <div className="commerce-image">{image}</div>
          </div>
        </section>
      );
    case "workflow":
      return (
        <section className="story-hero story-hero--workflow">
          <Breadcrumbs title={project.title} />
          <div className="workflow-heading">
            <span className="section-label">A connected way of working</span>
            <h1 className="story-hero__title">{project.title}</h1>
          </div>
          {image}
        </section>
      );
    case "logistics":
      return (
        <section className="story-hero story-hero--logistics">
          <Breadcrumbs title={project.title} />
          <div className="logistics-heading">
            <span className="eyebrow">{project.category}</span>
            <h1 className="story-hero__title">{project.title}</h1>
          </div>
          <div className="logistics-image">{image}</div>
        </section>
      );
    case "inventory":
      return (
        <section className="story-hero story-hero--inventory">
          <Breadcrumbs title={project.title} />
          <div className="inventory-hero">
            <div className="inventory-image">{image}</div>
            <div className="inventory-heading">
              <span className="eyebrow">{project.category}</span>
              <h1 className="story-hero__title">{project.title}</h1>
            </div>
          </div>
        </section>
      );
    case "hospitality":
      return (
        <section className="story-hero story-hero--hospitality">
          <Breadcrumbs title={project.title} />
          <span className="eyebrow">{project.category}</span>
          {image}
          <div className="hospitality-heading">
            <span>Project {String(index + 1).padStart(2, "0")}</span>
            <h1 className="story-hero__title">{project.title}</h1>
          </div>
        </section>
      );
    case "technology":
      return (
        <section className="story-hero story-hero--technology">
          <Breadcrumbs title={project.title} />
          <div className="technology-panel">
            <span className="eyebrow">{project.category}</span>
            <p className="technology-mark">LG<span>·</span></p>
            <h1 className="story-hero__title">{project.title}</h1>
            <p className="technology-stack">Electron / JavaScript / Node.js</p>
          </div>
          <div className="technology-image">{image}</div>
        </section>
      );
  }
}

function ProjectOverview({ project }: { project: PortfolioProject }) {
  switch (project.layout) {
    case "photography":
      return (
        <div className="story-body photography-overview">
          <aside className="story-aside">
            <h2>Made for</h2>
            <p>Photographers and their clients</p>
          </aside>
          <div className="story-main">
            <span className="section-label">A complete SaaS platform</span>
            <p>{project.description}</p>
          </div>
        </div>
      );
    case "manufacturing":
      return (
        <div className="story-body manufacturing-overview">
          <aside className="story-aside">
            <h2>Discipline</h2>
            <p>Manufacturing · ERP</p>
          </aside>
          <div className="story-main">
            <span className="section-label">Operations, connected</span>
            <p>{project.description}</p>
          </div>
        </div>
      );
    case "healthcare":
      return (
        <div className="story-body healthcare-overview">
          <div className="story-main">
            <span className="section-label">One platform · Three units</span>
            <p>{project.description}</p>
          </div>
          <aside className="story-aside">
            <h2>Hospital units</h2>
            <p>Gynecology · Orthopedic · General Practice</p>
          </aside>
        </div>
      );
    case "commerce":
      return (
        <div className="story-body commerce-overview">
          <div className="story-main">
            <span className="section-label">A considered shopping experience</span>
            <p>{project.description}</p>
          </div>
          <aside className="story-aside">
            <h2>Project type</h2>
            <p>Online jewelry store</p>
          </aside>
        </div>
      );
    case "workflow":
      return (
        <div className="story-body workflow-overview">
          <aside className="story-aside">
            <h2>Focus</h2>
            <p>Leads · Sales · Automation</p>
          </aside>
          <div className="story-main">
            <span className="section-label">From first contact to follow-through</span>
            <p>{project.description}</p>
          </div>
        </div>
      );
    case "logistics":
      return (
        <div className="story-body logistics-overview">
          <div className="story-main">
            <span className="section-label">A clearer view of operations</span>
            <p>{project.description}</p>
          </div>
          <aside className="story-aside">
            <h2>Category</h2>
            <p>Vehicles · Routes · Orders</p>
          </aside>
        </div>
      );
    case "inventory":
      return (
        <div className="story-body inventory-overview">
          <aside className="story-aside">
            <h2>Day-to-day focus</h2>
            <p>Inventory · Sales · Billing</p>
          </aside>
          <div className="story-main">
            <span className="section-label">Pharmacy operations</span>
            <p>{project.description}</p>
          </div>
        </div>
      );
    case "hospitality":
      return (
        <div className="story-body hospitality-overview">
          <div className="story-main">
            <span className="section-label">A joined-up service operation</span>
            <p>{project.description}</p>
          </div>
          <aside className="story-aside">
            <h2>Project type</h2>
            <p>Restaurant management software</p>
          </aside>
        </div>
      );
    case "technology":
      return (
        <div className="story-body technology-overview">
          <aside className="story-aside">
            <h2>Built with</h2>
            <p>Electron · JavaScript · Node.js</p>
          </aside>
          <div className="story-main">
            <span className="section-label">Privacy-focused browsing</span>
            <p>{project.description}</p>
          </div>
        </div>
      );
  }
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const nextProject = projects[(index + 1) % projects.length];
  const path = `/projects/${project.slug}`;

  return (
    <SiteLayout path={path}>
      <article className={`page-frame project-visual--${project.layout} detail-layout--${project.layout}`}>
        <ProjectHero project={project} index={index} />
        <ProjectOverview project={project} />
        <div className="story-tech story-tech--detail">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <nav className="project-pagination" aria-label="Project navigation">
          <Link href="/projects">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          <Link href={`/projects/${nextProject.slug}`}>
            Next project: {nextProject.title} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </article>
    </SiteLayout>
  );
}
