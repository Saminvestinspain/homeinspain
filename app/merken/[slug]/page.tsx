import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

interface Brand {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  images: string[];
  featuredImage: string;
}

function getBrand(slug: string): Brand | null {
  try {
    const file = path.join(process.cwd(), `content/brands/${slug}.json`);
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}

function getAllBrandSlugs(): string[] {
  const dir = path.join(process.cwd(), "content/brands");
  return fs
    .readdirSync(dir)
    .map((f) => f.replace(".json", ""));
}

export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: brand.title,
    description: brand.excerpt || `Ontdek ${brand.title} bij Home in Spain`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const galleryImages = brand.images.filter(
    (img) => img !== brand.featuredImage
  ).slice(0, 8);

  return (
    <>
      <Hero
        title={brand.title}
        subtitle={brand.excerpt || `Ontdek de collectie van ${brand.title}`}
        backgroundImage={
          brand.featuredImage ||
          "https://homeinspain.be/wp-content/uploads/2020/11/084A5072x.jpg"
        }
        height="medium"
        overlay="dark"
      />

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Merkprofiel
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              {brand.title}
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto" />
          </div>

          {brand.content && (
            <div className="prose max-w-none text-gray-600 leading-relaxed text-base space-y-4">
              {brand.content.split(". ").reduce((acc: string[], sentence, i, arr) => {
                if (i % 4 === 0) {
                  acc.push(arr.slice(i, i + 4).join(". ") + (i + 4 < arr.length ? "." : ""));
                }
                return acc;
              }, []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1a1a1a] text-center mb-10">
              Collectie
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={img}
                    alt={`${brand.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/merken"
          className="text-sm text-gray-500 hover:text-[#c9a96e] transition-colors"
        >
          ← Terug naar alle merken
        </Link>
      </div>

      <CTASection
        title={`Interesse in ${brand.title}?`}
        subtitle="Maak een afspraak in onze showvilla en ontdek de collectie in het echt."
      />
    </>
  );
}
