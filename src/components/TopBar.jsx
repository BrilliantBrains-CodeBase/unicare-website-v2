export default function TopBar() {
  return (
    <div className="elementor-section elementor-top-section top-header-area">
      <div className="elementor-container elementor-column-gap-no">
        <section className="elementor-section elementor-inner-section elementor-section-full_width">
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-column elementor-col-50 top-header-info">
              <div className="elementor-widget-wrap elementor-element-populated">
                <p className="p">
                  Call Unicare Hospitals:&nbsp;
                  <a className="alink" href="tel:+919090546363">+91 90905 46363</a>
                  &nbsp;/&nbsp;
                  <a className="alink" href="tel:+919121856565">+91 91218 56565</a>
                </p>
              </div>
            </div>
            <div className="elementor-column elementor-col-50">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="hospa-button top-header-btn text-end">
                  <a href="#">
                    <i className="ti ti-calendar-plus"></i>
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
