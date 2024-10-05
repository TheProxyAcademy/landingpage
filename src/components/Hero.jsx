import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero h-screen w-full bg-cover flex flex-col md:justify-center">
      <div className="lg:px-20 px-10">
        <div className="md:w-3/6 xl:w-2/5 w-full mb-5 pt-24 md:pt-0">
          <h1 className="font-title text-dark uppercase font-bold leading-[1.1] flex flex-col">
            <span className="lg:text-[16px] text-[14px]">
              Empower the Future:
            </span>
            <span className="lg:text-[38px] text-[24px]">
              Leading Tech Classes for Kids
            </span>
          </h1>
          <p className="text-[12px] lg:text-[14px]">
            Join us in shaping the next generation of tech leaders and
            innovators. Start their journey to success today, no matter where
            you are in the world!
          </p>
        </div>
        <Link
          className="px-8 py-3 uppercase font-semibold text-xs rounded-full bg-primary text-light hover:shadow-md transition-all duration-500 ease-in-out hover:rounded-lg"
          to="/summerbootcamp"
          // target="_blank"
          // to="https://docs.google.com/forms/d/e/1FAIpQLScgv-0ZAajAhevEJV4cBQ4ASqKqKUyW-McVFlj4_i2nCVu2dA/viewform"
        >
          Enrol
        </Link>
      </div>
    </div>
  );
}

export default Hero;
