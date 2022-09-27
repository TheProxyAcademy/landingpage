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
                <div className='bck-2'>
                    <Nav />
                    <div className='build-better'>
                        <div className='build-words' data-aos="fade-up" data-aos-duration="1000">
                            <h1>
                                Teaching kids for a bright future.
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
                                Teaching Kids digital skills, for finicial freedom
                            </h1>
                            <p>
                                We are a team of professional and experts in the
                                in the education and technology industry.
                                Our teachers are trained, patient and fun.
                            </p>
                        </div>
                    </div>

                    <div className='differ'>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                <h2 className='differ-heading' >
                                    What's special about Proxy Academy
                                </h2>
                                <p className='differ-words'>
                                    Manage provides all the functionality your <br />
                                    team needs, without all the complexity. Our <br />
                                    software is tailor-made for mordern digital <br />
                                    product teams.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <Benefits id={1}
                                headings={`Track company-wide progress`}
                                words={`See how your day-to-day task fit into the wider vision.
                                      Go from tracking progress at the milestone level all the 
                                      way done to the smallest details. Never lose sight of the bigger picture again`}
                            />

                            <Benefits id={2}
                                headings={`Advanced builts-in reports`}
                                words={`Set internal delivery estimates and track progress toward
                                       company goals. Our customisable dashboard helps you 
                                       build out the reports you need to keep key stakeholders
                                       informed.`}
                            />

                            <Benefits id={3}
                                headings={`Everything you need in one place`}
                                words={`Stop jumping from one service another 
                                      to communicate, stores files, track tasks and share
                                      document. Manage offers an all-in-one team
                                      productivity solution.`}
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
                                <h2>  &#36; 40,000</h2>
                            </div>

                            <div>
                                <h3> 3 month plan</h3>
                                <h2>  &#36; 110,000</h2>
                            </div>
                        </div>
                    </div>

                    <div className='sliders-cont' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <Slider />
                        <Mobile />
                        <Button words={'Enroll'} />
                    </div>
                </div>
            </div>


            <div className='simplify-container' data-aos="zoom" data-aos-duration="700">
                <h1>
                    Enroll your kids today.
                </h1>

                <Button white={`white`} words={`Enroll`} />


            </div>

            <Footer />
        </div>
    )
}

export default Home