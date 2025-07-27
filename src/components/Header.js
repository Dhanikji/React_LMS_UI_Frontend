// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="header">
      <h2 className="header-title">Welcome, Sachin Singh Dhanik</h2>
      <p className="header-date">{today}</p>
    </div>
  );
};

export default Header;