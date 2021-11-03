import React from 'react';
import logo from '../img/logo-bookmark.svg';
import hamburger from '../img/icon-hamburger.svg';
const Nav = () => {
  return (
    <div>
      <nav className=" container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <img src={logo} alt="" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-prLightBlue uppercase text-xs">
          <li className="cursor-pointer text-prDarkBlue hover:text-prLightRed">
            Features
          </li>
          <li className="cursor-pointer text-prDarkBlue hover:text-prLightRed">
            Pricing
          </li>
          <li className="cursor-pointer text-prDarkBlue hover:text-prLightRed">
            Contact
          </li>
          <button
            type="button"
            className=" button-red bg-prLightRed text-white rounded-md px-7 py-3 uppercase hover:bg-white hover:text-prLightRed transition duration-300  "
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <img src={hamburger} alt="" className="text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
