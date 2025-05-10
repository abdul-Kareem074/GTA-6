import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useGSAP(() => {
    gsap.from('.contact-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.contact-info', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out'
    });
    
    gsap.from('.contact-map', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          <h1 className="contact-title text-6xl font-bold mb-12 text-center">Get In Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-form bg-gray-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-800' : 'bg-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-semibold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-semibold">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="contact-info bg-gray-900 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <i className="ri-map-pin-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Location</h3>
                      <p className="text-gray-400">123 Game Street, New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <i className="ri-mail-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Email</h3>
                      <p className="text-gray-400">contact@gamedev.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                      <i className="ri-phone-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <i className="ri-twitter-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <i className="ri-instagram-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-map bg-gray-900 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                  {/* In a real application, you would embed a Google Map here */}
                  <div className="text-center">
                    <i className="ri-map-2-line text-6xl text-yellow-500 mb-4"></i>
                    <p className="text-gray-400">Interactive Map Would Be Displayed Here</p>
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

export default Contact;
