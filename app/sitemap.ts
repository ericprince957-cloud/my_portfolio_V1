import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE = "https://vectorcodes.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: BASE + "/services", changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/projects", changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/about", changeFrequency: "yearly", priority: 0.7 },
    { url: BASE + "/contact", changeFrequency: "yearly", priority: 0.8 },
  ];
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: BASE + "/projects/" + p.slug,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...projectPages];
}
