import { useEffect } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import QuickLinks from './components/QuickLinks'
import ServicesSection from './components/ServicesSection'
import DoctorsSection from './components/DoctorsSection'
import FeaturesOverview from './components/FeaturesOverview'
import AppointmentSection from './components/AppointmentSection'
import FAQSection from './components/FAQSection'
import MobileAppSection from './components/MobileAppSection'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div id="page" className="hfeed site">
      <header id="masthead">
        <Header />
      </header>

      <div className="page-area">
        {/* 1. Hero */}
        <HeroSlider />
        {/* 2. Trust Bar */}
        <QuickLinks />
        {/* 3. Specialties */}
        <ServicesSection />
        {/* 4. Meet Our Doctors */}
        <DoctorsSection />
        {/* 5. Why Choose Unicare */}
        <FeaturesOverview />
        {/* 6. Book an Appointment */}
        <AppointmentSection />
        {/* 8. Mobile App */}
        <MobileAppSection />
        {/* 9. FAQ */}
        <FAQSection />
        {/* Blog preview */}
        <BlogSection />
      </div>

      <MobileBottomBar />

      <footer id="colophon" role="contentinfo">
        <div className="footer-width-fixer">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
