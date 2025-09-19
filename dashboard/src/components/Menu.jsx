import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Menu.css"; // Create this CSS file for styling

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [scrollingName, setScrollingName] = useState("");

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropDownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      localStorage.removeItem('authToken');
      window.location.href = "/";
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const config = token ? { 
          headers: { 'Authorization': `Bearer ${token}` },
          withCredentials: true 
        } : { withCredentials: true };

        const response = await axios.get("http://localhost:3002/user", config);
        setUserData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  // Handle name scrolling animation for long names
  useEffect(() => {
    if (!userData?.name) return;

    if (userData.name.length > 10) {
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        setScrollingName(userData.name.substring(scrollPosition));
        scrollPosition = (scrollPosition + 1) % userData.name.length;
      }, 300);

      return () => clearInterval(scrollInterval);
    } else {
      setScrollingName(userData.name);
    }
  }, [userData]);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return "GU";
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Get first name for display
  const getFirstName = (name) => {
    if (!name) return "User";
    return name.split(' ')[0];
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Position
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-container">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{getInitials(userData?.name)}</div>
            <div className="username-container">
              <p className="username">
                {userData ? scrollingName : "Loading..."}
              </p>
            </div>
          </div>
          
          {isProfileDropDownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <div className="dropdown-avatar">{getInitials(userData?.name)}</div>
                <div className="dropdown-user-info">
                  <p className="dropdown-fullname">{userData?.name}</p>
                  <p className="dropdown-email">{userData?.email}</p>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <button className="logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;