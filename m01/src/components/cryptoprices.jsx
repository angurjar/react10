import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/crp.css';

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const result = await axios.get('/api/crypto');
      const formattedData = Object.keys(result.data).map(key => ({
        name: key,
        price: result.data[key].usd,
        change: result.data[key].change // Assuming the API provides a price change field
      }));
      setCryptoData(formattedData);
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh data every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-prices">
      <h2>Crypto Prices</h2>
      <ul>
        {cryptoData.map((crypto, index) => (
          <li key={index} className={crypto.change >= 0 ? 'positive' : 'negative'}>
            {crypto.name.toUpperCase()}: ${crypto.price} <span>({crypto.change}%)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
