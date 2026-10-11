import { useEffect } from "react";
import { projects } from "@/data/portfolio";
import { sitePages } from "@/data/site";

function setMeta(name: string, content: string, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }

  element.content = content;
}

export function Seo({ path }: { path: string }) {
  useEffect(() => {
    const page = sitePages.find((item) => item.path === path);
    const title = page?.title ?? "Page not found — Vandit Katbamna";
    const description =
      page?.description ?? "The requested page could not be found.";
    const canonical = new URL(page?.path ?? path, window.location.origin).href;
    const project = projects.find(
      (item) => `/projects/${item.slug}` === path,
    );
    const image = new URL(project?.image ?? projects[0].image, window.location.origin).href;
    const breadcrumbs = [
      { name: "Home", path: "/" },
      ...(project
        ? [
            { name: "Projects", path: "/projects" },
            { name: project.title, path: page?.path ?? path },
          ]
        : []),
    ];

    document.title = title;
    setMeta("description", description);
    setMeta("robots", page ? "index, follow" : "noindex, nofollow");
    setMeta("og:type", "website", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", image, true);
    setMeta("og:image:alt", project?.imageAlt ?? "Vandit Katbamna software development portfolio", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonicalElement = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.append(canonicalElement);
    }
    canonicalElement.href = canonical;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: "Vandit Katbamna",
        url: window.location.origin,
      },
      about: {
        "@type": "Person",
        name: "Vandit Katbamna",
        jobTitle: "Full Stack Developer",
        url: window.location.origin,
        sameAs: [
          "https://github.com/vandit0703",
          "https://linkedin.com/in/katbamna-vandit-115122327",
        ],
      },
      ...(project
        ? {
            primaryImageOfPage: image,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: new URL(item.path, window.location.origin).href,
              })),
            },
          }
        : {}),
    };
    let jsonLd = document.getElementById("page-jsonld");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "page-jsonld";
      jsonLd.setAttribute("type", "application/ld+json");
      document.head.append(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
  }, [path]);

  return null;
}
