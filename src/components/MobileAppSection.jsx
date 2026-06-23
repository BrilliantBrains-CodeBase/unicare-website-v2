import mobileAppImg from '../assets/images/mobile-app.jpg'
import userIcon from '../assets/images/user.png'

export default function MobileAppSection() {
  return (
    <div className="mobile-app-area pb-100">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-7 col-md-12 reveal">
            <div className="mobile-app-image">
              <img src={mobileAppImg} alt="image" />
            </div>
          </div>
          <div className="col-xl-5 col-md-12 reveal reveal-delay-1">
            <div className="mobile-app-content">
              <span className="sub">DOWNLOAD APP</span>
              <h2>
                Download Our Mobile App For The <b>Best Experience</b>
              </h2>
              <div className="info">
                <img src={userIcon} alt="user" />
                <div className="title">
                  <h5>All your favorite doctors</h5>
                  <span>are available in the app</span>
                </div>
              </div>
              <ul className="app-btn">
                <li>
                  <a href="#" target="_blank">
                    <div className="icon">
                      <i className="ti ti-brand-google-play"></i>
                    </div>
                  </a>
                  <div className="title">
                    <a href="#" target="_blank">
                      <span>GET IT ON</span>
                      <h5>Google Play</h5>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <div className="icon">
                      <i className="ti ti-brand-apple"></i>
                    </div>
                  </a>
                  <div className="title">
                    <a href="#" target="_blank">
                      <span>GET IT ON</span>
                      <h5>Apple Store</h5>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
