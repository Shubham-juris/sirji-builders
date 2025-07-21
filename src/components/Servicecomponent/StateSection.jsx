import React from "react";

const stats = [
  {
    value: "99%",
    label: "Buildings Control Approval Rate",
  },
  {
    value: "320+",
    label: "Active Construction Management",
  },
  {
    value: "200+",
    label: "Completed Projects Every Year",
  },
  {
    value: "4.253",
    label: "Million Euros Turnover In The 2020",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#e6f2fb] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-yellow-500 uppercase font-semibold tracking-wide mb-2">
          What We Do
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
          Building the future on a <br /> foundation of excellence
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0d1b2a] text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm text-center text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
