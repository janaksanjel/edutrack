import React from "react";
import {
  FaHome,
  FaUserAlt,
  FaRegMoneyBillAlt,
  FaChalkboardTeacher,
  FaTree,
  FaVideo,
  FaVideoSlash,
  FaClipboardList,
  FaMoneyBillAlt,
  FaFileAlt,
  FaBookOpen,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="d-flex" style={{ height: "100%" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "250px",
          borderRight: "2px solid #444",
          transition: "width 0.3s ease",
        }}
      >
        {/* Current Session Section */}
        <div className="mb-4">
          <h6 className="text-white">Current Session: 2024-25</h6>
        </div>

        {/* Quick Links Section */}
        <div className="mt-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="/front-office">
                <FaHome className="mr-2" /> Front Office
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/student-info">
                <FaUserAlt className="mr-2" /> Student Information
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/fees-collection">
                <FaRegMoneyBillAlt className="mr-2" /> Fees Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/online-courses">
                <FaChalkboardTeacher className="mr-2" /> Online Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/multi-branch">
                <FaTree className="mr-2" /> Multi Branch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/gmeet-live">
                <FaVideo className="mr-2" /> Gmeet Live Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/zoom-live">
                <FaVideoSlash className="mr-2" /> Zoom Live Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/behaviour-records">
                <FaClipboardList className="mr-2" /> Behaviour Records
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/income">
                <FaMoneyBillAlt className="mr-2" /> Income
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/expenses">
                <FaFileAlt className="mr-2" /> Expenses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/cbse-exam">
                <FaBookOpen className="mr-2" /> CBSE Examination
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/examinations">
                <FaClipboardList className="mr-2" /> Examinations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
