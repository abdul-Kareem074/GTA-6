import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Grand Theft Auto VI",
      category: "Open World Game",
      image: "https://placehold.co/600x400/333/FFF",
      description: "The next evolution in the Grand Theft Auto series, featuring a massive open world and groundbreaking gameplay innovations.",
      technologies: ["Unreal Engine 5", "C++", "DirectX 12"]
    },
    {
      id: 2,
      title: "Red Dead Redemption 3",
      category: "Action-Adventure",
      image: "https://placehold.co/600x400/333/FFF",
      description: "The third installment in the critically acclaimed Red Dead series, set in an expansive and immersive Wild West environment.",
      technologies: ["RAGE Engine", "C++", "Vulkan"]
    },
    {
      id: 3,
      title: "Bully 2",
      category: "Action-Adventure",
      image: "https://placehold.co/600x400/333/FFF",
      description: "The long-awaited sequel to the cult classic Bully, featuring a new school environment and modern gameplay mechanics.",
      technologies: ["Unreal Engine 4", "C#", "HLSL"]
    },
    {
      id: 4,
      title: "Midnight Club: Los Angeles",
      category: "Racing",
      image: "https://placehold.co/600x400/333/FFF",
      description: "A revival of the beloved racing series, featuring next-gen graphics and an extensive vehicle customization system.",
      technologies: ["Custom Engine", "C++", "DirectX 11"]
    },
    {
      id: 5,
      title: "L.A. Noire 2",
      category: "Detective Adventure",
      image: "https://placehold.co/600x400/333/FFF",
      description: "The sequel to the groundbreaking detective game, featuring enhanced facial animation technology and complex crime solving.",
      technologies: ["MotionScan 2.0", "C++", "AI-driven NPCs"]
    },
    {
      id: 6,
      title: "Max Payne 4",
      category: "Third-Person Shooter",
      image: "https://placehold.co/600x400/333/FFF",
      description: "The return of the iconic shooter series, featuring the signature bullet-time mechanics with modern gameplay enhancements.",
      technologies: ["Unreal Engine 5", "C++", "PhysX"]
    }
  ];

  useGSAP(() => {
    gsap.from('.project-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.project-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <h1 className="project-title text-6xl font-bold mb-12 text-center">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 m-2 rounded">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors w-full font-bold">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
