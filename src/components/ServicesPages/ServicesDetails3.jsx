import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ServiceDetailsImage from '../../assets/images/resource/service-details.png';
import ServiceDetailsBackground1 from '../../assets/images/resource/contact.jpg';
import ServiceDetailsBackground2 from '../../assets/images/resource/overlay-shape.png';

function ServicesDetails3() {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Services Details"
                breadcrumb={[
                    { Link: '/', title: 'Home' },
                    { Link: '/service-details', title: 'Services Details' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        {/* Start Services Details Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                {/* Start Services Details Sidebar Single */}
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                                        <div className="service-list">
                                            <ul>
                                                <li>
                                                    <Link to="/service-details3" className="current">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Artificial Intelligence</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link to="/service-details1">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>UI/UX Design</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link to="/service-details2">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Data Analysis</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link to="/service-details4" >
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Website Development</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link to="/service-details5">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>APP Development</span>
                                                    </Link >
                                                </li>

                                                <li>
                                                    <Link to="/service-details6" >
                                                       <i className="fas fa-angle-right"></i>
                                                        <span>Security System</span>
                                                    </Link >
                                                </li>
                                                {/* <li>
                                                    <Link  to="/service-details">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Data Visualization</span>
                                                    </Link >
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Services Details Sidebar Single */}

                                {/* Start Banner Widget */}
                                <div className="sidebar-widget banner-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${ServiceDetailsBackground1})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${ServiceDetailsBackground2})` }}></div>
                                        <div className="content-box">
                                            <div className="icon-box">
                                                <i className="lnr lnr-icon-pie-chart"></i>
                                            </div>
                                            <h3>Be healthy & eat only fresh</h3>
                                            <Link to="page-contact.html" className="theme-btn btn-style-two bg-light">
                                                <span className="btn-title text-black"> Contact us</span>
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                {/* End Banner Widget */}

                               
                            </div>
                        </div>
                        {/* End Services Details Sidebar */}

                        {/* Start Services Details Content */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src={ServiceDetailsImage} alt="" />
                                <h2 className="mt-4">Service Overview</h2>
                                <p> Our Artificial Intelligence course provides a comprehensive, project-driven path designed to 
                                    transform aspiring developers into AI-ready engineers. We go beyond simple theory by immersing 
                                    students in the full lifecycle of AI development, from mastering Python-based logic to deploying 
                                    sophisticated Large Language Models (LLMs).</p>
                                
                                <div className="mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Here are Some Frequently asked questions that may help you</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        <li className={`accordion block ${showQues === 1 ? 'active-block' : ''}`} onClick={() => openQuestion(1)}>
                                            <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                                Do I need a strong background in advanced mathematics to succeed in this course?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">While AI is rooted in math, you do not need to be a mathematician to start. 
                                                        We teach the essential "Applied Mathematics"—specifically Linear Algebra and Probability—through 
                                                        the lens of programming. If you can understand basic logic and variables, we will provide the tools 
                                                        to help you master the rest as you build your models.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 2 ? 'active-block' : ''}`} onClick={() => openQuestion(2)}>
                                            <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                                Will I learn how to integrate AI into my existing web or mobile apps?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Absolutely. A major focus of our final module is API integration. You will learn how to 
                                                        connect powerful models (like Gemini or GPT) to front-end frameworks. This ensures your AI projects 
                                                        aren't just scripts running in a terminal but are functional features within a polished user interface.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 3 ? 'active-block' : ''}`} onClick={() => openQuestion(3)}>
                                            <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                                What is the difference between "Machine Learning" and "Generative AI" in this curriculum?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Machine Learning (ML) focuses on prediction and classification, like forecasting sales or identifying objects in a 
                                                        photo. Generative AI focuses on creation, such as generating text, code, or images. Our course covers
                                                         both: the ML foundation gives you the "brain" for data.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li className={`accordion block active-block ${showQues === 4 ? 'active-block' : ''}`} onClick={() => openQuestion(4)}>
                                            <div className={`acc-btn ${showQues === 4 ? 'active' : ''}`}>
                                                How long does it take to see results from digital marketing?

                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 4 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">It depends on the service. SEO takes 3–6 months, while paid ads and social media campaigns can show results within days or weeks.z</div>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Services Details Content */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ServicesDetails3;
