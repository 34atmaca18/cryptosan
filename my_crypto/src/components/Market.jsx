import React, { useState } from 'react';
import styles from '../style';
import { arrowleft, arrowright } from '../assets/assets';
import '../App.css';
import { formatNumber,abbreviateNumber } from '../functions/abbreviatenumber';
import CoinDetails from './CoinDetails'; 

const CoinsList = ({ coins }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const coinsPerPage = 10;
  const totalPages = Math.ceil(coins.length / coinsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * coinsPerPage;
  const currentCoins = coins.slice(startIndex, startIndex + coinsPerPage);

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
    <section className={`${styles.pagePaddingX} bg-black text-white min-h-[100vh] h-fit w-full py-[75px] relative`}>
      <div className='flex justify-center w-full'>
      <h1 className='font-extrabold text-[27px] max-md:text-[20px]
      ml-6 max-md:ml-4 textGradient w-fit
      '>Market</h1>
      </div>
      <div className={`w-full h-fit p-2 mt-5 ${selectedCoin ? 'blur-sm' : ''}`}>
        <ul className='w-full h-full flex flex-col gap-2'>
          <ul className='w-full h-full flex flex-row justify-between px-5 text-[15px] 
          max-md:text-[11px] font-bold max-md:hidden'>
            <li className='w-[200px] '><p className='w-fit '>Coin_Name</p></li>
            <li className='w-[100px]'><p className='w-fit '>Current_Price</p></li>
            <li className='w-[100px]'><p className='w-fit '>Price_Change(24h)</p></li>
            <li className='w-[100px]'><p className='w-fit '>Total_Volume</p></li>
            <li className='w-[100px]'><p className='w-fit '>Market_Cap</p></li>
          </ul>
          {currentCoins.map((coin, index) => (
            <li key={index}
              className='cursor-pointer flex flex-row justify-between items-center py-3 w-full h-[70px] myBorder px-5 max-md:px-2 text-[14px] max-md:text-[11px]'
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
        <div className='w-full flex justify-between mt-5'>
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className='px-3 py-1 bg-[#8f8f8f] rounded-[13px] hover:bg-gray-800 disabled:bg-black'
          >
            <img className='w-[20px] h-[20px]' src={arrowleft} alt="Previous" />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className='px-3 py-1 bg-[#8f8f8f] rounded-[13px] hover:bg-gray-800 disabled:bg-black'
          >
            <img className='w-[20px] h-[20px]' src={arrowright} alt="Next" />
          </button>
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

export default CoinsList;
