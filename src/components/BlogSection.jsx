import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import blog13 from '../assets/images/blog1-3.jpg'
import blog23 from '../assets/images/blog2-3.jpg'
import blog12 from '../assets/images/blog1-2.jpg'
import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/about3.jpg'
import faqImg from '../assets/images/faq.jpg'

const posts = [
  {
    img: blog13,
    category: 'Gynecology & OB',
    read: '5 MINS READ',
    title: 'Your first trimester checklist: what Kokapet moms-to-be should do in weeks 1–12',
    author: 'Dr. A.N. Varuna Vyas',
  },
  {
    img: blog23,
    category: 'Child Health',
    read: '4 MINS READ',
    title: 'Fever in children: when to wait, when to call, when to come in',
    author: 'Dr. M. Nitin Rao',
  },
  {
    img: blog12,
    category: 'Child Health',
    read: '4 MINS READ',
    title: 'The vaccination schedule every new parent should pin on the fridge',
    author: 'Dr. Mareddy Veena',
  },
  {
    img: about2,
    category: 'Diabetes & Hormones',
    read: '5 MINS READ',
    title: 'HbA1c explained: the one number every person with diabetes should know',
    author: 'Dr. Deepak Thiriveedi',
  },
  {
    img: about3,
    category: 'Surgery',
    read: '5 MINS READ',
    title: 'Gallstones: do they always need surgery? An honest answer',
    author: 'Dr. Bhargava Vyas A.N.',
  },
  {
    img: faqImg,
    category: 'Diabetes & Hormones',
    read: '4 MINS READ',
    title: 'Thyroid and tiredness: when fatigue is a hormone problem',
    author: 'Dr. Deepak Thiriveedi',
  },
]

export default function BlogSection() {
  const swiperRef = useRef(null)

  return (
    <div className="blog-area wrap-style pb-100">
      <div className="container">
        <div className="section-title d-flex justify-content-between align-items-end reveal">
          <div>
            <span className="sub">BLOG &amp; ARTICLES</span>
            <h2>
              Health advice you can actually use, <b>from doctors you can actually visit.</b>
            </h2>
          </div>
          <ul className="blog-slider-button">
            <li>
              <button type="button" className="blog-button-prev" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous article" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <i className="ti ti-arrow-left"></i>
              </button>
            </li>
            <li>
              <button type="button" className="blog-button-next" onClick={() => swiperRef.current?.slideNext()} aria-label="Next article" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <i className="ti ti-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="blog-slider reveal reveal-delay-1">
          <Swiper
            onBeforeInit={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={1}
            spaceBetween={80}
            loop={true}
            breakpoints={{ 992: { slidesPerView: 2 } }}
          >
            {posts.map((post, i) => (
              <SwiperSlide key={i}>
                <div className="blog-card">
                  <div className="blog-image">
                    <a href="/blog"><img src={post.img} alt={post.title} /></a>
                    <a href="/blog" className="tag-btn">{post.category}</a>
                  </div>
                  <div className="blog-content">
                    <ul className="meta">
                      <li>{post.author}</li>
                      <li>{post.read}</li>
                    </ul>
                    <h3><a href="/blog">{post.title}</a></h3>
                    <a href="/blog" className="blog-btn">
                      <i className="ti ti-arrow-right"></i>Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
