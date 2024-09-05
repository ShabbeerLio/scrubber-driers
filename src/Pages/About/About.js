import React from 'react'
import "./About.css"
import AboutUs from '../../Component/About/About'
import abbanner from "../../Assets/About/aboutbanner.jpg"
import PageBanner from '../../Component/PageBanner/PageBanner'
import PresClients from '../../Component/PresClients/PresClients'
import Work from '../../Component/Work/Work'
import CallAction from '../../Component/CallAction/CallAction'
import FAQs from '../../Component/Work/FAQs'

const About = () => {
  return (
    <div className='About'>
      <PageBanner banner={abbanner} title={"About Us"} />
      <AboutUs />
      <PresClients />
      <CallAction />
    </div>
  )
}

export default About
