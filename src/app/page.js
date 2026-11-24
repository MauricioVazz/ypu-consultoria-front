import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Professionals from '@/components/sections/Professionals'
import Partners from '@/components/sections/Partners'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Professionals />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}