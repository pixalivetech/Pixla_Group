import React from 'react'
import HeroSection from '../Components/AboutUs/hero'
import WhoWeAre from '../Components/AboutUs/WhoWeAre'
import AboutUsSection from '../Components/AboutUs/AboutUsSection'   
import LeadershipSection from '../Components/AboutUs/LeadershipSection'
import Career from '../Components/AboutUs/Careers'
import Modern from "../Components/AboutUs/Modern";
import MediaAnnouncements from '../Components/AboutUs/MediaAnnouncements'
import TeamSection from '../Components/AboutUs/TeamSection'

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <AboutUsSection />
      <LeadershipSection />
      <Career />
      <Modern />
      <MediaAnnouncements />
      <TeamSection />
    </div>
  )
}

export default AboutUs
