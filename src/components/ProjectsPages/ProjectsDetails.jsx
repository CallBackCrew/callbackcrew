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
import projectDetailsImage from '../../assets/images/resource/project-details.jpeg';
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

function ProjectsDetails() {
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
							<p className="">This project represents DIOM Holding’s vision of redefining modern workspaces through innovative, flexible, and people-centric solutions. 
                                DIOM is a Saudi-based workspace solutions provider offering co-working spaces, 
                                serviced corporate offices, and multipurpose venues designed to support individuals, startups, and corporate organizations. </p>
							<p className="mb-5">From leasing and workspace planning to design, build, and operation, the project delivers integrated environments that enhance performance, collaboration, 
                                and overall work experience while aligning with each client’s unique business identity.</p>
							<h3 className="">Project Challenges</h3>
							<p className="mb-5">The main challenges of this project was creating workspaces that balance privacy, functionality, and premium design for diverse users. Designing serviced corporate offices and
                                 multipurpose venues required careful planning to ensure adaptability for both corporate and creative events.</p>
							<h3 className="">Project Specialties</h3>
							<p className="">The key specialty of this project lies in its end-to-end workspace solutions, covering everything from design and build to day-to-day operation. The project offers premium serviced corporate offices that combine efficiency, privacy, and modern aesthetics, 
                                along with multipurpose venues tailored for business and creative use</p>
						</div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box">
                                        <ul className="list-unstyled project-details__details-list">
                                            {/* <li><p className="project-details__client">Date</p><h4 className="project-details__name">10 January, 2023</h4></li> */}
                                            {/* <li><p className="project-details__client">Client</p><h4 className="project-details__name">Kodesolution Ltd</h4></li> */}
                                            <li><p className="project-details__client">Website</p><h4 className="project-details__name">www.diom.sa</h4></li>
                                            <li><p className="project-details__client">Location</p><h4 className="project-details__name">Riyadh, Saudi Arabia</h4></li>
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
                                            <Link  to="/projects-details5" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link >
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link  to="/projects-details1" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link >
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

export default ProjectsDetails;
