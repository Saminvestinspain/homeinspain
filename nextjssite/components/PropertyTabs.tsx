'use client'
import { useState } from 'react'

export default function PropertyTabs() {
  const [active, setActive] = useState('beschrijving')

  return (
    <div>
      <div className="flex gap-10 mb-10" style={{ borderBottom: '1px solid rgba(10,10,10,.08)' }}>
        {[['beschrijving', 'Beschrijving'], ['kenmerken', 'Kenmerken'], ['locatie', 'Locatie']].map(([id, label]) => (
          <button key={id} onClick={() => setActive(id)}
            className={`tab-btn label ${active === id ? 'active text-ink' : 'text-muted'}`}>{label}</button>
        ))}
      </div>

      {active === 'beschrijving' && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="line-short" />
            <span className="label" style={{ color: '#8A8278' }}>Over dit project</span>
          </div>
          <div className="space-y-5 mb-12">
            <p className="body-md" style={{ color: '#8A8278' }}>Dit uitzonderlijke duplex appartement in de prestigieuze urbanisatie <em style={{ color: '#0A0A0A' }}>Marbella Club Hills</em> biedt een ongekende combinatie van luxe, privacy en spectaculaire uitzichten over de Middellandse Zee.</p>
            <p className="body-md" style={{ color: '#8A8278' }}>De woning beschikt over een ruim terras van 80 m² dat rechtstreeks aansluit op de woonruimte en vanwaar u kunt genieten van panoramische zeezichten. Het interieur is afgewerkt met de hoogste kwaliteitsmaterialen: marmeren vloeren, op maat gemaakte keukens en smaakvol gekozen badkamers.</p>
            <p className="body-md" style={{ color: '#8A8278' }}>Marbella Club Hills is een afgesloten complex met 24/7 bewaking, een gemeenschappelijk zwembad, fitnessruimte en prachtig aangelegde tuinen. Op 10 minuten rijden van het strand, de golfbanen en het centrum van Marbella.</p>
          </div>
          <div style={{ border: '1px solid rgba(10,10,10,.08)' }} className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="line-short" />
              <span className="label" style={{ color: '#8A8278' }}>Financieel overzicht</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[['Verkoopprijs', '€ 995.000', true], ['Prijs per m²', '€ 3.554', true], ['Kosten (± 10%)', '€ 99.500', false], ['Totale investering', '± € 1.094.500', false]].map(([l, v, large]) => (
                <div key={l as string}>
                  <div className="label mb-2" style={{ color: '#8A8278' }}>{l as string}</div>
                  <div style={large ? { fontFamily: 'var(--font-cormorant,serif)', fontSize: '1.8rem', color: '#023344', fontWeight: 400 } : { fontSize: '.9rem', fontWeight: 500 }}>{v as string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {active === 'kenmerken' && (
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="line-short" /><span className="label" style={{ color: '#8A8278' }}>Woning</span></div>
            <div>
              {[['Type', 'Duplex appartement'], ['Slaapkamers', '3'], ['Badkamers', '2'], ['Bewoonbaar', '280 m²'], ['Terras', '80 m²'], ['Perceel', '500 m²'], ['Bouwjaar', '2024'], ['Oriëntatie', 'Zuid · Zeezicht']].map(([k, v], i, arr) => (
                <div key={k} className="spec-row" style={i === arr.length - 1 ? { border: 'none' } : {}}>
                  <span className="label" style={{ color: '#8A8278' }}>{k}</span>
                  <span className="body-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="line-short" /><span className="label" style={{ color: '#8A8278' }}>Voorzieningen</span></div>
            <div className="grid grid-cols-1 gap-3">
              {['Gemeenschappelijk zwembad', 'Garage (2 plaatsen)', 'Privétuin', '24/7 bewaking', 'Klimaatregeling', 'Lift', 'Fitnessruimte', 'Golfbaan op 5 minuten', 'Domotica systeem', 'Panoramisch zeezicht'].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div style={{ width: '4px', height: '4px', background: '#CAC1B2', flexShrink: 0 }} />
                  <span className="body-sm" style={{ color: '#8A8278' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {active === 'locatie' && (
        <div>
          <div className="flex items-center gap-3 mb-6"><div className="line-short" /><span className="label" style={{ color: '#8A8278' }}>Ligging & Afstanden</span></div>
          <div className="flex items-center justify-center mb-8" style={{ height: '280px', background: '#F2F0EC', border: '1px solid rgba(10,10,10,.08)' }}>
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="#CAC1B2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="label" style={{ color: '#8A8278' }}>Marbella Club Hills · Google Maps</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid rgba(10,10,10,.08)' }}>
            {[["5'", 'Golf'], ["10'", 'Strand'], ["15'", 'Marbella'], ["45'", 'Málaga Airport']].map(([t, l], i, arr) => (
              <div key={l} className="py-6 px-5 text-center" style={i < arr.length - 1 ? { borderRight: '1px solid rgba(10,10,10,.08)' } : {}}>
                <div style={{ fontFamily: 'var(--font-cormorant,serif)', fontSize: '1.5rem', color: '#023344', fontWeight: 400 }} className="mb-1">{t}</div>
                <div className="label" style={{ color: '#8A8278' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
