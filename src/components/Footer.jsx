import React from 'react';
import 'remixicon/fonts/remixicon.css';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="logo flex gap-5">
              <div className="lines flex flex-col gap-[4px]"> 
                <div className="line w-10 h-1 bg-white"></div>
                <div className="line w-5 h-1 bg-white"></div>
                <div className="line w-3 h-1 bg-white"></div>
              </div>
              <h3 className="text-2xl -mt-[7px] leading-none">ROCKSTAR</h3>
            </div>
            <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
          
          <div className="social-links">
            <ul className="flex gap-6">
              <li><a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="ri-github-fill"></i></a></li>
              <li><a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="ri-linkedin-box-fill"></i></a></li>
              <li><a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="ri-twitter-fill"></i></a></li>
              <li><a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="ri-instagram-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
