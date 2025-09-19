function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="more-padding p-btm">
        <div className="row align-items-center px-3">
          {/* Left Column */}
          <div className="col-lg-5 col-md-6 p-4">
            <h1 className="fs-3 mb-5">Trust with confidence</h1>

            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted stats-p">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted stats-p">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted stats-p">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-5">Do better with money</h2>
            <p className="text-muted stats-p">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          <div className="col-1"></div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-6 p-3 text-center">
            <img
              src="/media/images/stats-image.png"
              className="img-fluid"
              alt="stats"
            />
            <div className="text-center mt-4">
              <a href="#" className="mx-4 stats-link">
                Explore our products{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#" className="mx-4 stats-link">
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="row mt-1">
          <div className="col text-center">
            <img
              src="/media/images/stats-press-logos.png"
              className="img-fluid"
              style={{ maxWidth: "60%" }}
              alt="press logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
