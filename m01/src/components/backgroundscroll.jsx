import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/backgroundscroll.css';

const BackgroundScroll = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const result = await axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
      const formattedData = Object.keys(result.data).map(key => ({
        name: key,
        price: result.data[key].usd
      }));
      setCryptoData(formattedData);
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh data every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-scroll">
      {cryptoData.map((crypto, index) => (
        <div className="crypto-item" key={index}>
          {crypto.name.toUpperCase()}: ${crypto.price}
        </div>
      ))}
    </div>
  );
};

export default BackgroundScroll;
