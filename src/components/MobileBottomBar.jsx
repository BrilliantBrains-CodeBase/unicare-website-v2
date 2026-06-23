export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar">
      <a href="/" className="mobile-bottom-bar__item">
        <i className="ti ti-home"></i>
        <span>Home</span>
      </a>

      <a href="/specialties" className="mobile-bottom-bar__item">
        <i className="ti ti-layout-grid"></i>
        <span>Specialties</span>
      </a>

      {/* Centre Book button */}
      <a href="#" className="mobile-bottom-bar__item mobile-bottom-bar__book">
        <span className="mobile-bottom-bar__book-circle">
          <i className="ti ti-calendar-plus"></i>
        </span>
        <span>Book</span>
      </a>

      <a href="https://wa.me/919090546363" target="_blank" rel="noreferrer" className="mobile-bottom-bar__item">
        <i className="ti ti-brand-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <a href="tel:+919090546363" className="mobile-bottom-bar__item">
        <i className="ti ti-phone-call"></i>
        <span>Call</span>
      </a>
    </div>
  )
}
