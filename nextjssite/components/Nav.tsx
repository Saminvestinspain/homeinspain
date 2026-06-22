'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav({ isPropertyPage = false }: { isPropertyPage?: boolean }) {
  const [scrolled, setScrolled] = useState(isPropertyPage)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isPropertyPage) return
    const onScroll = () => {
      const s = document.documentElement.scrollTop
      setScrolled(s > 80)
      const h = document.documentElement.scrollHeight - window.innerHeight
      const el = document.getElementById('progress')
      if (el) el.style.width = (s / h * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isPropertyPage])

  const logoColor = scrolled ? '#023344' : '#FAFAF8'
  const textColor = scrolled ? 'rgba(10,10,10,.6)' : 'rgba(250,250,248,.75)'
  const btnBg = scrolled ? '#023344' : '#FAFAF8'
  const btnColor = scrolled ? '#FAFAF8' : '#023344'

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div id="progress" style={{ width: '0%' }} />
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 flex-shrink-0">
              <path d="M16 2L2 12V30H11V20H21V30H30V12L16 2Z" style={{ fill: logoColor, transition: 'fill .4s' }} />
              <path d="M16 2L30 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M16 2L2 12" stroke="#CAC1B2" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="label tracking-widest" style={{ color: logoColor, transition: 'color .4s' }}>
              INVEST<span style={{ color: '#CAC1B2' }}>IN</span>SPAIN
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {[['Projecten', '#properties'], ['Services', '#services'], ['Over ons', '#about'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={href} href={href} className="nav-link" style={{ color: textColor }}>{label}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+3215257310" className="label transition-colors"
              style={{ color: scrolled ? 'rgba(10,10,10,.4)' : 'rgba(250,250,248,.55)' }}>
              +32 15 25 73 10
            </a>
            <a href="#inspectiereis" className="btn text-xs"
              style={{ background: btnBg, color: btnColor, padding: '14px 28px', transition: 'all .4s' }}>
              Inspectiereis <span className="arrow" style={{ background: btnColor }} />
            </a>
          </div>

          <button className="lg:hidden p-1" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-px" style={{ background: logoColor, transition: 'background .4s' }} />
              <span className="block w-4 h-px" style={{ background: logoColor, transition: 'background .4s' }} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-black/8 bg-warm">
          <div className="px-8 py-8 flex flex-col gap-6">
            <a href="#properties" className="label" style={{ color: 'rgba(10,10,10,.6)' }}>Projecten</a>
            <a href="#services" className="label" style={{ color: 'rgba(10,10,10,.6)' }}>Services</a>
            <a href="#about" className="label" style={{ color: 'rgba(10,10,10,.6)' }}>Over ons</a>
            <a href="#contact" className="label" style={{ color: 'rgba(10,10,10,.6)' }}>Contact</a>
            <a href="#inspectiereis" className="btn btn-dark w-fit mt-2">Inspectiereis <span className="arrow" /></a>
          </div>
        </div>
      )}
    </nav>
  )
}
