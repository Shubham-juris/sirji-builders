import React from 'react';
import image from '../../assets/about/img2.webp';

const HistorySection = () => {
  return (
    <section className="bg-[#eaf6fd] py-20 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image with card */}
        <div className="relative w-full md:w-1/2">
          <img
            src={image}
            alt="Construction site"
            className="rounded-3xl w-full h-auto object-cover shadow-lg"
          />
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-xl w-40 text-center">
            <h2 className="text-3xl font-extrabold text-black">25+</h2>
            <p className="text-sm text-gray-500 mt-1">Years Of Experience</p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm font-semibold text-yellow-500 uppercase mb-2">Our History</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
            Crafting structures that <br className="hidden md:block" /> last a lifetime
          </h2>
          <p className="text-gray-600 text-base mb-4">
            We specialize in a wide range of construction services, including residential, commercial,
            and industrial projects. From initial design to final inspection, we work closely with our
            clients to understand their unique needs and vision.
          </p>
          <p className="text-gray-500 text-sm">
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
