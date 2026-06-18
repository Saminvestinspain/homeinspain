export default function Intro() {
  return (
    <section className="py-28 lg:py-40 max-w-screen-xl mx-auto px-8 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-1 flex items-start pt-3">
          <span className="label" style={{ color: '#8A8278', writingMode: 'vertical-rl', letterSpacing: '.25em' }}>OVER ONS</span>
        </div>
        <div className="lg:col-span-7">
          <p className="display-md text-ink reveal">
            Wij zijn <em>Sofie en Gunther</em> — een Belgisch koppel dat zelf verliefd werd op de Costa del Sol en er een thuis van maakte.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between gap-8">
          <p className="body-md reveal d2" style={{ color: '#8A8278' }}>
            Met meer dan 13 jaar terreinkennis, een netwerk van 500+ tevreden kopers en een persoonlijk begeleidingstraject brengen wij uw droomwoning binnen bereik.
          </p>
          <div className="reveal d3">
            <div className="line-short mb-4" />
            <div className="flex flex-wrap gap-3">
              {['BIV Gecertificeerd', 'AXA Verzekerd', 'CEPI Lid'].map(tag => (
                <span key={tag} className="label px-4 py-2" style={{ color: '#023344', border: '1px solid rgba(2,51,68,.2)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
