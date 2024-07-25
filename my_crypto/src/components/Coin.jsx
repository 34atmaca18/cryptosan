import React, { useEffect, useRef } from 'react';
import coin from '../assets/coin.png';

const Coin = ({ duration, delay }) => {
  const coinRef = useRef(null);
  const randomRotationStart = Math.random() * 360; 
  const randomRotationEnd = randomRotationStart + (2160 + Math.random(1,10) * 360);

  useEffect(() => {
    const coinElement = coinRef.current;
    const animation = coinElement.animate(
      [
        { transform: `translateY(-100%) rotate(${randomRotationStart}deg)`, opacity: 0.2 },
        { transform: `translateY(300vh) rotate(${randomRotationEnd}deg)`, opacity: 1 },
      ],
      {
        duration: duration,
        delay: delay,
        iterations: 1,
        fill: 'forwards',
      }
    );

    return () => animation.cancel();
  }, [duration, delay, randomRotationStart, randomRotationEnd]);

  return (
    <img
      ref={coinRef}
      src={coin}
      alt="coin"
      className="absolute top-0 w-10 h-10 opacity-0 z-[-1]"
      style={{ left: `${Math.random() * 100}vw` }}
    />
  );
};

export default Coin;
