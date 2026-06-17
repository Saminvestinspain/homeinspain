import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBySlug, getBlogPosts } from "@/lib/content";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBySlug("blog", slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt?.slice(0, 160) };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBySlug("blog", slug);
  if (!post) notFound();

  const related = getBlogPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
        {post.featuredImage ? (
          <>
            <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority unoptimized />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#1a1a1a]" />
        )}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {post.categories && post.categories.length > 0 && (
            <span className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-3 block">{post.categories[0]}</span>
          )}
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-5xl font-light text-white leading-tight">{post.title}</h1>
          {post.date && (
            <p className="text-white/60 text-sm mt-3">
              {new Date(post.date).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          )}
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#c9a96e] mb-10 hover:text-[#b8954f] transition-colors">
            ← Terug naar blog
          </Link>
          {post.content ? (
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p className="text-gray-500 italic">Inhoud binnenkort beschikbaar.</p>
          )}
          {post.images && post.images.length > 1 && (
            <div className="mt-12 grid grid-cols-2 gap-4">
              {post.images.slice(1, 5).map((img, i) => (
                <div key={i} className="aspect-[4/3] relative overflow-hidden">
                  <Image src={img} alt={`${post.title} ${i + 2}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1a1a1a] mb-8">Meer artikelen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[16/9] relative overflow-hidden mb-3">
                    {p.featuredImage ? (
                      <Image src={p.featuredImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
