import React from "react";
import { Link } from "react-router-dom";
import Illustration from "../assets/summer-img.jpg";

function Bootcamp() {
  return (
    <div className="lg:py-20 lg:px-20 py-20 px-5 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="lg:w-2/6 w-5/6 relative">
        <div className="absolute bg-primary w-full h-full rounded-xl border-8 border-primary right-10 top-10 -z-20" />
        <div className="absolute bg-amber-400 w-full h-full right-5 top-5 rounded-xl -z-10" />
        <img
          src={Illustration}
          alt="Image illustrating summer"
          className="w-full rounded-xl z-0 shadow-lg"
        />
        {/*<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sign+up+section&query=sign+up+section">Image by Drazen Zigic on Freepik</a>*/}
      </div>
      <div className="lg:w-3/5 w-full text-center lg:text-left mb-10 lg:mb-0">
        <h4 className="font-title uppercase font-bold text-primary lg:text-3xl text-xl">
          Online Summer Tech Bootcamp Kids Aged 5-17
        </h4>
        <p className="py-3 text-sm lg:text-[16px]">
          Don't miss out on our Online Summer Tech Bootcamp, where young
          innovators can dive into the world of technology and creativity!
          Register now to secure your spot and give your child a summer of
          learning, fun, and future-ready skills!
        </p>
        <Link to="/summerbootcamp">
          <button className="py-5 px-10 bg-primary text-white rounded-full uppercase text-sm font-semibold hover:shadow-md animate-[pulse_5s_ease-in-out_infinite] hover:-translate-y-1 transition-all duration-300 ease-linear active:translate-y-1">
            Register for Bootcamp
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bootcamp;
