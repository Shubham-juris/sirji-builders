import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo/logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* 🔹 Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 rounded" />
        </Link>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
          <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
          <li><Link to="/projects" className="hover:text-orange-400">Projects</Link></li>
        </ul>

        {/* 🔹 Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-orange-400 text-black px-4 py-2 rounded hover:bg-orange-300 font-semibold">
              Contact Us
            </button>
          </Link>
        </div>

        {/* 🔹 Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-4 py-6 space-y-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="hover:text-orange-400">Services</Link></li>
            <li><Link to="/projects" onClick={toggleMenu} className="hover:text-orange-400">Projects</Link></li>
          </ul>
          <Link to="/contact">
            <button className="mt-4 w-full bg-orange-400 text-black py-2 rounded font-semibold hover:bg-orange-300">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
