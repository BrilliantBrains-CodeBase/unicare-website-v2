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
    <footer className="footer-area pt-100">
      <div className="container">
        <div className="row g-4">

          {/* Col 1 — Logo + Address (no social here) */}
          <div className="col-xl-3 col-lg-6 col-md-12 reveal">
            <div className="single-footer-widget pe-3">
              <div className="widget-logo">
                <a href="/"><img src={logoWhite} alt="Unicare Hospitals" width="160" height="70" style={{ objectFit: 'contain' }} /></a>
              </div>
              <div className="locations">
                <p><span>Address: </span>A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana</p>
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
                <li><a href="tel:+919090546363">+91 90905 46363</a></li>
                <li><a href="tel:+919121856565">+91 91218 56565</a></li>
                <li><a href="mailto:info@unicareglobalhospitals.com">info@unicareglobalhospitals.com</a></li>
                <li><a href="mailto:helpdesk@unicareglobalhospitals.com">helpdesk@unicareglobalhospitals.com</a></li>
                <li><a href="https://www.unicareglobalhospitals.com" target="_blank" rel="noreferrer">www.unicareglobalhospitals.com</a></li>
              </ul>
            </div>
          </div>

          {/* Col 5 — Social Media (new standalone column) */}
          <div className="col-xl col-lg-3 col-sm-6 reveal reveal-delay-4">
            <div className="single-footer-widget">
              <h3>Follow Us</h3>
              <div className="social-info" style={{ marginTop: '12px' }}>
                <ul className="social">
                  {socials.map(s => (
                    <li key={s.icon}>
                      <a href={s.href} target="_blank" rel="noreferrer"><i className={s.icon}></i></a>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: '24px' }}>
                <h3>Legal</h3>
                <ul className="custom-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
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
