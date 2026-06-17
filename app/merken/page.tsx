import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Merken",
  description:
    "Ontdek ons portfolio van meer dan 35 premium interieurmerken voor uw villa of appartement aan de Costa del Sol.",
};

function getBrands() {
  const dir = path.join(process.cwd(), "content/brands");
  const files = fs.readdirSync(dir);
  return files
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export default function MerkenPage() {
  const brands = getBrands();

  return (
    <>
      <Hero
        title="Onze Merken"
        subtitle="Een zorgvuldige selectie van de mooiste premium interieurmerken ter wereld"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2025/10/LG-InvestInSpain-Boortmeerbeek-showvilla-2.jpg"
        height="medium"
        overlay="dark"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Ons merkportfolio
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Meer dan 35 exclusieve merken
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Wij selecteren uitsluitend merken die de hoogste standaarden van
              design, kwaliteit en duurzaamheid hanteren. Van Italiaans maatwerk
              tot Belgische designklassiekers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/merken/${brand.slug}`}
                className="group block bg-white border border-gray-100 hover:border-[#c9a96e]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                  {brand.featuredImage ? (
                    <Image
                      src={brand.featuredImage}
                      alt={brand.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl text-gray-300">
                        {brand.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors mb-1">
                    {brand.title}
                  </h3>
                  {brand.excerpt && (
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                      {brand.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interesse in een van onze merken?"
        subtitle="Neem contact op voor meer informatie of maak een afspraak in onze showvilla."
      />
    </>
  );
}
