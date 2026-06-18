const stars = (
  <div className="flex gap-0.5 mb-8">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3 h-3" fill="#023344" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const reviews = [
  { initials: 'LV', name: 'Lore & Wim V.', location: 'Antwerpen · Estepona', quote: '"Sofie en Gunther hebben ons van A tot Z begeleid. De inspectiereis was een geweldige ervaring — we kochten ons appartement in Estepona en zijn er tot op vandaag dolgelukkig mee."', border: 'border-r' },
  { initials: 'MD', name: 'Marc & Diane D.', location: 'Gent · Marbella', quote: '"Professioneel, betrouwbaar en écht persoonlijk. Ze spreken onze taal — letterlijk en figuurlijk. We zijn nu eigenaar van een prachtige villa in Marbella."', border: 'border-r' },
  { initials: 'PK', name: 'Peter K.', location: 'Brussel · Estepona', quote: '"De beste investering die we ooit gedaan hebben. Geen stress, geen verrassingen. Alles verliep vlekkeloos."', border: '' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-40" style={{ background: '#F2F0EC' }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="line mb-16 reveal" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div>
            <span className="label block mb-4 reveal" style={{ color: '#8A8278' }}>Klantervaringen</span>
            <h2 className="display-lg text-ink reveal d1">Wat onze<br /><em>kopers zeggen</em></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {reviews.map((r, i) => (
            <div key={r.name} className={`py-10 ${i === 0 ? 'lg:pr-12' : i === 1 ? 'lg:px-12' : 'lg:pl-12'} border-b lg:border-b-0 ${r.border ? 'lg:border-r' : ''} reveal${i > 0 ? ` d${i}` : ''}`}
              style={{ borderColor: 'rgba(10,10,10,.08)' }}>
              {stars}
              <p className="body-md mb-8 italic" style={{ color: '#8A8278' }}>{r.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#023344' }}>
                  <span className="label text-xs" style={{ color: '#FAFAF8', fontSize: '.6rem' }}>{r.initials}</span>
                </div>
                <div>
                  <div className="label" style={{ color: '#0A0A0A' }}>{r.name}</div>
                  <div className="label" style={{ color: '#8A8278' }}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
