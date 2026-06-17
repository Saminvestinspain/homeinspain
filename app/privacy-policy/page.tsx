import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy van Home in Spain",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1a1a1a] mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-none text-gray-600 space-y-5">
          <p>
            Home in Spain (onderdeel van Investinspain) respecteert uw
            privacy en verwerkt uw persoonsgegevens in overeenstemming met de
            Algemene Verordening Gegevensbescherming (AVG/GDPR).
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1a1a1a] mt-8 mb-3">
            Welke gegevens verzamelen wij?
          </h2>
          <p>
            Wij verzamelen persoonsgegevens die u aan ons verstrekt via ons
            contactformulier, zoals naam, e-mailadres en telefoonnummer.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1a1a1a] mt-8 mb-3">
            Waarvoor gebruiken wij uw gegevens?
          </h2>
          <p>
            Uw gegevens worden uitsluitend gebruikt om uw aanvraag te beantwoorden
            en om u te informeren over onze diensten. Wij verkopen uw gegevens
            nooit aan derden.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1a1a1a] mt-8 mb-3">
            Contact
          </h2>
          <p>
            Voor vragen over uw persoonsgegevens kunt u contact opnemen via{" "}
            <a
              href="mailto:info@homeinspain.be"
              className="text-[#c9a96e] underline"
            >
              info@homeinspain.be
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
