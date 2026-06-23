import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import bannerBg1 from '../assets/images/hospital-exterior-main.png'
import bannerBg2 from '../assets/images/hospital-reception.png'
import heroImg from '../assets/images/hero.png'
import shape6 from '../assets/images/shape-6.png'

const slides = [
  {
    bg: bannerBg1,
    eyebrow: 'KOKAPET, HYDERABAD',
    title: '<b>Expert Care,</b> Close to Home.',
    text: "Unicare Hospitals is a doctor-founded multispecialty hospital in the heart of Kokapet, built so the families of West Hyderabad never have to choose between quality care and a long drive. From maternity to pediatrics, surgery to diabetes care, your specialists are now minutes away.",
    cta: 'Book an Appointment',
    ctaHref: '#',
  },
  {
    bg: bannerBg2,
    eyebrow: 'KOKAPET, HYDERABAD',
    title: '<b>Specialist-grade care,</b> minutes from home.',
    text: "Unicare Hospitals is a doctor-founded multispecialty hospital in the heart of Kokapet, built so the families of West Hyderabad never have to choose between quality care and a long drive. From maternity to pediatrics, surgery to diabetes care, your specialists are now minutes away.",
    cta: 'Book an Appointment',
    ctaHref: '#',
  },
]

function HeroText({ text }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <p style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: expanded ? 'unset' : 2,
        overflow: expanded ? 'visible' : 'hidden',
        marginBottom: expanded ? '8px' : '4px',
        transition: 'all 0.3s ease',
      }}>
        {text}
      </p>
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          color: 'var(--mainColor)',
          fontWeight: 600,
          fontSize: '13px',
          cursor: 'pointer',
          marginBottom: '4px',
          letterSpacing: '0.3px',
        }}
      >
        {expanded ? 'Read Less ↑' : 'Read More ↓'}
      </button>
    </div>
  )
}

export default function HeroSlider() {
  const swiperRef = useRef(null)

  return (
    <div className="gh-area">
      <div className="general-hospital-slider">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onBeforeInit={(swiper) => { swiperRef.current = swiper }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="general-hospital-slider-item"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="container-fluid">
                  <div className="general-hospital-slider-content">
                    <div className="content">
                      <span className="sub" style={{ display: 'block', marginBottom: '10px', fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px' }}>
                        {slide.eyebrow}
                      </span>
                      <h1 className="title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                      <HeroText text={slide.text} />
                      <div className="slider-btn">
                        <a href={slide.ctaHref} className="default-btn">
                          <i className="ti ti-circle-arrow-right-filled"></i>
                          {slide.cta}
                        </a>
                      </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="inner-image">
                          <img src={heroImg} alt="Unicare Hospitals Kokapet" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="inner-info">
                          <div className="box">
                            <span className="sub">
                              Unicare Hospitals, Kokapet. OPD: <strong>Mon – Sat</strong>, 10 AM–2 PM &amp; 5–8 PM.
                            </span>
                            <p>Call for same-day appointments and emergency assistance.</p>
                            <div className="phone-btn">
                              <div className="icon">
                                <i className="ti ti-phone-call"></i>
                              </div>
                              <span style={{ whiteSpace: 'nowrap' }}>
                                CALL: <a href="tel:+919090546363">+91 90905 46363</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="owl-nav">
          <button type="button" className="owl-prev" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
            <span className="general-hospital-button-prev"><i className="ti ti-arrow-left"></i></span>
          </button>
          <button type="button" className="owl-next" onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
            <span className="general-hospital-button-next"><i className="ti ti-arrow-right"></i></span>
          </button>
        </div>
      </div>

      <div className="general-hospital-shape">
        <img src={shape6} alt="shape" />
      </div>
    </div>
  )
}
