import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeHero from '../images/hero.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg={HomeHero}
        title="Unparalleled Luxury,"
        titleSpan="Unforgettable Journeys"
        text="Discover unparalleled luxury and bespoke experiences in the world's most exclusive destinations."
        buttonText="Explore Luxury"
        url="/"
        btnClass="show"
      />
<Destination/>
<Trip/>

<Footer/>






    </>
  )
}

export default Home
