import type { Express, Request, Response } from "express";
import { publicRoutes } from "../shared/site";

function getOrigin(req: Request, res: Response): string | undefined {
  const host = req.get("host");
  if (!host) {
    res.status(400).type("text/plain").send("Missing request host");
    return undefined;
  }

  try {
    return new URL(`${req.protocol}://${host}`).origin;
  } catch {
    res.status(400).type("text/plain").send("Invalid request host");
    return undefined;
  }
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function registerSeoRoutes(app: Express) {
  app.get("/sitemap.xml", (req, res) => {
    const origin = getOrigin(req, res);
    if (!origin) return;

    const urls = publicRoutes
      .map((route) => `  <url><loc>${escapeXml(new URL(route, origin).href)}</loc></url>`)
      .join("\n");

    res
      .set("Cache-Control", "public, max-age=3600")
      .type("application/xml")
      .send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  });

  app.get("/robots.txt", (req, res) => {
    const origin = getOrigin(req, res);
    if (!origin) return;

    res
      .set("Cache-Control", "public, max-age=3600")
      .type("text/plain")
      .send(`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  });
}
