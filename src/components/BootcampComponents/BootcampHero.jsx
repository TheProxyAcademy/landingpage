import React from "react";
import Illustration from "../../assets/summer-img.jpg";
import { Link } from "react-router-dom";
import BootcampForm from "../BootcampForm";

function BootcampHero() {
  return (
    <div className="lg:py-20 lg:px-20 py-20 px-5 flex flex-col-reverse lg:flex-row justify-between items-center min-h-screen lg:max-h-screen">
      <div className="lg:w-3/6 w-5/6 relative">
        <div className="absolute bg-primary w-full h-full rounded-xl border-8 border-primary right-10 top-10 -z-20" />
        <div className="absolute bg-amber-400 w-full h-full right-5 top-5 rounded-xl -z-10" />
        <img
          src={Illustration}
          alt="Image illustrating summer"
          className="w-full rounded-xl z-0 shadow-lg"
        />
        {/*<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sign+up+section&query=sign+up+section">Image by Drazen Zigic on Freepik</a>*/}
      </div>
      <div className="lg:w-2/5 w-full text-center lg:text-left mb-10 lg:mb-0">
        <BootcampForm />
      </div>
    </div>
  );
}

export default BootcampHero;
