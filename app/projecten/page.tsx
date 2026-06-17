import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk onze gerealiseerde interieurprojecten aan de Costa del Sol. Van luxe villa's in Marbella tot exclusieve appartementen in Benahavis.",
};

function getProjects() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")));
}

export default function ProjectenPage() {
  const projects = getProjects();

  return (
    <>
      <Hero
        title="Onze Projecten"
        subtitle="Een selectie van onze meest recente interieurprojecten aan de Costa del Sol"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2023/10/2023.10.03-Marbella-Club-Hills-Elegant-Comfort-49-scaled.jpg"
        height="medium"
        overlay="dark"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Gerealiseerde projecten
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elk project is uniek en wordt met de grootste zorg uitgevoerd. Van
              het eerste designconcept tot de laatste woonaccessoires — wij
              garanderen een resultaat dat uw verwachtingen overtreft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projecten/${project.slug}`}
                className={`group block ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-4">
                  {project.featuredImage ? (
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Geen afbeelding</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors leading-snug mb-1">
                  {project.title}
                </h3>
                {project.excerpt && (
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {project.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Een project met ons?"
        subtitle="Vertel ons over uw woning en wij maken een vrijblijvend voorstel op maat."
      />
    </>
  );
}
