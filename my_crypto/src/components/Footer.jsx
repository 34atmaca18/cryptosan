import React from 'react';
import styles from '../style'
import { copy } from '../assets/assets';
import { aboutus,quickLinks,contact } from '../consts/const';

const Footer = () => {
  return (
    <section className={`${styles.pagePaddingX} w-full h-fit text-white relative pt-[50px] max-smm:h-fit`}>
      <div className='w-full h-full relative flex justify-between flex-wrap gap-10 max-smm:h-fit max-smm:pb-[100px] pb-[140px]'>
        <div className="w-[300px] max-md:w-[220px] max-smm:w-[43%] max-sm:w-full">
          {aboutus.map((about) => (
            <div key={about.title} className='flex flex-col gap-3 max-ss:gap-2'>
              <h1 className='text-[23px] max-ss:text-[16px] font-bold textGradient'>{about.title}</h1>
              <p className='text-[14px] max-ss:text-[11px] text-justify'>{about.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="w-[230px] max-smm:w-fit flex flex-col gap-3 max-sm:w-full">
          <h1 className='text-[23px] font-bold max-ss:text-[16px] textGradient'>Contact</h1>
          <div className='flex flex-col gap-3'>
            {contact.map((contact) => (
              <div key={contact.id} className='flex gap-2 items-center'>
                <img className='w-[20px] h-[20px] max-ss:w-[15px] max-ss:h-[15px]' src={contact.logo} alt="logo" />
                <div className='text-[14px] max-ss:text-[11px]'>{contact.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit flex flex-col gap-3 max-ss:gap-2">
          <h1 className='text-[23px] max-ss:text-[16px] font-bold textGradient'>Links</h1>
          <div className='flex flex-col gap-3 max-ss:gap-1'>
            {quickLinks.map((quick) => (
              <div key={quick.id} className='text-[14px] max-ss:text-[11px]'>{quick.name}</div>
            ))}
          </div>
        </div>
        <div className="w-full absolute bottom-3">
              <div className='flex justify-between items-center w-full text-[9.5px]'>
                <div className='flex gap-1 items-center'>
                  <img className='w-[14px] h-[14px]' src={copy} alt="" />
                  <span className='relative top-[0.9px]'>Copyright. All rights reserved.</span>
                </div>
                <div className='cursor-pointer relative top-[0.9px]'>Terms & Conditions</div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Footer