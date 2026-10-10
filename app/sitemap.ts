import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bhavya-ai-research-centre.web.app";
  const pages = ["", "/courses", "/videos", "/agents", "/about", "/contact", "/enroll", "/daily-post"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
