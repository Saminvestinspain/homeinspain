import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: "light" | "medium" | "dark";
  height?: "full" | "large" | "medium";
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  overlay = "medium",
  height = "large",
}: HeroProps) {
  const overlayClass = {
    light: "bg-black/30",
    medium: "bg-black/45",
    dark: "bg-black/60",
  }[overlay];

  const heightClass = {
    full: "min-h-screen",
    large: "min-h-[70vh]",
    medium: "min-h-[50vh]",
  }[height];

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        unoptimized
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block bg-[#c9a96e] text-white px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-[#b8954f] transition-colors duration-200"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-block border border-white text-white px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
