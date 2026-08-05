import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaServer,
  FaCode,
  FaCogs,
  FaCloud,
  FaPhp,
  FaJava,
  FaBootstrap,
  FaGithub,
  FaLock,
  FaFigma,
  FaRobot,
  FaMicrophone,
  FaBrain,
  FaLink,
  FaLayerGroup,
  FaWpforms,
  FaDatabase,
  FaCheckCircle,

} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedis,
  SiNginx,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiExpress,
  SiLaravel,
  SiFastapi,
  SiVercel,
  SiRender,
  SiNetlify,
  SiPostman,
  SiGithubactions,
  SiThreedotjs,
  SiFramer,
  
} from "react-icons/si";
import { ArrowRight, Code2, Database, LayoutTemplate, Server, Settings, Terminal, ExternalLink, Github as GithubIcon, Star, CheckCircle2, Mail, Phone } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { useToast } from "@/hooks/use-toast";
import { api, type ContactInput } from "@shared/routes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
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
                { value: "4+", label: "Years Experience" },
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
    { label: "4+ Years Experience", value: "4+" },
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

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-stretch">
          <Reveal direction="right">
            <div className="space-y-10 h-full">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.7)]" />
                  🟢 Available for Freelance Projects
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  About <span className="text-primary">Me</span>
                </h2>

                <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m a Full Stack Developer focused on building powerful custom software that solves real business problems.
                    Over the past few years, I’ve developed ERP systems, CRM platforms, SaaS applications, and automation tools
                    for businesses across multiple industries.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My core expertise lies in backend architecture using Django, Node.js, and PostgreSQL, combined with modern
                    frontend technologies like React and TypeScript. I enjoy designing systems that are scalable, secure, and
                    easy for businesses to operate daily.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From manufacturing ERP systems to hospital management platforms and business automation software,
                    my goal is always the same: build technology that improves efficiency and helps companies grow.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Custom ERP & CRM Systems",
                    "Business Automation Platforms",
                    "Scalable Web Applications",
                    "API Integrations & Backend Architecture",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="text-sm font-medium text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-card rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
              >
                <h3 className="text-2xl font-semibold">What I Build</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {builds.map((badge) => (
                    <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-white">
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-card rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">Core Expertise</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Expertise</span>
                </div>
                <div className="mt-6 space-y-5">
                  {expertise.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                        <span>{item.label}</span>
                        <span>{item.percent}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percent}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-card rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
              >
                <h3 className="text-2xl font-semibold">🚀 Currently Working On</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  An AI-powered Corporate Meeting Intelligence Platform that automatically converts client meetings into structured project workflows. The AI captures meeting conversations, understands client requirements, generates tasks and milestones, creates meeting summaries, and builds a project dashboard in real time. At the end of every meeting, clients receive a clear overview of requirements, assigned tasks, timelines, and project progress, enabling seamless collaboration from the first discussion to final delivery.
                </p>
              </motion.div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-5xl font-display font-semibold">Tech Stack</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Modern tools and frameworks I use to build premium solutions.</p>
                </div>
                
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.08 }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="group relative flex min-h-[180px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-center transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    <skill.icon className={`relative z-10 text-5xl opacity-80 ${skill.color}`} />
                    <span className="relative z-10 block text-sm font-medium text-muted-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Custom Software Development", desc: "Tailored applications designed specifically for your unique business requirements.", icon: Code2 },
    { title: "Web Application Development", desc: "Responsive, fast, and secure web apps built with modern frontend frameworks.", icon: LayoutTemplate },
    { title: "Business Automation Systems", desc: "Streamline workflows and reduce manual labor with smart automation tools.", icon: Settings },
    { title: "API Development", desc: "RESTful and GraphQL APIs to connect your services and enable integrations.", icon: Terminal },
    { title: "Database Design", desc: "Optimized database schemas using PostgreSQL for data integrity and performance.", icon: Database },
    { title: "Deployment & Hosting", desc: "Secure cloud infrastructure setup, CI/CD pipelines, and server maintenance.", icon: Server },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technical solutions to elevate your business operations and digital presence.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-3xl h-full border-white/5 hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Photographer SaaS Platform",
      desc: "A complete SaaS platform for photographers featuring AI face recognition, secure cloud storage, quotation generation, billing, and automated photo delivery. The platform also includes Android and iOS mobile applications for photographers and clients.",
      tech: ["React", "Django", "PostgreSQL", "AI Face Recognition", "Cloud Storage"],
      image: "/Screenshot (47).png",
    },

    {
      title: "Brass Manufacturing ERP System",
      desc: "A complete ERP system built for brass manufacturing companies. It manages production workflows, inventory, supplier management, quotations, billing, accounting, cash flows, wastage of production and order tracking from start to finish.",
      tech: ["Django", "React", "PostgreSQL"],
      image: "/Screenshot (52).png",
    },

    {
      title: "Hospital Management System",
      desc: "A full hospital management platform developed for three different hospital units including Gynecology, Orthopedic, and General Practice. It manages patient records, doctor schedules, prescriptions, billing, and reports across departments.",
      tech: ["Django", "React", "PostgreSQL"],
      image: "/Screenshot (48).png",
    },

    {
      title: "Jewelry E-Commerce Platform",
      desc: "A complete online jewelry store platform including product catalog, inventory management, secure payment processing, order tracking, customer accounts, payment gateway, order management and a powerful admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/Screenshot (53).png",
    },

    {
      title: "CRM & Business Automation System",
      desc: "A custom CRM system designed to manage leads, client communication, sales pipelines, quotations, invoicing, and automated workflows to streamline business operations.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/Screenshot (51).png",
    },

    {
      title: "Transport Management System",
      desc: "Logistics management software for tracking vehicles, contractors, delivery routes, and company orders with role-based dashboards and reporting tools.",
      tech: ["Python", "Django", "PostgreSQL", "Maps API"],
      image: "/transport.png",
    },

    {
      title: "Medical Store Management System",
      desc: "A complete pharmacy and medical store management system including inventory tracking, medicine sales, billing, supplier management, and reporting for pharmacy operations.",
      tech: ["Django", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    },

    {
      title: "Restaurant Management System",
      desc: "A complete restaurant management software handling table reservations, order management, kitchen operations, billing, inventory tracking, and staff management for restaurant businesses.",
      tech: ["Django", "React", "PostgreSQL"],
      image: "/restro.png",
    },

    {
      title: "LinkGuard Browser",
      desc: "A custom privacy-focused web browser called LinkGuard designed for secure browsing with enhanced link protection, tracking prevention, and safe navigation features.",
      tech: ["Electron", "JavaScript", "Node.js"],
      image: "/Screenshot (50).png",
    }
  ];
  const [demoProject, setDemoProject] = useState(null);
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl">A selection of my recent work in custom software development.</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors font-medium">
              View all on GitHub <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
        {demoProject && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="glass-card p-8 rounded-3xl max-w-md w-full relative">
              
              <button
                onClick={() => setDemoProject(null)}
                className="absolute top-4 right-4 text-muted-foreground"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4">
                Request Demo
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                Requesting demo for: <span className="text-primary">{demoProject}</span>
              </p>

              <form
                onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;

                const subject = encodeURIComponent("Demo Request - " + demoProject);
                const body = encodeURIComponent(
                  "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
                );

                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com&su=${subject}&body=${body}`,
                  "_blank"
                );

                setDemoProject(null);
                }}
                className="space-y-4"
              >

                <input
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10"
                  required
                />

                <input
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your interest in this project"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10"
                  rows={4}
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
                >
                  Send Request
                </button>

              </form>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="glass-card rounded-3xl overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  {/* project screenshot placeholder */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-8">{project.desc}</p>
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setDemoProject(project.title)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-colors"
                    >
                      Request Demo <ExternalLink size={18} />
                    </button>
                    <button className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl glass-card hover:bg-white/10 font-semibold transition-colors">
                      Code <GithubIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });
  
  const images = [
    "/Screenshot (47).png",
    "/Screenshot (48).png",
    "/Screenshot (50).png",
    "/Screenshot (51).png",
    "/Screenshot (52).png",
    "/Screenshot (53).png",
    "/transport.png",
    "/restro.png",
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal>
          <h2 className="text-4xl font-display font-bold">Project <span className="text-accent">Gallery</span></h2>
        </Reveal>
      </div>
      
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6 px-4 sm:px-6 lg:px-8">
          {images.map((src, i) => (
            <div key={i} className="embla__slide flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] relative">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden glass-card">
                {/* project dashboard generic ui */}
                <img src={src} alt={`Project screenshot ${i+1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah Weiss", company: "TechFlow Inc", review: "Vandit completely transformed our internal operations. The custom CRM he built is flawless." },
    { name: "Rakesh Patel", company: "Logistics Pro", review: "The Transport Management System handled everything we threw at it. Highly scalable and clean code." },
    { name: "Siddharth Sharma", company: "Fitness Solutions", review: "Great communication throughout the Gymstreak project. Delivered on time and exceeded expectations." }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Client Feedback</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass-card p-8 rounded-3xl relative h-full">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg text-muted-foreground mb-8">"{t.review}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-primary">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseMeSection() {
  const reasons = [
    "Clean, scalable, and maintainable code architecture.",
    "Reliable delivery with strict adherence to deadlines.",
    "Fast, transparent, and proactive communication.",
    "Custom solutions tailored exactly to your business logic."
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-card to-primary/5 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Choose Me?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I don't just write code; I solve business problems. When you hire me, you get a technical partner invested in your project's success.
              </p>
            </Reveal>
            
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/40 border border-white/5">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                    <span className="font-medium">{reason}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: ContactInput) => {
    // Open the default mail client directly since we are building a static site
    window.location.href = `mailto:vanditkatbamna7@gmail.com?subject=Contact from ${data.name}&body=${encodeURIComponent(data.message + `\n\nFrom: ${data.email}`)}`;
    
    toast({
      title: "Opening mail client...",
      description: "Redirecting to your default email application.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Let's build something <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">great</span> together.
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Have a project in mind or looking for a skilled developer to join your team? I'm currently available for new opportunities.
              </p>
              
              <div className="space-y-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  vanditkatbamna7@gmail.com
                </a>
                <a
                  href="tel:+917383817077"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  +91 73838 17077
                </a>
                <a
                  href="https://wa.me/917383817077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <FaWhatsapp size={22} className="text-green-500" />
                  </div>
                  WhatsApp Chat
                </a>
                <a href="https://github.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <GithubIcon size={20} />
                  </div>
                  github.com/vandit0703
                </a>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
