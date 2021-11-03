import React from 'react';
import tab1 from '../img/illustration-features-tab-1.svg';
import tab2 from '../img/illustration-features-tab-2.svg';
import tab3 from '../img/illustration-features-tab-3.svg';
const Features = () => {
  return (
    <div className="py-20 mt-20 lg:mt-60">
      <div className="sm:w-3 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-prDarkBlue ">Features</h1>
        <p className="text-center text-prGray mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="sm:w-3 lg:w-5/12 mx-auto px-2 pt-12">
        <ul className="flex  justify-between items-center gap-6">
          <li className="hover:text-prLightRed cursor-pointer">
            Simple Bookmarking
          </li>
          <li className="hover:text-prLightRed cursor-pointer">
            Speedy Sharing
          </li>
          <li className="hover:text-prLightRed cursor-pointer">Easy Sharing</li>
        </ul>
        <hr className="mt-6" />
      </div>
      {/* feature */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:-0">
            <img src={tab1} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-prDarkBlue ">Bookmark in one click</h1>
            <p className="text-prGray my-4 text-center lg:text-left sm:w3/4 lg:w-full ">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you menage your
              favourite sites.
            </p>
            <button
              type="button"
              className="button button-purple hover:bg-white hover:text-prLightBlue  "
            >
              More info
            </button>
          </div>
          <div className="rounded-element-invert"></div>
        </div>
        {/*  */}
      </div>
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:-0">
            <img src={tab2} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-prDarkBlue ">Intelligent search</h1>
            <p className="text-prGray my-4 text-center lg:text-left sm:w3/4 lg:w-full ">
              Our powerfull search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button
              type="button"
              className="button button-purple hover:bg-white hover:text-prLightBlue  "
            >
              More info
            </button>
          </div>
          <div className="rounded-element-invert"></div>
        </div>
        {/*  */}
      </div>
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:-0">
            <img src={tab3} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-prDarkBlue ">Share your bookmarks</h1>
            <p className="text-prGray my-4 text-center lg:text-left sm:w3/4 lg:w-full ">
              Easily share your bookmarks and collections with others. Create a
              sharable link you can sent ast one click of a button.
            </p>
            <button
              type="button"
              className="button button-purple hover:bg-white hover:text-prLightBlue  "
            >
              More info
            </button>
          </div>
          <div className="rounded-element-invert"></div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Features;
