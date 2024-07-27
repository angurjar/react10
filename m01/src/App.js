import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import LoginPage from './components/login';
import RegisterPage from './components/register';
// import CryptoPrices from './components/cryptoprices';


import PriceAlerts from './components/pricealerts';

import BackgroundScroll from './components/backgroundscroll';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <div>
        <BackgroundScroll />
        <Header />
        <main>
          <Routes>
       +
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          <PriceAlerts />
      
        
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
