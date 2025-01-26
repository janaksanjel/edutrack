import React from "react";
import { FaUsers, FaChalkboardTeacher, FaBook } from "react-icons/fa"; // Importing icons for better UI

const DashBord = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to the Dashboard</h1>
      <p className="text-center mb-4">Here you can view the overview of the school management system.</p>

      {/* Example Statistics Cards */}
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Total Students</span>
              <FaUsers size={30} />
            </div>
            <div className="card-body">
              <h5 className="card-title display-4">1500</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white mb-3 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Total Teachers</span>
              <FaChalkboardTeacher size={30} />
            </div>
            <div className="card-body">
              <h5 className="card-title display-4">50</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-white mb-3 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Total Courses</span>
              <FaBook size={30} />
            </div>
            <div className="card-body">
              <h5 className="card-title display-4">20</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Example Table for Students */}
      <div className="mt-5">
        <h3 className="mb-3">Recent Students</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover shadow-sm rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>16</td>
                <td>10th Grade</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>15</td>
                <td>9th Grade</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Michael Johnson</td>
                <td>17</td>
                <td>11th Grade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBord;
