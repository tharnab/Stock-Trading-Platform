function Pricing() {
  return (
    <div className="container p-4 mt-5 mb-5">
      <div className="more-padding p-btm ">
        <div className="row px-3">
          {/* left part */}
          <div className="col-md-5">
            <h1 className="fs-3 mb-4">Unbeatable pricing</h1>

            <p>
              We pioneered the concept of discount broking and price <br />
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a href="#" className="stats-link">
              See pricing{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* <div className="col-1"></div> */}

          {/* right part */}
          <div className="col-md-7">
            <div className="row pt-5">
              <div className="col-4 pricing-img">
                <img
                  src="/media/images/home-pricing0.svg"
                  className="stats-img"
                  alt="pricing 0 image"
                />
                <p className="stats-img-p text-muted">
                  Free account
                  <br /> opening
                </p>
              </div>
              <div className="col-4 pricing-img">
                <img
                  src="/media/images/home-pricing0.svg"
                  className="stats-img"
                  alt="pricing 0 image"
                />
                <p className="stats-img-p text-muted l">
                  Free equity delivery
                  and direct mutual funds
                </p>
              </div>
              <div className="col-4 pricing-img">
                <img
                  src="/media/images/home-pricing20.svg"
                  className="stats-img"
                  alt="pricing 20 image"
                />
                <p className="stats-img-p text-muted twenty">
                  Intraday and <br />
                  F&O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
