import React from "react";
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-details4.png';

// Progress bar component
const ProgressLine = ({ title, percent }) => (
    <div className="team-details__progress-single">
        <h4 className="team-details__progress-title">{title}</h4>
        <div className="bar">
            <div className="bar-inner count-bar" style={{ width: `${percent}%` }}>
                <div className="count-text">{percent}%</div>
            </div>
        </div>
    </div>
);

function TeamDetails4() {

    return (
     <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Team Details"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/team-details', title: 'Team Details' },
                ]}
            />
            <section className="team-details">
                <div className="container pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">
                                        <img src={TeamDetailsImg} alt="Aleesha Brown" />
                                        <div className="team-details__big-text"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        <h3 className="team-details__top-name">Muhammad Rashid Tahir</h3>
                                        <p className="team-details__top-title">MERN Backend Developer</p>
                                        <p className="team-details__top-text-1">MERN stack mastery ensures secure, scalable solutions delivered on time.</p>
                                        <div className="team-details__social">
                                            <Link  to="https://www.linkedin.com/in/imrashid-mern-stack-developer/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link >
                                            <Link  to="https://github.com/rashidhunjra" target="_blank"><i className="fa-brands fa-github"></i></Link >
                                        </div>
                                        <p className="team-details__top-text-3">
                                             My expertise spans the MERN stack, cloud platforms, and modern backend architectures, with strong capabilities 
                                             in building scalable and secure web applications. I specialize in backend development using Node.js and microservices
                                              architecture, alongside frontend development with React.js.
                                        </p>
                                        <p className="team-details__top-text-2">
                                            My goal is to contribute to impactful projects that deliver seamless user experiences while maintaining technical excellence. 
                                            I am always eager to collaborate, learn, and build solutions that make a meaningful difference in today’s evolving digital landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details__bottom pt-100">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                    <p className="team-details__bottom-left-text">
                                        <p className=''><span className='fw-bold'>CallBackCrew:</span> As a Backend Developer at CallBackCrew, 
                                        I was responsible for designing and managing server-side logic using Node.js. 
                                        I worked extensively with MongoDB for database management, ensuring efficient data modeling,
                                         optimized queries, and secure data handling. Version control and collaborative development were 
                                         managed through GitHub, maintaining clean workflows, structured repositories, and streamlined 
                                         deployment processes. </p>
                     
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="JavaScript" targetPercentage={85} />
                                        <ProgressBar2 title="Mongodb" targetPercentage={85} />
                                        <ProgressBar2 title="Node js" targetPercentage={85} />
                                        <ProgressBar2 title="Express js" targetPercentage={80} />
                                        <ProgressBar2 title="React js" targetPercentage={70} />
                                         <ProgressBar2 title="GitHub" targetPercentage={85} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterHomeOne />
            <BackToTop />
        </>
    )
}

export default TeamDetails4;