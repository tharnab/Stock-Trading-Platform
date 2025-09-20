// API Configuration - Centralized endpoint management
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";

// Debug logging - AFTER all variables are defined
console.log('🔍 DEBUG - Environment Variables:');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('VITE_DASHBOARD_URL:', import.meta.env.VITE_DASHBOARD_URL);
console.log('API_BASE_URL:', API_BASE_URL);

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

// Dashboard URL (for redirects) - MOVE THIS BEFORE DEBUG LOGS
export const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:3000";

// Now you can safely log DASHBOARD_URL
console.log('DASHBOARD_URL:', DASHBOARD_URL);