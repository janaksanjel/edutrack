import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing pages and components
import Login from "./Login/Login";
import DashBord from "./Page/MainDashBoard/DashBord/DashBord";

// Importing Layout components (SideNav and TopNav)
import SideNav from "./Components/SideNav/SideNav"; // Adjust the path if needed
import TopNav from "./Components/TopNav/TopNav"; // Adjust the path if needed

// Layout for pages that require the sidebar and top nav
const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="d-flex">
        <SideNav />
        <div className="flex-grow-1 p-3">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Login route without sidebar or top nav */}
      <Route path="/" element={<Login />} />

      {/* Dashboard route with layout containing sidebar and top nav */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashBord />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
