import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutHero from '../images/about.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={AboutHero}
        title="Our Legacy of Luxury"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About
