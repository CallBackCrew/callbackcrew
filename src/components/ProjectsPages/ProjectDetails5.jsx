import React from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Import images
import projectDetailsImage from '../../assets/images/resource/project-details5.jpeg';
import project1 from '../../assets/images/resource/project-1.jpg';
import project2 from '../../assets/images/resource/project-2.jpg';
import project3 from '../../assets/images/resource/project-3.jpg';
import project4 from '../../assets/images/resource/project-4.jpg';

// Swiper configuration
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectsDetails5() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Project Details"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/project-details', title: 'Project Details' },
                ]}
            />

            <section className="project-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__top">
                                <div className="project-details__img">
                                    <img src={projectDetailsImage} alt="Project Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-details__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                            <div className="project-details__content-left">
							<h3 className="">Zirtue – Relationship-Based Lending Platform</h3>
							<p className="">We create a Lend & Borrow application for all types of users. This is a USA-based Project. Our theme is that If someone has extra money he can trigger a message to his friends to give money on their interest & if someone has a shortage of money he can lend it from someone That is why we call our project headline “Loved ones & money do mix”. We create a smooth way of lending & borrowing money & also make returns very simple and easy on the pocket.</p>
							<p className="mb-5">Zirtue is a peer-to-peer lending platform that simplifies and formalizes loans between friends and family. It allows users to lend or borrow money with structured repayment plans, promoting financial accountability and transparency. I contributed to this project by [insert your role or contribution, e.g., "working on the frontend", "improving user experience", or "collaborating on UI components in React"], helping ensure a smooth, secure, and user-friendly experience.</p>
							<h3 className="">Technologies Used : </h3>
							<ul className="mb-5">
                                <li>MongoDb</li>
                                <li>React Native</li>
                                <li>Reactjs</li>
                                <li>Firebase</li>
                                <li>Node js</li>
                                <li>ACH payments</li>
                                <li>Dwolla</li>
                                <li>Plaid</li>
                                <li>Security Standard</li>
                                <li>code audit</li>
                                <li>Sms integration</li>
                                <li>Email Integration</li>
                                <li>Notification System</li>
                                <li>Interest Rate in USA</li>
                                <li>Scheduling tasks for recurring payment</li>
                                <li>Amortization Payment Formula</li>
                                <li>Monthly scheduler and cron job for payments</li>
                                <li>Problem Solving techniques</li>
                            </ul>
							{/* <h3 className="">Organic Food Supply</h3>
							<p className="">When an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It
								was popularised in the 1960s with the release of Letraset sheets containing. Neque
								porro est qui dolorem ipsumo.</p> */}
						</div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box">
                                        <ul className="list-unstyled project-details__details-list">
                                            <li><p className="project-details__client">Date</p><h4 className="project-details__name">10 January, 2023</h4></li>
                                            <li><p className="project-details__client">Client</p><h4 className="project-details__name">Kodesolution Ltd</h4></li>
                                            <li><p className="project-details__client">Website</p><a href="https://www.zirtue.com" className="project-details__name text-black ">https://www.zirtue.com</a></li>
                                            <li><p className="project-details__client">Location</p><h4 className="project-details__name">New York, USA</h4></li>
                                            <li><p className="project-details__client">Value</p><h4 className="project-details__name">$12,367</h4></li>
                                            <li>
                                                <div className="project-details__social">
                                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                                    <Link  to="#"><i className="fab fa-facebook"></i></Link >
                                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__pagination-box">
                                <ul className="project-details__pagination list-unstyled clearfix">
                                    <li className="next">
                                        <div className="icon">
                                            <Link  to="/projects-details4" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link >
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link  to="/projects-details" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link >
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsDetails5;
