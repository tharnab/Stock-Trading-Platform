import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css"; // Create this CSS file

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState(0);

  const { closeSellWindow, setAuthentication, isAuthenticated, refreshOrders } = useContext(GeneralContext);

  useEffect(() => {
    if (!isAuthenticated) {
      const currentUrl = window.location.href;
      window.location.href = `http://localhost:5173/signup?redirect=${encodeURIComponent(currentUrl)}`;
      return;
    }
    
    // For now, set a default available quantity
    // You'll need to implement an API endpoint to get the actual available quantity
    setAvailableQuantity(10); // Example value
  }, [isAuthenticated, uid]);

  const handleSellClick = async () => {
    if (!isAuthenticated) {
      const currentUrl = window.location.href;
      window.location.href = `http://localhost:5173/signup?redirect=${encodeURIComponent(currentUrl)}`;
      return;
    }

    if (stockQuantity > availableQuantity) {
      setError(`You only have ${availableQuantity} shares available to sell`);
      return;
    }

    try {
      setError("");
      const response = await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          model: "SELL", // Changed to SELL
        },
        { withCredentials: true }
      );

      alert("Sale successful: " + response.data);
      closeSellWindow();
      
      // Refresh orders if the function exists
      if (refreshOrders && typeof refreshOrders === 'function') {
        refreshOrders();
      }
      
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setAuthentication(false);
        const currentUrl = window.location.href;
        window.location.href = `http://localhost:5173/signup?redirect=${encodeURIComponent(currentUrl)}`;
      } else {
        setError(err.response?.data?.message || "An error occurred");
        console.error(err);
      }
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      {error && <div className="error-message">{error}</div>}
      
      <div className="available-stocks">
        <p>Available to sell: <strong>{availableQuantity}</strong> shares</p>
      </div>
      
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={availableQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Estimated credit: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;