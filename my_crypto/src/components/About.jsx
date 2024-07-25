import React from 'react'
import styles from '../style'
import '../App.css'
import {contact} from '../consts/const.js'
import {about1,about2} from '../assets/assets.js'

const About = () => {
  return (
    <section className={`${styles.pagePaddingX} bg-black text-white w-full min-h-[100vh] h-fit pt-[80px] pb-[140px] flex flex-col`}>
      <div className='mt-6 p-5 rounded-[10px] w-[85%] h-fit boxShadow flex gap-8 py-[50px] max-md:flex-wrap max-md:self-center'>
        <div className='w-full h-full flex justify-center mr-5'>
          <img 
            className='min-w-[300px] w-[300px] max-ss:min-w-[150px] max-ss:w-[150px] max-ss:h-[150px] h-full rounded-[10px]
            '
            src={about1} alt="crypto" 
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[25px] max-md:text-[17px] font-extrabold w-fit textGradient'>About Us</h1>
          <p className='text-[15px] max-md:text-[12px] mt-2'>
            Welcome to Cryptosan, your ultimate destination for tracking the latest information on cryptocurrencies. Our mission is to provide you with real-time updates on current prices, market trends, and essential data to help you stay informed in the fast-paced world of digital currencies. <br /><br />
            At Cryptosan, we are dedicated to delivering accurate and timely information. Our platform is designed to be user-friendly, allowing you to easily access the most relevant data on a wide range of cryptocurrencies. <br /><br />
            Whether you're a casual follower or an avid investor, Cryptosan is here to support your journey. We source our information from reputable exchanges and industry experts to ensure you have the best insights at your fingertips. <br /><br />
            Join our community of crypto enthusiasts and keep up with the latest developments in the crypto market. Thank you for choosing Cryptosan, where you can rely on us for all your cryptocurrency tracking needs. <br />
          </p>
        </div>
      </div>

      <div className='flex flex-col mt-10 w-full h-fit py-[250px] gap-2'>
        <div className='flex w-full justify-center'>
          <h1 className='font-extrabold text-center text-[24px] max-md:text-[17.5px] textGradient w-fit'>Stay with the Best!</h1>
        </div>
        <div className='flex justify-center w-full'>
          <p className='text-[15px] max-md:text-[12px] text-center w-[60%] max-md:w-full'>
            "Stay ahead in the crypto world with real-time market data and insights. 
            Discover top-performing cryptocurrencies and make informed investment decisions with ease."
          </p>
        </div>
        <div className='w-full flex justify-center mt-1'>
          <a href='#contact'
            className='text-[16px] max-md:text-[13px] font-bold
            w-fit h-fit px-5 py-2 
            border-[1.5px] border-white rounded-[20px]
            hover:bg-white hover:text-[black]
            '    
          >
            Reach Us!
          </a>
        </div>
      </div>
      <div className='p-5 rounded-[10px] w-[80%] self-center h-fit mt-[35px] boxShadow flex py-[50px] max-md:flex-wrap max-md:gap-10'>
        <div className='max-md:w-full max-md:flex max-md:flex-col max-md:justify-center'>
          <h1 className='text-[25px] max-md:text-[17px] font-extrabold w-fit textGradient'>Our Commitment</h1>
          <p className='text-[15px] max-md:text-[12px] mt-2'>
At Cryptosan, we are committed to being your trusted companion in navigating the dynamic landscape of cryptocurrencies. Our platform not only offers real-time price updates and market trends but also strives to educate and empower you with comprehensive insights into blockchain technology and its transformative potential. <br /><br />

As the crypto ecosystem evolves, Cryptosan remains steadfast in providing you with reliable information sourced from reputable exchanges and industry experts. Whether you're exploring investment opportunities or seeking to deepen your understanding of digital assets, we are here to support your journey every step of the way.
          </p>
        </div>
        <div className='max-md:w-full max-md:flex max-md:justify-center'>
          <img className='min-w-[350px] h-[350px] max-md:self-center max-ss:min-w-[150px] max-ss:w-[150px] max-ss:h-[150px]' 
          src={about2} alt="crypto" />
        </div>
      </div>
      <div id='contact' className="w-full flex flex-col mt-[170px] text-center">
          <h1 className='text-[25px] max-md:text-[17px] font-extrabold mr-2 max-md:mr-0.5 textGradient
          '>How to Contact Us?</h1>
          <div className='flex flex-col w-full items-center gap-3 mt-2'>
            {contact.map((contact) => (
              <div key={contact.id} className='flex gap-2 items-center'>
                <div className='text-[14px] max-ss:text-[11px]'>{contact.name}</div>
                <img className='w-[20px] h-[20px] max-ss:w-[15px] max-ss:h-[15px]' src={contact.logo} alt="logo" />
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default About