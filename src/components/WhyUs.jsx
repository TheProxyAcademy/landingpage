import React from "react";

function WhyUs() {
  return (
    <div className="p-5 lg:p-20">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-3/4">
          <h2 className="font-title uppercase text-[18px] lg:text-[32px] text-primary font-bold leading-[1.1] text-center lg:text-left">
            What's so special about The Proxy Academy?
          </h2>
          <p className="mt-2 text-dark text-center w-full text-[12px] lg:text-justify lg:w-5/6">
            We recognize the gap in the educational system that doesn't quite
            cater for the development of kids. We are bridging the gap by
            facilitating the knowledge of digital skills in ways kids can easily
            relate with - fun and interactive - to effectively function in a
            world that has gone largely digital.
          </p>
        </div>
        <div className="lg:w-2/4 w-5/6 md:grid grid-cols-2 grid-rows-2 gap-5 mt-10 lg:mt-0">
          <div className="bg-primary p-3 mb-3 md:mb-0 rounded-md text-[#DFF8D5]">
            <h4 className="font-bold text-[16px] uppercase">
              World-Class Curriculum
            </h4>
            <p className="py-1 text-[12px]">
              We operate with curriculums and models that have been tested and
              have proven effective by experts over the world.
            </p>
          </div>
          <div className="bg-[#fcbf00] p-3 mb-3 md:mb-0 rounded-md text-[#372c0d]">
            <h4 className="font-bold text-[16px] uppercase">Flexibility</h4>
            <p className="py-1 text-[12px]">
              We operate with strict adherence to the rule of constant practice
              and learning but not at the expense of the wellbeing of our
              students. We consider psychological factors as well as natural
              factors that might affect our sessions.
            </p>
          </div>
          <div className="bg-[#4cd5bc] p-3 mb-3 md:mb-0 rounded-md text-[#112f29]">
            <h4 className="font-bold text-[16px] uppercase">
              Adaptive Learning
            </h4>
            <p className="py-1 text-[12px]">
              We value the quality in our delivery and we offer a one-on-one
              approach for our sessions as well as group classes in order to
              understand each students and move at their pace.
            </p>
          </div>
          <div className="bg-[#f00078] p-3 rounded-md text-[#ffe3f1]">
            <h4 className="font-bold text-[16px] uppercase">
              World-Class Curriculum
            </h4>
            <p className="py-1 text-[12px]">
              We operate with curriculums and models that have been tested and
              have proven effective by experts over the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
