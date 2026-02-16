import React from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Service1Image from '../../assets/images/resource/service-1.jpg';
import Service2Image from '../../assets/images/resource/service-2.jpg';
import Service3Image from '../../assets/images/resource/service-3.jpg';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';

const ServicesDetails = () => {
    return (
        <>
          <HomeOneHeader />
          
            <section className="">
                <div className="container">
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details4"><img src={Service1Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details4">Web Development</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details4" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details1"><img src={Service2Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details1">UI/UX Designing</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details1" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details3"><img src={Service3Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details3">Artificial Intelligence</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details3" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details2"><img src={Service3Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details2">Data Analysis</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details2" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details6"><img src={Service1Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details6">Security System</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details6" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/service-details5"><img src={Service2Image} alt="" /></Link >
                                    </figure>
                                    <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link  to="/service-details5">App Development</Link ></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link  to="/service-details5" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />

            <FooterHomeOne />
        </>
    );
};

export default ServicesDetails;
