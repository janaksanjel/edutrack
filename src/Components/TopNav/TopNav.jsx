import React from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* School logo or name */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          School Management
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                <FaCog className="me-2" />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <FaUser className="me-2" />
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="/logout">
                <FaSignOutAlt className="me-2" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
