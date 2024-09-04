import React from 'react'
import "./About.css"
import AboutUs from '../../Component/About/About'
import abbanner from "../../Assets/About/aboutbanner.jpg"
import PageBanner from '../../Component/PageBanner/PageBanner'
import PresClients from '../../Component/PresClients/PresClients'

const About = () => {
  return (
    <div className='About'>
      <PageBanner banner={abbanner} title={"About Us"}/>
      <AboutUs />
      <div className='About-main'>
        {/* About */}
      </div>
      <PresClients/>
    </div>
  )
}

export default About
