import React from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'remixicon/fonts/remixicon.css';

function Navigation() {
  const pages = [
    {
      path: '/',
      name: 'Home',
      icon: 'ri-home-5-line',
      description: 'Welcome to my portfolio showcasing my GTA-inspired design work and projects',
      color: 'from-red-600 to-yellow-500'
    },
    {
      path: '/about',
      name: 'About',
      icon: 'ri-user-line',
      description: 'Learn more about my background, experience, and passion for game development',
      color: 'from-blue-600 to-purple-500'
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: 'ri-gamepad-line',
      description: 'Explore my portfolio of game development projects and creative works',
      color: 'from-green-600 to-teal-500'
    },
    {
      path: '/skills',
      name: 'Skills',
      icon: 'ri-tools-line',
      description: 'Discover my technical skills, design abilities, and professional expertise',
      color: 'from-yellow-600 to-orange-500'
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: 'ri-mail-line',
      description: 'Get in touch with me for collaborations, opportunities, or just to say hello',
      color: 'from-purple-600 to-pink-500'
    }
  ];

  useGSAP(() => {
    gsap.from('.nav-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.nav-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="nav-title text-6xl font-bold mb-12 text-center">Site Navigation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <Link 
              key={index}
              to={page.path}
              className={`nav-card bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group`}
            >
              <div className={`h-2 bg-gradient-to-r ${page.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${page.color} flex items-center justify-center text-2xl`}>
                    <i className={page.icon}></i>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 group-hover:text-yellow-500 transition-colors">{page.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{page.description}</p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform duration-300">
                    Visit <i className="ri-arrow-right-line ml-2"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pages.map((page, index) => (
              <Link 
                key={index}
                to={page.path}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <div className="text-3xl mb-2">
                  <i className={page.icon}></i>
                </div>
                <span className="font-bold">{page.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Navigation;
