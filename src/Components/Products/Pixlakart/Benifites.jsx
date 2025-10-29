import React from "react";
import dotsBg from "./../../../assets/Pixla/dots.png";     // dotted overlay
import businessMan from "./../../../assets/Pixla/p2.png"; // main businessman
import phoneImg from "./../../../assets/Pixlakart/p3.png"; // phone image

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 px-6  md:px-24">
      <div className="  flex flex-col gap-24 md:gap-32">
        
        {/* ---------- Benefits for Businesses ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start w-full">
            {/* ✅ Dots only behind businessman */}
            <img
              src={dotsBg}
              alt="dots background"
              className="absolute top-[-30px] left-[-30px] w-[120px] md:w-[210px] opacity-80 z-10"
            />

            {/* Businessman main image */}
            <img
              src={businessMan}
              alt="business man"
              className="relative z-20 w-[220px] md:w-[320px] object-cover"
            />

            {/* Growth box */}
            <div className="absolute left-[100px] md:left-[180px] bottom-[20px] md:bottom-[150px] bg-[#28A745] text-white px-4 py-3 md:px-8 md:py-8 shadow-lg z-30">
              <p className="text-xs md:text-sm mb-1 opacity-90">
                “Benefits for Businesses”
              </p>
              <h3 className="text-lg md:text-3xl font-semibold">Growth</h3>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Businesses
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[#1f1f1f] text-[15px] md:text-[16px] leading-relaxed">
              <li>• Expand digital reach and connect with more customers</li>
              <li>• Showcase products in a centralized marketplace</li>
              <li>• Run promotions and campaigns effectively</li>
              <li>• Track sales and engagement metrics in real-time</li>
              <li>• Build brand visibility and trust</li>
            </ul>
          </div>
        </div>

        {/* ---------- Benefits for Users / Consumers ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          
          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Users / Consumers
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[#1f1f1f] text-[15px] md:text-[16px] leading-relaxed">
              <li>• Discover and purchase products from multiple brands in one place</li>
              <li>• Earn Gold Dots with every purchase or interaction</li>
              <li>• Redeem Gold Dots for products or physical gold</li>
              <li>• Enjoy personalized product recommendations</li>
              <li>• Access exclusive offers, discounts, and loyalty rewards</li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION (❌ No dots here) */}
          <div className="flex justify-center md:justify-end relative">
            <img
              src={phoneImg}
              alt="Pixla phone"
              className="w-[200px] md:w-[300px] object-contain rounded-md shadow-md relative z-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
