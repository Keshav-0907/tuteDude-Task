import React from "react";
import "./Header.css";
import { useState } from "react";

const SecondreyHeader = [
    {
        name: "Overview",
        link: "/Overview",
    },
    {
        name: "Curriculum",
        link: "/Curriculum",
    },
    {
        name: "Refund",
        link: "/Refund",
    },
    {
        name: "Testimonials",
        link: "/Testimonials",
    },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState("Overview"); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="header-main">
      <div className="primary-header">
        <div className="header-logo">Logo</div>

        <div className="header-links">
          <div className="login-link">Login</div>
          <div>
            <div className="sign-up-btn">Sign Up</div>
          </div>
        </div>
      </div>

      <div className="secondry-header">
        {SecondreyHeader.map((item, index) => (
          <div
            key={index}
            className={`secondry-header-link ${activeLink === item.link ? "active" : ""}`}
            onClick={() => handleLinkClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
