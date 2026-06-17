import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import fs from "fs";
import path from "path";

function getProjects(count = 3) {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir).slice(0, count);
  return files.map((f) =>
    JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"))
  );
}

function getBlogPosts(count = 3) {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir).slice(0, count);
  return files.map((f) =>
    JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"))
  );
}

const brands = [
  "Flexform",
  "Royal Botania",
  "Ethnicraft",
  "Manutti",
  "Talenti",
  "Gubi",
  "Piet Boon",
  "Linteloo",
  "Kristalia",
  "Oluce",
  "Missoni",
  "Artisan",
  "Potocco",
  "Desalto",
  "By-Eve",
];

const services = [
  {
    title: "Interieurdesign",
    description:
      "Wij ontwerpen uw interieur van A tot Z: van concept tot realisatie. Onze designers kennen de Spaanse markt en werken uitsluitend met premium merken.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Meubelpakketten",
    description:
      "Complete meubelpakketten samengesteld door onze experts. Één aanspreekpunt, één levering, één factuur — zonder gedoe op afstand.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: "Turnkey Inrichting",
    description:
      "U geeft ons de sleutels, wij regelen alles. Wanneer u aankomt in uw Spaanse thuis staat alles perfect op zijn plaats — tot het laatste woonaccessoire.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  const projects = getProjects(3);
  const blogPosts = getBlogPosts(3);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Jouw thuis in Spanje, ingericht met stijl"
        subtitle="De Nederlandstalige specialist voor luxe interieurdesign en totaalinrichting aan de Costa del Sol"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2020/11/084A5072x.jpg"
        ctaText="Bekijk onze projecten"
        ctaLink="/projecten"
        secondaryCtaText="Over ons"
        secondaryCtaLink="/over-ons"
        height="full"
        overlay="medium"
      />

      {/* Intro Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Wie zijn wij
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-6">
                Wij zijn Home in Spain
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-5">
                HOMEINSPAIN is een totaalinrichter ontstaan vanuit INVESTINSPAIN,
                uw vastgoedspecialist aan de Costa del Sol. Wij helpen
                Nederlandstalige eigenaars hun villa of appartement in Zuid-Spanje
                stijlvol en zorgeloos in te richten.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Als leverancier van een breed scala aan exclusieve merken zorgen
                wij ervoor dat uw nieuwe Spaanse thuis binnen de kortste keren
                volledig ingericht is — nog vóórdat u uw droomhuis voor het eerst
                betreedt.
              </p>
              <Link
                href="/over-ons"
                className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
              >
                Meer over ons
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://homeinspain.be/wp-content/uploads/2025/12/LG-InvestInSpain-portretten-6-scaled.jpg"
                  alt="Home in Spain team"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c9a96e] text-white p-6 max-w-[200px] hidden lg:block">
                <div className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-1">
                  15+
                </div>
                <div className="text-xs tracking-wide uppercase">
                  jaar ervaring in de Costa del Sol
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              Onze diensten
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-white">
              Een totaalconcept zonder zorgen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/5 border border-white/10 p-8 hover:border-[#c9a96e]/50 transition-colors duration-300"
              >
                <div className="text-[#c9a96e] mb-5">{service.icon}</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Portfolio
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a]">
                Gerealiseerde projecten
              </h2>
            </div>
            <Link
              href="/projecten"
              className="text-sm font-medium tracking-wide text-[#c9a96e] hover:text-[#b8954f] mt-4 sm:mt-0"
            >
              Alle projecten →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projecten/${project.slug}`}
                className="group block"
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
                      <span className="text-gray-400 text-sm">
                        Geen afbeelding
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors">
                  {project.title}
                </h3>
                {project.excerpt && (
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {project.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-10">
            Onze merkpartners
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/merken/${brand.toLowerCase().replace(/ /g, "-")}`}
                className="font-[family-name:var(--font-cormorant)] text-lg text-gray-400 hover:text-[#c9a96e] transition-colors tracking-wider"
              >
                {brand}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/merken"
              className="text-sm font-medium tracking-wide text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors"
            >
              Ontdek alle merken
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Inspiratie & advies
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a]">
                Laatste artikelen
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium tracking-wide text-[#c9a96e] hover:text-[#b8954f] mt-4 sm:mt-0"
            >
              Alle artikelen →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="aspect-[16/9] relative overflow-hidden mb-4">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showvilla teaser */}
      <section className="relative py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
            <Image
              src="https://homeinspain.be/wp-content/uploads/2024/10/INVESTINSPAIN-showvilla-Boortmeerbeek-voorkant.jpg"
              alt="Showvilla Boortmeerbeek"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="bg-[#1a1a1a] text-white flex items-center px-8 sm:px-16 py-16">
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Kom ons ontmoeten
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light leading-tight mb-6">
                Ontdek onze showvilla in België
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />
              <p className="text-gray-400 leading-relaxed mb-8">
                Bezoek onze inspirerende showvilla in Boortmeerbeek en laat u
                onderdompelen in de wereld van luxe interieurdesign. Ontmoet ons
                team en bespreek uw project in een unieke omgeving.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#c9a96e] text-white px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-[#b8954f] transition-colors"
              >
                Maak een afspraak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
