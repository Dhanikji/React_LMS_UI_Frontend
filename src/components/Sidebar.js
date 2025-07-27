// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Canvas</h2>
      <nav>
        <ul>
          <li><Link to="/">📂 Dashboard</Link></li>
          <li><Link to="/">📚 Courses</Link></li>
          <li><Link to="/">📅 Calendar</Link></li>
          <li><Link to="/">📬 Inbox</Link></li>
          <li><Link to="/">❓ Help</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;