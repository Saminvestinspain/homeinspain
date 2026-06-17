import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Duurzaamheid",
  description:
    "Home in Spain engageert zich voor duurzaam interieurdesign. Ontdek onze aanpak en de merken die duurzaamheid hoog in het vaandel dragen.",
};

const pillars = [
  {
    title: "Duurzame merken",
    description:
      "Wij selecteren uitsluitend merken die bewust omgaan met materialen en productieprocessen. Van gecertificeerd hout tot recyclebare stoffen.",
  },
  {
    title: "Tijdloos design",
    description:
      "Door te kiezen voor tijdloze ontwerpen vermijden we trendy, wegwerpinterieur. Een kwalitatief interieur gaat jaren mee en reduceert afval.",
  },
  {
    title: "Lokale leveranciers",
    description:
      "Waar mogelijk werken we samen met lokale leveranciers in Spanje en België om de transportvoetafdruk te minimaliseren.",
  },
];

export default function DuurzaamheidPage() {
  return (
    <>
      <Hero
        title="Duurzaamheid"
        subtitle="Stijlvol leven met respect voor de toekomst"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2020/11/084A5072x.jpg"
        height="medium"
        overlay="dark"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
            Onze visie
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
            Verantwoord luxe interieurdesign
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto mb-8" />
          <p className="text-gray-600 leading-relaxed text-lg mb-5">
            Bij Home in Spain geloven wij dat luxe en duurzaamheid hand in hand kunnen gaan. Wij kiezen bewust voor merken en materialen die niet alleen prachtig zijn, maar ook de tand des tijds doorstaan en de planeet respecteren.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ons engagement gaat verder dan de keuze voor duurzame producten. Door tijdloze interieurs te creëren die jarenlang meegaan, helpen wij onze klanten om te investeren in kwaliteit in plaats van kwantiteit.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center px-4">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1a1a1a] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Ons engagement
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1a1a1a] leading-tight mb-6">
                Investeren in kwaliteit is investeren in de toekomst
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Een kwalitatief interieur van Home in Spain is niet alleen een esthetische keuze — het is ook een duurzame keuze. Onze premium merken produceren meubels die decennialang meegaan en zo de nood aan vervanging drastisch verminderen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij werken continu aan het verder verduurzamen van onze supply chain en staan in nauw contact met onze merkpartners over hun duurzaamheidsinitiatieven.
              </p>
            </div>
            <div className="bg-[#1a1a1a] text-white p-10">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-8">
                Onze principes
              </h3>
              <ul className="space-y-4">
                {[
                  "Kwaliteit boven kwantiteit",
                  "Tijdloos design dat blijft",
                  "Bewuste merkenselectie",
                  "Minimale verpakking en transport",
                  "Transparantie over herkomst",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#c9a96e] mt-1">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Duurzaam ingericht beginnen?"
        subtitle="Ontdek hoe wij uw interieur stijlvol en verantwoord kunnen inrichten."
      />
    </>
  );
}
