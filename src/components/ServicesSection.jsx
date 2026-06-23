import maternity from '../assets/images/maternity.png'
import pediatric from '../assets/images/pediatric.png'
import surgeryOt from '../assets/images/surgery-ot.png'
import diagnostics from '../assets/images/diagnostics.png'
import polygon1 from '../assets/images/polygon1.png'
import polygon2 from '../assets/images/polygon2.png'

const specialties = [
  {
    img: maternity,
    poly: polygon1,
    polyClass: 'polygon1',
    icon: 'ti ti-heart-handshake',
    name: 'Gynecology & OB',
    desc: 'Pregnancy care, safe deliveries, fertility support and gynecological treatment led by founder Dr. A.N. Varuna Vyas.',
    href: '/specialties/maternity-womens-health',
    order: 'img-first', // image then card
  },
  {
    img: pediatric,
    poly: polygon1,
    polyClass: 'polygon1',
    icon: 'ti ti-baby-carriage',
    name: 'Pediatrics & Neonatal Care',
    desc: 'Newborn and child care by two MD pediatricians, Dr. Mareddy Veena and Dr. M. Nitin Rao.',
    href: '/specialties/pediatrics',
    order: 'img-first',
  },
  {
    img: surgeryOt,
    poly: polygon2,
    polyClass: 'polygon2',
    icon: 'ti ti-scissors',
    name: 'General & Minimal Access Surgery',
    desc: 'Laparoscopic and minimal access procedures led by founder Dr. Bhargava Vyas FIAGES, FMAS.',
    href: '/specialties/general-minimal-access-surgery',
    order: 'card-first', // card then image (row 2 reversal)
  },
  {
    img: diagnostics,
    poly: polygon2,
    polyClass: 'polygon2',
    icon: 'ti ti-droplet',
    name: 'Endocrinology & Diabetes',
    desc: 'Diabetes, thyroid and hormonal care with DM endocrinologist Dr. Deepak Thiriveedi, SCE (UK).',
    href: '/specialties/general-medicine-endocrinology',
    order: 'card-first',
  },
]

function ServiceImage({ svc }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="services-image">
        <a href={svc.href}>
          <img src={svc.img} alt={`${svc.name} at Unicare Hospitals Kokapet`} />
        </a>
        <div className={svc.polyClass}>
          <img src={svc.poly} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ svc }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="services-card">
        <div className="icon" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          <i className={svc.icon} style={{ color: 'var(--mainColor)' }}></i>
        </div>
        <h3>
          <a href={svc.href}>{svc.name}</a>
        </h3>
        <p>{svc.desc}</p>
        <a className="services-btn" href={svc.href}>
          <i className="ti ti-arrow-right"></i>
          Learn More
        </a>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  // Split into two rows of 2 pairs each
  const row1 = specialties.slice(0, 2) // Gynecology, Pediatrics  → img-first
  const row2 = specialties.slice(2, 4) // Surgery, Endocrinology  → card-first

  return (
    <div className="services-area wrap-bg-color ptb-100">
      <div className="container">
        <div className="section-title reveal">
          <span className="sub">OUR SPECIALTIES</span>
          <h2>
            One hospital for every chapter <b>of your family's health.</b>
          </h2>
        </div>

        {/* Row 1: image → card | image → card */}
        <div className="row justify-content-center align-items-center reveal reveal-delay-1">
          {row1.map((svc) => (
            <>
              <ServiceImage key={`img-${svc.name}`} svc={svc} />
              <ServiceCard key={`card-${svc.name}`} svc={svc} />
            </>
          ))}
        </div>

        {/* Row 2: card → image | card → image (reversed) */}
        <div className="row justify-content-center align-items-center reveal reveal-delay-2">
          {row2.map((svc) => (
            <>
              <ServiceCard key={`card-${svc.name}`} svc={svc} />
              <ServiceImage key={`img-${svc.name}`} svc={svc} />
            </>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="services-bottom-text" style={{ textAlign: 'center', marginTop: '32px' }}>
              <a href="/specialties" className="default-btn">
                <i className="ti ti-circle-arrow-right-filled"></i>
                Explore All Specialties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
