import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Reveal } from "@/components/ui/Reveal";
import {
  projects,
  testimonials,
} from "@/data/portfolio";

export default function Home() {


  const featured = projects[0];
  const second = projects[1];

  return (
    <SiteLayout path="/">
      <section className="hero-section relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8 border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6">
                Hi, I'm <span className="text-gradient">Vandit Katbamna</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Building ERP Systems",
                  2000,
                  "Creating SaaS Platforms",
                  2000,
                  "Developing Business Automation Software",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto"
              />
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
                Building customized, scalable solutions using Django, Node.js,
                PostgreSQL, and modern web technologies to help businesses
                streamline their operations.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300">
                  View Projects
                </a>
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  Hire Me
                </a>
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300">
                  Contact Me
                </a>
              </div>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "45+", label: "Projects Completed" },
                  { value: "35+", label: "Happy Clients" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card p-6 rounded-2xl text-center border border-white/10"
                  >
                    <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
      </section>

      <section className="page-frame section-space" id="projects">
        <div className="home-intro">
          <Reveal direction="right">
            <span className="section-label">A considered approach</span>
            <h2 className="section-heading">Built around the work, not the buzzwords.</h2>
          </Reveal>
          <Reveal className="home-intro__copy" direction="left">
            <p>
              From manufacturing floors to healthcare teams, I turn
              operational complexity into useful, reliable software.
            </p>
            <p className="section-copy">
              My work spans ERP systems, CRM platforms, SaaS products, and
              automation tools. The aim is practical: make everyday work
              clearer, more connected, and easier to run.
            </p>
            <Link href="/about" className="text-link">
              More about my practice <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
        <div className="home-featured">
          <Link href={`/projects/${featured.slug}`} className="featured-image">
            <img src={featured.image} alt={featured.imageAlt} />
          </Link>
          <div className="featured-copy">
            <span className="section-label">01 / Selected project</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <Link href={`/projects/${featured.slug}`} className="text-link">
              View the project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="home-featured home-featured--reverse">
          <div className="featured-copy">
            <span className="section-label">02 / Selected project</span>
            <h3>{second.title}</h3>
            <p>{second.description}</p>
            <Link href={`/projects/${second.slug}`} className="text-link">
              View the project <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <Link href={`/projects/${second.slug}`} className="featured-image">
            <img src={second.image} alt={second.imageAlt} loading="lazy" />
          </Link>
        </div>
      </section>

      <section className="soft-band section-space">
        <div className="page-frame">
          <div className="archive-intro">
            <div>
              <span className="section-label">Selected work</span>
              <h2 className="section-heading">A few different problems, thoughtfully solved.</h2>
            </div>
            <Link href="/projects" className="text-link">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="project-index" style={{ marginTop: 39 }}>
            {projects.slice(0, 5).map((project, index) => (
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
        </div>
      </section>

      <section className="page-frame section-space">
        <div className="archive-intro">
          <div>
            <span className="section-label">In the details</span>
            <h2 className="section-heading">A glimpse at the work in progress.</h2>
          </div>
          <Link href="/projects" className="text-link">
            Visit the archive <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ProjectCarousel />
      </section>

      <section className="soft-band section-space">
        <div className="page-frame testimonials">
          <div>
            <span className="section-label">Words from collaborators</span>
            <h2 className="section-heading">Good work is a team effort.</h2>
          </div>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <blockquote>“{testimonial.review}”</blockquote>
                <cite>
                  {testimonial.name} · {testimonial.company}
                </cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="page-frame home-cta" id="contact">
        <h2>Have a complicated workflow that could work better?</h2>
        <Link href="/contact" className="action-button">
          Tell me about it <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SiteLayout>
  );
}
