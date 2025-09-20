import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS, DASHBOARD_URL } from "./config/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } 
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, formData, {
        withCredentials: true
      });
      
      // Store authentication token
      localStorage.setItem('authToken', 'cookie-auth');
      
      // Redirect to http://localhost:3000/ (dashboard)
      window.location.href = DASHBOARD_URL;
      
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors({ submit: err.response.data.message });
      } else if (err.response?.status === 401) {
        setErrors({ submit: "Invalid email or password" });
      } else {
        setErrors({ submit: "An error occurred. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <img 
            src="media/images/navbar-zerodha.svg" 
            alt="Zerodha" 
            className="login-logo"
          />
          <h1 className="login-title">Login to your account</h1>
          <p className="login-subtitle">Enter your email and password to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {errors.submit && (
            <div className="error-message global-error">
              {errors.submit}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <div className="login-links">
            <Link to="/signup" className="link">
              Open an account
            </Link>
          </div>
        </form>

        <div className="login-footer">
          <p className="footer-text">
            Don't have an account?{" "}
            <Link to="/signup" className="link primary">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;