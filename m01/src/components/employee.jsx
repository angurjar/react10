import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    dateOfJoining: ''
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await employeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeeService.addEmployee(newEmployee);
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newEmployee.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={newEmployee.department} onChange={handleChange} required />
        <input type="date" name="dateOfJoining" placeholder="Date of Joining" value={newEmployee.dateOfJoining} onChange={handleChange} required />
        <button type="submit">Add Employee</button>
      </form>
      <h3>Employee List</h3>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>{employee.name} - {employee.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
