'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const bg = document.getElementById('heroBg') as HTMLElement | null
    if (!bg) return
    const img = new Image()
    img.onload = () => bg.classList.add('loaded')
    img.src = 'https://res.cloudinary.com/dvm1g1ehh/image/upload/w_1920,q_auto,f_auto/v1780401526/DJI_0232-HDR-Pano_aj7dsx.jpg'

    const onScroll = () => {
      const s = document.documentElement.scrollTop
      if (s < window.innerHeight) {
        bg.style.transform = `scale(1) translateY(${s * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero">
      <div className="hero-photo" id="heroBg" />
      <img
        src="https://res.cloudinary.com/dvm1g1ehh/image/upload/v1780401526/DJI_0232-HDR-Pano_aj7dsx.jpg"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', zIndex: 0 }}
      />
      <div className="hero-overlay" style={{ zIndex: 1 }} />
      <div className="hero-noise" style={{ zIndex: 2 }} />
      <div className="hero-num">713</div>

      <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px hidden lg:block" style={{ background: 'rgba(202,193,178,.12)' }} />

      <div className="relative max-w-screen-xl mx-auto px-8 lg:px-16 flex flex-col justify-end min-h-screen pb-16 lg:pb-24" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-4 mb-10" style={{ animation: 'fadeUp .8s .2s both' }}>
          <div className="line-short" style={{ background: 'rgba(202,193,178,.5)' }} />
          <span className="label" style={{ color: 'rgba(202,193,178,.6)' }}>Costa del Sol · Marbella · Estepona</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div>
            <h1 className="display-xl mb-8" style={{ color: '#FAFAF8', animation: 'fadeUp .9s .3s both' }}>
              Uw Vastgoed-<br />
              <span className="italic" style={{ color: '#CAC1B2' }}>makelaar in</span><br />
              Costa Del Sol
            </h1>
            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'fadeUp .9s .5s both' }}>
              <a href="#inspectiereis" className="btn btn-dark">Plan inspectiereis <span className="arrow" /></a>
              <a href="#properties" className="btn btn-ghost-white">Bekijk projecten</a>
            </div>
          </div>

          <div className="pb-1" style={{ animation: 'fadeUp .9s .6s both' }}>
            <p className="body-md max-w-sm mb-10" style={{ color: 'rgba(250,250,248,.5)' }}>
              Wij vinden, begeleiden en realiseren uw vastgoedinvestering aan de Costa del Sol. Persoonlijk, vertrouwd en met 13 jaar expertise.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="display-sm" style={{ color: '#CAC1B2' }}>500<span style={{ fontSize: '.6em', color: 'rgba(250,250,248,.3)' }}>+</span></div>
                <div className="label mt-1" style={{ color: 'rgba(250,250,248,.3)' }}>Woningen Verkocht</div>
              </div>
              <div className="line-v" style={{ background: 'rgba(255,255,255,.08)' }} />
              <div>
                <div className="display-sm" style={{ color: '#CAC1B2' }}>713<span style={{ fontSize: '.6em', color: 'rgba(250,250,248,.3)' }}>+</span></div>
                <div className="label mt-1" style={{ color: 'rgba(250,250,248,.3)' }}>In portefeuille</div>
              </div>
              <div className="line-v" style={{ background: 'rgba(255,255,255,.08)' }} />
              <div>
                <div className="display-sm" style={{ color: '#CAC1B2' }}>13<span style={{ fontSize: '.6em', color: 'rgba(250,250,248,.3)' }}>+</span></div>
                <div className="label mt-1" style={{ color: 'rgba(250,250,248,.3)' }}>Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 lg:right-16 bottom-16 hidden lg:flex flex-col items-center gap-3" style={{ animation: 'fadeUp .9s .8s both' }}>
          <span className="label" style={{ color: 'rgba(250,250,248,.2)', writingMode: 'vertical-rl', letterSpacing: '.3em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '48px', background: 'rgba(202,193,178,.2)' }} />
        </div>
      </div>
    </section>
  )
}
