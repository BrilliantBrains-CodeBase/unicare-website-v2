import { useState, useEffect, useRef } from 'react'
import logoBlack from '../assets/images/logo-horizontal.png'

const topLinks = [
  { label: '+91 90905 46363', href: 'tel:+919090546363' },
  { label: '+91 91218 56565', href: 'tel:+919121856565' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

const specialtyLinks = [
  { label: 'Gynecology & OB', href: '/specialties/maternity-womens-health' },
  { label: 'Pediatrics & Neonatal Care', href: '/specialties/pediatrics' },
  { label: 'General & Minimal Access Surgery', href: '/specialties/general-minimal-access-surgery' },
  { label: 'Endocrinology & Diabetes', href: '/specialties/general-medicine-endocrinology' },
  { label: 'General Medicine', href: '/specialties/general-medicine-endocrinology' },
  { label: 'Orthopedics', href: '/specialties/orthopedics' },
  { label: 'Pharmacy', href: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab', href: '/specialties/diagnostics-lab' },
]

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Specialties', href: '/specialties', children: specialtyLinks },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Health Checkup Packages', href: '/health-checkup-packages' },
]

const mobileNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Specialties', children: specialtyLinks.map(s => s.label) },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Health Checkup Packages', href: '/health-checkup-packages' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

function MobileMenuItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <li className={`menu-item${item.children ? ' menu-item-has-children' : ''}`}>
      <a
        href={item.href || '#'}
        onClick={item.children ? (e) => { e.preventDefault(); setOpen(o => !o) } : undefined}
      >
        {item.label}
      </a>
      {item.children && (
        <ul className="sub-menu" style={{ display: open ? 'block' : 'none' }}>
          {item.children.map((c) => (
            <li key={c} className="menu-item"><a href="#">{c}</a></li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Header() {
  const navbarRef = useRef(null)
  const backtotopRef = useRef(null)
  const [offcanvasOpen, setOffcanvasOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Sticky navbar + back-to-top on scroll
  useEffect(() => {
    const onScroll = () => {
      const navbar = navbarRef.current
      const btn = backtotopRef.current
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('is-sticky')
        } else {
          navbar.classList.remove('is-sticky')
        }
      }
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.add('active')
        } else {
          btn.classList.remove('active')
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="main-header-area mharea2">
        <nav
          ref={navbarRef}
          className="navbar navbar-expand-xl navbar-area-with-transparent-color"
          id="navbar"
        >
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img className="black-logo" src={logoBlack} alt="Unicare Hospitals" style={{ height: '90px', width: 'auto', display: 'block' }} />
            </a>

            {/* Mobile burger */}
            <button
              className={`navbar-toggler${offcanvasOpen ? ' is-open' : ''}`}
              type="button"
              onClick={() => setOffcanvasOpen(true)}
              aria-label="Open menu"
            >
              <span className="burger-menu">
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </span>
            </button>

            {/* Desktop nav (always shown — CSS controls visibility) */}
            <div className="collapse navbar-collapse">

              {/* Row 1: mini utility links */}
              <div className="menu-top-menu-container">
                <ul className="top-navbar-list">
                  {topLinks.map(link => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 2: main nav + CTA */}
              <div className="navbar-inner d-flex align-items-center justify-content-between">
                <ul id="menu-primary-menu" className="navbar-nav ms-auto">
                  {navItems.map(item => (
                    <li
                      key={item.label}
                      className={`menu-item nav-item level-1${item.children ? ' menu-item-has-children dropdown' : ''}`}
                    >
                      <a
                        href={item.href}
                        className={`nav-link${item.children ? ' dropdown-toggle' : ''}`}
                        onClick={item.children ? e => e.preventDefault() : undefined}
                        aria-haspopup={item.children ? 'true' : undefined}
                        aria-expanded={item.children ? 'false' : undefined}
                      >
                        {item.label}
                      </a>
                      {item.children && (
                        <ul className="dropdown-menu" role="menu">
                          {item.children.map(child => (
                            <li key={child.label} className="nav-item">
                              <a href={child.href} className="dropdown-item nav-link">
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <div
                      className="search-bar main-menu__search search-toggler"
                      onClick={() => setSearchOpen(true)}
                    >
                      <i className="ti ti-search"></i>
                    </div>
                  </div>
                  {/* CTA 1 — Call Hospital (primary) */}
                  <div className="option-item">
                    <a href="tel:+919090546363" className="default-btn">
                      <i className="ti ti-phone-call"></i>
                      Call Hospital
                    </a>
                  </div>
                  {/* CTA 2 — WhatsApp (secondary) */}
                  <div className="option-item">
                    <a
                      href="https://wa.me/919090546363"
                      target="_blank"
                      rel="noreferrer"
                      className="default-btn"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <i className="ti ti-brand-whatsapp"></i>
                      WhatsApp
                    </a>
                  </div>
                  {/* CTA 3 — Book Appointment (tertiary) */}
                  <div className="option-item">
                    <a href="#" className="default-btn" style={{ backgroundColor: 'var(--optionalColor)' }}>
                      <i className="ti ti-calendar-plus"></i>
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>

            </div>{/* /.collapse */}
          </div>{/* /.container-fluid */}
        </nav>
      </div>

      {/* Search popup — uses .active class as per hospa CSS */}
      <div className={`search-popup${searchOpen ? ' active' : ''}`}>
        <div className="search-popup-overlay search-toggler" onClick={() => setSearchOpen(false)}></div>
        <div className="search-popup-content">
          <form className="search-popup-form" onSubmit={e => e.preventDefault()}>
            <input type="text" className="form-control" placeholder="Search here" autoFocus={searchOpen} />
            <button type="submit" aria-label="search submit">
              <i className="ti ti-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile offcanvas */}
      <div
        className={`mobile-navbar offcanvas offcanvas-end border-0${offcanvasOpen ? ' show' : ''}`}
        tabIndex="-1"
        id="navbarOffcanvas"
        style={{ visibility: offcanvasOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header">
          <a className="logo d-inline-block" href="/">
            <img src={logoBlack} alt="Unicare Hospitals" style={{ height: '50px', width: 'auto' }} />
          </a>
          <button
            type="button"
            className="close-btn bg-transparent position-relative lh-1 p-0 border-0"
            onClick={() => setOffcanvasOpen(false)}
            aria-label="Close"
          >
            <i className="ti ti-x"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="responsive-menu mobile-menu">
            {mobileNavItems.map(item => (
              <MobileMenuItem key={item.label} item={item} />
            ))}
          </ul>

          <div className="others-option d-flex flex-column mt-4 gap-2">
            <a href="tel:+919090546363" className="default-btn">
              <i className="ti ti-phone-call"></i>
              Call Hospital
            </a>
            <a href="https://wa.me/919090546363" target="_blank" rel="noreferrer" className="default-btn" style={{ backgroundColor: '#25D366' }}>
              <i className="ti ti-brand-whatsapp"></i>
              WhatsApp Us
            </a>
            <a href="#" className="default-btn" style={{ backgroundColor: 'var(--optionalColor)' }}>
              <i className="ti ti-calendar-plus"></i>
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {offcanvasOpen && (
        <div className="offcanvas-backdrop fade show" onClick={() => setOffcanvasOpen(false)}></div>
      )}

      {/* Back to top — shown with .active class added by scroll listener */}
      <button
        ref={backtotopRef}
        type="button"
        id="backtotop"
        className="position-fixed text-center border-0 p-0"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="ti ti-arrow-up"></i>
      </button>
    </>
  )
}
