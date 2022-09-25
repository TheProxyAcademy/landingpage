import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import richard from '../Icons/avatar-richard.png';
import ali from '../Icons/avatar-ali.png';
import shanai from '../Icons/avatar-shanai.png';

export default class SimpleSlider extends Component {

    render() {


        const reviews = [
            {
                id: 1,
                img: richard,
                name: 'Taiwo Bukola',
                text: `"She teaches excellently, If my child doesn't understand she explains again.
                    My child also loves her classes, she always looks forward to them."`,

            },

            {
                id: 2,
                img: ali,
                name: `Motunrayo Da-costa`,
                text: `"The instructor is great. I was even scared my son won't be intrested but i wanted him
                    to try various fields. After the class he liked it and he was able to follow through and he is happy."`
            },

            {
                id: 3,
                img: shanai,
                name: `Taiwo Sunday`,
                text: `"My second daughter said she is intrested after hearing the introduction, initially she
                    wasn't intrested. But after seeing the scrath software, it tallies with what she wants."`,
            }

        ]


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings} className='mobile-slider'>

                    {
                        reviews.map(
                            (i) => (
                                <div className="testimonials">

                                    <img src={i.img} alt='avatar' />

                                    <h3>
                                        {i.name}
                                    </h3>

                                    <p>
                                        {i.text}
                                    </p>
                                </div>
                            )
                        )
                    }

                </Slider>
            </div>
        );
    }
}