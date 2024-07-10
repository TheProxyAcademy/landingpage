import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  let settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: "50px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-5 lg:p-20">
      <h2 className="mb-3 text-lg lg:text-xl font-title uppercase font-bold">
        Testimonials
      </h2>
      <Slider {...settings}>
        <div className="bg-[#f0f0f0] min-h-48 p-5 rounded-md">
            <h3 className="text-dark font-title font-bold lg:text-[18px] text-[14px]">
              Taiwo Sunday, Nigeria
            </h3>
            <p className="text-[14px] lg:text-[16px] mt-2">
              "My second daughter said she is intrested after hearing the
              introduction, initially she wasn't intrested. But after seeing the
              scratch software, it tallies with what she wants."
            </p>
        </div>
        <div className="bg-[#f0f0f0] min-h-48 p-5 rounded-md">
          <h3 className="text-dark font-title font-bold lg:text-[18px] text-[14px]">
            Marcellin Bantek, Ireland
          </h3>
          <p className="text-[14px] lg:text-[16px] mt-2">
            "Apart from keeping her busy and occupied, it stimulates some
            critical thinking and curiosity in her that I never thought she had.
            Learning to code has has really helped Emmanuella a lot."
          </p>
        </div>
        <div className="bg-[#f0f0f0] min-h-48 p-5 rounded-md">
          <h3 className="text-dark font-title font-bold lg:text-[18px] text-[14px]">
            Taiwo Bukola, Nigeria
          </h3>
          <p className="text-[14px] lg:text-[16px] mt-2">
            "The tutor teaches excellently, If my child doesn't understand she
            explains again. My child also loves her classes, she always looks
            forward to them."
          </p>
        </div>
        <div className="bg-[#f0f0f0] min-h-48 p-5 rounded-md">
          <h3 className="text-dark font-title font-bold lg:text-[18px] text-[14px]">
            Motunrayo Da-costa, Nigeria
          </h3>
          <p className="text-[14px] lg:text-[16px] mt-2">
            "The instructor is great. I was even scared my son won't be
            intrested but i wanted him to try various fields. After the class he
            liked it and he was able to follow through and he is happy."
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
