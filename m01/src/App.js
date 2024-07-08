import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { TransitionGroup } from 'react-transition-group';

import Header from './components/header';
import Footer from './components/footer';
import Employee from './components/employee';
import Attendance from './components/attendance';
import Dashboard from './components/dashboard';
import Leave from './components/leave';
import Profile from './components/profile';

const App = () => {


  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <TransitionGroup className="transition-group">
    
          <Router>
            <div className="App">
              <Header className="header" />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Employee" element={<Employee />} />
                  <Route path="/Leave" element={<Leave />} />
                  <Route path="/Attendance" element={<Attendance />} />
                  <Route path="/Profile" element={<Profile />} />
                </Routes>
              </div>
              <Footer className="footer" />
            </div>
        </Router>
      </TransitionGroup>
    </ThemeProvider>
  );
};

export default App;
