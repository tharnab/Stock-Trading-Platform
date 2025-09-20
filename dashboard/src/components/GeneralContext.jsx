import React, { useState, useEffect } from "react";
import axios from 'axios'
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // Import SellActionWindow
import { API_ENDPOINTS, FRONTEND_URL } from "../config/api";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {}, // Add sell function
  closeBuyWindow: () => {},
  closeSellWindow: () => {}, // Add close sell function
  isAuthenticated: false,
  setAuthentication: (status) => {},
  refreshOrders: () => {} // Add refresh function
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // Add sell window state
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0); // Add refresh trigger

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      if (token) {
        const response = await axios.get(API_ENDPOINTS.AUTH.CHECK_AUTH, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setIsAuthenticated(response.data.authenticated);
      } else {
        const response = await axios.get(API_ENDPOINTS.AUTH.CHECK_AUTH, {
          withCredentials: true
        });
        setIsAuthenticated(response.data.authenticated);
        
        if (response.data.authenticated) {
          localStorage.setItem('authToken', 'cookie-auth');
        }
      }
    } catch (err) {
      setIsAuthenticated(false);
    }
  };

  const handleOpenBuyWindow = (uid) => {
    if (!isAuthenticated) {
      const currentUrl = window.location.href;
      window.location.href = `${FRONTEND_URL}/signup?redirect=${encodeURIComponent(currentUrl)}`;
      return;
    }
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // Add this function for sell window
  const handleOpenSellWindow = (uid) => {
    if (!isAuthenticated) {
      const currentUrl = window.location.href;
      window.location.href = `${FRONTEND_URL}/signup?redirect=${encodeURIComponent(currentUrl)}`;
      return;
    }
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // Add this function for closing sell window
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // Add this function for refreshing orders
  const handleRefreshOrders = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow, // Add to context
        closeBuyWindow: handleCloseBuyWindow,
        closeSellWindow: handleCloseSellWindow, // Add to context
        isAuthenticated,
        setAuthentication: setIsAuthenticated,
        refreshOrders: handleRefreshOrders, // Add to context
        refreshTrigger // Add to context
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} {/* Add SellActionWindow */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;