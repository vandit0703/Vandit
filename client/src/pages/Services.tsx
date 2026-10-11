import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <SiteLayout path="/services">
      <section className="page-frame page-intro">
        <span className="eyebrow">Services · Thoughtful by design</span>
        <h1 className="display-title">
          The right tools for <em>your kind</em> of work.
        </h1>
        <p className="page-intro__copy">
          Comprehensive technical solutions to elevate business operations and
          digital presence—from a first clear API to a complete business
          platform.
        </p>
      </section>

      <section className="page-frame section-space" style={{ paddingTop: 0 }}>
        <Reveal className="service-index">
          {services.map((service, index) => (
            <article
              className={`service-entry${index === 0 ? " service-entry--feature" : ""}`}
              key={service.title}
            >
              <span className="service-entry__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="soft-band section-space">
        <div className="page-frame home-cta" style={{ padding: 0 }}>
          <h2>Not sure which service fits? Start with the problem.</h2>
          <Link href="/contact" className="action-button">
            Tell me what you need <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
