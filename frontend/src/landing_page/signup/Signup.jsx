// import "../styles/Signup.css";
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { API_ENDPOINTS, DASHBOARD_URL } from "../../config/api";


// function Signup() {
//   const [formData, setFormData ] = useState({ name: "", email: "", password: ""});
//   const [ error, setError ] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   }

//   // Add this function to your Signup component
//   // const getTokenForDashboard = async () => {
//   //   try {
//   //     const response = await axios.post(API_ENDPOINTS.AUTH.TOKEN, {}, {
//   //       withCredentials: true
//   //     });
      
//   //     // Store this token for the dashboard to use
//   //     localStorage.setItem('authToken', response.data.token);
      
//   //     // Redirect to dashboard
//   //     window.location.href = DASHBOARD_URL;
//   //   } catch (err) {
//   //     console.error('Failed to get token for dashboard:', err);
//   //     setError('Failed to authenticate with dashboard');
//   //   }
//   // };
// if(res.status === 201 ) {
//   window.location.href = DASHBOARD_URL;
// }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post(API_ENDPOINTS.AUTH.SIGNUP, formData, {
//         withCredentials: true, //allow cookie storage
//       })

//       if(res.status === 201 ) {
//         // Call the function to get token and redirect to dashboard
//         await getTokenForDashboard();
//       }

//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   }

import "../styles/Signup.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { API_ENDPOINTS, DASHBOARD_URL } from "../../config/api";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(API_ENDPOINTS.AUTH.SIGNUP, formData, {
        withCredentials: true,
      });

      if (res.status === 201) {
        // ✅ FIXED: Direct redirect without token exchange
        window.location.href = DASHBOARD_URL;
      }

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  }


  return (
    <div className="containe sign-con mb-5">
      <div className="sing-padding">
        <div className="row text-center mb-5">
          <h1 className="fs-2 mb-3">
            Open a free demat and trading account online
          </h1>
          <p className="fs-5 mb-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
        <div className="row">
          <div className="col-7 pe-4">
            <img
              className=""
              src="/media/images/signup-image.svg"
              alt="signup image"
            />
          </div>
          <div className="col-5 p-3 pe-4 mt-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-normal ">
                  Name
                </label>
                <input type="text" className="form-control" id="name" value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-normal ">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" value={formData.email}
                  onChange={handleChange}
                  required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-normal ">
                  Password
                </label>
                <input type="password" className="form-control" id="password" value={formData.password}
                  onChange={handleChange}
                  required />
              </div>
                
                {error && <p style={{ color: "red" }}>{error}</p>}

              <button type="submit" className="sign-button p-2 ">
                Signup
              </button>
            </form>
            <div style={{paddingTop: '2rem'}}>
<Link className="a-link" to="/login">Are you a existing user?Login</Link>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
