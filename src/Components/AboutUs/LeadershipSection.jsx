// src/LeadershipSection.jsx
import React from 'react'
import { Link } from 'react-router-dom';

// IMPORTANT: Replace 'path/to/your/provided-image.jpg' with the actual
// path to the image you just uploaded. 
import leftSideVisual from './../../assets/AboutUs/person.png'; 

const LeadershipSection = () => {
  return (
    // Outer container: Sets the light gray background for the page area and centers the content block.
    <div className="flex justify-center items-center px-6 md:px-24  py-16 bg-[#F2F2F2] font-Open Sans">
      
      {/* Main content block: Max width is crucial for the proportions. No shadow. */}
      <div 
        className=" flex flex-col lg:flex-row overflow-hidden bg-white/0"
      >
        
        {/* === LEFT SIDE: Exact Visual Area with Fade === */}
        {/* === LEFT SIDE: Exact Visual Area with Blurred Edges === */}
          <div className="relative  flex items-center justify-center">

            {/* Main Square Image */}
            <img
              src={leftSideVisual}
              alt="Visionary leadership and growth quote"
              className="w-full h-full object-cover rounded-xl"
              style={{ zIndex: 2 }}
            />

            {/* Four-side Blur/Fade Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                // This creates the fade-out on all sides.
                background: `
                  radial-gradient(circle at top left, rgba(255,255,255,0.8) 0%, transparent 60%),
                  radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 60%),
                  radial-gradient(circle at bottom left, rgba(255,255,255,0.8) 0%, transparent 60%),
                  radial-gradient(circle at bottom right, rgba(255,255,255,0.8) 0%, transparent 60%)
                `,
                zIndex: 10,
                borderRadius: '0.75rem'
              }}
            />
          </div>

        
        {/* === RIGHT SIDE: Text and Button Area === */}
        <div className="lg:w-[42%] p-8 lg:p-16 flex flex-col justify-center bg-white/0">
          
          <h3 className="text-[#888888] text-base md:text-lg  font-semibold mb-4">
            Leadership
          </h3>
          
          <p className="text-[#333333] text-lg font-semibold leading-relaxed mb-12 max-w-sm">
           Led by a visionary team combining entrepreneurial spirit and global experience, Pixla Group ensures every division is scalable, impactful, and sustainable.
          </p>
          <Link to="/contact"
           className="bg-black text-white px-8 py-3 w-fit text-base font-medium cursor-pointer hover:bg-gray-800 transition duration-300">
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;