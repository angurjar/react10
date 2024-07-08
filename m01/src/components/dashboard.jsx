import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../styles/dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [clientCount, setClientCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [projectStatus, setProjectStatus] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  });
  const [attendanceData, setAttendanceData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Work Trends',
        data: [],
        backgroundColor: ['#4BC0C0', '#FF9F20', '#38812F', '#4B50C0', '#36A5EB', '#9956FF'],
      },
    ],
  });
  const [absenceRate, setAbsenceRate] = useState(0);
  const [overtimeRate, setOvertimeRate] = useState(0);
  const [latecomerRate, setLatecomerRate] = useState(0);
  const [holidays, setHolidays] = useState([]);
  const [remoteWork, setRemoteWork] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const clientResponse = await axios.get('/api/clients/count');
      setClientCount(clientResponse.data.count);

      const employeeResponse = await axios.get('/api/employees/count');
      setEmployeeCount(employeeResponse.data.count);

      const projectResponse = await axios.get('/api/projects/count');
      setProjectCount(projectResponse.data.count);

      const projectStatusResponse = await axios.get('/api/projects/status');
      setProjectStatus(projectStatusResponse.data);

      const statusCounts = projectStatusResponse.data.reduce((acc, project) => {
        acc[project.status] = acc[project.status] ? acc[project.status] + 1 : 1;
        return acc;
      }, {});

      const backgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
      const hoverBackgroundColor = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

      setChartData({
        labels: Object.keys(statusCounts),
        datasets: [
          {
            data: Object.values(statusCounts),
            backgroundColor,
            hoverBackgroundColor,
          },
        ],
      });

      const attendanceResponse = await axios.get('/api/attendance');
      const { labels, datasets } = attendanceResponse.data;

      setAttendanceData({
        labels,
        datasets: [
          {
            label: 'Work Trends',
            data: datasets[0].data,
            backgroundColor: ['#4BC0C0', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#9966FF'],
          },
        ],
      });

      const ratesResponse = await axios.get('/api/rates');
      const { absenceRate, overtimeRate, latecomerRate } = ratesResponse.data;
      setAbsenceRate(absenceRate);
      setOvertimeRate(overtimeRate);
      setLatecomerRate(latecomerRate);

      const holidaysResponse = await axios.get('/api/holidays');
      setHolidays(holidaysResponse.data);

      const remoteWorkResponse = await axios.get('/api/remote-work');
      setRemoteWork(remoteWorkResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Company Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <div className="overview">
          <div className="overview-card">
            <h3>Total Clients</h3>
            <p>{clientCount}</p>
          </div>
          <div className="overview-card">
            <h3>Total Employees</h3>
            <p>{employeeCount}</p>
          </div>
          <div className="overview-card">
            <h3>Total Projects</h3>
            <p>{projectCount}</p>
          </div>
          <div className="overview-card">
            <h3>Absence Rate</h3>
            <p>{absenceRate}%</p>
          </div>
          <div className="overview-card">
            <h3>Overtime Rate</h3>
            <p>{overtimeRate}%</p>
          </div>
          <div className="overview-card">
            <h3>Latecomer Rate</h3>
            <p>{latecomerRate}%</p>
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <h3>Work Progress</h3>
            <Bar data={attendanceData} />
          </div>
          <div className="chart">
            <h3>Project Status</h3>
            <Pie data={chartData} />
          </div>
        </div>
        <div className="lists">
          <div className="list">
            <h3>Project Details</h3>
            <ul>
              {projectStatus.map((project, index) => (
                <li key={index}>
                  <span className="project-id">ID: {project.id}</span> - 
                  <span className="project-name">{project.name}</span> - 
                  <span className="project-status">{project.status}</span> - 
                  <span className="project-completion">Completed: {project.completion}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h3>Holidays</h3>
            <ul>
              {holidays.map((holiday, index) => (
                <li key={index}>{holiday}</li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h3>Remote Work</h3>
            <ul>
              {remoteWork.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
