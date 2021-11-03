import React from 'react';
import { useState } from 'react';
import arrow from '../img/icon-arrow.svg';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="py-20">
      <div className="container">
        <div className="sm:w-3 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-prDarkBlue ">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-prGray mt-4">
            Here are some of our FAQs. If you have any questions you'd like
            answered please feel free to email us.
          </p>
        </div>
        {/* #tailwind accordion */}
        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a Bookmark?</span>
            <img src={arrow} alt="" className="" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">How i can request a new browser?</span>
            <img src={arrow} alt="" className="" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <img src={arrow} alt="" className="" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other Chromium browsers?</span>
            <img src={arrow} alt="" className="" />
          </div>
          <button
            type="button"
            className="button button-purple self-center mt-12 hover:bg-white hover:text-prLightBlue  "
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
