// API Configuration - Centralized endpoint management
export const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

// Dashboard URL (for redirects)
export const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:5173";

// Debug logging
console.log('🔍 DEBUG - Environment Variables:');
console.log('REACT_APP_API_URL:', process.env.REACT_APP_BACKEND_URL);
console.log('REACT_APP_DASHBOARD_URL:', process.env.REACT_APP_FRONTEND_URL);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('DASHBOARD_URL:', FRONTEND_URL);

export const API_ENDPOINTS = {
  // Authentication endpoints
  AUTH: {
    LOGIN: `${API_BASE_URL}/login`,
    SIGNUP: `${API_BASE_URL}/signup`,
    LOGOUT: `${API_BASE_URL}/logout`,
    CHECK_AUTH: `${API_BASE_URL}/check-auth`,
    PROFILE: `${API_BASE_URL}/user`,
    TOKEN: `${API_BASE_URL}/token`
  },
  
  // Stock data endpoints
  STOCKS: {
    ALL_HOLDINGS: `${API_BASE_URL}/allHoldings`,
    ALL_POSITIONS: `${API_BASE_URL}/allPositions`
  },
  
  // Trading endpoints
  TRADING: {
    NEW_ORDER: `${API_BASE_URL}/newOrder`,
    MY_ORDERS: `${API_BASE_URL}/myOrders`
  },
  
  // User endpoints
  USER: {
    PROFILE: `${API_BASE_URL}/user`,
    GET_USER: `${API_BASE_URL}/user`
  }
};