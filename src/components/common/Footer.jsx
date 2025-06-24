import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">SGRRSJI Builders</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              At SGRRSJI Builders, we specialize in creating exceptional residential, commercial, and industrial spaces. 
              With innovative designs, quality, and timely delivery, we turn visions into reality & build trust.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-3">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-500 transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} /> <span>070871 07693</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} /> <span>sgrrsjibuilders@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} />
                <a
                  href="https://www.instagram.com/sgrrsjibuilders"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-blue-400"
                >
                  @sgrrsjibuilders
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-6 text-center text-sm text-gray-500">
          <strong>Page:</strong> Building materials · Construction company · Commercial property agent
        </div>


        <div className="mt-4 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} SGRRSJI Builders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
