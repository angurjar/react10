import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Attendance from './components/attendance';
import Leave from './components/leave';
import Employee from './components/employee';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/leave" component={Leave} />
          <Route path="/employee" component={Employee} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
