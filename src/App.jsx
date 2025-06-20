import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import HomeSection from "./components/Homecomponent/HomeSection";
import Routepage from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar/>
      <Routepage/>
    </>
  );
}

export default App;
