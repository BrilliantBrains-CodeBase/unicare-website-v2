export default function FindUs() {
  const mapsEmbedUrl =
    'https://www.google.com/maps?q=A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana&output=embed'

  const mapsDirectionsUrl =
    'https://www.google.com/maps/search/A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana'

  return (
    <div className="faq-area pb-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="faq-image h-100" style={{ minHeight: '450px' }}>
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unicare Hospitals Location"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="content">
                <span className="sub">FIND US</span>
                <h2>
                  We are <b>closer than you think.</b>
                </h2>
              </div>

              <div style={{ marginTop: '30px' }}>
                <div className="accordion-item" style={{ border: 'none', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <div className="d-flex align-items-start gap-3">
                    <i className="ti ti-map-pin" style={{ fontSize: '22px', color: 'var(--mainColor)', marginTop: '2px', flexShrink: 0 }}></i>
                    <div>
                      <strong>Address</strong>
                      <p style={{ margin: 0 }}>A 201, 2nd Floor, Saanvi Antalya Homes,<br />Kokapet, Telangana</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: 'none', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <div className="d-flex align-items-start gap-3">
                    <i className="ti ti-phone" style={{ fontSize: '22px', color: 'var(--mainColor)', marginTop: '2px', flexShrink: 0 }}></i>
                    <div>
                      <strong>Phone</strong>
                      <p style={{ margin: 0 }}>
                        <a href="tel:+919090546363">+91 90905 46363</a><br />
                        <a href="tel:+919121856565">+91 91218 56565</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: 'none', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <div className="d-flex align-items-start gap-3">
                    <i className="ti ti-mail" style={{ fontSize: '22px', color: 'var(--mainColor)', marginTop: '2px', flexShrink: 0 }}></i>
                    <div>
                      <strong>Email</strong>
                      <p style={{ margin: 0 }}>
                        <a href="mailto:info@unicareglobalhospitals.com">info@unicareglobalhospitals.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: 'none', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '25px' }}>
                  <div className="d-flex align-items-start gap-3">
                    <i className="ti ti-car" style={{ fontSize: '22px', color: 'var(--mainColor)', marginTop: '2px', flexShrink: 0 }}></i>
                    <div>
                      <strong>Drive Times</strong>
                      <ul style={{ margin: '6px 0 0', paddingLeft: '18px' }}>
                        <li>Narsingi — 5–10 minutes</li>
                        <li>Financial District — 10 minutes</li>
                        <li>Gachibowli — 10–15 minutes</li>
                        <li>Manikonda — 15 minutes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="default-btn">
                  <i className="ti ti-map-2"></i>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
