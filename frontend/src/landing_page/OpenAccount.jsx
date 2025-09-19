import './styles/HomePage.css';
import { useNavigate, useLocation } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/signup") {
      // Already on signup page → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to signup page
      navigate("/signup");
    }
  };

  return ( 
    <div className="container p-5 mt-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-3 mb-4">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button 
          className="button p-2 fs-5 mt-3"
          onClick={handleClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
