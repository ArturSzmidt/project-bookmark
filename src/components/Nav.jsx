import React, { useState, useEffect } from 'react';
import logo from '../img/logo-bookmark.svg';
import hamburger from '../img/icon-hamburger.svg';

import tab3 from '../img/illustration-features-tab-3.svg';
const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 30 second!');
      setShowModal(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="mt-4 cursor-pointer "
        onMouseEnter={() => setShowModal(true)}
      >
        <hr className="hr" />
      </div>
      <nav className=" container flex items-center   sm:mt-12">
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
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className=" ml-auto px-1"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-prGray h-6 w-6 text-2xl block">
                    x
                  </span>
                </button>

                <div className="relative p-3 flex-auto">
                  <div className="relative mt-20 lg:mt-12">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                      <div className="flex flex-1 justify-center z-10 mb-10 lg:-0">
                        <img src={tab3} alt="" />
                      </div>
                      <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl text-prDarkBlue ">
                          Share your bookmarks
                        </h1>
                        <p className="text-prGray my-4 text-center lg:text-left sm:w3/4 lg:w-full ">
                          Easily share your bookmarks and collections with
                          others. Create a sharable link you can sent ast one
                          click of a button.
                        </p>
                        <button
                          onClick={() => setShowModal(false)}
                          type="button"
                          className="button button-purple hover:bg-white hover:text-prLightBlue  "
                        >
                          More info
                        </button>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Nav;
