import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    {
      title: "Account Opening",
      icon: <i className="fa fa-plus-circle" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>Resident Individual</li>
            <li>Minor</li>
            <li>Non resident Indian (NRI)</li>
            <li>Company, Partnership, HUF and LLP</li>
            <li>Glossary</li>
          </ul>
        </div>
      )
    },
    {
      title: "Your Zerodha Account",
      icon: <i className="fa fa-user" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>Your Profile</li>
            <li>Account modification</li>
            <li>Client Master Report (CMR) and Depository Participant (DP)</li>
            <li>Nomitation</li>
            <li>Transfer and Conversion of securities</li>
          </ul>
        </div>
      )
    },
    {
      title: "Kite",
      icon: <i className="fa fa-caret-up" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>IPO</li>
            <li>Trading FAQs</li>
            <li>Margin Trading Facility (MTF) and Margins</li>
            <li>Charts and orders</li>
            <li>Alerts and Nudges</li>
            <li>General</li>
          </ul>
        </div>
      )
    },
    {
      title: "Funds",
      icon: <i className="fa fa-inr" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>Add money</li>
            <li>Withdraw money</li>
            <li>Add bank accounts</li>
            <li>eMandates</li>
          </ul>
        </div>
      )
    },
    {
      title: "Console",
      icon: <i className="fa fa-gamepad" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>Portfolio</li>
            <li>Corporate actions</li>
            <li>Funds statement</li>
            <li>Reports</li>
            <li>Profile</li>
            <li>Segments</li>
          </ul>
        </div>
      )
    },
    {
      title: "Coin",
      icon: <i class="fa fa-circle-o-notch" aria-hidden="true"></i>,
      dropdown: (
        <div className="dropdown-content">
          <ul>
            <li>Track Account Opening</li>
            <li>Track segment activation</li>
            <li>Intradey margins</li>
            <li>Kite user manual</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="account-container">
      
      
      <div className="navigation-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-section">
            <div 
              className={`menu-item ${activeDropdown === index ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f8ff';
              }}
              onMouseLeave={(e) => {
                if (activeDropdown !== index) {
                  e.currentTarget.style.backgroundColor = '#fff';
                }
              }}
            >
              <span className="item-icon">{item.icon}</span>
              <span className="item-title">{item.title}</span>
              <span className="dropdown-arrow">
                {activeDropdown === index ? '▲' : '▼'}
              </span>
            </div>
            
            {activeDropdown === index && (
              <div className="dropdown-section">
                {item.dropdown}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;