import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import avatar from '../Icons/avatar.png';
import MsDacosta from '../Icons/MS Dacosta.jpeg'
import MsMarc from '../Icons/Ms Marcelline.jpeg';
export default class SimpleSlider extends Component {

    render() {


        const reviews = [
            {
                id: 1,
                img: avatar,
                name: 'Taiwo Bukola, Nigeria',
                text: `"She teaches excellently, If my child doesn't understand she explains again.
                    My child also loves her classes, she always looks forward to them."`,

            },

            {
                id: 2,
                img: MsDacosta,
                name: `Motunrayo Da-costa, Nigeria`,
                text: `"The instructor is great. I was even scared my son won't be intrested but i wanted him
                    to try various fields. After the class he liked it and he was able to follow through and he is happy."`
            },

            {
                id: 3,
                img: avatar,
                name: `Taiwo Sunday, Nigeria`,
                text: `"My second daughter said she is intrested after hearing the introduction, initially she
                    wasn't intrested. But after seeing the scrath software, it tallies with what she wants."`,
            },

            
            {
                id: 4,
                img: MsMarc,
                name: `Marcellin Bantek, Ireland`,
                text: `"Apart from keeping her busy and occupied, it stimulates some critical thinking and curiosity
                        in her that i never thought she had. Learning to code has really helped Emmanuella a lot."`,
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