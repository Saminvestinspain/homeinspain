import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Klaar om uw droominterieur te realiseren?",
  subtitle = "Maak een vrijblijvende afspraak met onze interieurdesigners en ontdek de mogelijkheden voor uw villa of appartement in Zuid-Spanje.",
  ctaText = "Maak een afspraak",
  ctaLink = "/contact",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-20 px-4 ${dark ? "bg-[#1a1a1a] text-white" : "bg-[#c9a96e] text-white"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl font-light mb-6">
          {title}
        </h2>
        <p className="text-base lg:text-lg opacity-80 mb-10 leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className={`inline-block px-10 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
            dark
              ? "bg-[#c9a96e] text-white hover:bg-[#b8954f]"
              : "bg-white text-[#1a1a1a] hover:bg-gray-100"
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
