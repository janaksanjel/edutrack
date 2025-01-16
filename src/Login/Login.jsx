import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4"
        style={{ width: "400px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-center mb-4">
          <img
            src="/logo.png"
            alt="Smart School Logo"
            style={{ width: "100px" }}
          />
          <h3 className="mt-3">Admin Login</h3>
        </div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign In
          </button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary btn-sm">Super Admin</button>
          <button className="btn btn-info btn-sm">Admin</button>
          <button className="btn btn-secondary btn-sm">Teacher</button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button className="btn btn-dark btn-sm">Accountant</button>
          <button className="btn btn-danger btn-sm">Receptionist</button>
          <button className="btn btn-success btn-sm">Librarian</button>
        </div>

        <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
          *Note: Select Class 4 and Section A for demo testing.
        </p>

        <div className="d-flex justify-content-between mt-2">
          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
          <div>
            <a href="#" className="text-decoration-none me-3">
              Front Site
            </a>
            <a href="#" className="text-decoration-none">
              User Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
