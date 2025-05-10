import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Skills() {
  const technicalSkills = [
    { name: "C++", level: 95 },
    { name: "C#", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Unreal Engine", level: 95 },
    { name: "Unity", level: 90 },
    { name: "DirectX", level: 85 },
    { name: "OpenGL", level: 80 },
  ];

  const designSkills = [
    { name: "3D Modeling", level: 85 },
    { name: "Texture Design", level: 80 },
    { name: "Character Design", level: 90 },
    { name: "Environment Design", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "Animation", level: 80 },
  ];

  const softSkills = [
    { name: "Team Leadership", icon: "ri-team-line" },
    { name: "Problem Solving", icon: "ri-lightbulb-line" },
    { name: "Project Management", icon: "ri-task-line" },
    { name: "Communication", icon: "ri-chat-3-line" },
    { name: "Time Management", icon: "ri-time-line" },
    { name: "Adaptability", icon: "ri-refresh-line" },
  ];

  useGSAP(() => {
    gsap.from('.skills-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.skill-section', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.skill-bar-fill', {
      width: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.out',
      stagger: 0.1
    });
    
    gsap.from('.soft-skill-item', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <h1 className="skills-title text-6xl font-bold mb-16 text-center">My Skills</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div className="skill-section">
              <h2 className="text-3xl font-bold mb-8 text-yellow-500">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar-fill bg-yellow-500 h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Design Skills */}
            <div className="skill-section">
              <h2 className="text-3xl font-bold mb-8 text-yellow-500">Design Skills</h2>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar-fill bg-yellow-500 h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="skill-section mt-16">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">Soft Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="soft-skill-item bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="text-yellow-500 text-4xl mb-4">
                    <i className={skill.icon}></i>
                  </div>
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools Section */}
          <div className="skill-section mt-16">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">Tools & Software</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="font-bold">Unreal Engine</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="font-bold">Blender</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="font-bold">Visual Studio</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="text-5xl mb-4">🖌️</div>
                <h3 className="font-bold">Adobe Suite</h3>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
