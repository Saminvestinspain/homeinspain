export default function SiteFooter() {
  return (
    <footer id="contact" style={{ background: '#0A0A0A' }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M16 2L2 12V30H11V20H21V30H30V12L16 2Z" fill="#023344" />
                <path d="M16 2L30 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M16 2L2 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="label tracking-widest" style={{ color: 'rgba(250,250,248,.8)' }}>
                INVEST<span style={{ color: '#CAC1B2' }}>IN</span>SPAIN
              </span>
            </div>
            <p className="body-md max-w-xs mb-10" style={{ color: 'rgba(250,250,248,.35)' }}>
              Uw vertrouwde partner voor luxe vastgoed aan de Costa del Sol. BIV gecertificeerd. Persoonlijk. Premium.
            </p>
            <div className="flex gap-4">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', stroke: false },
                { label: 'Instagram', path: null, stroke: true },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', stroke: false },
              ].map(({ label }) => (
                <a key={label} href="#" className="w-9 h-9 flex items-center justify-center transition-colors"
                  style={{ border: '1px solid rgba(250,250,248,.1)', color: 'rgba(250,250,248,.3)' }} aria-label={label}>
                  <span className="label" style={{ fontSize: '.5rem' }}>{label.slice(0, 2).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <div className="label mb-6" style={{ color: 'rgba(250,250,248,.2)' }}>Navigatie</div>
            <div className="flex flex-col gap-3">
              {[['Projecten', '#properties'], ['Inspectiereis', '#inspectiereis'], ['Over ons', '#about'], ['Reviews', '#testimonials'], ['Blog', '#']].map(([label, href]) => (
                <a key={label} href={href} className="label transition-colors" style={{ color: 'rgba(250,250,248,.4)' }}>{label}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="label mb-6" style={{ color: 'rgba(250,250,248,.2)' }}>Contact</div>
            <div className="flex flex-col gap-4">
              <a href="tel:+3215257310" className="label transition-colors" style={{ color: 'rgba(250,250,248,.4)' }}>+32 15 25 73 10</a>
              <a href="mailto:info@investinspain.be" className="label transition-colors" style={{ color: 'rgba(250,250,248,.4)' }}>info@investinspain.be</a>
              <span className="label" style={{ color: 'rgba(250,250,248,.2)' }}>België · Nederland · Spanje</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(250,250,248,.08)' }}>
          <span className="label" style={{ color: 'rgba(250,250,248,.2)' }}>© 2025 InvestInSpain. Alle rechten voorbehouden.</span>
          <div className="flex gap-6">
            {['Privacybeleid', 'Cookies'].map(l => (
              <a key={l} href="#" className="label transition-colors" style={{ color: 'rgba(250,250,248,.2)' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
