import React from "react";
import ServicesSection from "../components/Servicecomponent/ServiceSection";
import ServiceHero from "../components/Servicecomponent/ServiceHero";
import StatsSection from "../components/Servicecomponent/StateSection";

const ServicePage = () => {
  return (
    <>
      <ServiceHero />
      <ServicesSection />
      <StatsSection/>
    </>
  );
};

export default ServicePage;
