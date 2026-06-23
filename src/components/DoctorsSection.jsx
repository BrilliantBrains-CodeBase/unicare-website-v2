import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import drVaruna  from '../assets/images/Dr.Varuna.png'
import drBhargava from '../assets/images/Dr.Bhargava.png'
import drDeeepak  from '../assets/images/Dr.Deepak.png'
import drVeena    from '../assets/images/Dr.Veena.png'
import drNitin    from '../assets/images/Dr.Nitin.png'

const tabs = [
  { id: 'all', label: 'All Doctors' },
  { id: 'womens', label: "Women's Health" },
  { id: 'surgery', label: 'Surgery' },
  { id: 'endo', label: 'Endocrinology' },
  { id: 'paeds', label: 'Pediatrics' },
]

const allDoctors = [
  {
    img: drVaruna,
    name: 'Dr. A.N. Varuna Vyas',
    qual: 'MBBS, DGO, DNB, FRM',
    role: "Founder & Clinical Lead, Women's Health",
    tabs: ['all', 'womens'],
  },
  {
    img: drBhargava,
    name: 'Dr. Bhargava Vyas A.N.',
    qual: 'MBBS, MS (General Surgery), FIAGES, FMAS',
    role: 'Founder & Clinical Lead, General & Minimal Access Surgery',
    tabs: ['all', 'surgery'],
  },
  {
    img: drDeeepak,
    name: 'Dr. Deepak Thiriveedi',
    qual: 'MBBS, MD (Gen. Medicine), DM (Endocrinology), SCE (UK)',
    role: 'Consultant, Endocrinology & Metabolic Medicine',
    tabs: ['all', 'endo'],
  },
  {
    img: drVeena,
    name: 'Dr. Mareddy Veena',
    qual: 'MBBS, MD (Pediatrics)',
    role: 'Consultant, Pediatrics & Neonatal Care',
    tabs: ['all', 'paeds'],
  },
  {
    img: drNitin,
    name: 'Dr. M. Nitin Rao',
    qual: 'MBBS, MD (Pediatrics)',
    role: 'Consultant, Pediatrics & Neonatal Care',
    tabs: ['all', 'paeds'],
  },
]

function DoctorSlider({ doctors }) {
  const swiperRef = useRef(null)
  const count = doctors.length

  return (
    <div className="doctor-slider-inner">
      <div className="doctor-slider">
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper }}
          spaceBetween={25}
          breakpoints={{
            0:    { slidesPerView: 1 },
            768:  { slidesPerView: Math.min(count, 2) },
            1200: { slidesPerView: Math.min(count, 3) },
          }}
        >
          {doctors.map((doc, i) => (
            <SwiperSlide key={i}>
              <div className="doctor-card">
                <div className="doctor-image">
                  <a href="#">
                    <img src={doc.img} alt={doc.name} />
                  </a>
                  <div className="doctor-btn">
                    <a href="tel:+919090546363" className="default-btn">
                      <i className="ti ti-circle-arrow-right-filled"></i>
                      Book An Appointment
                    </a>
                  </div>
                </div>
                <div className="doctor-content">
                  <h3><a href="#">{doc.name}</a></h3>
                  <span>{doc.role}</span>
                  <p style={{ fontSize: '12px', color: 'var(--optionalColor)', marginTop: '4px', marginBottom: 0 }}>
                    {doc.qual}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button type="button" className="owl-prev" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
        <i className="ti ti-arrow-left"></i>
      </button>
      <button type="button" className="owl-next" onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
        <i className="ti ti-arrow-right"></i>
      </button>
    </div>
  )
}

export default function DoctorsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const filtered = allDoctors.filter((d) => d.tabs.includes(activeTab))

  return (
    <div className="doctor-area pt-100 pb-75">
      <div className="container">
        <div className="section-title reveal">
          <span className="sub">DOCTORS</span>
          <h2>
            The doctors who built this hospital<br className="d-none d-lg-block" /> <b>are the ones who treat you.</b>
          </h2>
        </div>

        <div className="doctor-information-tabs reveal reveal-delay-1">
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item" role="presentation">
                <a
                  className={`nav-link${activeTab === tab.id ? ' active' : ''}`}
                  href="#"
                  role="tab"
                  onClick={(e) => { e.preventDefault(); setActiveTab(tab.id) }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" role="tabpanel">
              <DoctorSlider doctors={filtered} />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="/doctors" className="default-btn">
            <i className="ti ti-circle-arrow-right-filled"></i>
            Meet All Our Doctors
          </a>
        </div>
      </div>
    </div>
  )
}
