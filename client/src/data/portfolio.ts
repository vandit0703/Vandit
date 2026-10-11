export interface PortfolioProject {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  category: string;
  layout:
    | "photography"
    | "manufacturing"
    | "healthcare"
    | "commerce"
    | "workflow"
    | "logistics"
    | "inventory"
    | "hospitality"
    | "technology";
}

export const projects: PortfolioProject[] = [
  {
    title: "Photographer SaaS Platform",
    slug: "photographer-saas",
    description:
      "A complete SaaS platform for photographers featuring AI face recognition, secure cloud storage, quotation generation, billing, and automated photo delivery. The platform also includes Android and iOS mobile applications for photographers and clients.",
    technologies: ["React", "Django", "PostgreSQL", "AI Face Recognition", "Cloud Storage"],
    image: "/Screenshot%20(47).png",
    imageAlt: "Photographer SaaS platform dashboard",
    category: "SaaS · Photography",
    layout: "photography",
  },
  {
    title: "Brass Manufacturing ERP System",
    slug: "brass-manufacturing-erp",
    description:
      "A complete ERP system built for brass manufacturing companies. It manages production workflows, inventory, supplier management, quotations, billing, accounting, cash flows, wastage of production and order tracking from start to finish.",
    technologies: ["Django", "React", "PostgreSQL"],
    image: "/Screenshot%20(52).png",
    imageAlt: "Brass manufacturing ERP dashboard",
    category: "ERP · Manufacturing",
    layout: "manufacturing",
  },
  {
    title: "Hospital Management System",
    slug: "hospital-management",
    description:
      "A full hospital management platform developed for three different hospital units including Gynecology, Orthopedic, and General Practice. It manages patient records, doctor schedules, prescriptions, billing, and reports across departments.",
    technologies: ["Django", "React", "PostgreSQL"],
    image: "/Screenshot%20(48).png",
    imageAlt: "Hospital management system dashboard",
    category: "Healthcare · Operations",
    layout: "healthcare",
  },
  {
    title: "Jewelry E-Commerce Platform",
    slug: "jewelry-ecommerce",
    description:
      "A complete online jewelry store platform including product catalog, inventory management, secure payment processing, order tracking, customer accounts, payment gateway, order management and a powerful admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/Screenshot%20(53).png",
    imageAlt: "Jewelry e-commerce platform interface",
    category: "Commerce · Retail",
    layout: "commerce",
  },
  {
    title: "CRM & Business Automation System",
    slug: "crm-business-automation",
    description:
      "A custom CRM system designed to manage leads, client communication, sales pipelines, quotations, invoicing, and automated workflows to streamline business operations.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/Screenshot%20(51).png",
    imageAlt: "Sales and business management dashboard",
    category: "CRM · Automation",
    layout: "workflow",
  },
  {
    title: "Transport Management System",
    slug: "transport-management",
    description:
      "Logistics management software for tracking vehicles, contractors, delivery routes, and company orders with role-based dashboards and reporting tools.",
    technologies: ["Python", "Django", "PostgreSQL", "Maps API"],
    image: "/transport.png",
    imageAlt: "Transport management operations dashboard",
    category: "Logistics · Operations",
    layout: "logistics",
  },
  {
    title: "Medical Store Management System",
    slug: "medical-store-management",
    description:
      "A complete pharmacy and medical store management system including inventory tracking, medicine sales, billing, supplier management, and reporting for pharmacy operations.",
    technologies: ["Django", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=85",
    imageAlt: "Pharmacy shelves with medicine inventory",
    category: "Healthcare · Inventory",
    layout: "inventory",
  },
  {
    title: "Restaurant Management System",
    slug: "restaurant-management",
    description:
      "A complete restaurant management software handling table reservations, order management, kitchen operations, billing, inventory tracking, and staff management for restaurant businesses.",
    technologies: ["Django", "React", "PostgreSQL"],
    image: "/restro.png",
    imageAlt: "Restaurant management and service dashboard",
    category: "Hospitality · Operations",
    layout: "hospitality",
  },
  {
    title: "LinkGuard Browser",
    slug: "linkguard-browser",
    description:
      "A custom privacy-focused web browser called LinkGuard designed for secure browsing with enhanced link protection, tracking prevention, and safe navigation features.",
    technologies: ["Electron", "JavaScript", "Node.js"],
    image: "/Screenshot%20(50).png",
    imageAlt: "LinkGuard secure browser interface",
    category: "Privacy · Desktop",
    layout: "technology",
  },
];

export const statistics = [
  { value: "3+", label: "Years Experience" },
  { value: "45+", label: "Projects Completed" },
  { value: "35+", label: "Happy Clients" },
  { value: "100%", label: "Project Delivery" },
];

export const expertise = [
  { label: "Backend Development", percent: 95 },
  { label: "Frontend Development", percent: 90 },
  { label: "Database Design", percent: 92 },
  { label: "API Development", percent: 94 },
  { label: "System Architecture", percent: 90 },
];

export const capabilities = [
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

export const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored applications designed specifically for your unique business requirements.",
  },
  {
    title: "Web Application Development",
    description:
      "Responsive, fast, and secure web apps built with modern frontend frameworks.",
  },
  {
    title: "Business Automation Systems",
    description:
      "Streamline workflows and reduce manual labor with smart automation tools.",
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL APIs to connect your services and enable integrations.",
  },
  {
    title: "Database Design",
    description:
      "Optimized database schemas using PostgreSQL for data integrity and performance.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Secure cloud infrastructure setup, CI/CD pipelines, and server maintenance.",
  },
];

