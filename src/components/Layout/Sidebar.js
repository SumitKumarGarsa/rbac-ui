import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/" className="sidebar-link" activeClassName="active-link">
        Dashboard
      </NavLink>
      <NavLink
        to="/users"
        className="sidebar-link"
        activeClassName="active-link"
      >
        Users
      </NavLink>
      <NavLink
        to="/roles"
        className="sidebar-link"
        activeClassName="active-link"
      >
        Roles
      </NavLink>
    </nav>
  );
};

export default Sidebar;
