import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import AboutUs from './AboutUs'

function Homepage() {
  return (
    <div>
         <Header/>
        <HeroSection/> 
        <FeaturedProducts/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Homepage