import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className="container p-4 mt-5">
      <div className="more-pading">
        <div className="row">
          <div className="col-6">
            <img src="/media/images/home-education.svg" alt="home-education" />
          </div>

          <div className="col-6 p-5">
            <h1 className="fs-3 mb-4">Free and open market education</h1>

            <p className="mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <Link className="stats-link" to="/tobebuild">
              Varsity{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </Link>

            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <Link className="stats-link" to="/tobebuild">
              TradingQ&A{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
