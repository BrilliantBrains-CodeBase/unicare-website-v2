import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const cards = [
  {
    icon: 'ti ti-user-check',
    title: 'EXPERIENCED SPECIALISTS',
    text: 'Founder-led doctors across maternity, surgery, diabetes and pediatrics — all in one building.',
    href: '/doctors',
    bgClass: '',
  },
  {
    icon: 'ti ti-microscope',
    title: 'MODERN DIAGNOSTICS',
    text: 'Same-day blood tests, imaging and health panels reviewed by your doctor in-house.',
    href: '/specialties/diagnostics-lab',
    bgClass: 'bg-D7ECE4',
  },
  {
    icon: 'ti ti-pill',
    title: 'PHARMACY ON-SITE',
    text: 'Prescribed medicines dispensed by qualified pharmacists before you leave the building.',
    href: '/specialties/pharmacy',
    bgClass: 'bg-D6D2F1',
  },
  {
    icon: 'ti ti-shield-check',
    title: 'DOCTOR-FOUNDED',
    text: 'Built by practicing specialists, not a business. You see the founders in the consultation room.',
    href: '/about-us',
    bgClass: 'bg-F2DDD9',
  },
]

function Card({ card }) {
  return (
    <div className={`features-card ${card.bgClass}`} style={{ height: '100%' }}>
      <div className="title">
        <i className={card.icon}></i>
        <h3>{card.title}</h3>
      </div>
      <p>{card.text}</p>
      <a href={card.href} className="features-btn">
        <i className="ti ti-arrow-right"></i>Learn More
      </a>
    </div>
  )
}

export default function QuickLinks() {
  return (
    <div className="features-area without-wrap-area pt-100 pb-75">
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0:   { slidesPerView: 1.1, centeredSlides: true },
            576: { slidesPerView: 2,   centeredSlides: false },
            992: { slidesPerView: 4,   centeredSlides: false },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.title} style={{ height: 'auto' }}>
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
