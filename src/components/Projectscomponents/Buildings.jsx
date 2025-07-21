import React from "react";
import aspen from "../../assets/projects/img1.webp";
import forest from "../../assets/projects/img2.jpg";
import bayside from "../../assets/projects/img3.jpeg";
import parkview from "../../assets/projects/img4.avif";
import horizon from "../../assets/projects/img5.jpg";
import crescent from "../../assets/projects/img6.jpeg";

const buildings = [
  { name: "Aspen Heights", img: aspen },
  {
    name: "Forest Hill Towers",
    img: forest,
    description:
      "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
  },
  { name: "Bayside Residences", img: bayside },
  { name: "Parkview Plaza", img: parkview },
  { name: "Horizon Heights", img: horizon },
  { name: "Crescent Towers", img: crescent },
];

const BuildingCard = ({ name, img, description }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group mt-5">
      <img
        src={img}
        alt={name}
        className="w-full  h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {description ? (
        <div className="absolute inset-0  bg-opacity-60 text-white p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg text-b  font-semibold">{name}</h3>
          <p className="text-sm mt-1 ">{description}</p>
          
        </div>
      ) : (
        <div className="absolute bottom-4 left-4  text-white text-lg font-semibold drop-shadow-lg">
          {name}
        </div>
      )}
    </div>
  );
};

const BuildingsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[#f9f9f9] min-h-screen">
      {buildings.map((bldg, idx) => (
        <BuildingCard key={idx} {...bldg} />
      ))}
    </div>
  );
};

export default BuildingsGrid;
