import React from "react";
import businessMan from "./../../../assets/Pixla/p2.png"; // businessman
import dotsBg from "./../../../assets/Pixla/dots.png"; // dotted background
import phoneImg from "./../../../assets/Pixla/p3.png";

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 px-6  md:px-24">
      <div className="  flex flex-col gap-24 md:gap-32">
        {/* ---------- Benefits for Businesses ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start">
            {/* dots decoration */}
            <img
              src={dotsBg}
              alt="dots"
              className="absolute top-[-28px] left-[-28px] w-[120px] md:w-[210px] z-10 opacity-80"
            />

            

            {/* businessman main image */}
            <img
              src={businessMan}
              alt="businessman"
              className="relative z-20 w-[240px] md:w-[320px] object-cover"
            />

            {/* overlay info card */}
            <div className="absolute left-[100px] md:left-[180px] bottom-[20px] md:bottom-[160px] bg-[#e79242] text-white px-4 py-3 md:px-8 md:py-6 shadow-lg z-30 ">
              <p className="text-xs md:text-sm mb-1 opacity-90">
                Benefits for Businesses
              </p>
              <h3 className="text-lg md:text-3xl font-semibold">Growth</h3>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Businesses
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[#1f1f1f] text-[15px] md:text-[16px] leading-relaxed">
              <li>• Boost brand visibility and audience engagement</li>
              <li>• Run targeted campaigns for the right demographics</li>
              <li>• Track performance and ROI in real-time</li>
              <li>• Leverage creative content to build brand loyalty</li>
            </ul>
          </div>
        </div>

        {/* ---------- Benefits for Users ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Users
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[#1f1f1f] text-[15px] md:text-[16px] leading-relaxed">
              <li>• For Creators / Freelancers</li>
              <li>• Showcase talent and creativity</li>
              <li>• Monetize through brand collaborations</li>
              <li>• Participate in campaigns and challenges</li>
              <li>• Build followers and personal brand</li>
              <li>• Access analytics to improve content</li>
              <li>• For Viewers / General Users</li>
              <li>• Engage with entertaining short videos</li>
              <li>• Earn Gold Dots with every swipe</li>
              <li>• Redeem Gold Dots for products or physical gold</li>
              <li>• Get a personalized feed powered by AI</li>
              <li>• Discover trends and connect with creators</li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src={phoneImg}
              alt="Pixla app phone"
              className="relative w-[240px] md:w-[360px] rounded-md object-cover shadow-md z-20"
            />

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
