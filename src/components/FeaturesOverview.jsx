import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'

const marqueeText = 'Expert Care, Close to Home   *   Doctor-Founded Hospital   *   Kokapet, Hyderabad   *   Expert Care, Close to Home   *   Doctor-Founded Hospital   *   Kokapet, Hyderabad   *   Expert Care, Close to Home   *   Doctor-Founded Hospital   *   Kokapet, Hyderabad'

const cards = [
  {
    title: 'Founded & <b>Run by Doctors</b>',
    text: 'You see the same specialist every visit, not a different junior doctor each time. The founders are on the floor, every day.',
    img: img1,
    bgClass: '',
  },
  {
    title: 'Genuinely <b>Close to Home</b>',
    text: 'Located in Kokapet, minutes from Narsingi, Gachibowli, Financial District and Manikonda. No ORR traffic when it matters most.',
    img: img2,
    bgClass: 'bg-two',
  },
  {
    title: 'Everything <b>In One Place</b>',
    text: 'Consultation, diagnostics, pharmacy and procedures under one roof, so one visit does the work of three.',
    img: img3,
    bgClass: 'bg-three',
  },
]

function OverviewCard({ card }) {
  return (
    <div className={`overview-card ${card.bgClass}`} style={{ height: '100%' }}>
      <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
      <p>{card.text}</p>
      <div className="overview-btn">
        <a href="/about-us" className="link-btn">
          <i className="ti ti-arrow-right"></i>Learn More
        </a>
      </div>
      <div className="wrap-shape">
        <img src={card.img} alt="" />
      </div>
    </div>
  )
}

export default function FeaturesOverview() {
  return (
    <div className="overview-area pb-100">
      {/* Infinite scrolling heading banner */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '0' }}>
        <span className="sub">WHY CHOOSE UNICARE</span>
      </div>

      <div className="animation-view-area ptb-100">
        <div className="container-fluid">
          <div className="animation-view-content">
            <h1>
              <div className="marquee-track">
                <p className="animation-text">{marqueeText}</p>
              </div>
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="overview-inner-area reveal">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0:   { slidesPerView: 1.1, centeredSlides: true, enabled: true },
              768: { slidesPerView: 3,   centeredSlides: false, enabled: false, loop: false },
            }}
          >
            {[...cards, ...cards].map((card, i) => (
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <OverviewCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
