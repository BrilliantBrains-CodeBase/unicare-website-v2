import { useState } from 'react'
import faqImg from '../assets/images/faq.jpg'

const faqs = [
  {
    id: 'faq1',
    q: 'Which is the best multispecialty hospital in Kokapet?',
    a: 'Unicare Hospitals is a doctor-founded multispecialty hospital in Kokapet, Hyderabad, offering maternity, pediatrics, general and laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics in one location, with founder doctors leading clinical care.',
  },
  {
    id: 'faq2',
    q: 'Do Unicare Hospitals accept health insurance?',
    a: 'Yes. Unicare Hospitals works with leading health insurance providers and TPAs. The full list of empanelled insurers is available on our website and at the front desk, and our team assists with cashless and reimbursement processes.',
  },
  {
    id: 'faq3',
    q: 'How do I book an appointment at Unicare Hospitals Kokapet?',
    a: 'You can book an appointment by calling +91 90905 46363, messaging us on WhatsApp, or using the Book an Appointment form on our website. Our team confirms your slot the same day.',
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq1')

  return (
    <div className="faq-area pb-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 reveal">
            <div className="faq-image h-100">
              <img src={faqImg} className="h-100 object-fit-cover" alt="Unicare Hospitals FAQ" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 reveal reveal-delay-1">
            <div className="faq-accordion">
              <div className="content">
                <span className="sub">FAQ</span>
                <h2>
                  We Are Here <b>To Answer Your Questions</b>
                </h2>
              </div>

              <div className="accordion" id="FaqAccordionId">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <button
                      className={`accordion-button${openId === faq.id ? '' : ' collapsed'}`}
                      type="button"
                      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    >
                      {faq.q}
                    </button>
                    <div className={`accordion-collapse collapse${openId === faq.id ? ' show' : ''}`}>
                      <div className="accordion-body">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
