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
<<<<<<< HEAD
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global animated background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-50" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10 opacity-50" />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <GallerySection />
        <TestimonialsSection />
        <WhyChooseMeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-screen">
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
            Building customized, scalable solutions using Django, Node.js, PostgreSQL, and modern web technologies to help businesses streamline their operations.
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
  );
}

function AboutSection() {

  const skills = [
    // Languages
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },

    // Frontend
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-white" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
    { name: "shadcn/ui", icon: FaLayerGroup, color: "text-gray-300" },
    { name: "React Hook Form", icon: FaWpforms, color: "text-pink-400" },
    { name: "TanStack Query", icon: FaDatabase, color: "text-red-400" },
    { name: "Zod", icon: FaCheckCircle, color: "text-blue-400" },

    // Backend
    { name: "Django", icon: SiDjango, color: "text-green-600" },
    { name: "Django REST Framework", icon: FaServer, color: "text-emerald-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },

    // Databases
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "SQLite", icon: SiSqlite, color: "text-sky-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-500" },

    // DevOps & Cloud
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Nginx", icon: SiNginx, color: "text-green-500" },
    { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "CI/CD", icon: FaCogs, color: "text-gray-400" },
    { name: "Cloud", icon: FaCloud, color: "text-orange-400" },

    

    // APIs & Services
    { name: "REST APIs", icon: FaCode, color: "text-indigo-400" },
    { name: "JWT Authentication", icon: FaLock, color: "text-yellow-500" },
    { name: "Celery", icon: FaServer, color: "text-purple-400" },

    // Tools
    // { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Figma", icon: FaFigma, color: "text-pink-500" },
    // { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },

    // AI
    { name: "OpenAI API", icon: FaRobot, color: "text-green-400" },
    { name: "Whisper AI", icon: FaMicrophone, color: "text-purple-400" },
    { name: "Prompt Engineering", icon: FaBrain, color: "text-pink-400" },
    { name: "Ollama", icon: FaRobot, color: "text-emerald-500" },
    { name: "Qwen", icon: FaBrain, color: "text-cyan-400" },
    { name: "DeepSeek", icon: FaBrain, color: "text-indigo-400" },
    { name: "LangChain", icon: FaLink, color: "text-lime-400" },
  ];

  const stats = [
    { label: "45+ Projects Completed", value: "45+" },
    { label: "35+ Happy Clients", value: "35+" },
    { label: "3+ Years Experience", value: "3+" },
    { label: "100% Project Delivery", value: "100%" },
  ];

  const builds = [
    "ERP Systems",
    "CRM Software",
    "Business Automation",
    "SaaS Platforms",
    "E-Commerce",
    "Hospital Management",
    "Inventory Systems",
    "REST APIs",
    "Admin Dashboards",
    "Custom Web Applications",
  ];

  const expertise = [
    { label: "Backend Development", percent: 95 },
    { label: "Frontend Development", percent: 90 },
    { label: "Database Design", percent: 92 },
    { label: "API Development", percent: 94 },
    { label: "System Architecture", percent: 90 },
  ];
=======
  const featured = projects[0];
  const second = projects[1];
>>>>>>> 378d4f9 (NEW VERSION DEPLOYED OF PORTOFLIO)

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
