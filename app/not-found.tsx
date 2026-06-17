import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafaf8] pt-20">
      <div className="text-center px-4">
        <div className="font-[family-name:var(--font-cormorant)] text-8xl font-light text-[#c9a96e] mb-4">
          404
        </div>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1a1a1a] mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de
          homepage of neem contact met ons op.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#333] transition-colors"
          >
            Naar de homepage
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
