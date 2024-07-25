import React from 'react'
import styles from '../style'
import { ThreeJSScene } from "./index.js"

const Main = () => {
  return (
    <div className={`${styles.pagePaddingX} w-full h-[calc(100vh-100px)] bg-black text-white max-sm:h-fit 
    max-sm:py-[150px]`}>
      <div className={`w-full flex justify-center h-full max-sm:flex-col gap-[80px]`}>
        <div className="left h-full flex items-center max-md:justify-center max-md:w-full">
          <h1 className='text-[40px] font-extrabold max-md:text-[33px] max-xs:text-[20px] text-white z-[1] textGradient2 w-fit'>
          Crypto made easy..<br />Trade, track and<br />grow with our app!
          </h1>
        </div>
        <div id='right' className='w-1/2 flex items-center justify-center max-md:hidden'>
          <div className='z-[1]' style={{ width: '500px', height: '500px' }}>
            <ThreeJSScene />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main