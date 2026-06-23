export default function CTABand() {
  return (
    <div className="book-an-appointment-area" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="text-center reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="sub" style={{ display: 'block', marginBottom: '12px' }}>
            YOUR FAMILY&apos;S HOSPITAL IS HERE
          </span>
          <h2 style={{ marginBottom: '20px' }}>
            Your family&apos;s hospital is now <b>five minutes away.</b>
          </h2>
          <p style={{ marginBottom: '35px', fontSize: '17px' }}>
            Expert care, close to home. Call us at{' '}
            <a href="tel:+919090546363" style={{ fontWeight: 600 }}>+91 90905 46363</a> or{' '}
            <a href="tel:+919121856565" style={{ fontWeight: 600 }}>+91 91218 56565</a>{' '}
            — or book online in under a minute.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="tel:+919090546363" className="default-btn">
              <i className="ti ti-phone-call"></i>
              Call Hospital
            </a>
            <a
              href="https://wa.me/919090546363"
              target="_blank"
              rel="noreferrer"
              className="default-btn"
              style={{ backgroundColor: '#25D366' }}
            >
              <i className="ti ti-brand-whatsapp"></i>
              WhatsApp Us
            </a>
            <a href="#" className="default-btn" style={{ backgroundColor: 'var(--optionalColor)' }}>
              <i className="ti ti-calendar-plus"></i>
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
