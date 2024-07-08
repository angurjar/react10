import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';
import '../styles/employee.css';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    fax: '',
    jobPosition: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await employeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      setError('Error fetching employees');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await employeeService.addEmployee(newEmployee);
      fetchEmployees();
      setNewEmployee({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        mobile: '',
        fax: '',
        jobPosition: ''
      });
    } catch (error) {
      setError('Error adding employee');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="employee-container">
        <h2>Employee Management</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newEmployee.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newEmployee.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmployee.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newEmployee.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={newEmployee.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="fax"
            placeholder="Fax"
            value={newEmployee.fax}
            onChange={handleChange}
          />
          <input
            type="text"
            name="jobPosition"
            placeholder="Job Position"
            value={newEmployee.jobPosition}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Employee'}
          </button>
        </form>
        <h3>Employee List</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {employees.map(employee => (
              <li key={employee._id}>
                {employee.firstName} {employee.lastName} - {employee.jobPosition}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Employee;
