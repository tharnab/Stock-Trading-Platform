import { Link } from 'react-router-dom'
function Universe() {
  return (
    <div className="container un-con text-center">
      <div className="products-padding-uni">
        <div className="row">
          <h2 className="un-head">The Zerodha Universe</h2>
          <p className="ls-pd mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row mt-4">
          <div className="col">
            <img
              className="fundhouse"
              src="/media/images/pl-zerodhafundhouse.png"
              alt="Fundhouse image"
            />
            <br />
            <p className="uni-para">
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col">
            <img
              className="sensibull"
              src="/media/images/pl-sensibull-logo.svg"
              alt="Sensibull image"
            />
            <br />
            <p className="uni-para">
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col">
            <img
              className="tijori"
              src="/media/images/pl-tijori.svg"
              alt="Tijori image"
            />
            <br />
            <p className="uni-para">
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col">
            <img
              className="streak"
              src="/media/images/pl-streak-logo.png"
              alt="Streak image"
            />
            <p className="uni-para">
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div className="col">
            <img
              className="smallcase"
              src="/media/images/pl-smallcase-logo.png"
              alt="Smallcase image"
            />
            <p className="uni-para">
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col">
            <img
              className="ditto"
              src="/media/images/pl-ditto-logo.png"
              alt="Tijori image"
            />
            <p className="uni-para">
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row text-center mb-4">
          <Link to="/signup">
            <button className="p-2 fs-5 button mt-4 mb-5">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
