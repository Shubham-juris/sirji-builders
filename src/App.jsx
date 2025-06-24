import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import HomeSection from "./components/Homecomponent/HomeSection";
import Routepage from "./routes/Routes";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routepage/>
      <Footer/>
    </>
  );
}

export default App;
