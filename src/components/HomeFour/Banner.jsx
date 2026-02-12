// import React, { useState } from 'react';
// import { Link  } from 'react-router-dom';
// import ModalVideo from 'react-modal-video';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import images
// import Image1 from '../../assets/images/main-slider/4.jpeg'; // First image
// import Image2 from '../../assets/images/main-slider/2.jpeg'; // Second image

// const swiperOptions = {
//     modules: [Autoplay, Navigation, Pagination],
//     slidesPerView: 1,
//     autoplay: {
//         delay: 8500,
//         disableOnInteraction: false,
//     },
//     loop: true,
// };

// function BannerSectionThree({ className }) {
//     const [isOpen, setOpen] = useState(false);
    
//     return (
//         <>
//             <section className={`banner-section-three ${className || ''}`}>
//                 <Swiper {...swiperOptions} className="banner-carousel owl-theme">
//                     {/* Slide Item 1 */}
//                     <SwiperSlide className="slide-item">
//                         <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
//                         <div className="auto-container">
//                             <div className="content-box">
//                                 <h1 className="title animate-1">Innovations</h1>
//                                 <h2 className="sub-title animate-2">Technology Partners</h2>
//                                 <div className="btn-box animate-3">
//                                     <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
//                                         <span className="btn-title">Discover more</span>
//                                     </Link >
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     {/* Slide Item 2 */}
//                     <SwiperSlide className="slide-item">
//                         <div className="bg-image" style={{ backgroundImage: `url(${Image2})` }}></div>
//                         <div className="auto-container">
//                             <div className="content-box">
//                                 <h1 className="title animate-1">Innovations</h1>
//                                 <h2 className="sub-title animate-2">Technology Partners</h2>
//                                 <div className="btn-box animate-3">
//                                     <Link  to="/about-us" className="theme-btn btn-style-one hvr-light">
//                                         <span className="btn-title">Discover more</span>
//                                     </Link >
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </section>
//             <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
//         </>
//     );
// }

// export default BannerSectionThree;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"; // Added EffectFade

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Added Fade style

// Import images
import Image1 from '../../assets/images/main-slider/4.jpeg';
import Image2 from '../../assets/images/main-slider/2.jpeg';

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    effect: "fade", 
    fadeEffect: {
        crossFade: true
    },
    speed: 2000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    
};

function BannerSectionThree({ className }) {
    return (
        <section className={`banner-section-three ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel">
                {/* Slide Item 1 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className="title animate-1">Innovations</h1>
                            <h2 className="sub-title animate-2">Technology Partners</h2>
                            <div className="btn-box animate-3">
                                <Link to="/about-us" className="theme-btn btn-style-one hvr-light">
                                    <span className="btn-title">Discover more</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide Item 2 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${Image2})` }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className="title animate-1">Smart Solutions</h1>
                            <h2 className="sub-title animate-2">Digital Transformation</h2>
                            <div className="btn-box animate-3">
                                <Link to="/about-us" className="theme-btn btn-style-one hvr-light">
                                    <span className="btn-title">Discover more</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BannerSectionThree;