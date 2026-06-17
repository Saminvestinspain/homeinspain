import fs from "fs";
import path from "path";

export interface ContentItem {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  images?: string[];
  featuredImage?: string;
  date?: string;
  categories?: string[];
}

export function getAll(type: "brands" | "projects" | "blog"): ContentItem[] {
  const dir = path.join(process.cwd(), `content/${type}`);
  try {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
    return files.map((f) =>
      JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"))
    );
  } catch {
    return [];
  }
}

export function getBySlug(
  type: "brands" | "projects" | "blog",
  slug: string
): ContentItem | null {
  try {
    const file = path.join(process.cwd(), `content/${type}/${slug}.json`);
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}

export function getBrands(): ContentItem[] {
  return getAll("brands").sort((a, b) => a.title.localeCompare(b.title));
}

export function getProjects(): ContentItem[] {
  return getAll("projects");
}

export function getBlogPosts(): ContentItem[] {
  return getAll("blog");
}

export function getPageContent(slug: string): ContentItem | null {
  try {
    const file = path.join(process.cwd(), `content/pages/${slug}.json`);
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}
