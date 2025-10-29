import React from "react";
import businessMan from "./../../../assets/pixlaAcademy/p2.png"; 
import dotsBg from "./../../../assets/pixlaAcademy/dots.png";    

const FranchiseOpportunitiesSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 px-6  md:px-24">
      <div className="  flex flex-col gap-24 md:gap-32">

        {/* ---------- Franchise Opportunities Section (FIXED ALIGNMENT) ---------- */}
        {/* Use items-start to ensure content is aligned from the top of the grid cell */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-16">
          
          {/* LEFT SIDE: Title and Image Block */}
          <div className="relative flex flex-col items-center md:items-start w-full"> 
            
            {/* Title - Directly above the image block, no absolute positioning needed */}
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6 md:mb-15">
              Franchise Opportunities
            </h2>
            
            {/* Image Wrapper */}
            <div className="relative">
              
              {/* dots background */}
              <img
                src={dotsBg}
                alt="dots background"
                className="absolute top-[-20px] left-[-20px] w-[140px] md:w-[220px] z-10 opacity-80"
              />
              
              {/* Businessman image */}
              <img
                src={businessMan}
                alt="businessman"
                className="relative z-20 w-[280px] md:w-[380px] object-cover" 
              />
              
              {/* Floating "Growth" Card */}
              <div 
                // Card positioning fine-tuned
                className="absolute left-[140px] md:left-[220px] bottom-[100px] bg-[#F2B40A] text-white px-5 py-5 md:px-6 md:py-7 w-[180px] md:w-[200px] shadow-lg z-30"
              >
                <p className="text-[13px] md:text-sm font-medium mb-1">"Benefits for Businesses</p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Growth"</h3> 
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Bulleted List Content */}
          {/* Removed all top padding (pt-*) to allow the text to naturally align 
             with the top of the grid cell, matching the title's position. */}
          <div className="mt-0 pt-0"> 
            <ul className="space-y-4 text-[#1f1f1f] text-[16px] md:text-[17px] leading-relaxed list-none pl-0">
              <li>• Join India’s largest skilling network as a franchise partner</li>
              <li>• Set up training centers in your city or district with Pixla’s support</li>
              <li>• Benefit from proven curriculum, branding, and operational guidance</li>
              <li>• Contribute to empowering students and professionals while growing your business</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FranchiseOpportunitiesSection;