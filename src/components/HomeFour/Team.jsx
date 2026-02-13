import { Link  } from 'react-router-dom';
import TeamImage1 from '../../assets/images/resource/team-4.jpeg';
// import TeamImage2 from '../../assets/images/resource/team-details2.png'
import TeamImage3 from '../../assets/images/resource/team-details3.png';
import TeamImage4 from '../../assets/images/resource/team-details4.png';

function TeamSectionTwo() {
    return (
        <section className="team-section-two">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our team expert</span>
                    <h2>Meet Professionals</h2>
                </div>

                <div className="row">
                    {/* Team block */}
                    <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details">Shahbaz Nawaz</Link >
                                </h5>
                                <span className="designation">Serinor Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link d-flex items-center justify-content-start gap-2">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details">
                                        <img src={TeamImage1} alt="Shahbaz Nawaz" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details3">Muzamil Hussain</Link >
                                </h5>
                                <span className="designation">Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link d-flex items-center justify-content-start gap-2">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details3">
                                        <img src={TeamImage3} alt="Richerd William" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details4">M Rashid Tahir</Link >
                                </h5>
                                <span className="designation">Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link d-flex items-center justify-content-start gap-2">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details4">
                                        <img src={TeamImage4} alt="Rashid Tahir" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    
                    {/* <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="info-box">
                                <h5 className="name">
                                    <Link  to="/team-details2">Abas Ali Akhter</Link >
                                </h5>
                                <span className="designation">Serinor Developer</span>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-Link d-flex items-center justify-content-start gap-2">
                                    <Link  to="#"><i className="fab fa-twitter"></i></Link >
                                    <Link  to="#"><i className="fab fa-facebook-f"></i></Link >
                                    <Link  to="#"><i className="fab fa-pinterest-p"></i></Link >
                                    <Link  to="#"><i className="fab fa-instagram"></i></Link >
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image">
                                    <Link  to="/team-details2">
                                        <img src={TeamImage2} alt="Abas Ali Akhter" />
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default TeamSectionTwo;
