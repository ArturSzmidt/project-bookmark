import React from 'react';
import image from '../img/illustration-hero.svg';
const Hero = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28  ">
        <div className="flex flex-1 flex-col item-center lg:items-start">
          <h2 className="text-prDarkBlue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            A Simple Bookmark
            <br /> Manager
          </h2>
          <p className="text-prGray text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it now
            for free.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button
              type="button"
              className="button button-purple hover:bg-white hover:text-prLightBlue  "
            >
              Get in on Chrome
            </button>
            <button
              type="button"
              className="button button-white hover:bg-white "
            >
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="rounded-element"></div>
    </section>
  );
};

export default Hero;
