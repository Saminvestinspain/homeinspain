import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Leer ons kennen: Home in Spain is uw Nederlandstalige partner voor luxe interieurdesign en totaalinrichting aan de Costa del Sol.",
};

function getPageContent(slug: string) {
  try {
    const file = path.join(process.cwd(), `content/pages/${slug}.json`);
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}

const teamMembers = [
  {
    name: "Michelle",
    role: "Interieurdesigner & Oprichter",
    image:
      "https://homeinspain.be/wp-content/uploads/2023/08/Foto-persb%C3%A9richt-Michelle.jpg",
  },
];

const values = [
  {
    title: "Kwaliteit",
    description:
      "Wij werken uitsluitend met premium merken die voldoen aan de hoogste standaarden van design en duurzaamheid.",
  },
  {
    title: "Persoonlijk",
    description:
      "Elk project is uniek. Wij luisteren naar uw wensen en creëren een interieur dat perfect bij u past.",
  },
  {
    title: "Zorgeloos",
    description:
      "Van concept tot sleuteloverdracht regelen wij alles. U hoeft zich nergens zorgen over te maken.",
  },
  {
    title: "Betrouwbaar",
    description:
      "Al meer dan 15 jaar actief in de Costa del Sol. Onze klanten vertrouwen ons met hun meest waardevolle bezit.",
  },
];

export default function OverOnsPage() {
  const pageContent = getPageContent("over-ons");

  return (
    <>
      <Hero
        title="Over Home in Spain"
        subtitle="Uw Nederlandstalige partner voor luxe interieurdesign aan de Costa del Sol"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2025/12/LG-InvestInSpain-portretten-6-scaled.jpg"
        height="medium"
        overlay="dark"
      />

      {/* Main intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Ons verhaal
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-6">
                Een totaalconcept zonder zorgen
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />
              {pageContent?.content ? (
                <p className="text-gray-600 leading-relaxed">
                  {pageContent.content}
                </p>
              ) : (
                <>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    HOMEINSPAIN is een totaalinrichter ontstaan vanuit
                    INVESTINSPAIN, uw vastgoedspecialist in de Costa del Sol.
                    Door de verkoop van het vastgoed hebben we vastgesteld dat
                    eigenaars van een nieuwbouwappartement, penthouse of villa,
                    moeilijk hun weg vinden in de Spaanse winkels voor een
                    passend interieur.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Het is net daarom dat we HOMEINSPAIN in het leven hebben
                    geroepen. Ons concept is eenvoudig: wij nemen alle zorgen van
                    u over, van het eerste designconcept tot de plaatsing van het
                    laatste woonaccessoire.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Als Nederlandstalige interieurspecialisten kennen wij de
                    Spaanse markt door en door en beschikken we over een
                    uitgebreid netwerk van premium leveranciers. Zo garanderen wij
                    altijd de beste kwaliteit tegen de scherpste prijs.
                  </p>
                </>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="https://homeinspain.be/wp-content/uploads/2025/04/1-LG-Vorsselmans-villaC-Boortmeerbeek-10.jpg"
                  alt="Showvilla interieur"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="aspect-[3/4] relative overflow-hidden mt-8">
                <Image
                  src="https://homeinspain.be/wp-content/uploads/2024/09/DCB00227-HDR_Showvilla.jpg"
                  alt="Home in Spain showroom"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Onze waarden
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a]">
              Waarom Home in Spain
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a96e] text-white flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-cormorant)] text-xl font-light">
                  {i + 1}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Jaar ervaring" },
              { number: "35+", label: "Premium merken" },
              { number: "100+", label: "Voltooide projecten" },
              { number: "100%", label: "Nederlandstalig team" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-cormorant)] text-5xl lg:text-6xl font-light text-[#c9a96e] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showvilla */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="https://homeinspain.be/wp-content/uploads/2024/10/INVESTINSPAIN-showvilla-Boortmeerbeek-voorkant.jpg"
                alt="Showvilla Boortmeerbeek"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Bezoek ons
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-6">
                Onze showvilla in Boortmeerbeek
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-5">
                In onze showvilla in Boortmeerbeek kunt u onze stijl en kwaliteit
                zelf ervaren. Kom langs voor een vrijblijvende rondleiding en
                ontmoet ons team persoonlijk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij ontvangen u graag op afspraak, zodat wij u optimaal kunnen
                begeleiden en adviseren over de mogelijkheden voor uw Spaans
                droominterieur.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#c9a96e] text-white px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-[#b8954f] transition-colors"
              >
                Plan een bezoek
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