export const testimonials = [
  {
    name: "Sarah Weiss",
    company: "TechFlow Inc",
    review:
      "Vandit completely transformed our internal operations. The custom CRM he built is flawless.",
  },
  {
    name: "Rakesh Patel",
    company: "Logistics Pro",
    review:
      "The Transport Management System handled everything we threw at it. Highly scalable and clean code.",
  },
  {
    name: "Siddharth Sharma",
    company: "Fitness Solutions",
    review:
      "Great communication throughout the Gymstreak project. Delivered on time and exceeded expectations.",
  },
];

export const galleryImages = [
  { src: "/Screenshot%20(47).png", alt: "Photographer SaaS project screenshot" },
  { src: "/Screenshot%20(48).png", alt: "Hospital management project screenshot" },
  { src: "/Screenshot%20(49).png", alt: "Smart Macro Sales dashboard screenshot" },
  { src: "/Screenshot%20(50).png", alt: "LinkGuard browser project screenshot" },
  { src: "/Screenshot%20(51).png", alt: "CRM and business automation screenshot" },
  { src: "/Screenshot%20(52).png", alt: "Brass manufacturing ERP project screenshot" },
  { src: "/Screenshot%20(53).png", alt: "Jewelry e-commerce project screenshot" },
  { src: "/transport.png", alt: "Transport management project screenshot" },
  { src: "/restro.png", alt: "Restaurant management project screenshot" },
];

export const skillGroups = [
  {
    name: "Programming Languages",
    technologies: ["Python", "JavaScript", "TypeScript", "PHP", "Java"],
  },
  {
    name: "Frontend Development",
    technologies: [
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Three.js",
      "Framer Motion",
      "shadcn/ui",
      "React Hook Form",
      "TanStack Query",
      "Zod",
    ],
  },
  {
    name: "Backend Development",
    technologies: [
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "Laravel",
      "FastAPI",
      "Celery",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    name: "Databases & Data Storage",
    technologies: ["MySQL", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    name: "DevOps & Infrastructure",
    technologies: [
      "Docker",
      "Nginx",
      "Linux",
      "Git",
      "GitHub",
      "CI/CD",
      "Cloud",
    ],
  },
  {
    name: "AI & Machine Learning",
    technologies: [
      "OpenAI API",
      "Whisper AI",
      "Prompt Engineering",
      "Ollama",
      "Qwen",
      "DeepSeek",
      "LangChain",
    ],
  },
  {
    name: "Developer Tools & Integrations",
    technologies: ["Postman", "Figma"],
  },
];
