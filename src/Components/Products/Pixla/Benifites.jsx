import React from "react";
import businessMan from "./../../../assets/Pixla/p2.png"; // businessman
import dotsBg from "./../../../assets/Pixla/dots.png"; // dotted background
import orangeBg from "./../../../assets/Pixla/orange.png"; // orange rectangle
import phoneImg from "./../../../assets/Pixla/p3.png";
 
const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-20 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-24">
 
        {/* ---------- Benefits for Businesses ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left side (image group) */}
          <div className="relative flex justify-center md:justify-start">
            {/* Dotted background */}
            <img
              src={dotsBg}
              alt="dots"
              className="absolute top-[-20px] left-[-10px] w-[180px] opacity-70"
            />
 
            {/* Orange rectangle */}
            <img
              src={orangeBg}
              alt="orange background"
              className="absolute top-[-20px] left-[10px] w-[460px] rounded-md shadow-lg brightness-110 contrast-125 saturate-150 z-[1] opacity-10"
            />
 
            {/* Businessman */}
            <img
              src={businessMan}
              alt="businessman"
              className="relative z-[2] w-[300px]"
            />
          </div>
 
          {/* Right side (text content) */}
          <div>
            <h2 className="text-[18px] font-semibold text-gray-500 mb-4">
              Benefits for Businesses
            </h2>
            <ul className="list-disc ml-5 space-y-3 text-[17px] leading-relaxed text-gray-800">
              <li>Boost brand visibility and audience engagement.</li>
              <li>Run targeted campaigns for the right demographics.</li>
              <li>Track performance and ROI in real-time.</li>
              <li>Leverage creative content to build brand loyalty.</li>
            </ul>
          </div>
        </div>
 
        {/* ---------- Benefits for Users ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Left side (text) */}
          <div>
            <h2 className="text-[18px] font-semibold text-gray-500 mb-4">
              Benefits for Users
            </h2>
            <ul className="list-disc ml-5 space-y-3 text-[17px] leading-relaxed text-gray-800">
              <li>
                <span className="font-semibold">For Creators / Freelancers:</span>
              </li>
              <li>Showcase talent and creativity</li>
              <li>Monetize through brand collaborations</li>
              <li>Participate in campaigns and challenges</li>
              <li>Build followers and personal brand</li>
              <li>Access analytics to improve content</li>
              <li>
                <span className="font-semibold">For Viewers / General Users:</span>
              </li>
              <li>Engage with entertaining short videos</li>
              <li>Earn Gold Dots with every swipe</li>
              <li>Redeem Gold Dots for consumer products or physical gold</li>
              <li>Personalized feed with AI-driven recommendations</li>
              <li>Discover trends and interact with creators</li>
            </ul>
          </div>
 
          {/* Right side (image) */}
          <div className="flex justify-center md:justify-end">
            <img
              src={phoneImg}
              alt="Pixla app phone"
              className="rounded-lg w-[400px] md:w-[460px] h-auto object-cover"
            />
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default PixlaBenefitsSection;
 