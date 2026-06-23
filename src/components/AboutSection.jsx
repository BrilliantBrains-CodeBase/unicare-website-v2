import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/about3.jpg'

export default function AboutSection() {
  return (
    <div className="about-style-area pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="about-style-content">
              <span className="sub">ABOUT HOSPA</span>
              <h2>
                We Provide Finnest Patient's <b>Care &amp; Amenities</b>
              </h2>
              <p>
                Embrace a world of comprehensive healthcare where your well-being
                takes center stage. At Meca, we're dedicated to providing you with
                personalized and compassionate medical services.
              </p>
              <a href="#" className="default-btn">
                <i className="ti ti-circle-arrow-right-filled"></i>
                More About Us
              </a>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-style-image">
                  <img src={about2} alt="image" />
                  <div className="counter-wrap">
                    <div className="item">
                      <div className="d-flex align-items-center justify-content-center">
                        <h3 className="counter">5</h3>
                        <h3 className="sub">K+</h3>
                      </div>
                      <p>
                        PATIENT'S <span>REVIEWS</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="about-style-rght">
                  <img src={about3} alt="image2" />
                  <h3>Why Us</h3>
                  <ul className="list">
                    {[
                      'Seamless Care',
                      'Warm and Welcoming Environment',
                      'Comprehensive Care',
                      'Expert Doctors',
                    ].map((item) => (
                      <li key={item}>
                        <i className="ti ti-checks"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
