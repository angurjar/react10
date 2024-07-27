import React from 'react';
import CryptoPrices from '../components/cryptoprices';
import NewsFeed from '../components/newsfeed';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Crypto</h1>
      </header>
      <main className="main-content">
        <section className="news-section">
          <NewsFeed />
        </section>
        <section className="crypto-section">
          <CryptoPrices />
          <div className="price-actions">
            <button className="buy-sell">Buy & Sell</button>
            <button className="transfer">Transfer</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        {/* Additional footer content if needed */}
      </footer>
    </div>
  );
};

export default Dashboard;
