import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ontdek onze artikelen over interieurdesign, trends en tips voor uw villa of appartement aan de Costa del Sol.",
};

function getBlogPosts() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")));
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <Hero
        title="Blog & Inspiratie"
        subtitle="Advies, trends en inspiratie voor uw luxe interieur aan de Costa del Sol"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2023/11/vakantiehuis_inrichten_buitenland_spanje_portugal_frankrijk.jpg"
        height="medium"
        overlay="dark"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Kennisbank
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a]">
              Alle artikelen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="aspect-[16/9] relative overflow-hidden mb-4 bg-gray-100">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-3 text-[#c9a96e] text-xs font-medium tracking-wide uppercase">
                  Lees meer →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Klaar om uw project te starten?"
        subtitle="Onze experts staan klaar om u te begeleiden bij uw interieurproject."
      />
    </>
  );
}
