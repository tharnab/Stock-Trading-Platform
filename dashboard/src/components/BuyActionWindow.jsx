import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { API_ENDPOINTS, FRONTEND_URL } from "../config/api";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");

  // Destructure all values from context including setAuthentication
  // In your dashboard BuyActionWindow.jsx
const { closeBuyWindow, setAuthentication, isAuthenticated } = useContext(GeneralContext);

useEffect(() => {
  // Double-check authentication when component mounts
  if (!isAuthenticated) {
    const currentUrl = window.location.href;
    window.location.href = `${FRONTEND_URL}/signup?redirect=${encodeURIComponent(currentUrl)}`;
  }
}, [isAuthenticated]);

const handleBuyClick = async () => {
  if (!isAuthenticated) {
    const currentUrl = window.location.href;
    window.location.href = `${FRONTEND_URL}/signup?redirect=${encodeURIComponent(currentUrl)}`;
    return;
  }

  try {
    setError("");
    const response = await axios.post(
      API_ENDPOINTS.TRADING.NEW_ORDER,
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        model: "BUY",
      },
      { withCredentials: true }
    );

    alert(response.data);
    closeBuyWindow();

    window.location.reload();
  } catch (err) {
    if (err.response && err.response.status === 401) {
      setAuthentication(false);
      const currentUrl = window.location.href;
      window.location.href = `${FRONTEND_URL}/signup?redirect=${encodeURIComponent(currentUrl)}`;
    } else {
      setError(err.response?.data?.message || "An error occurred");
      console.error(err);
    }
  }
};

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {error && <div className="error-message">{error}</div>}
      
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
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
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;