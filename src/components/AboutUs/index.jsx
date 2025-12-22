import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeThree/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProjectSliderHomeOne from '../HomeOne/ProjectSliderHomeOne.jsx';
import AboutSectionSix from '../HomeFour/About2.jsx';
import IndustriesSection from '../HomeFive/Industries.jsx';
import TeamSectionTwo from '../HomeFour/Team.jsx';
import ClientHomeOne from '../HomeOne/ClientHomeOne2.jsx';
import ContactSectionThree from '../HomeFour/Contact.jsx';
import TestimonialSection from '../HomeOne/TestimonialHomeOne.jsx';

function AboutUs() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="About Us"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/about-us', title: 'About us' },
                ]}
            />

            <TeamSectionTwo />
            <ContactSectionThree />
            {/* <AboutSectionSix /> */}
            {/* <IndustriesSection /> */}
            {/* <ProjectSliderHomeOne /> */}
            {/* <ClientHomeOne /> */}
            <TestimonialSection />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default AboutUs;
