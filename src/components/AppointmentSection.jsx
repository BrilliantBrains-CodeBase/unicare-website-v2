import { useState } from 'react'

const MAPS_EMBED =
  'https://www.google.com/maps?q=A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana&output=embed'

const MAPS_DIRECTIONS =
  'https://www.google.com/maps/search/A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana'

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', reason: '',
    physician: 'CHOOSE PHYSICIAN', time: '08:00 AM', date: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => e.preventDefault()

  return (
    <div className="book-an-appointment-area">
      <div className="container-fluid">
        <div className="row justify-content-center">

          {/* Left column — map replaces image, same .book-an-appointment-image frame */}
          <div className="col-xl-6 col-md-12 reveal">
            <div className="book-an-appointment-image" style={{ padding: 0, overflow: 'hidden' }}>
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '460px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unicare Hospitals Location"
              />
            </div>

            <div className="appointment-bottom-content">
              <div className="info">
                <div className="icon">
                  <i className="ti ti-map-pin"></i>
                </div>
                <div className="title">
                  <h5>A 201, Saanvi Antalya Homes, Kokapet</h5>
                  <span>Narsingi - 5 min</span>
                  <span>Financial District - 10 min</span>
                  <span>Gachibowli - 15 min</span>
                </div>
              </div>
              <div className="arrow-btn">
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
                  <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right column — booking form */}
          <div className="col-xl-6 col-md-12 reveal reveal-delay-1">
            <div className="book-an-appointment-content">
              <div className="content">
                <span className="sub">BOOK AN APPOINTMENT</span>
                <h2 className="title">
                  <b>Book an appointment</b> for an in-clinic consultation
                </h2>
              </div>

              <form className="appointment-form" onSubmit={handleSubmit}>
                <h2>Unicare</h2>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="appt-name" className="visually-hidden">Full Name</label>
                      <input id="appt-name" type="text" name="name" className="form-control" placeholder="NAME" value={form.name} onChange={handleChange} autoComplete="name" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="appt-email" className="visually-hidden">Email Address</label>
                      <input id="appt-email" type="email" name="email" className="form-control" placeholder="EMAIL" value={form.email} onChange={handleChange} autoComplete="email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="appt-phone" className="visually-hidden">Phone Number (required)</label>
                      <input id="appt-phone" type="tel" name="phone" inputMode="numeric" className="form-control" placeholder="PHONE NO" value={form.phone} onChange={handleChange} autoComplete="tel" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="appt-reason" className="visually-hidden">Reason of Visit</label>
                      <input id="appt-reason" type="text" name="reason" className="form-control" placeholder="REASON OF VISIT" value={form.reason} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="appt-physician" className="visually-hidden">Choose Physician</label>
                      <select id="appt-physician" name="physician" className="form-select form-control" value={form.physician} onChange={handleChange}>
                        <option value="CHOOSE PHYSICIAN">CHOOSE PHYSICIAN</option>
                        <option value="DR. A.N. VARUNA VYAS">DR. A.N. VARUNA VYAS</option>
                        <option value="DR. BHARGAVA VYAS A.N.">DR. BHARGAVA VYAS A.N.</option>
                        <option value="DR. DEEPAK THIRIVEEDI">DR. DEEPAK THIRIVEEDI</option>
                        <option value="DR. MAREDDY VEENA">DR. MAREDDY VEENA</option>
                        <option value="DR. M. NITIN RAO">DR. M. NITIN RAO</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label htmlFor="appt-time" className="visually-hidden">Preferred Time</label>
                      <select id="appt-time" name="time" className="form-select form-control" value={form.time} onChange={handleChange}>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label htmlFor="appt-date" className="visually-hidden">Preferred Date</label>
                      <input id="appt-date" type="date" name="date" className="form-control" value={form.date} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="default-btn">
                      <i className="ti ti-circle-arrow-right-filled"></i>
                      Request For An Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
