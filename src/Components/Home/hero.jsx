import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import Hero from "./../../assets/Home/hero.png"
// Install react-icons: npm install react-icons



const DivisionsSection = () => {
  return (
    // Main container with a light gray background (bg-gray-50 or bg-gray-100)
    <div className="bg-gray-50 py-16  font-sans">
      <div className=" mx-auto px-6 md:px-24 text-center">
        
        {/* --- Top Text and Headings --- */}
        <div className="mb-12">
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-normal text-gray-800 tracking-wider mb-2">
            One Group. Many Divisions
          </h2>
          
          {/* Main Heading with Images */}
          <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-6">
            <div className="h-10 w-24 md:h-12 md:w-32 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                {/* Placeholder for the small image on the left */}
                <img src="/placeholder-left.jpg" alt="" className="w-full h-full object-cover opacity-70" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              Endless Opportunities
            </h1>
            
            <div className="h-10 w-24 md:h-12 md:w-32 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                {/* Placeholder for the small image on the right */}
                <img src="/placeholder-right.jpg" alt="" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>
          
          {/* Description Text */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Pixla Group drives impact across industries from Retail Media and FMCG to IT
            Services. With innovation, technology, and trust, we are building the future.
          </p>
        </div>
        
        {/* --- Button and Main Image --- */}
        <div className="relative">
          
          {/* Explore Divisions Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center 
                       bg-black text-white px-8 py-3 
                       text-base font-medium rounded-md shadow-lg 
                       hover:bg-gray-800 transition duration-300 z-10 
                       absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Explore Divisions <FaArrowRight className="ml-2 w-4 h-4" />
          </a>
          
          {/* Large Image */}
          <div className="mt-8 rounded-xl shadow-2xl overflow-hidden">
            <img
              src={Hero}
              alt="Team members working on computers"
              className="w-full h-80 object-cover"
              // Adjust max-height if you need to constrain the image size
            />
          </div>
        </div>
        
        {/* --- Statistics Bar --- */}
        <div className="mt-12 md:mt-16 flex justify-around flex-wrap gap-8">
          
          {/* Stat 1: Projects Completed */}
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-black text-black">1.2k</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Projects Completed</p>
          </div>

          {/* Stat 2: Years of Experience */}
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-black text-black">8+</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Years of Experience</p>
          </div>
          
          {/* Stat 3: Trusted Companies */}
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-black text-black">99+</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Trusted Companies</p>
          </div>

          {/* Stat 4: Happy Clients */}
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-black text-black">1.3k</p>
            <p className="text-sm md:text-base text-gray-600 mt-1">Happy Clients</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DivisionsSection;