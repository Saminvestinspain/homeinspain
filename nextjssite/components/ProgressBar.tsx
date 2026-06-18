'use client'
import { useEffect } from 'react'

export default function ProgressBar() {
  useEffect(() => {
    const el = document.getElementById('progress')
    if (!el) return
    const onScroll = () => {
      const s = document.documentElement.scrollTop
      const h = document.documentElement.scrollHeight - innerHeight
      el.style.width = (s / h * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="progress" style={{ width: '0%' }}></div>
}
