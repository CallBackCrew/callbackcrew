import React from 'react';
import { Link  } from 'react-router-dom';
// Importing the image files
import ProjectImage1 from '../../assets/images/resource/project-1.jpeg';
import ProjectImage2 from '../../assets/images/resource/project-2.jpeg';
import ProjectImage3 from '../../assets/images/resource/project-3.jpeg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpeg';
import ProjectImage5 from '../../assets/images/resource/project-5.jpeg';
import ProjectImage6 from '../../assets/images/resource/project-6.jpeg';

function Projects() {
    return (
        <section className="">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details">
                                            <img src={ProjectImage1} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details">Diom</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details1">
                                            <img src={ProjectImage2} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details1" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details1">Matw</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details2">
                                            <img src={ProjectImage3} alt="Platform Integration" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details2" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details2">Maple HR</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details3">
                                            <img src={ProjectImage4} alt="Web Development" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details3" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details3">Xplora</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details4">
                                            <img src={ProjectImage5} alt="Tech Solutions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details4" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details4">Join Reflect</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link  to="/projects-details5">
                                            <img src={ProjectImage6} alt="Smart Visions" />
                                        </Link >
                                    </figure>
                                    <Link  to="/projects-details5" className="icon">
                                        <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link >
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link  to="/projects-details5">Zirtue</Link ></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;
