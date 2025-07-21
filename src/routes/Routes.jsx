import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ServicePage from "../pages/ServicePage";
import Projects from "../pages/Projects";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Routepage = () => {
  return (
    <>
      <ScrollToTop />

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
