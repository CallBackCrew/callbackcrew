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
import projectDetailsImage from '../../assets/images/resource/project-details2.jpeg';
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

function ProjectsDetails2() {
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
							<h3 className="">Here to Know About This Project</h3>
							<p className="">This project focuses on MapleHR, a comprehensive software solution designed to manage and automate various human resource processes within an organization. 
                                It is an integrated, technology-driven suite of applications that streamlines HR activities such as people management, 
                                payroll processing, leave management, finance, claims, funds, bonuses, and more. </p>
							<p className="mb-5">By replacing traditional paper-based processes with automated workflows,
                                 MapleHR enhances operational efficiency and 
                                improves overall workforce management.</p>
							<h3 className="">Project Challenges</h3>
							<p className="mb-5">The key challenges of this project was transforming manual and paper-based HR and claim management processes into 
                                a fully automated digital system. Ensuring accurate transaction handling for sensitive processes such as payroll, finance, and 
                                claims required a high level of system reliability and data integrity.</p>
							<h3 className="">Project Specialties</h3>
							<p className="">This project lies in its integrated and transaction-enabled Claim Management System, which allows adjusters and 
                                claim handlers to efficiently collect, evaluate, and approve claims digitally. MapleHR’s all-in-one HR platform centralizes 
                                multiple organizational functions into a single system, reducing administrative workload and improving efficiency</p>
						</div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box">
                                        <ul className="list-unstyled project-details__details-list">
                                            {/* <li><p className="project-details__client">Date</p><h4 className="project-details__name">10 January, 2023</h4></li> */}
                                            {/* <li><p className="project-details__client">Client</p><h4 className="project-details__name">Kodesolution Ltd</h4></li> */}
                                            <li><p className="project-details__client">Website</p><h4 className="project-details__name">www.maplehr.com</h4></li>
                                            <li><p className="project-details__client">Location</p><h4 className="project-details__name">New York, USA</h4></li>
                                            {/* <li><p className="project-details__client">Value</p><h4 className="project-details__name">$12,367</h4></li> */}
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
                                            <Link  to="/projects-details1" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link >
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link  to="/projects-details3" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link >
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

export default ProjectsDetails2;
