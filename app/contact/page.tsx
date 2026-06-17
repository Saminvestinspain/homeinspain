import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Home in Spain voor een vrijblijvend gesprek over uw interieurproject aan de Costa del Sol.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle="Neem contact op voor een vrijblijvend gesprek over uw interieurproject"
        backgroundImage="https://homeinspain.be/wp-content/uploads/2020/11/084A5072x.jpg"
        height="medium"
        overlay="dark"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
                Bereikbaarheid
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
                Wij staan voor u klaar
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a96e] mb-8" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1a1a1a] mb-1">
                    E-mail
                  </h3>
                  <a
                    href="mailto:info@homeinspain.be"
                    className="text-gray-600 hover:text-[#c9a96e] transition-colors"
                  >
                    info@homeinspain.be
                  </a>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1a1a1a] mb-1">
                    Telefoon
                  </h3>
                  <a
                    href="tel:+3215700500"
                    className="text-gray-600 hover:text-[#c9a96e] transition-colors"
                  >
                    +32 15 70 05 00
                  </a>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1a1a1a] mb-1">
                    Showvilla België
                  </h3>
                  <p className="text-gray-600">
                    Boortmeerbeek, België
                    <br />
                    <span className="text-sm text-gray-400">Op afspraak</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1a1a1a] mb-1">
                    Werkgebied
                  </h3>
                  <p className="text-gray-600">
                    Costa del Sol — Marbella, Estepona,
                    <br />
                    Benahavis, Mijas, Fuengirola & omgeving
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gray-50 border-l-4 border-[#c9a96e]">
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1a1a1a] mb-2">
                  Gratis interieuradvies
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Onze eerste consultatie is altijd vrijblijvend. Vertel ons over
                  uw project en wij kijken samen hoe wij u het beste kunnen
                  helpen.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1a1a1a] mb-8">
                Stuur ons een bericht
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="voornaam"
                      className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                    >
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      id="voornaam"
                      name="voornaam"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="achternaam"
                      className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                    >
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      id="achternaam"
                      name="achternaam"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefoon"
                    className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                  >
                    Type project
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="villa">Villa</option>
                    <option value="appartement">Appartement</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="bericht"
                    className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
                  >
                    Uw bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    required
                    placeholder="Vertel ons over uw project, locatie en wensen..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c9a96e] text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#b8954f] transition-colors"
                >
                  Verstuur bericht
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Door dit formulier in te sturen gaat u akkoord met onze{" "}
                  <a href="/privacy-policy" className="underline">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
