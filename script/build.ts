import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { mkdir, rm, readFile, writeFile } from "fs/promises";
import path from "path";
import { projects } from "../client/src/data/portfolio";
import { sitePages } from "../client/src/data/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(
  html: string,
  attribute: "name" | "property",
  name: string,
  content: string,
) {
  const escaped = escapeHtml(content);
  const tag = `<meta ${attribute}="${name}" content="${escaped}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"[^>]*>`);

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
}

async function writeRouteHtml() {
  const template = await readFile("dist/public/index.html", "utf-8");

  for (const page of sitePages.slice(1)) {
    const project = projects.find(
      (item) => `/projects/${item.slug}` === page.path,
    );
    let html = template.replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeHtml(page.title)}</title>`,
    );
    html = replaceMeta(html, "name", "description", page.description);
    html = replaceMeta(html, "property", "og:title", page.title);
    html = replaceMeta(html, "property", "og:description", page.description);
    html = replaceMeta(
      html,
      "property",
      "og:image",
      project?.image ?? projects[0].image,
    );
    html = replaceMeta(
      html,
      "property",
      "og:image:alt",
      project?.imageAlt ?? "Vandit Katbamna software development portfolio",
    );
    html = replaceMeta(html, "name", "twitter:title", page.title);
    html = replaceMeta(html, "name", "twitter:description", page.description);

    const directory = path.join(
      "dist",
      "public",
      ...page.path.split("/").filter(Boolean),
    );
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
  }
}

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  console.log("writing route-specific metadata...");
  await writeRouteHtml();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
