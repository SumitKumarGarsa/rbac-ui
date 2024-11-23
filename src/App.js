import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar"; // Ensure Navbar.js exists
import Sidebar from "./components/Layout/Sidebar"; // Ensure Sidebar.js exists
import Dashboard from "./pages/Dashboard"; // Ensure Dashboard.js exists
import Users from "./pages/Users"; // Ensure Users.js exists
import Roles from "./pages/Roles"; // Ensure Roles.js exists
import Modal from "./ui/Modal/Modal"; // From the ui folder
import Button from "./ui/Button/Button"; // From the ui folder
import "./styles/App.css"; // Ensure App.css exists in styles folder

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* Example usage of UI components */}
      <div className="demo-ui">
        {/* <h2>UI Component Demo</h2>
        <Button
          label="Click Me"
          onClick={() => alert("Button Clicked!")}
          variant="primary"
        />
        <Modal title="Demo Modal" onClose={() => console.log("Modal Closed")}>
          <p>This is a reusable modal component.</p>
        </Modal> */}
      </div>
    </Router>
  );
}

export default App;
