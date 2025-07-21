import React from "react";
import { ArrowRight } from "lucide-react";

import service1 from "../../assets/service/img1.jpg";
import service2 from "../../assets/service/img2.avif";
import service3 from "../../assets/service/img3.webp";
import service4 from "../../assets/service/img4.jpeg";
import service5 from "../../assets/service/img5.jpg";
import service6 from "../../assets/service/img6.jpg";

const services = [
  {
    title: "Building Construction",
    image: service1,
    description: "We deliver durable and innovative construction solutions for all building types.",
  },
  {
    title: "Architecture Design",
    image: service2,
    description: "Our post-construction services give you peace of mind knowing we're still here for you.",
    viewMore: true,
  },
  {
    title: "Building Renovation",
    image: service3,
    description: "We modernize and restore spaces while maintaining structural integrity.",
  },
  {
    title: "Flooring & Roofing",
    image: service5,
    description: "We provide high-quality flooring and roofing solutions to enhance your structure.",
  },
  {
    title: "Building Maintenance",
    image: service4,
    description: "Ongoing care and attention to ensure your property stays in top condition.",
  },
  {
    title: "Project Management",
    image: service6,
    description: "From planning to completion, we manage your construction projects seamlessly.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#e6f2fb] py-16 mt-5">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end transition-all duration-300">
                <h3 className="text-white text-lg font-semibold relative z-10">{service.title}</h3>

                {/* Description for all */}
                <p className="text-sm text-white mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                  {service.description}
                </p>

                {/* View More Button if exists */}
                {service.viewMore && (
                  <button className="text-yellow-400 mt-3 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
                    View More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
