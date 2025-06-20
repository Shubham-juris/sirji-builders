import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from "../../assets/logo/logo.jpg"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-black/40 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold flex items-center gap-2">
         <img src={logo}className="h-13" />
        </div>

        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">About Us</li>
          <li className="hover:text-orange-400 cursor-pointer">Services</li>
          <li className="hover:text-orange-400 cursor-pointer">Projects</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-orange-400 text-black px-4 py-2 rounded hover:bg-orange-300 font-semibold">
            Contact Us
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 text-white px-4 py-6 space-y-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Projects</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
          <button className="mt-4 w-full bg-orange-800 text-black py-2 rounded font-semibold hover:bg-orange-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
