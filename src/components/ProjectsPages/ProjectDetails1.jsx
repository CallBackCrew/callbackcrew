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
import projectDetailsImage from '../../assets/images/resource/project-details1.jpeg';
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

function ProjectsDetails1() {
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
							<p className="">This project represents the mission and vision of MATW (Muslims Around The World), a global humanitarian organization founded in 2016 and inspired by the life and legacy of Ali Banat. What began as Ali Banat’s courageous journey following a cancer diagnosis has evolved into
                                 a powerful global movement dedicated to transforming lives through compassion, faith, and action. </p>
							<p className="mb-5">Operating across 24 countries, MATW focuses on creating sustainable impact, fostering community involvement, and building a transparent, donor-centered model that encourages generosity and 
                                long-term change for the sake of both humanity and the Akhirah</p>
							<h3 className="">Project Challenges</h3>
							<p className="mb-5">The challenges of this project is maintaining large-scale humanitarian impact while ensuring complete transparency and accountability across global operations. Expanding outreach across multiple countries requires consistent coordination, 
                                sustainable development planning, and efficient use of donor contributions.</p>
							<h3 className="">Project Specialties</h3>
							<p className="">The primary specialty of this project lies in its faith-driven, impact-focused humanitarian model. MATW is built on strong Islamic principles, compassion, unity, and 
                                excellence, ensuring that every initiative is carried out with sincerity and purpose.
                                A defining feature of the organization is its 100% donation policy, where contributions are directed entirely toward project costs and donor engagement
                             </p>
						</div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box">
                                        <ul className="list-unstyled project-details__details-list">
                                            {/* <li><p className="project-details__client">Date</p><h4 className="project-details__name">10 January, 2023</h4></li> */}
                                            {/* <li><p className="project-details__client">Client</p><h4 className="project-details__name">Kodesolution Ltd</h4></li> */}
                                            <li><p className="project-details__client">Website</p><h4 className="project-details__name">www.matwproject.org</h4></li>
                                            <li><p className="project-details__client">Location</p><h4 className="project-details__name">Bankstown, Australia</h4></li>
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
                                            <Link  to="/projects-details" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link >
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link  to="/projects-details2" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link >
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

export default ProjectsDetails1;
