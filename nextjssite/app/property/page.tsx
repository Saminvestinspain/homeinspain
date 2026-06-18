'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ProgressBar from '@/components/ProgressBar'
import WhatsApp from '@/components/WhatsApp'

const StarIcon = () => (
  <svg className="w-2.5 h-2.5" fill="#023344" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function PropertyPage() {
  const [activeTab, setActiveTab] = useState('beschrijving')
  const [activeThumb, setActiveThumb] = useState(0)

  return (
    <>
      <Nav isPropertyPage />
      <ProgressBar />

      <div className="pt-20 border-b border-ink/6" style={{ background: '#F2F0EC' }}>
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16 py-4 flex items-center gap-3">
          <Link href="/" className="label text-muted hover:text-ink transition-colors cursor-pointer">Home</Link>
          <span className="label" style={{ color: 'rgba(138,130,120,.4)' }}>·</span>
          <Link href="/#properties" className="label text-muted hover:text-ink transition-colors cursor-pointer">Projecten</Link>
          <span className="label" style={{ color: 'rgba(138,130,120,.4)' }}>·</span>
          <span className="label text-ink">Marbella Club Hills</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="line-short"></div>
              <span className="label text-muted">Marbella · Duplex · Ref: IIS-2025-001</span>
            </div>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-.02em' }}>
              Marbella Club<br /><em style={{ fontStyle: 'italic', color: '#CAC1B2' }}>Hills Duplex</em>
            </h1>
            <div className="flex items-center gap-3 mt-5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="#CAC1B2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="label text-muted">Marbella Club Hills, Costa del Sol</span>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="label text-muted mb-2">Vraagprijs</div>
            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, color: '#023344', letterSpacing: '-.02em' }}>€ 995.000</div>
            <div className="label text-muted mt-1">€ 3.554 / m²</div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-4 reveal">
        <div className="gal-main" style={{ height: 'clamp(320px,55vw,620px)', background: '#0d1f26' }}>
          <div className="inner absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#023344 0%,#04596e 60%,#034558 100%)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 35%,rgba(202,193,178,.1),transparent 60%)' }}></div>
            <div className="absolute top-7 left-7 flex gap-2">
              <span className="label bg-teal text-warm px-3 py-2">Nieuw Project</span>
              <span className="label px-3 py-2" style={{ background: 'rgba(10,10,10,.6)', color: '#CAC1B2', backdropFilter: 'blur(8px)' }}>Zeezicht</span>
            </div>
            <div className="absolute bottom-7 right-7 flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(10,10,10,.5)', backdropFilter: 'blur(8px)' }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="#CAC1B2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                <polyline points="21,15 16,10 5,21" strokeWidth="1.5" />
              </svg>
              <span className="label" style={{ color: 'rgba(202,193,178,.7)' }}>18 fotos</span>
            </div>
            <svg className="w-20 h-20" style={{ opacity: .08 }} fill="none" stroke="rgba(202,193,178,.2)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".6" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" stroke="rgba(202,193,178,.2)" strokeWidth=".6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-16 reveal">
        <div className="grid grid-cols-5 gap-2">
          {[
            'linear-gradient(135deg,#023344,#034558)',
            'linear-gradient(160deg,#034558,#04596e)',
            'linear-gradient(200deg,#04596e,#034558)',
            'linear-gradient(250deg,#023344,#04596e)',
          ].map((bg, i) => (
            <div
              key={i}
              className={`gal-thumb${activeThumb === i ? ' active' : ''}`}
              style={{ height: '72px', background: bg }}
              onClick={() => setActiveThumb(i)}
            ></div>
          ))}
          <div className="gal-thumb flex items-center justify-center" style={{ height: '72px', background: '#F2F0EC', border: '1px solid rgba(10,10,10,.1)' }}>
            <span className="label text-muted">+14</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-24">
        <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-ink/8 mb-16 reveal">
              {[['3', 'Slaapkamers'], ['2', 'Badkamers'], ['280', 'm² bewoonbaar'], ['500', 'm² perceel']].map(([val, lbl], i) => (
                <div key={i} className={`py-7 px-6 text-center${i < 3 ? ' border-r border-ink/8' : ''}`}>
                  <div className="mb-1" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#023344', fontWeight: 400 }}>{val}</div>
                  <div className="label text-muted">{lbl}</div>
                </div>
              ))}
            </div>

            <div className="reveal d1">
              <div className="flex gap-10 border-b border-ink/8 mb-10">
                {['beschrijving', 'kenmerken', 'locatie'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-btn label${activeTab === tab ? ' active text-ink' : ' text-muted'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTab === 'beschrijving' && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="line-short"></div>
                    <span className="label text-muted">Over dit project</span>
                  </div>
                  <div className="space-y-5 mb-12">
                    <p className="body-md text-muted">Dit uitzonderlijke duplex appartement in de prestigieuze urbanisatie <em style={{ color: '#0A0A0A', fontStyle: 'italic' }}>Marbella Club Hills</em> biedt een ongekende combinatie van luxe, privacy en spectaculaire uitzichten over de Middellandse Zee.</p>
                    <p className="body-md text-muted">De woning beschikt over een ruim terras van 80 m² dat rechtstreeks aansluit op de woonruimte en vanwaar u kunt genieten van panoramische zeezichten. Het interieur is afgewerkt met de hoogste kwaliteitsmaterialen: marmeren vloeren, op maat gemaakte keukens en smaakvol gekozen badkamers.</p>
                    <p className="body-md text-muted">Marbella Club Hills is een afgesloten complex met 24/7 bewaking, een gemeenschappelijk zwembad, fitnessruimte en prachtig aangelegde tuinen. Op 10 minuten rijden van het strand, de golfbanen en het centrum van Marbella.</p>
                  </div>
                  <div className="border border-ink/8 p-8 reveal d2">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="line-short"></div>
                      <span className="label text-muted">Financieel overzicht</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="label text-muted mb-2">Verkoopprijs</div>
                        <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.8rem', color: '#023344', fontWeight: 400 }}>€ 995.000</div>
                      </div>
                      <div>
                        <div className="label text-muted mb-2">Prijs per m²</div>
                        <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.8rem', color: '#023344', fontWeight: 400 }}>€ 3.554</div>
                      </div>
                      <div>
                        <div className="label text-muted mb-2">Kosten (± 10%)</div>
                        <div className="body-md text-ink font-medium">€ 99.500</div>
                      </div>
                      <div>
                        <div className="label text-muted mb-2">Totale investering</div>
                        <div className="body-md text-ink font-medium">± € 1.094.500</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'kenmerken' && (
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="line-short"></div>
                      <span className="label text-muted">Woning</span>
                    </div>
                    <div>
                      {[
                        ['Type', 'Duplex appartement'],
                        ['Slaapkamers', '3'],
                        ['Badkamers', '2'],
                        ['Bewoonbaar', '280 m²'],
                        ['Terras', '80 m²'],
                        ['Perceel', '500 m²'],
                        ['Bouwjaar', '2024'],
                        ['Oriëntatie', 'Zuid · Zeezicht'],
                      ].map(([lbl, val], i) => (
                        <div key={i} className="spec-row" style={i === 7 ? { borderBottom: 'none' } : {}}>
                          <span className="label text-muted">{lbl}</span>
                          <span className="body-sm text-ink">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="line-short"></div>
                      <span className="label text-muted">Voorzieningen</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {['Gemeenschappelijk zwembad', 'Garage (2 plaatsen)', 'Privétuin', '24/7 bewaking', 'Klimaatregeling', 'Lift', 'Fitnessruimte', 'Golfbaan op 5 minuten', 'Domotica systeem', 'Panoramisch zeezicht'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div style={{ width: '4px', height: '4px', background: '#CAC1B2', flexShrink: 0 }}></div>
                          <span className="body-sm text-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'locatie' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="line-short"></div>
                    <span className="label text-muted">Ligging & Afstanden</span>
                  </div>
                  <div className="border border-ink/8 flex items-center justify-center mb-8" style={{ height: '280px', background: '#F2F0EC' }}>
                    <div className="text-center">
                      <svg className="w-10 h-10 mx-auto mb-3 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="label text-muted">Marbella Club Hills · Google Maps</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-ink/8">
                    {[["5'", 'Golf'], ["10'", 'Strand'], ["15'", 'Marbella'], ["45'", 'Málaga Airport']].map(([time, lbl], i) => (
                      <div key={i} className={`py-6 px-5 text-center${i < 3 ? ' border-r border-ink/8' : ''}`}>
                        <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', color: '#023344', fontWeight: 400 }} className="mb-1">{time}</div>
                        <div className="label text-muted">{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky-wrap">
              <div className="border border-ink/10 p-8 mb-4 reveal" style={{ background: '#fff' }}>
                <div className="label text-muted mb-2">Vraagprijs</div>
                <div className="mb-1" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.2rem', color: '#023344', fontWeight: 400, letterSpacing: '-.02em' }}>€ 995.000</div>
                <div className="label text-muted mb-8">€ 3.554 / m²</div>
                <div className="flex flex-col gap-3">
                  <Link href="/#inspectiereis" className="btn btn-dark w-full justify-center">Plan inspectiereis <span className="arrow"></span></Link>
                  <a href="tel:+3215257310" className="btn btn-ghost w-full justify-center">+32 15 25 73 10</a>
                  <a href="#" className="btn w-full justify-center label text-muted" style={{ padding: '12px 0', borderBottom: '1px solid rgba(10,10,10,.1)' }}>Brochure downloaden <span className="arrow"></span></a>
                </div>
                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-ink/6">
                  <svg className="w-3.5 h-3.5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="label text-muted">BIV gecertificeerd makelaar</span>
                </div>
              </div>

              <div className="p-8 mb-4 reveal d1" style={{ background: '#F2F0EC', border: '1px solid rgba(10,10,10,.06)' }}>
                <div className="mb-1 text-ink" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: 400 }}>Meer informatie?</div>
                <p className="body-sm text-muted mb-7">We antwoorden binnen 2 uur persoonlijk.</p>
                <form className="flex flex-col gap-5">
                  <div><label className="f-label">Naam</label><input type="text" placeholder="Jan Janssen" className="f-input" /></div>
                  <div><label className="f-label">E-mail of telefoon</label><input type="text" placeholder="jan@voorbeeld.be" className="f-input" /></div>
                  <div><label className="f-label">Bericht</label><textarea rows={3} placeholder="Ik heb interesse in..." className="f-input resize-none" style={{ paddingBottom: '8px' }}></textarea></div>
                  <button type="submit" className="btn btn-dark w-full justify-center mt-1">Verstuur <span className="arrow"></span></button>
                </form>
              </div>

              <div className="p-6 reveal d2" style={{ background: '#fff', border: '1px solid rgba(10,10,10,.06)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                    <span className="label text-warm text-xs">SG</span>
                  </div>
                  <div>
                    <div className="text-ink mb-0.5" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1rem' }}>Sofie & Gunther</div>
                    <div className="label text-muted">InvestInSpain · 13+ jaar</div>
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                      <span className="label text-muted ml-1.5">500+ kopers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#F2F0EC' }} className="py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
          <div className="line mb-16 reveal"></div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="reveal">
              <span className="label text-muted block mb-4">Gelijkaardige Projecten</span>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 400, letterSpacing: '-.02em' }}>Ook <em style={{ color: '#CAC1B2' }}>interessant</em></h2>
            </div>
            <Link href="/#properties" className="btn btn-ghost reveal d1">Alle projecten <span className="arrow"></span></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Solenne', type: 'Appartement', location: 'Estepona', price: 'Vanaf € 990.000', bg: 'linear-gradient(160deg,#034558,#04596e)' },
              { name: 'Azahar de Estepona', type: 'Penthouse', location: 'Estepona', price: '€ 625.000', bg: 'linear-gradient(200deg,#04596e,#023344)' },
              { name: 'Oceana Gardens', type: 'Appartement', location: 'Estepona', price: '€ 485.000', bg: 'linear-gradient(135deg,#04596e,#023344)' },
            ].map((prop, i) => (
              <div key={i} className={`reveal${i > 0 ? ` d${i}` : ''}`}
                style={{ background: '#fff', border: '1px solid rgba(10,10,10,.06)', cursor: 'pointer', transition: 'box-shadow .3s,transform .3s' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(10,10,10,.08)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}>
                <div style={{ height: '220px', background: prop.bg, overflow: 'hidden' }}></div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-ink" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: 400 }}>{prop.name}</h3>
                    <span className="label text-muted">{prop.type}</span>
                  </div>
                  <div className="label text-muted mb-4">{prop.location}</div>
                  <div className="flex items-center justify-between pt-4 border-t border-ink/6">
                    <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem', color: '#023344', fontWeight: 400 }}>{prop.price}</span>
                    <span className="btn label gap-2" style={{ color: 'rgba(10,10,10,.3)' }}>Details <span className="arrow"></span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: '#0A0A0A' }} className="py-8">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
              <path d="M16 2L2 12V30H11V20H21V30H30V12L16 2Z" fill="#023344" />
              <path d="M16 2L30 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M16 2L2 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="label tracking-widest" style={{ color: 'rgba(250,250,248,.2)' }}>INVEST<span style={{ color: '#CAC1B2' }}>IN</span>SPAIN</span>
          </div>
          <span className="label" style={{ color: 'rgba(250,250,248,.2)' }}>© 2025 InvestInSpain. Alle rechten voorbehouden.</span>
          <Link href="/" className="btn label gap-2" style={{ color: 'rgba(250,250,248,.3)' }}>← Terug naar home</Link>
        </div>
      </footer>

      <WhatsApp />
    </>
  )
}
