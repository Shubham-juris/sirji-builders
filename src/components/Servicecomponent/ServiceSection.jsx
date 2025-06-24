import React from "react";
import { ArrowRight } from "lucide-react";

import service1 from "../../assets/service/img1.jpg";
import service2 from "../../assets/service/img2.avif";
import service3 from "../../assets/service/img3.webp";
import service4 from "../../assets/service/img4.jpeg";

const services = [
  {
    title: "Building Construction",
    image: service1,
  },
  {
    title: "Architecture Design",
    image: service2,
  },
  {
    title: "Building Renovation",
    image: service3,
    description:
      "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
    viewMore: true,
  },
  {
    title: "Building Maintenance",
    image: service4,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#e6f2fb] py-16 mt-15">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold uppercase mb-2 tracking-wide">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our construction services
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group shadow-md"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end text-white">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                {service.description && (
                  <p className="text-sm mt-2">{service.description}</p>
                )}
                {service.viewMore && (
                  <button className="mt-3 text-yellow-400 hover:underline text-sm flex items-center gap-1">
                    View More <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
            View All Services <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
