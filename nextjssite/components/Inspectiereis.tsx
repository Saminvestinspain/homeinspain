export default function Inspectiereis() {
  return (
    <section id="inspectiereis" style={{ background: '#023344' }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <span className="label block mb-6 reveal" style={{ color: 'rgba(202,193,178,.5)' }}>Onze Unieke Aanpak</span>
            <h2 className="display-lg mb-8 reveal d1" style={{ color: '#FAFAF8' }}>
              De<br /><em className="italic" style={{ color: '#CAC1B2' }}>Inspectiereis</em>
            </h2>
            <p className="body-md mb-12 reveal d2" style={{ color: 'rgba(250,250,248,.5)' }}>
              Wij geloven dat u uw droomwoning moet <em>beleven</em> voor u koopt. Wij organiseren een persoonlijke inspectiereis naar de Costa del Sol en vergoeden uw reiskosten bij aankoop.
            </p>

            <div className="flex flex-col gap-0 reveal d3">
              {[
                ['01', 'Gratis intakegesprek', 'Wensen, budget en doelstellingen. Persoonlijk, zonder verplichtingen.'],
                ['02', 'Persoonlijke selectie op maat', 'Wij selecteren de beste projecten die perfect aansluiten bij uw profiel.'],
                ['03', 'Inspectiereis ter plaatse', 'Bezoek de projecten, voel de sfeer, ontmoet ons team in Spanje. Reiskosten vergoed bij aankoop.'],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-8 py-7" style={{ borderTop: '1px solid rgba(250,250,248,.08)' }}>
                  <span className="label flex-shrink-0 w-6" style={{ color: 'rgba(202,193,178,.3)' }}>{num}</span>
                  <div>
                    <div className="label mb-2" style={{ color: '#FAFAF8' }}>{title}</div>
                    <p className="body-sm" style={{ color: 'rgba(250,250,248,.4)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 reveal d4">
              <a href="#contact" className="btn" style={{ border: '1px solid rgba(202,193,178,.3)', color: '#CAC1B2', padding: '15px 32px' }}>
                Plan gratis gesprek <span className="arrow" style={{ background: '#CAC1B2' }} />
              </a>
            </div>
          </div>

          <div className="reveal d2">
            <div className="p-8 lg:p-12" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}>
              <div className="label mb-2" style={{ color: 'rgba(202,193,178,.6)' }}>Aanvraag</div>
              <h3 className="mb-8" style={{ fontFamily: 'var(--font-cormorant,serif)', color: '#FAFAF8', fontSize: '1.5rem', fontWeight: 400 }}>Plan uw inspectiereis</h3>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  {[['Voornaam', 'Jan', 'text'], ['Naam', 'Janssen', 'text']].map(([label, ph, type]) => (
                    <div key={label}>
                      <label className="label block mb-2" style={{ color: 'rgba(250,250,248,.3)' }}>{label}</label>
                      <input type={type} placeholder={ph} className="w-full py-3 px-0 outline-none body-sm"
                        style={{ background: 'transparent', borderBottom: '1px solid rgba(250,250,248,.15)', color: '#FAFAF8' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="label block mb-2" style={{ color: 'rgba(250,250,248,.3)' }}>E-mailadres</label>
                  <input type="email" placeholder="jan@voorbeeld.be" className="w-full py-3 px-0 outline-none body-sm"
                    style={{ background: 'transparent', borderBottom: '1px solid rgba(250,250,248,.15)', color: '#FAFAF8' }} />
                </div>
                <div>
                  <label className="label block mb-2" style={{ color: 'rgba(250,250,248,.3)' }}>Budget</label>
                  <select className="w-full py-3 px-0 outline-none body-sm cursor-pointer" style={{ background: 'transparent', borderBottom: '1px solid rgba(250,250,248,.15)', color: 'rgba(250,250,248,.6)', appearance: 'none' }}>
                    <option style={{ background: '#023344' }}>Selecteer budget</option>
                    {['€ 300.000 – € 500.000', '€ 500.000 – € 750.000', '€ 750.000 – € 1.000.000', '€ 1.000.000+'].map(o => (
                      <option key={o} style={{ background: '#023344' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label block mb-2" style={{ color: 'rgba(250,250,248,.3)' }}>Wanneer wilt u kopen?</label>
                  <select className="w-full py-3 px-0 outline-none body-sm cursor-pointer" style={{ background: 'transparent', borderBottom: '1px solid rgba(250,250,248,.15)', color: 'rgba(250,250,248,.6)', appearance: 'none' }}>
                    <option style={{ background: '#023344' }}>Selecteer timing</option>
                    {['Binnen 3 maanden', 'Binnen 6 maanden', 'Binnen 1 jaar', 'Nog oriënterend'].map(o => (
                      <option key={o} style={{ background: '#023344' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn w-full justify-center mt-4" style={{ background: '#CAC1B2', color: '#023344', padding: '16px 32px' }}>
                  Verstuur aanvraag <span className="arrow" style={{ background: '#023344' }} />
                </button>
                <p className="label text-center" style={{ color: 'rgba(250,250,248,.2)' }}>Geen spam. Geen verplichtingen.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
