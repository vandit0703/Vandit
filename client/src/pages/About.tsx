import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import {
  capabilities,
  expertise,
  statistics,
} from "@/data/portfolio";

export default function About() {
  return (
    <SiteLayout path="/about">
      <section className="page-frame page-intro">
        <span className="eyebrow">About · Vandit Katbamna</span>
        <h1 className="display-title">
          Software with a <em>point of view.</em>
        </h1>
        <p className="page-intro__copy">
          I’m a full stack developer focused on building powerful custom
          software that solves real business problems.
        </p>
      </section>

      <section className="page-frame about-lead">
        <Reveal className="about-lead__statement-reveal" direction="right">
          <p className="about-lead__statement">
            I build the systems that help good businesses do their best work.
          </p>
        </Reveal>
        <Reveal className="about-lead__body" direction="left">
          <p>
            Over the past few years, I’ve developed ERP systems, CRM platforms,
            SaaS applications, and automation tools for businesses across
            multiple industries.
          </p>
          <p>
            My core expertise lies in backend architecture using Django,
            Node.js, and PostgreSQL, combined with modern frontend technologies
            like React and TypeScript. I enjoy designing systems that are
            scalable, secure, and easy for businesses to operate daily.
          </p>
          <p>
            From manufacturing ERP systems to hospital management platforms
            and business automation software, my goal is always the same:
            build technology that improves efficiency and helps companies grow.
          </p>
          <Link href="/contact" className="text-link">
            Work with me <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="soft-band section-space">
        <div className="page-frame">
          <span className="section-label">A little perspective</span>
          <div className="home-stats" style={{ marginTop: 26 }}>
            {statistics.map((item) => (
              <div className="home-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-frame section-space">
        <div className="about-lead" style={{ padding: 0 }}>
          <div>
            <span className="section-label">What I build</span>
            <h2 className="section-heading">Technology shaped around real work.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band section-space">
        <div className="page-frame">
          <span className="section-label">Core expertise</span>
          <h2 className="section-heading" style={{ marginBottom: 34 }}>
            The craft behind the interface.
          </h2>
          <div className="expertise-list">
            {expertise.map((item) => (
              <div className="expertise-row" key={item.label}>
                <span>{item.label}</span>
                <div className="expertise-bar" aria-label={`${item.percent}%`}>
                  <span style={{ width: `${item.percent}%` }} />
                </div>
                <strong>{item.percent}%</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-frame section-space">
        <span className="section-label">Currently working on</span>
        <div className="home-intro" style={{ marginTop: 17 }}>
          <h2 className="section-heading" style={{ marginTop: 0 }}>
            Meeting intelligence, made actionable.
          </h2>
          <p className="section-copy">
            An AI-powered Corporate Meeting Intelligence Platform that
            automatically converts client meetings into structured project
            workflows. The AI captures meeting conversations, understands
            client requirements, generates tasks and milestones, creates
            meeting summaries, and builds a project dashboard in real time. At
            the end of every meeting, clients receive a clear overview of
            requirements, assigned tasks, timelines, and project progress,
            enabling seamless collaboration from the first discussion to final
            delivery.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
