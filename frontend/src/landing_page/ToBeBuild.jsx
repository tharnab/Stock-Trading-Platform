import { Link } from "react-router-dom";
import "./styles/HomePage.css";
function ToBeBuild() {
  return (
    <div className="container build-con">
      <div className="row">
        <h3 className="fs-3">To be build in the near future</h3>
        <p className="mt-3">
          Redirect to{" "}
          <Link to="/" className="stats-link">
            Home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ToBeBuild;
