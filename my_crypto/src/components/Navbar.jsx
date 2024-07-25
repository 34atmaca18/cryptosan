import React from 'react';
import { navbarLinks } from './index.js';
import { NavLink } from 'react-router-dom';
import { close, menu } from '../assets/assets.js';
import styles from '../style';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const myFunction = (a) => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles.pagePaddingX} w-full relative`}>
      <nav className="w-full flex justify-between items-center h-[100px]">
        <a className="text-[21px] font-extrabold xl:text-[24px] max-ss:text-[17px] textGradient" href="/">
          Cryptosan
        </a>
        <div
          className={`z-[10] flex flex-row gap-5 font-poppins font-medium min-xl:text-[20px] ${
            toggle ? 'max-md:right-0' : 'max-md:right-[100%]'
          } max-md:absolute max-md:top-0 max-md:right-0 max-md:w-full max-md:h-[100vh] max-md:flex-col max-md:gap-[40px] max-md:text-[23px]
          max-md:text-center max-md:bg-black justify-center font-Sono`}
        >
          {navbarLinks.map((nav, index) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              className={({ isActive }) => (isActive ? 'text-[#f0c61d]' : 'text-white')}
              onClick={() => myFunction(nav.title)}
              exact="true"
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="absolute right-[20px] hidden max-md:block max-md:z-10"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
