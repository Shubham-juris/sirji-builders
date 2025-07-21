import React from 'react'
import HomeSection from '../components/Homecomponent/HomeSection'
import AboutUs from '../components/AboutUsComponent/AboutUs'
import ServicesSection from '../components/Servicecomponent/ServiceSection'
import BuildingsGrid from '../components/Projectscomponents/Buildings'
import StatsSection from '../components/Servicecomponent/StateSection'

const HomePage = () => {
  return (
    <>
      <HomeSection/>
      <AboutUs/>
      <ServicesSection/>
      <StatsSection/>
      <BuildingsGrid/>
    </>
  )
}

export default HomePage
