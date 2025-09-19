function Brokerage() {
  return (
    <div className="container text-center mt-5 pp-con-mar">
      <div className="pricing-padding">
        <div className="row">
          <div className="col padding-pp">
            <img
              className="pp-image"
              src="/media/images/home-pricing0.svg"
              alt="pricing 0"
            />
            <h2 className="pp-h2 mb-3">Free equity delivery</h2>
            <p className="pp-br-para">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col padding-pp">
            <img
              className="pp-image"
              src="/media/images/home-pricing20.svg"
              alt="pricing 0"
            />
            <h2 className="pp-h2 mb-3">Intraday and F&O trades</h2>
            <p className="pp-br-para">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col padding-pp">
            <img
              className="pp-image"
              src="/media/images/home-pricing0.svg"
              alt="pricing 0"
            />
            <h2 className="pp-h2 mb-3">Free direct MF</h2>
            <p className="pp-br-para">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
