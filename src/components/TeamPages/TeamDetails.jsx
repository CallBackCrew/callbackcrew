import React from 'react';
import { Link  } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-4.jpeg';

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

function TeamDetails() {
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
                                        <h3 className="team-details__top-name">Shahbaz Nawaz</h3>
                                        <p className="team-details__top-title">Serinor Developer</p>
                                        <p className="team-details__top-text-1">My MERN stack mastery ensures secure, scalable solutions delivered on time.</p>
                                        <div className="team-details__social">
                                            <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                            <Link  to="#"><i className="fab fa-facebook"></i></Link >
                                            <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                            <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                        </div>
                                        <p className="team-details__top-text-3">
                                             My expertise spans JavaScript, MongoDB, AWS, and Docker, 
                                             with a knack for uncovering vulnerabilities in frameworks. I'm delving into ecosystem building, 
                                             problem-solving, protocols, and algorithms. My core skills include backend development 
                                             (Node.js, Microservices, MongoDB), web development (React.js), and creating robust APIs.
                                        </p>
                                        <p className="team-details__top-text-2">
                                            I also handle various databases (MongoDB, MySQL, SQL Server, DynamoDB) and payment gateways (Dwolla, Plaid, Stripe).
                                             Proficient in cloud services like AWS and Heroku, I also have experience with PHP, ASP .Net, C#, 
                                             and more.
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
                                        <p className=''><span className='fw-bold'>Xplora Technologies UK:</span> Specializes in innovative smartwatches for children, designed to enhance connectivity and safety</p>
                                        <p className=''><span className='fw-bold'>Devsinc Lahore:</span> Continuously monitor, optimize, and improve web applications for better performance and efficiency.</p>
                                        <p className=''><span className='fw-bold'>Data Magnetics Lahore:</span> All phases of project development, from concept to deployment. Plan and define project scope, goals, and deliverables in collaboration with stakeholders.</p>
                                        <p className=''><span className='fw-bold'>Devbeans Lahore:</span> Design, develop, and implement high-quality software solutions using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="JavaScript" targetPercentage={90} />
                                        <ProgressBar2 title="TypeScript" targetPercentage={85} />
                                        <ProgressBar2 title="Mongodb" targetPercentage={90} />
                                        <ProgressBar2 title="Node js" targetPercentage={97} />
                                        <ProgressBar2 title="Express js" targetPercentage={90} />
                                        <ProgressBar2 title="React js" targetPercentage={85} />
                                        <ProgressBar2 title="Web Socket" targetPercentage={90} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="team-contact-form">
                <div className="container pb-100">
                    <div className="sec-title text-center">
                        <span className="sub-title">Contact With Us Now</span>
                        <h2 className="section-title__title">Feel Free to Write Our <br /> Technology Experts</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form id="contact_form" name="contact_form" action="includes/sendmail.php" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="mb-3 text-center">
                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="theme-btn btn-style-one me-1" data-loading-text="Please wait...">
                                        <span className="btn-title">Send message</span>
                                    </button>
                                    <button type="reset" className="theme-btn btn-style-one">
                                        <span className="btn-title">Reset</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default TeamDetails;
