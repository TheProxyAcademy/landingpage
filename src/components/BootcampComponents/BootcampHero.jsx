import React from "react";
import BootcampForm from "../BootcampForm";

function BootcampHero({ onFormInteraction, onFormSubmission }) {
  return (
    <div className="lg:py-20 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-3/6 w-full relative px-5 md:px-10 lg:mt-40 xl:mt-0 lg:border-r">
        <h2 className="xl:text-4xl text-2xl uppercase mb-2 font-semibold">
          Summer Tech Bootcamp 3.0
        </h2>
        <p>
          Give your kids a worthwhile summer experience with our ONLINE SUMMER
          TECH BOOTCAMP for children aged 5-17. Our classes will be held thrice
          a week. You also have the option to choose between the morning and
          evening class sessions to fit your schedule. Bootcamp starts from July
          27 - August 26, 2024
        </p>
        <p className="mt-2">
          <strong>Special Offer:</strong> Enrol your children and get a whopping
          70% off the original Bootcamp fee of 100,000 Naira
        </p>
        {/*<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sign+up+section&query=sign+up+section">Image by Drazen Zigic on Freepik</a>*/}
      </div>
      <div className="lg:w-3/6 w-full text-center lg:text-left mt-10 md:mt-0 md:mb-0 mb-10 lg:mb-0 py-10 px-5 md:p-10 bg-slate-100">
        <BootcampForm
          onFormInteraction={onFormInteraction}
          onFormSubmission={onFormSubmission}
        />
      </div>
    </div>
  );
}

export default BootcampHero;
