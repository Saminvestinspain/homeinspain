'use client'
import { useState } from 'react'

const thumbBgs = [
  'linear-gradient(135deg,#023344,#034558)',
  'linear-gradient(160deg,#034558,#04596e)',
  'linear-gradient(200deg,#04596e,#034558)',
  'linear-gradient(250deg,#023344,#04596e)',
]

export default function PropertyGallery() {
  const [active, setActive] = useState(0)

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-4 reveal">
        <div className="gal-main" style={{ height: 'clamp(320px,55vw,620px)', background: '#0d1f26' }}>
          <div className="inner absolute inset-0 flex items-center justify-center" style={{ background: thumbBgs[active] }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 35%,rgba(202,193,178,.1),transparent 60%)' }} />
            <div className="absolute top-7 left-7 flex gap-2">
              <span className="label px-3 py-2" style={{ background: '#023344', color: '#FAFAF8' }}>Nieuw Project</span>
              <span className="label px-3 py-2" style={{ background: 'rgba(10,10,10,.6)', color: '#CAC1B2', backdropFilter: 'blur(8px)' }}>Zeezicht</span>
            </div>
            <div className="absolute bottom-7 right-7 flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(10,10,10,.5)', backdropFilter: 'blur(8px)' }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="#CAC1B2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" /><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" /><polyline points="21,15 16,10 5,21" strokeWidth="1.5" />
              </svg>
              <span className="label" style={{ color: 'rgba(202,193,178,.7)' }}>18 fotos</span>
            </div>
            <svg className="w-20 h-20" fill="none" stroke="rgba(202,193,178,.2)" viewBox="0 0 24 24" style={{ opacity: .08 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".6" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" strokeWidth=".6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 mb-16 reveal">
        <div className="grid grid-cols-5 gap-2">
          {thumbBgs.map((bg, i) => (
            <div key={i} onClick={() => setActive(i)}
              className={`gal-thumb ${active === i ? 'active' : ''}`}
              style={{ height: '72px', background: bg }} />
          ))}
          <div className="gal-thumb flex items-center justify-center" style={{ height: '72px', background: '#F2F0EC', border: '1px solid rgba(10,10,10,.1)' }}>
            <span className="label" style={{ color: '#8A8278' }}>+14</span>
          </div>
        </div>
      </div>
    </>
  )
}
