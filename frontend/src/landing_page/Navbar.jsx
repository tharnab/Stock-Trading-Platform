import './styles/HomePage.css'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav-color shadow-nv fixed-top">
      <div className="container nav-padding">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/navbar-zerodha.svg"
            className="navbar-img"
            alt="Zerodha"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
