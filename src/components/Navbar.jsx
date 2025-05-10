import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation for navbar
  useGSAP(() => {
    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power3.out'
    });
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`navbar fixed top-0 left-0 z-[100] w-full py-6 px-6 md:px-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="logo flex gap-5 group">
            <div className="lines flex flex-col gap-[4px]"> 
              <div className="line w-10 h-1 bg-white group-hover:bg-yellow-500 transition-colors"></div>
              <div className="line w-5 h-1 bg-white group-hover:bg-yellow-500 transition-colors"></div>
              <div className="line w-3 h-1 bg-white group-hover:bg-yellow-500 transition-colors"></div>
            </div>
            <h3 className="text-2xl -mt-[7px] leading-none text-white group-hover:text-yellow-500 transition-colors">ROCKSTAR</h3>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links hidden md:block">
            <ul className="flex gap-8 text-white">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/about') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/projects" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/projects') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/skills" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/skills') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/contact') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/navigation" 
                  className={`hover:text-yellow-500 transition-colors ${isActive('/navigation') ? 'text-yellow-500 font-bold' : ''}`}
                >
                  <i className="ri-menu-3-line mr-1"></i> Menu
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-4 space-y-4 text-white">
            <li>
              <Link 
                to="/" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/about') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/projects') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/skills') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/contact') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/navigation" 
                className={`block py-2 hover:text-yellow-500 transition-colors ${isActive('/navigation') ? 'text-yellow-500 font-bold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="ri-menu-3-line mr-1"></i> Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
