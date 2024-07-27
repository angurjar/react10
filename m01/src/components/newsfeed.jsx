import React, { useEffect, useRef, useState } from 'react';
import '../styles/newsfeed.css';

const NewsFeed = () => {
  const newsFeedRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (newsFeedRef.current) {
        if (scrollDirection === 'down') {
          
          if (newsFeedRef.current.scrollTop + newsFeedRef.current.clientHeight >= newsFeedRef.current.scrollHeight) {
       
            setScrollDirection('up');
          } else {
            
            newsFeedRef.current.scrollBy({ top: 50, behavior: 'smooth' });
          }
        } else {
         
          if (newsFeedRef.current.scrollTop === 0) {
           
            setScrollDirection('down');
          } else {
         
            newsFeedRef.current.scrollBy({ top: -50, behavior: 'smooth' });
          }
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);

  return (
    <div className="news-feed" ref={newsFeedRef}>
      <h2>Latest News</h2>
      <div className="news-item">Bitcoin reaches new heights!</div>
      <div className="news-item">Ethereum update brings new features.</div>
      <div className="news-item">Market trends show a positive outlook.</div>
      {/* Add more news items as needed */}
    </div>
  );
};

export default NewsFeed;
