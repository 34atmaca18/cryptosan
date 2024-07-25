import React, { useState } from 'react';
import styles from '../style';
import { arrowupright } from '../assets/assets';
import '../App.css';
import { formatNumber,abbreviateNumber } from '../functions/abbreviatenumber';
import CoinDetails from './CoinDetails'; 

const Middle = (props) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const coins = props.coins.slice(0, 5);

  const showCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const closeCoin = () => {
    setSelectedCoin(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCoin();
    }
  };

  return (
    <section className={`${styles.pagePaddingX}  text-white h-[100vh] max-md:h-fit max-md:py-[150px] w-full py-[75px] relative z-0`}>
      <div className='flex w-full justify-center'>
        <h1 className='text-center font-extrabold text-[27px] textGradient
        max-md:text-[20px] z-[1]'>Market (Top 5)</h1>
      </div>
      <div className={`w-full h-fit p-2 mt-8 z-[1] ${selectedCoin ? 'blur-sm' : ''}`}>
        <ul className='w-full h-full flex flex-col gap-2'>
          <ul className='w-full h-full flex flex-row justify-between px-5 text-[15px] max-md:text-[11px] font-bold max-md:hidden'>
            <li className='w-[200px]'>Coin_Name</li>
            <li className='w-[100px]'>Current_Price</li>
            <li className='w-[100px]'>Price_Change(24h)</li>
            <li className='w-[100px]'>Total_Volume</li>
            <li className='w-[100px]'>Market_Cap</li>
          </ul>
          {coins.map((coin, index) => (
            <li key={index}
              className='cursor-pointer flex z-[1] flex-row justify-between items-center py-3 w-full h-[70px] myBorder px-5 max-md:px-2 hover:border-gray-700 text-[14px] max-md:text-[11px]'
              onClick={() => showCoin(coin)}>
              <div className='flex gap-2 items-center w-[200px]'>
                <div><p className='textGradient'>#{coin.market_cap_rank}</p></div>
                <div className='flex items-center gap-1.5'>
                  <img className='w-[23px] h-[23px] max-md:w-[17px] max-md:h-[17px] rounded-[50%]' src={coin.image} alt={coin.id} />
                  <a className='text-[14px] max-md:text-[11px] text-white font-bold cursor-pointer'>
                    {coin.id.toUpperCase()}
                  </a>
                </div>
              </div>
              <p className='font-light w-[100px] max-md:w-[65px]'>${formatNumber(parseFloat(coin.current_price))}</p>
              <p className={`font-light w-[100px] max-md:hidden ${parseFloat(coin.price_change_percentage_24h) < 0 ? 'text-[#ff1f1f]' : 'text-[#42ff29]'}`}>%{parseFloat(coin.price_change_percentage_24h).toFixed(2)}</p>
              <p className='font-light w-[100px] max-md:hidden'>{abbreviateNumber(parseFloat(coin.total_volume))}</p>
              <p className='font-light w-[100px] max-md:hidden'>{abbreviateNumber(parseFloat(coin.market_cap))}</p>
            </li>
          ))}
        </ul>
        <div className='w-full relative'>
          <a className='flex gap-1.5 border-b-[1px] border-white w-fit absolute right-[60px] max-md:right-[20px] mt-5 hover:scale-[110%]' href='/market'>
            <span className='font-thin text-[12px] max-md:text-[10px]'>View All</span>
            <img className='w-[9.5px] fill-white' src={arrowupright} alt="" />
          </a>
        </div>
      </div>
      {selectedCoin && (
        <CoinDetails
          selectedCoin={selectedCoin}
          closeCoin={closeCoin}
          handleBackgroundClick={handleBackgroundClick}
        />
      )}
    </section>
  );
};

export default Middle;
