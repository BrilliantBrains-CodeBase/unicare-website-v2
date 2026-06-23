import logoWhite from '../assets/images/logo.png'

const quickLinks = [
  { label: 'Specialties', href: '/specialties' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Book an Appointment', href: '#' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const specialtyLinks = [
  { label: 'Gynecology & OB', href: '/specialties/maternity-womens-health' },
  { label: 'Pediatrics & Neonatal Care', href: '/specialties/pediatrics' },
  { label: 'Surgery', href: '/specialties/general-minimal-access-surgery' },
  { label: 'Endocrinology & Diabetes', href: '/specialties/general-medicine-endocrinology' },
  { label: 'Pharmacy', href: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab', href: '/specialties/diagnostics-lab' },
]

const socials = [
  { icon: 'ti ti-brand-facebook', href: '#' },
  { icon: 'ti ti-brand-instagram', href: '#' },
  { icon: 'ti ti-brand-whatsapp', href: 'https://wa.me/919090546363' },
  { icon: 'ti ti-brand-linkedin', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer-area" style={{ paddingTop: '70px' }}>
      <div className="container">
        <div className="row g-4">

          {/* Col 1 — Logo + Social */}
          <div className="col-xl-3 col-lg-6 col-md-12 reveal">
            <div className="single-footer-widget pe-3">
              <div className="widget-logo">
                <a href="/">
                  <div style={{ display: 'inline-block', background: '#ffffff', borderRadius: '12px', padding: '10px 16px' }}>
                    <img src={logoWhite} alt="Unicare Hospitals" width="160" height="60" style={{ objectFit: 'contain', display: 'block' }} />
                  </div>
                </a>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '1.7', marginTop: '16px', color: 'var(--whiteColor)', opacity: 0.75 }}>
                A doctor-founded multispecialty hospital in Kokapet, bringing specialist care close to home for the families of West Hyderabad.
              </p>
              <div className="social-info" style={{ marginTop: '16px' }}>
                <ul className="social">
                  {socials.map(s => (
                    <li key={s.icon}>
                      <a href={s.href} target="_blank" rel="noreferrer"><i className={s.icon}></i></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="col-xl col-lg-3 col-sm-6 reveal reveal-delay-1">
            <div className="single-footer-widget">
              <h3>Quick Links</h3>
              <ul className="custom-links">
                {quickLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          </div>

          {/* Col 3 — Specialties */}
          <div className="col-xl col-lg-3 col-sm-6 reveal reveal-delay-2">
            <div className="single-footer-widget">
              <h3>Specialties</h3>
              <ul className="custom-links">
                {specialtyLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-xl col-lg-6 col-sm-6 reveal reveal-delay-3">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul className="custom-links">
                <li style={{ color: 'var(--whiteColor)', opacity: 0.75 }}>A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana</li>
                <li><a href="tel:+919090546363">+91 90905 46363</a></li>
                <li><a href="tel:+919121856565">+91 91218 56565</a></li>
                <li><a href="mailto:info@unicareglobalhospitals.com">info@unicareglobalhospitals.com</a></li>
                <li><a href="mailto:helpdesk@unicareglobalhospitals.com">helpdesk@unicareglobalhospitals.com</a></li>
                <li><a href="https://www.unicareglobalhospitals.com" target="_blank" rel="noreferrer">www.unicareglobalhospitals.com</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="copyright-area">
        <p>
          <span>© 2026 Unicare Hospitals</span>
          {' · '}Kokapet, Telangana
          {' · '}
          <a href="tel:+919090546363">+91 90905 46363</a>
          {' · '}
          <a href="https://www.unicareglobalhospitals.com" target="_blank" rel="noreferrer">
            www.unicareglobalhospitals.com
          </a>
        </p>
      </div>
    </footer>
  )
}
