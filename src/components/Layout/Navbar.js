import React from "react";
import "./Navbar.css";
import { FaUserShield } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <FaUserShield size={24} />
        <h1>RBAC Dashboard</h1>
      </div>
    </header>
  );
};

export default Navbar;
