import React from 'react';
import Button from '../Resusable/Button';
import Nav from '../Resusable/Nav';
import './Home.css';
import Office from '../Icons/Office.png'
import Teacher from '../Icons/Business Plan.gif'
import Benefits from '../Resusable/Benefits';
import Slider from '../Resusable/Slider';
import Mobile from '../Resusable/Mobile-Slider'
import Footer from '../Resusable/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
    return (
        <div>
            <div className='bck'>
                <div className='bck-2' id="home">
                    <Nav />
                    <div className='build-better'>
                        <div className='build-words' data-aos="fade-up" data-aos-duration="1000">
                            <h1>
                                Fun and Interactive coding sessions for kids.
                            </h1>
                            <p>
                                The Proxy Academy aims to provide education in the most innovative,
                                interactive and unorthodox manner. This gives the children a better
                                insight on valuable skills the traditinal educaton system
                                doesn't highlight.
                            </p>
                            <Button words={'Enroll'} />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <img src={Teacher} alt='Illustraion' />
                        </div>
                    </div>

                    <div className='build-better'>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <img src={Office} alt='Office Lady' />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='build-words'>
                            <h1>
                                Raising World-class Children in the digital space
                            </h1>
                            <p>
                                We are a team of professional and experts in the
                                in the education and technology industry.
                                Our teachers are trained, patient and fun.
                            </p>
                        </div>
                    </div>

                    <div className='differ' id="us">
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div data-aos="fade-up" >
                                <h2 className='differ-heading' >
                                    What's special about Proxy Academy
                                </h2>
                                <p className='differ-words'>
                                    We recognize the gap in the educational system that doesn't
                                    quite cater for the development of kids. We are bridging the
                                    gap by facilitating the knowledge of digital skills in ways kids
                                    can easily relate with - fun and interactive - to effectively
                                    function in a world that has gone largely digital.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <Benefits id={1}
                                headings={`Personalized Learning`}
                                words={`We value the quality in our delivery and we have adopted a one-on-one
                                        approach for our sessions in order to understand each students and move
                                        at their pace.`}
                            />

                            <Benefits id={2}
                                headings={`World Class Curriculum`}
                                words={`We operate with curriculums and models that have been
                                        tested and have proven effective by experts over the world.`}
                            />

                            <Benefits id={3}
                                headings={`Flexibility`}
                                words={`We operate with strict adherence to the rule of constant
                                        practice and learning but not at the expense  of the wellbeing 
                                        of our students. We consider psychological factors as well as 
                                        natural factors that might affect our sessions.`}
                            />
                        </div>

                    </div>


                    <div className='fee-option'>
                        <div className='naija'>
                            <h1>Nigeria</h1>
                            <div>
                                <h3> 1 month plan</h3>
                                <h2> &#8358; 40,000</h2>
                            </div>

                            <div>
                                <h3> 3 month plan</h3>
                                <h2> &#8358; 110,000</h2>
                            </div>
                        </div>

                        <div className='jand'>
                            <h1>Outside Nigeria</h1>
                            <div>
                                <h3> 1 month plan</h3>
                                <h2>  &#36; 100</h2>
                            </div>

                            <div>
                                <h3> 3 month plan</h3>
                                <h2>  &#36; 250</h2>
                            </div>
                        </div>
                    </div>

                    <div className='sliders-cont' id="test" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <Slider />
                        <Mobile />
                        <Button words={'Enroll'} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home