import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ServiceDetailsImage from '../../assets/images/resource/service-details2.jpeg';
import ServiceDetailsBackground1 from '../../assets/images/resource/contact.jpg';
import ServiceDetailsBackground2 from '../../assets/images/resource/overlay-shape.png';

function ServicesDetails5() {
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
                    { Link : '/', title: 'Home' },
                    { Link : '/service-details', title: 'Services Details' },
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
                                                    <Link  to="/service-details" >
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Digital Marketing</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link  to="/service-details1">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>UI/UX Design</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link  to="/service-details2" >
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Data Analysis</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link  to="/service-details3">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Website Development</span>
                                                    </Link >
                                                </li>
                                                <li>
                                                    <Link  to="/service-details4">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Security System</span>
                                                    </Link >
                                                </li>
                                                {/* <li>
                                                    <Link  to="/service-details" className="current">
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
                                            <Link  to="page-contact.html" className="theme-btn btn-style-two bg-light">
                                                <span className="btn-title text-black"> Contact us</span>
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                {/* End Banner Widget */}

                                {/* Start Services Details Sidebar Single */}
                                {/* <div className="sidebar-widget service-sidebar-single mt-5">
                                    <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                        <Link  to="#" className="theme-btn btn-style-one d-grid">
                                            <span className="btn-title">
                                                <span className="fas fa-file-pdf"></span> download pdf file
                                            </span>
                                        </Link >
                                    </div>
                                </div> */}
                                {/* End Services Details Sidebar Single */}
                            </div>
                        </div>
                        {/* End Services Details Sidebar */}

                        {/* Start Services Details Content */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src={ServiceDetailsImage} alt="" />
                                <h2 className="mt-4">Service Overview</h2>
                                <p> We turn your ideas into powerful mobile apps that drive results. From intuitive UI/UX to seamless performance, we build custom Android and iOS apps that engage users, enhance customer experience, and grow your business.








</p>
                                {/* <div className="content mt-40">
                                    <div className="text">
                                        <h3>Service Center</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Fast home delivery</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Secure Payments</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Delivering best products</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Food Inspections</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Generator Systems</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Assessments</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Here are Some Frequently asked questions that may help you</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        <li className={`accordion block ${showQues === 1 ? 'active-block' : ''}`} onClick={() => openQuestion(1)}>
                                            <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                                Why is data analysis important for businesses?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Data analysis helps businesses make informed decisions, understand customer behavior, improve operations, and identify new opportunities or problems early.

</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 2 ? 'active-block' : ''}`} onClick={() => openQuestion(2)}>
                                            <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                                What types of data can you analyze?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">We can analyze various data types including sales data, customer data, web analytics, financial records, social media metrics, survey responses, and more.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 3 ? 'active-block' : ''}`} onClick={() => openQuestion(3)}>
                                            <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                                What’s the difference between data analysis and data science?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Data analysis focuses on examining and interpreting existing data to find patterns and insights. Data science is broader and includes building predictive models, using machine learning, and handling large-scale data processing.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 4 ? 'active-block' : ''}`} onClick={() => openQuestion(4)}>
                                            <div className={`acc-btn ${showQues === 4 ? 'active' : ''}`}>
                                               Do I need technical knowledge to understand the results?

                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 4 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">No. We present the results in clear, simple visuals and summaries so you can make decisions without needing to be a data expert.</div>
                                                </div>
                                            </div>
                                        </li>
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

export default ServicesDetails5;
