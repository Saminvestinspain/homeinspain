import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

interface Project {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  images: string[];
  featuredImage: string;
}

function getProject(slug: string): Project | null {
  try {
    const file = path.join(process.cwd(), `content/projects/${slug}.json`);
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}

function getAllProjectSlugs(): string[] {
  const dir = path.join(process.cwd(), "content/projects");
  return fs.readdirSync(dir).map((f) => f.replace(".json", ""));
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt || `Interieurproject: ${project.title}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const galleryImages = project.images.filter(
    (img) => img !== project.featuredImage
  );

  return (
    <>
      <Hero
        title={project.title}
        subtitle={project.excerpt || ""}
        backgroundImage={
          project.featuredImage ||
          "https://homeinspain.be/wp-content/uploads/2020/11/084A5072x.jpg"
        }
        height="large"
        overlay="medium"
      />

      {/* Project content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/projecten"
              className="text-sm text-gray-400 hover:text-[#c9a96e] transition-colors"
            >
              Projecten
            </Link>
            <span className="text-gray-300">→</span>
            <span className="text-sm text-[#1a1a1a]">{project.title}</span>
          </div>

          {project.content && (
            <div className="prose max-w-none">
              {project.content
                .split(/\.\s+/)
                .reduce((acc: string[], sentence, i, arr) => {
                  if (i % 4 === 0) {
                    const para = arr
                      .slice(i, i + 4)
                      .join(". ")
                      .trim();
                    if (para) acc.push(para + (para.endsWith(".") ? "" : "."));
                  }
                  return acc;
                }, [])
                .map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1a1a1a] mb-8">
              Fotogalerij
            </h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.slice(0, 12).map((img, i) => (
                <div key={i} className="break-inside-avoid">
                  <div className="relative overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} - foto ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Een vergelijkbaar project?"
        subtitle="Wij creëren ook voor uw woning een stijlvol en persoonlijk interieur."
      />
    </>
  );
}
