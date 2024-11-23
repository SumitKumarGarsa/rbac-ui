import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the RBAC Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-item">
          <h3>Total Users</h3>
          <p>25</p>
        </div>
        <div className="stat-item">
          <h3>Total Roles</h3>
          <p>5</p>
        </div>
        <div className="stat-item">
          <h3>Active Permissions</h3>
          <p>15</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
