import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext"; // ← IMPORT CONTEXT
import { API_ENDPOINTS } from "../config/api";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // GET refreshTrigger from context
  const { refreshTrigger } = useContext(GeneralContext);

  // Fetch orders when component mounts OR when refreshTrigger changes
  useEffect(() => {
    fetchOrders();
  }, [refreshTrigger]); // ← ADD refreshTrigger as dependency

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.TRADING.MY_ORDERS, {
        withCredentials: true
      });
      setOrders(response.data);
      setError("");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Please login to view your orders");
      } else {
        setError("Failed to fetch orders");
        console.error("Orders fetch error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (loading) {
    return (
      <div className="orders">
        <div className="loading">
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders">
        <div className="error">
          <p>{error}</p>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        // Show this when no orders
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        // Show this when orders exist
        <div className="orders-list">
          <h2>Your Orders ({orders.length})</h2>
          <div className="orders-table">
            <div className="table-header">
              <span>Stock</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Type</span>
              <span>Date</span>
            </div>
            {orders.map((order) => (
              <div key={order._id} className="order-item">
                <span className="stock-name">{order.name}</span>
                <span className="quantity">{order.qty}</span>
                <span className="price">₹{order.price.toFixed(2)}</span>
                <span className={`order-type-${order.model.toLowerCase()}`}>
                  {order.model}
                </span>
                <span className="order-date">{formatDate(order.createdAt)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;