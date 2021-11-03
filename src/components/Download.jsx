import React from 'react';
import chrome from '../img/logo-chrome.svg';
import firefox from '../img/logo-firefox.svg';
import opera from '../img/logo-opera.svg';
import dotted from '../img/bg-dots.svg';
const Download = () => {
  return (
    <div className="py-20 mt-20">
      <div className="sm:w-3 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-prDarkBlue ">
          Download the extensions
        </h1>
        <p className="text-center text-prGray mt-4">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like to prioritize.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mt-16 ">
        {/* card */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16 mx-5">
          <div className="p-6  flex flex-col items-center ">
            <img src={chrome} alt="" />
            <h3 className="mt-5 mb-2 text-prDarkBlue text-lg">Add to Chrome</h3>
            <p className="mb-2 text-prGray font-light">Minimum version 62</p>
          </div>

          <img src={dotted} alt="" />
          <div className="flex p-6">
            <button
              type="button"
              className="button button-purple flex-1 hover:bg-white hover:text-prLightBlue  "
            >
              Add & Install Extension
            </button>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col rounded-md shadow-md lg:my-8 mx-5">
          <div className="p-6 flex flex-col items-center ">
            <img src={opera} alt="" />
            <h3 className="mt-5 mb-2 text-prDarkBlue text-lg">Add to Opera</h3>
            <p className="mb-2 text-prGray font-light">Minimum version 62</p>
          </div>

          <img src={dotted} alt="" />
          <div className="flex p-6">
            <button
              type="button"
              className="button button-purple flex-1 hover:bg-white hover:text-prLightBlue  "
            >
              Add & Install Extension
            </button>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col rounded-md shadow-md lg:mt-16 mx-5">
          <div className="p-6 flex flex-col items-center ">
            <img src={firefox} alt="" />
            <h3 className="mt-5 mb-2 text-prDarkBlue text-lg">
              Add to Firefox
            </h3>
            <p className="mb-2 text-prGray font-light">Minimum version 62</p>
          </div>

          <img src={dotted} alt="" />
          <div className="flex p-6">
            <button
              type="button"
              className="button button-purple flex-1 hover:bg-white hover:text-prLightBlue  "
            >
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
