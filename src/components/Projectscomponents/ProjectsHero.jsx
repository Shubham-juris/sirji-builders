import React from "react";
import img from "../../assets/projects/hero.jpg"

const ProjectsHero = () => {
  return (
    <div className="relative w-full h-[500px] mt-20 ">
      <img
        src={img}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-2">Our Portfolio</h1>
       
      </div>
    </div>
  );
};

export default ProjectsHero;
