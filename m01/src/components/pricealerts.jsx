import React, { useState } from 'react';

const PriceAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [crypto, setCrypto] = useState('');
  const [price, setPrice] = useState('');

  const handleAddAlert = () => {
    setAlerts([...alerts, { crypto, price }]);
    setCrypto('');
    setPrice('');
  };

  return (
    <div>
      <h2>Set Price Alerts</h2>
      <input
        type="text"
        value={crypto}
        placeholder="Cryptocurrency (e.g., Bitcoin)"
        onChange={(e) => setCrypto(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Price Threshold"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddAlert}>Add Alert</button>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            {alert.crypto}: ${alert.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceAlerts;
