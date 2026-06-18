'use client'
import { useState } from 'react'
import Link from 'next/link'

const filters = ['Alle', "Villa's", 'Appartement', 'Penthouse']

export default function Properties() {
  const [active, setActive] = useState('Alle')

  return (
    <section id="properties" className="py-4 lg:py-0">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-16">
        <div className="line mb-16 reveal" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="label block mb-4 reveal" style={{ color: '#8A8278' }}>Uitgelichte Projecten</span>
            <h2 className="display-lg text-ink reveal d1">Exclusieve<br /><em>Selectie</em></h2>
          </div>
          <div className="flex items-end gap-6 reveal d2">
            <div className="flex flex-wrap gap-2 pb-1">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`label px-4 py-2 border ${active === f ? 'border-ink text-ink' : 'text-muted'} cursor-pointer`}
                  style={active !== f ? { borderColor: 'rgba(10,10,10,.15)' } : {}}
                >{f}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-6 reveal">
        <div className="prop-card grid lg:grid-cols-2 gap-0" style={{ border: '1px solid rgba(10,10,10,.06)' }}>
          <div className="prop-img-wrap relative" style={{ height: '540px', background: '#0d1f26' }}>
            <div className="img-inner absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#023344 0%,#04596e 100%)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%,rgba(202,193,178,.08),transparent 65%)' }} />
              <svg className="w-16 h-16 opacity-10" fill="none" stroke="#CAC1B2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" stroke="#CAC1B2" strokeWidth=".75" />
              </svg>
              <div className="absolute top-6 left-6">
                <span className="label px-3 py-1.5" style={{ background: '#023344', color: '#FAFAF8' }}>Nieuw Project</span>
              </div>
              <div className="absolute bottom-6 left-6 reveal-price">
                <div className="display-sm" style={{ color: '#FAFAF8' }}>€ 995.000</div>
              </div>
            </div>
          </div>
          <div className="p-10 lg:p-14 flex flex-col justify-between" style={{ background: '#F2F0EC' }}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="line-short" />
                <span className="label" style={{ color: '#8A8278' }}>Marbella · Duplex</span>
              </div>
              <h3 className="display-md text-ink mb-6">Marbella Club<br /><em>Hills Duplex</em></h3>
              <p className="body-md mb-10 max-w-xs" style={{ color: '#8A8278' }}>Uitzonderlijk duplex appartement in de prestigieuze Marbella Club Hills met panoramisch zeezicht en 280 m² woonoppervlak.</p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[['3', 'Slaapkamers'], ['280', 'm² bewoonbaar'], ['80', 'm² terras']].map(([n, l]) => (
                  <div key={l}>
                    <div className="display-sm mb-1" style={{ color: '#023344' }}>{n}</div>
                    <div className="label" style={{ color: '#8A8278' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-8" style={{ borderTop: '1px solid rgba(10,10,10,.08)' }}>
              <div>
                <div className="label mb-1" style={{ color: '#8A8278' }}>Vraagprijs</div>
                <div style={{ fontFamily: 'var(--font-cormorant,serif)', fontSize: '1.5rem', color: '#0A0A0A', fontWeight: 400 }}>€ 995.000</div>
              </div>
              <Link href="/property" className="btn btn-dark">Bekijk woning <span className="arrow" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { name: 'Solenne', type: 'Appartement', loc: 'Estepona', price: 'Vanaf € 990.000', bg: 'linear-gradient(160deg,#034558,#04596e)' },
          { name: 'Azahar de Estepona', type: 'Penthouse', loc: 'Estepona', price: '€ 625.000', bg: 'linear-gradient(200deg,#04596e,#023344)' },
          { name: 'Capri', type: 'Villa', loc: 'Marbella', price: '€ 490.000', bg: 'linear-gradient(250deg,#023344,#04596e)' },
        ].map((p, i) => (
          <div key={p.name} className={`prop-card reveal${i > 0 ? ` d${i}` : ''}`}>
            <div className="prop-img-wrap relative" style={{ height: '380px' }}>
              <div className="img-inner absolute inset-0" style={{ background: p.bg }} />
              <div className="absolute top-5 left-5">
                <span className="label px-3 py-1.5" style={{ color: 'rgba(250,250,248,.6)', background: 'rgba(10,10,10,.4)', backdropFilter: 'blur(4px)' }}>{p.loc}</span>
              </div>
            </div>
            <div className="pt-5 pb-8" style={{ borderBottom: '1px solid rgba(10,10,10,.08)' }}>
              <div className="flex items-start justify-between mb-2">
                <h3 style={{ fontFamily: 'var(--font-cormorant,serif)', fontSize: '1.25rem', color: '#0A0A0A' }}>{p.name}</h3>
                <span className="label" style={{ color: '#8A8278' }}>{p.type}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span style={{ fontFamily: 'var(--font-cormorant,serif)', fontSize: '1.1rem', color: '#023344' }}>{p.price}</span>
                <a href="#" className="btn text-xs gap-2" style={{ color: 'rgba(10,10,10,.4)' }}>Details <span className="arrow" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 py-12 reveal">
        <a href="#" className="btn btn-ghost">Alle 713 projecten bekijken <span className="arrow" /></a>
      </div>
    </section>
  )
}
