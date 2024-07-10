import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeMerge,
  faChartSimple,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

function OurProgrammes() {
  return (
    <div className="p-5 lg:p-20 bg-[#DFF8D5]">
      <div className="text-center">
        <h2 className="font-title uppercase text-[24px] lg:text-[32px] text-primary font-bold leading-[1.1]">
          Our Programmes
        </h2>
        <p className="lg:w-3/5 w-full text-[12px] lg:text-[16px] mx-auto mt-2">
          The Proxy Academy offers a diverse range of tech programmes designed
          to inspire and empower young minds. Our courses are hands-on,
          interactive, and tailored to various age groups and skill levels.
          Discover the perfect path for your child's tech journey today!
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        <div className="bg-white w-full h-64 rounded-lg flex justify-center items-center mb-5 lg:mb-0">
          <div className="p-3 text-center lg:text-left">
            <FontAwesomeIcon
              className="text-primary text-[24px] lg:text-[28px] xl:text-[36px]"
              icon={faCode}
            />
            <h4 className="font-bold font-title text-primary text-[14px] xl:text-[18px] uppercase my-1">
              Introduction to Coding
            </h4>
            <p className="text-[11px] xl:text-[12px] text-dark">
              {" "}
              Designed for beginners, this engaging 3-months programme teaches
              the fundamentals of coding through fun, interactive lessons. Using
              kid-friendly programming languages and tools, students will create
              their own projects and develop essential problem-solving skills.
            </p>
          </div>
        </div>
        <div className="bg-dark w-full h-64 rounded-lg flex justify-center items-center mb-5 lg:mb-0">
          <div className="p-3 text-center lg:text-left">
            <FontAwesomeIcon
              className="text-light text-[24px] lg:text-[28px] xl:text-[36px]"
              icon={faCodeMerge}
            />
            <h4 className="font-bold font-title text-light text-[14px] xl:text-[18px] uppercase my-1">
              Web Development
            </h4>
            <p className="text-[11px] xl:text-[12px] text-light">
              {" "}
              Students learn to create stunning websites from scratch, mastering
              essential languages like HTML, CSS, and JavaScript. Through
              hands-on projects,participants will develop the skills to design,
              build, and launch their own web pages, gaining a solid foundation
              in both front-end and back-end development.
            </p>
          </div>
        </div>
        <div className="bg-primary w-full h-64 rounded-lg flex justify-center items-center mb-5 lg:mb-0">
          <div className="p-3 text-center lg:text-left">
            <FontAwesomeIcon
              className="text-white text-[24px] lg:text-[28px] xl:text-[36px]"
              icon={faChartSimple}
            />
            <h4 className="font-bold font-title text-white text-[14px] xl:text-[18px] uppercase my-1">
              Data Analysis
            </h4>
            <p className="text-[11px] xl:text-[12px] text-white">
              {" "}
              Designed to equip young learners with skills in data
              interpretation and decision-making. Through engaging, hands-on
              projects, students will explore the fundamentals of data
              collection, visualization, and analysis using industry-standard
              tools.
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-64 rounded-lg flex justify-center items-center">
          <div className="p-3 text-center lg:text-left">
            <FontAwesomeIcon
              className="text-primary text-[24px] lg:text-[28px] xl:text-[36px]"
              icon={faPenNib}
            />
            <h4 className="font-bold text-primary text-[14px] xl:text-[18px] uppercase my-1">
              Digital Design
            </h4>
            <p className="text-[11px] xl:text-[12px] text-dark">
              {" "}
              This engaging array of courses introduces young learners to the
              exciting world of digital arts, including graphic design,
              animation, and product design. Whether it's creating eye-catching
              graphics, dynamic animations, or innovative digital projects, our
              Digital Design programme nurtures artistic talent and technical
              proficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProgrammes;
