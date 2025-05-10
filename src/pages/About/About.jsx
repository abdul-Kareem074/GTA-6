import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {
  useGSAP(() => {
    gsap.from('.about-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.about-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <h1 className="about-title text-6xl font-bold mb-12 text-center">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="about-image relative overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x800/333/FFF" 
                alt="Profile" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            
            <div className="about-content space-y-6">
              <h2 className="text-4xl font-bold text-yellow-500">Game Developer & Designer</h2>
              
              <p className="text-xl">
                I'm a passionate game developer with expertise in creating immersive gaming experiences. 
                My journey in game development started with a fascination for interactive storytelling and 
                has evolved into a professional career building engaging virtual worlds.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="ri-gamepad-line text-2xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Game Development</h3>
                    <p>Creating immersive gaming experiences with cutting-edge technology</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="ri-code-s-slash-line text-2xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Programming</h3>
                    <p>Proficient in C++, C#, JavaScript and game engines like Unity and Unreal</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="ri-brush-line text-2xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">3D Modeling & Design</h3>
                    <p>Creating stunning visual assets and environments for games</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-24 font-bold">2020-Now</div>
                    <div>Lead Game Developer at Rockstar Games</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-bold">2018-2020</div>
                    <div>Senior Developer at Epic Games</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-bold">2015-2018</div>
                    <div>Game Developer at Ubisoft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default About;
