import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceHero from '../images/service.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
const Service = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={ServiceHero}
        title="Luxury at Your Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service
