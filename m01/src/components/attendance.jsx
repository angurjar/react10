import React, { useEffect, useState, useContext } from 'react';
import attendanceService from '../services/attendanceService';
// import { Line } from 'react-chartjs-2';
import AuthContext from '../context/authContext';
import '../styles/attendance.css';
import 'chart.js/auto';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const { employeeId } = useContext(AuthContext);  // Get logged-in employee ID

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await attendanceService.getAllAttendance();
        setAttendance(response.data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };
    fetchAttendance();
  }, []);

  const handleAttendanceSubmit = async (e) => {
    e.preventDefault();
    const newAttendance = {
      date,
      employeeId,
      status: 'pending',
      approver: null,
      rejector: null,
    };
    await attendanceService.addAttendance(newAttendance);
    const response = await attendanceService.getAllAttendance();
    setAttendance(response.data);
  };

  // const filterAttendanceByDateRange = () => {
  //   if (!startDate || !endDate) return attendance;
  //   return attendance.filter((record) => {
  //     const recordDate = new Date(record.date);
  //     return recordDate >= new Date(startDate) && recordDate <= new Date(endDate);
  //   });
  // };

  // const getChartData = () => {
  //   const filteredData = filterAttendanceByDateRange();
  //   const dates = filteredData.map(record => record.date);
  //   const status = filteredData.map(record => record.status === 'approved' ? 1 : 0);
  //   return {
  //     labels: dates,
  //     datasets: [
  //       {
  //         label: 'Attendance',
  //         data: status,
  //         fill: false,
  //         backgroundColor: 'blue',
  //         borderColor: 'blue',
  //       },
  //     ],
  //   };
  // };

  const renderCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const days = [];
    for (let i = startOfMonth.getDay(); i > 0; i--) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      days.push(
        <div className={`calendar-day ${attendance.find(a => a.date === date.toISOString().split('T')[0])?.status}`} key={i}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className='page'>
      <div className="employee-container">
        <div className="header">
          <div className="profile">
            <img src="/path-to-profile-picture.jpg" alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h3>Andy Raj Kapoor (software developer )</h3>
              <p>ID: 0948</p>
            </div>
          </div>
          <div className="contact">
            <p>9085432454</p>
          </div>
        </div>
        <div className="calendar-container">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>&lt;</button>
          <h2>{currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>&gt;</button>
          <div className="calendar">
            <div className="calendar-header">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="calendar-body">
              {renderCalendar()}
            </div>
          </div>
        </div>
        <div className="attendance-summary">
          <h3>Attendance Summary</h3>
          <p>Total Class Days: 105</p>
          <p>Days Attended: 100</p>
          <p>Days Absent: 5</p>
          <div className="chart">
            <div className="chart-circle" style={{ '--percentage': 83 }}>
              <div className="inner-circle">83%</div>
            </div>
          </div>
        </div>
        <form onSubmit={handleAttendanceSubmit}>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      
        </form>
        <label>Start Date:</label>
        <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button type="submit">Submit Attendance</button>
        <h3>Attendance Records</h3>
        <span className="status"><span className="dot approved"></span>Approved</span>
        <span className="status"><span className="dot pending"></span>Pending</span>
        <span className="status"><span className="dot rejected"></span>Rejected</span>
        <ul>
          {attendance.map((record, index) => (
            <li key={index} className={`status-${record.status.toLowerCase()}`}>
              {record.date} - {record.employeeId}: {record.status}
              {record.status.toLowerCase() === 'approved' && record.approver && ` (Approved by: ${record.approver})`}
              {record.status.toLowerCase() === 'rejected' && record.rejector && ` (Rejected by: ${record.rejector})`}
            </li>
          ))}
        </ul>
        <h3>Attendance Analysis</h3>
    
      </div>
    </div>
  );
};

export default Attendance;
