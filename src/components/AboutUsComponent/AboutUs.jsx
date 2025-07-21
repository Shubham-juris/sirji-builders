import React from 'react';
import aboutImg from '../../assets/about/about.png'
import { PhoneCall, CheckCircle2 } from 'lucide-react'; 

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 w-full">
          <img
            src={aboutImg}
            alt="about"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full space-y-6">
          <p className="text-yellow-500 font-semibold uppercase text-sm tracking-wide">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Crafting structures that <br /> last a lifetime
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials,
            resilient design, regular maintenance, and sustainability practices. By learning from historical examples
            and leveraging modern technology.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 space-y-4">
            {[
              "Comprehensive Services",
              "Advanced Technology",
              "Transparent Communication"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-yellow-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500">call  24x7</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-lg font-bold text-gray-900">
                <PhoneCall className="text-yellow-500" />
                07087107693
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
