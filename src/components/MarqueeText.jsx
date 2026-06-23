export default function MarqueeText() {
  const text = 'We Are Your Trusted Friend'

  return (
    <div className="animation-view-area ptb-100">
      <div className="container-fluid">
        <div className="animation-view-content">
          <h1>
            <div className="marquee-track">
              <p className="animation-text">
                {text} <sup>*</sup> {text} <sup>*</sup> {text} <sup>*</sup> {text}
              </p>
            </div>
          </h1>
        </div>
      </div>
    </div>
  )
}
