import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Tracks', path: '/#tracks' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
         <Link to="/" className="flex items-center gap-3 group">
        <img
          src={logo}
          alt="SkillSprint Logo"
          className="h-14 w-14 rounded-full transition-transform duration-300 group-hover:scale-110 drop-shadow-glow"
        />
        <span className="text-white text-2xl font-extrabold tracking-wide transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-glow">
          Skill<span className="text-cyan-400">Sprint</span>
        </span>
      </Link>
      

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-400 hover:text-blue-500 font-medium transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-blue-500 font-medium transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
