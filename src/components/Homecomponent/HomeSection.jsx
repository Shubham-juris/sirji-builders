import React from 'react';
import video from "../../assets/Home/video.mp4";

const HomeSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden mt-2">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

      <div className="absolute z-20 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-3xl px-4">
        <p className="text-3xl md:text-5xl  font-bold mb-4  leading-tight">Welcome to SGRRSJI Builders</p>
       
        <p className="text-base md:text-lg leading-relaxed mb-6">
          At SGRRSJI Builders, we specialize in creating exceptional residential, commercial, and industrial spaces.
          With innovative designs, superior quality, sustainability, and timely delivery, we turn visions into reality & building trust.
        </p>
      
      </div>
    </div>
  );
};

export default HomeSection;
