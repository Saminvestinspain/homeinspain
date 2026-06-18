import Nav from '@/components/Nav'
import ProgressBar from '@/components/ProgressBar'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Properties from '@/components/Properties'
import Inspectiereis from '@/components/Inspectiereis'
import Testimonials from '@/components/Testimonials'
import SiteFooter from '@/components/SiteFooter'
import WhatsApp from '@/components/WhatsApp'

export default function HomePage() {
  return (
    <>
      <Nav />
      <ProgressBar />
      <Hero />
      <Intro />
      <Properties />
      <Inspectiereis />
      <Testimonials />
      <SiteFooter />
      <WhatsApp />
    </>
  )
}
