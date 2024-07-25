import React from 'react';
import { formatNumber, abbreviateNumber } from '../functions/abbreviatenumber';
import { close } from '../assets/assets';

const CoinDetails = ({ selectedCoin, closeCoin, handleBackgroundClick }) => {
  return (
    <div
      className='fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50'
      onClick={handleBackgroundClick}
    >
      <div
        className='rounded-[30px] w-[50%] max-md:w-[70%] max-ss:w-[90%] h-fit bg-[#000000cc] text-white pt-[10px] pb-[40px] px-6 boxShadow2'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='w-full h-full relative'>
          <img className='w-[13px] absolute right-1 top-[5px] cursor-pointer'
            onClick={() => closeCoin()}
            src={close} alt="close" />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[27px] max-md:text-[20px] font-extrabold textGradient'>{selectedCoin.id.toUpperCase()}</h2>
          <img className='w-[40px] h-[40px] max-ss:w-[20px] max-ss:h-[20px] rounded-[50%]' src={selectedCoin.image} alt={selectedCoin.id} />
        </div>
        <div className='mt-10 flex flex-row justify-between max-md:flex-col max-md:gap-1.5 text-[14px]'>
          <div className='flex flex-col gap-1.5'>
            <p><span className='font-extrabold textGradient'>Market Cap Rank: </span>#{selectedCoin.market_cap_rank}</p>
            <p><span className='font-extrabold textGradient'>ATH (All Time High): </span>${formatNumber(selectedCoin.ath)}</p>
            <p><span className='font-extrabold textGradient'>ATL (All Time Low): </span>${formatNumber(selectedCoin.atl)}</p>
            <p><span className='font-extrabold textGradient'>Highest Price in 24H : </span>${formatNumber(selectedCoin.high_24h)}</p>
            <p><span className='font-extrabold textGradient'>Lowest Price in 24H : </span>${formatNumber(selectedCoin.low_24h)}</p>
          </div>
          <div className='flex flex-col gap-1.5'>
            <p><span className='font-extrabold textGradient'>Current Price:</span> ${formatNumber(parseFloat(selectedCoin.current_price))}</p>
            <p><span className='font-extrabold textGradient'>Price Change (24H):</span> %{parseFloat(selectedCoin.price_change_percentage_24h).toFixed(2)}</p>
            <p><span className='font-extrabold textGradient'>Total Volume:</span> {abbreviateNumber(parseFloat(selectedCoin.total_volume))}</p>
            <p><span className='font-extrabold textGradient'>Market Cap:</span> {abbreviateNumber(parseFloat(selectedCoin.market_cap))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
