import React from "react";
import peopleBg from "./../../../assets/Pixlakart/peoplebg.png"; // faint people background
import dotsBg from "./../../../assets/Pixla/dots.png";       // dotted overlay
import businessMan from "./../../../assets/Pixla/p2.png";    // main businessman
import phoneImg from "./../../../assets/Pixlakart/p3.png";       // phone image

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-20 px-6 md:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-28">
        
        {/* ----------------- Benefits for Businesses ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          
          {/* LEFT IMAGE STACK */}
          <div className="relative flex justify-center md:justify-start w-full">
            
            {/* 1️⃣ Faint people background */}
            <img
              src={peopleBg}
              alt="People background"
              className="absolute top-0 left-[-40px] w-[420px] h-[320px] object-cover opacity-30 z-0"
            />

            {/* 2️⃣ Dots overlay */}
            <img
              src={dotsBg}
              alt="Dots"
              className="absolute top-10 left-[-30px] w-[150px] opacity-80 z-10"
            />

            {/* 3️⃣ Main businessman image */}
            <img
              src={businessMan}
              alt="Businessman"
              className="relative z-20 w-[280px] md:w-[360px] object-cover"
            />

            {/* 4️⃣ Black rectangle behind green box */}
            <div className="absolute bottom-[-10px] left-[10px] md:left-[60px] bg-black w-[250px] h-[100px] md:w-[280px] md:h-[120px] z-30"></div>

            {/* 5️⃣ Green “Growth” box */}
            <div className="absolute bottom-[-20px] left-[70px] bg-[#009e3f] text-white px-5 py-5 md:px-6 md:py-7 w-[220px] md:w-[260px] z-40 shadow-lg">
              <p className="text-[13px] font-medium mb-1">
                “Benefits for Businesses”
              </p>
              <h3 className="text-2xl font-semibold leading-tight">Growth</h3>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-6 md:pt-0">
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Benefits for Businesses
            </h2>

            <ul className="space-y-6 text-[#1f1f1f] text-[17px] leading-relaxed list-inside">
              <li>• Expand digital reach and connect with more customers</li>
              <li>• Showcase products in a centralized marketplace</li>
              <li>• Run promotions and campaigns effectively</li>
              <li>• Track sales and engagement metrics in real-time</li>
              <li>• Build brand visibility and trust</li>
            </ul>
          </div>
        </div>

        {/* ----------------- Benefits for Users / Consumers ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Benefits for Users / Consumers
            </h2>

            <ul className="space-y-4 text-[#1f1f1f] text-[17px] leading-relaxed list-disc ml-5">
              <li>Discover and purchase products from multiple brands in one place</li>
              <li>Earn Gold Dots with every purchase or interaction</li>
              <li>Redeem Gold Dots for products or physical gold</li>
              <li>Enjoy personalized product recommendations</li>
              <li>Access exclusive offers, discounts, and loyalty rewards</li>
            </ul>
          </div>

          {/* RIGHT IMAGE (Phone) */}
          <div className="flex justify-center md:justify-end items-start">
            <img
              src={phoneImg}
              alt="Pixla Phone"
              className="w-[200px] md:w-[280px] rounded-md object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
