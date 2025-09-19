function Investment() {
  return (
    <div className="container sign-in-cont mb-5">
      <div className="sign-in-padding">
        <div className="row text-center">
          <h2 className="fs-3">
            Investment options with Zerodha demat account
          </h2>
        </div>
        <div className="row mt-5">
          {/* Left Column */}
          <div className="col-md-6 mt-4 ">
            <div className="d-flex align-items-start mb-5">
              <img
                src="/media/images/in-1.svg"
                alt="stocks"
                className="me-3 ms-2"
              />
              <div>
                <h3 className="fs-4">Stocks</h3>
                <p>
                  Invest in all exchange-listed <br /> securities
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <img
                src="/media/images/in-3.svg"
                alt="ipo"
                className="me-3 ms-2"
              />
              <div>
                <h3 className="fs-4">IPO</h3>
                <p>
                  Apply to the latest IPOs instantly <br /> via UPI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="d-flex align-items-start mb-5 mt-4">
              <img
                src="/media/images/in-2.svg"
                alt="mutual funds"
                className=" ms-5 me-2"
              />
              <div>
                <h3 className="fs-4">Mutual funds</h3>
                <p>
                  Invest in commission-free direct <br /> mutual funds
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <img
                src="/media/images/in-4.svg"
                alt="futures"
                className="ms-5 me-4"
              />
              <div>
                <h3 className="fs-4">Futures & options</h3>
                <p>
                  Hedge and mitigate market risk <br /> through simplified F&O
                  trading
                </p>
              </div>
            </div>
          </div>

          <button className="p-2 fs-5 in-button mt-4 mb-5">Explore Investment</button>
        </div>
      </div>
    </div>
  );
}

export default Investment;
