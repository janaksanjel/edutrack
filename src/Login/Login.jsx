import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../src/assets/logo.png";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-body d-flex justify-content-center align-items-center vh-100 position-relative">
      <div className="bubble-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="bubble-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div
        className="cantainer card p-4 border-0 rounded"
        style={{
          width: "350px",
          height: "350px",
          boxShadow: "10px 15px 15px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Smart School Logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>
        <form>
          <div className="input-group mb-3">
            <span
              className="input-group-text bg-white border-end-0"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "25px",
                color: "#666",
              }}
            >
              <i
                className="fas fa-user text-muted"
                style={{ fontSize: "18px" }}
              ></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Username"
              style={{
                borderRadius: "25px",
                border: "2px solid #ddd",
                paddingLeft: "20px",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#28a745";
                e.target.style.boxShadow = "0 0 5px rgba(17, 0, 255, 0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text bg-white border-end-0"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "25px",
                color: "#666",
              }}
            >
              <i
                className="fas fa-lock text-muted"
                style={{ fontSize: "18px" }}
              ></i>
            </span>
            <input
              type="password"
              className="form-control border-start-0"
              placeholder="Password"
              style={{
                borderRadius: "25px",
                border: "2px solid #ddd",
                paddingLeft: "20px",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#28a745";
                e.target.style.boxShadow = "0 0 5px rgba(17, 0, 255, 0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              borderRadius: "25px",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "10px 20px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff"; // Blue on hover
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#28a745"; // Original green color
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
