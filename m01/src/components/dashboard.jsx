import React from 'react';
import '../styles/Dashboard.css'; // Import Dashboard CSS


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-section">
        <h3>Total Leaves</h3>
        <ul>
      
        </ul>
      </div>
      <div className="dashboard-section">
        <h3>Attendance</h3>
        <ul>
          {/* List of attendance items */}
        </ul>
      </div>
      <div className="dashboard-section">
        <h3>Employees</h3>
        <ul>
          {/* List of employees */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
