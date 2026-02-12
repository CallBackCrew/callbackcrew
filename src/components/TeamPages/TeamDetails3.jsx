import React from "react";
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-details3.png';

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

function TeamDetails3() {

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
                                        <h3 className="team-details__top-name">Muzamil Hussain</h3>
                                        <p className="team-details__top-title">Web Developer</p>
                                        <p className="team-details__top-text-1">My MERN stack mastery ensures secure, scalable solutions delivered on time.</p>
                                        <div className="team-details__social">
                                            <Link  to="https://www.linkedin.com/in/muzamil-mern-stack-developer/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link >
                                            <Link  to="https://github.com/hussain-labs" target="_blank"><i className="fa-brands fa-github"></i></Link >
                                                <Link  to="https://x.com/MuzamilCreates" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link >
                                            <Link  to="https://www.facebook.com/profile.php?id=100087730677684" target="_blank"><i className="fab fa-facebook"></i></Link >
                                            {/* <Link  to="https://www.instagram.com/muzamilcreates/" target="_blank"><i className="fab fa-instagram"></i></Link > */}
                                        </div>
                                        <p className="team-details__top-text-3">
                                            I am a results-driven MERN Stack Developer with a primary focus on creating high-performance, 
                                            pixel-perfect user interfaces. With a year of hands-on experience, I specialize in translating 
                                            complex designs into seamless web experiences using React.js and Next.js. As a frontend expert, 
                                            I have a proven track record of implementing and managing a high volume of complex APIs using advanced
                                             state management tools like Redux Toolkit and React Query.
                                        </p>
                                        <p className="team-details__top-text-2">
                                           While my core expertise lies in frontend architecture and mastering Advanced JavaScript, I 
                                           also develop robust backend systems using Node.js to support full-stack project requirements. 
                                           As a dedicated problem-solver, I excel at debugging and optimizing code to deliver secure, scalable, 
                                           and visually precise digital solutions. <Link to={"https://muzamilhussain.netlify.app/"}  target="_blank">Click here to view my portfolio</Link>
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
                                        <p className=''><span className='fw-bold'>CallBackCrew :</span> Lead frontend development with a focus on delivering pixel-perfect, responsive
                                         UI components using Tailwind CSS and React.js.Implement and manage complex API architectures within the frontend, utilizing Redux Toolkit and React Query for efficient data flow.
                                         Execute full-stack tasks including Node.js backend development for specialized systems like patient management. Act as the lead problem-solver for the team, 
                                         troubleshooting complex bugs and managing deployments on AWS EC2.</p>
                                        
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="React js | Next js" targetPercentage={80} />
                                        <ProgressBar2 title="Tailwindcss | Bootstrap" targetPercentage={85} />
                                        <ProgressBar2 title="Redux Toolkit | ReactQuery" targetPercentage={75} />
                                        <ProgressBar2 title="JavaScript" targetPercentage={85} />
                                        <ProgressBar2 title="Node js" targetPercentage={70} />
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

export default TeamDetails3;