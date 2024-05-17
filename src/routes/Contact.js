import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactHero from '../images/contact.jpg'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'
const Contact = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={ContactHero}
        title="Contact Our Luxury Specialists"
        btnClass="hide"
      />
      <Contactform/>
      <Footer/>
    </>
  )
}

export default Contact
