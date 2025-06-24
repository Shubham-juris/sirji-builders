import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ServicePage from "../pages/ServicePage";
import Projects from "../pages/Projects";

const Routepage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default Routepage;
