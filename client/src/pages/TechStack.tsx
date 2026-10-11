import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCelery,
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/portfolio";

const technologyIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#ffd343" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  PHP: { icon: SiPhp, color: "#777bb4" },
  Java: { icon: SiOpenjdk, color: "#ed8b00" },
  HTML5: { icon: SiHtml5, color: "#e34f26" },
  "CSS3": { icon: SiCss, color: "#663399" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
  "Three.js": { icon: SiThreedotjs, color: "#ffffff" },
  "Framer Motion": { icon: SiFramer, color: "#8c5cff" },
  "shadcn/ui": { icon: SiShadcnui, color: "#ffffff" },
  "React Hook Form": { icon: SiReacthookform, color: "#ec5990" },
  "TanStack Query": { icon: SiReactquery, color: "#ff4154" },
  Zod: { icon: SiZod, color: "#3e67b1" },
  Django: { icon: SiDjango, color: "#44b78b" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  Laravel: { icon: SiLaravel, color: "#ff2d20" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Celery: { icon: SiCelery, color: "#37814a" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  SQLite: { icon: SiSqlite, color: "#003b57" },
  Redis: { icon: SiRedis, color: "#dc382d" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Linux: { icon: SiLinux, color: "#fcc624" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  "OpenAI API": { icon: SiOpenai, color: "#74aa9c" },
  Ollama: { icon: SiOllama, color: "#ffffff" },
  LangChain: { icon: SiLangchain, color: "#1c3c3c" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#d63aff" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  Figma: { icon: SiFigma, color: "#f24e1e" },
};

function fallbackText(technology: string) {
  return technology
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.slice(0, 1))
    .join("")
    .toUpperCase();
}

export default function TechStack() {
  return (
    <SiteLayout path="/tech-stack">
      <section className="page-frame page-intro tech-intro">
        <Reveal>
          <span className="eyebrow">Technology · Tools of the trade</span>
          <h1 className="display-title">
            The right tools for <em>real work.</em>
          </h1>
          <p className="page-intro__copy">
            A considered toolkit for building reliable software, from the first
            data model to the final deployment.
          </p>
        </Reveal>
      </section>

      <section className="page-frame section-space tech-directory" aria-label="Technology directory">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            className="tech-group-reveal"
            key={group.name}
            delay={Math.min(groupIndex * 0.04, 0.24)}
          >
            <article className="tech-group">
              <span className="tech-group__index">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h2>{group.name}</h2>
              <span className="tech-group__count">
                {String(group.technologies.length).padStart(2, "0")} tools
              </span>
              <div className="tech-group__items">
                {group.technologies.map((technology) => {
                  const technologyLogo = technologyIcons[technology];
                  const Logo = technologyLogo?.icon;
                  return (
                    <div className="tech-item" key={technology}>
                      <span className="tech-item__icon" aria-hidden="true">
                        {Logo ? (
                          <Logo style={{ color: technologyLogo.color }} />
                        ) : (
                          <span className="tech-item__fallback">
                            {fallbackText(technology)}
                          </span>
                        )}
                      </span>
                      <span className="tech-item__name">{technology}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
