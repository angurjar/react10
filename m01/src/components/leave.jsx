import React, { useEffect, useState } from 'react';
import leaveService from '../services/leaveService';

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await leaveService.getAllLeaves();
      setLeaves(data);
    };
    fetchData();
  }, []);

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    
    await leaveService.addLeave({ employeeId: '123', type, startDate, endDate });
    const data = await leaveService.getAllLeaves();
    setLeaves(data);
  };

  return (
    <div>
      <h2>Leave Requests</h2>
      <form onSubmit={handleLeaveSubmit}>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button type="submit">Submit Leave Request</button>
      </form>
      <ul>
        {leaves.map((leave, index) => (
          <li key={index}>
            {leave.employeeId}: {leave.type} from {new Date(leave.startDate).toLocaleDateString()} to {new Date(leave.endDate).toLocaleDateString()} ({leave.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leave;
