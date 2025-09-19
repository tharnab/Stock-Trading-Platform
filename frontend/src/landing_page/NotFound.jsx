import { Link } from "react-router-dom";
import "./styles/HomePage.css";
function NotFound() {
  return (
    <div className="container nf-c">
      <div className="more-padding">
        <div className="row align-items-center">
          <div className="col nf-f">
            <h4 className="fs-5 mb-4">404</h4>
            <h1 className="fs-3 mb-3">Kiaan couldn’t find that page</h1>
            <p className="fs-5">
              We couldn’t find the page you were looking for.
              <br />
              Visit{" "}
              <Link to="/" className="stats-link">
                Zerodha’s home page
              </Link>
            </p>
          </div>
          <div className="col">
            <img src="media/images/kiaan404.jpg" alt="kiian" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
