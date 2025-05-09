import React from 'react';
import bgImage from '../assets/bgImage.png';
import bgImageBig from '../assets/bgImagebig.jpg';
import ImageCarousel from '../components/ImageCarousel';

import '../css/style.css';
import tagline1 from '../assets/tagline-1.png'
import tagline2 from '../assets/tagline-2.png'

import '@fontsource/playfair-display'; // All weights and styles

function FirstSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 w-full h-full">
        {/* Small screen image */}
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-[110%]  object-cover  sm:hidden"
        />
        {/* Large screen image */}
        <img
          src={bgImageBig}
          alt="Background"
          className="hidden sm:block w-full h-screen object-cover object-center"
        />
      </div>



      <div className="relative z-10 w-full h-full flex flex-col justify-center  px-5 translate-y-20 sm:px-10 lg:px-[10%] gap-5 pt-40 sm:pt-28 lg:pt-40">
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">

          <img src={tagline1} />
          <img src={tagline2} />


          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 mt-4">
            <button className="mt-20 sm:mt-0 learn-more bg-[#282936] text-white bg-transparent sm:text-inherit rounded-full">
              <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text text-white sm:text-inherit">Shop Now</span>
            </button>


            <button
              className="relative text-sm sm:text-lg mt-16 sm:mt-0 lg:text-xl text-white"
              style={{ textDecoration: 'none' }}
            >
              Book an appointment
              <span
                className="absolute left-0 bottom-[-6px] w-full h-[3px]"
                style={{
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpath fill='none' stroke='white' stroke-width='4' d='M0 15 Q 25 0 50 15 T 100 15'/%3E%3C/svg%3E") repeat-x`,
                  height: '12px',
                }}
              ></span>
            </button>
          </div>

          <div className=" h-40 xs:w-3/4">
            <ImageCarousel />
          </div>
        </div>
      </div>


    </div>
  );
}

export default FirstSection;
