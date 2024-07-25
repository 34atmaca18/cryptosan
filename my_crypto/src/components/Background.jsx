import React, { useState, useEffect } from 'react';
import Coin from './Coin';

const Background = () => {
  const [coins, setCoins] = useState([]);
  const coinDelay = 200; 

  useEffect(() => {
    const newCoins = Array.from({ length: 30 }).map((_, index) => {
      const randomDuration = 7000 + Math.random() * 30000; 
      return <Coin key={index} duration={randomDuration} delay={index * coinDelay} />;
    });
    setCoins(newCoins);
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">{coins}</div>;
};

export default Background;
