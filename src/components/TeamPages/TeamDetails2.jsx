import React from "react";
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-details2.png';

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

function TeamDetails2() {

    return(
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
                                        <h3 className="team-details__top-name">Abbas Ali Akhtar</h3>
                                        <p className="team-details__top-title">Serinor Developer</p>
                                        <p className="team-details__top-text-1">My full-stack mastery ensures secure, scalable solutions delivered on time.</p>
                                        <div className="team-details__social">
                                            <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                            <Link  to="#"><i className="fab fa-facebook"></i></Link >
                                            <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                            <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                        </div>
                                        <p className="team-details__top-text-3">
                                             My expertise in full-stack development, deep expertise in React.js and microservices architecture, 
                                             skilled in building scalable, high-performance web applications and integrating complex backend 
                                             services. I focus on delivering seamless, user-centric experiences while writing clean, modular,
                                              and maintainable JavaScript code across diverse projects.
                                        </p>
                                        <p className="team-details__top-text-2">
                                            I work extensively with a wide range of tools and technologies to ensure efficient development and reliable 
                                            deployment. My skill set includes Node.js, Express.js, MongoDB, and RESTful APIs for backend systems, 
                                            alongside deployment and automation using Vercel, Netlify, AWS, and CI/CD pipelines. 
                                            I am also proficient in Git/GitHub version control and Docker containerization,
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
                                        <p className=''><span className='fw-bold'>DucuMed AI  USA:</span> Developed scalable and responsive user interfaces using React.js for a HIPAA-compliant medical documentation platform used by healthcare professionals across the U.S.</p>
                                        <p className=''><span className='fw-bold'>Yellow Beams  USA:</span> Developed and maintained high-performance full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering seamless cross-platform user experiences across web and mobile.</p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="JavaScript" targetPercentage={90} />
                                        <ProgressBar2 title="React js" targetPercentage={97} />
                                        <ProgressBar2 title="Mongodb" targetPercentage={90} />
                                        <ProgressBar2 title="Node js" targetPercentage={95} />
                                        <ProgressBar2 title="Express js" targetPercentage={90} />
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

export default TeamDetails2;