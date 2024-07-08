import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';
import '../styles/profile.css'; // Assuming you have a CSS file for styling

const Profile = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await employeeService.getEmployees();
        setEmployeeData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!employeeData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page">
      <div className="profile-card">
        <h1>Manager: {employeeData.managerName}</h1>
        <h1>Assigned Project: {employeeData.projectName}</h1>
        <h1>Employee ID: {employeeData.employeeId}</h1>
        <h1>Role: {employeeData.role}</h1>
        <h1>Date of Join: {employeeData.dateOfJoin}</h1>
        <h1>Employee Type: {employeeData.type}</h1>
        <h1>Address: {employeeData.address}</h1>
        <button type="submit">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
