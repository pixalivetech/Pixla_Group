import React from "react";
import bgRect from "./../../../assets/Pixla/orange.png";   // 1) subtle background rectangle
import groupBg from "./../../../assets/Pixclick/group.png";   // 2) faded people/group image (behind dots)
import dotsBg from "./../../../assets/Pixla/dots.png";     // 3) dotted decoration
import businessMan from "./../../../assets/Pixla/p2.png";  // 4) businessman (foreground)
import phoneImg from "./../../../assets/Pixclick/p3.png";     // phone image (bottom section)

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-16 md:py-24 px-5 md:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">

        {/* ---------- Benefits for Businesses (top) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Left: exact 4-layer composition */}
          <div className="relative flex justify-center md:justify-start w-full">
            {/* 1) soft background rectangle (lowest layer) */}
            <div
              className="absolute top-[-18px] left-[-18px] w-[440px] h-[320px] rounded-md z-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(250,250,250,1) 100%)",
                filter: "blur(0.8px)",
                opacity: 0.95,
              }}
            />

            {/* 2) faded group/scene image behind dots */}
            <img
              src={groupBg}
              alt="group background"
              className="absolute top-[-12px] left-[-6px] w-[460px] h-[320px] object-cover rounded-md z-10 opacity-30"
            />

            {/* 3) dotted decoration (above faded group, below businessman) */}
            <img
              src={dotsBg}
              alt="dots"
              className="absolute top-[-28px] left-[-36px] w-[170px] md:w-[210px] z-20 opacity-90"
            />

            {/* 4) businessman (foreground) */}
            <img
              src={businessMan}
              alt="business man"
              className="relative z-30 w-[260px] md:w-[320px] object-cover"
            />

            {/* Blue Growth card (top-most) */}
            <div className="absolute left-[120px] md:left-[180px] bottom-[40px] md:bottom-[52px] bg-[#2f80ed] text-white px-5 py-5 md:px-8 md:py-8 shadow-lg z-40 rounded-sm">
              <p className="text-xs md:text-sm mb-1 opacity-90">“Benefits for Businesses”</p>
              <h3 className="text-xl md:text-3xl font-semibold">Growth</h3>
            </div>
          </div>

          {/* Right: text list */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Businesses
            </h2>
            <ul className="space-y-4 text-[#1f1f1f] text-[16px] leading-relaxed">
              <li>• Increase brand reach and sales through affiliates</li>
              <li>• Track campaign performance and ROI accurately</li>
              <li>• Launch cost-effective, performance-based marketing campaigns</li>
              <li>• Build long-term partnerships with trusted affiliates</li>
            </ul>
          </div>
        </div>

        {/* ---------- Benefits for Users / Affiliates (bottom) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Left: text */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Users / Affiliates
            </h2>
            <ul className="space-y-4 text-[#1f1f1f] text-[16px] leading-relaxed">
              <li>• Earn commissions by promoting products or services</li>
              <li>• Track earnings and performance in real-time</li>
              <li>• Access campaigns from multiple brands in one platform</li>
              <li>• Earn Gold Dots that can be redeemed for products or physical gold</li>
              <li>• Grow a personal brand and business opportunities</li>
            </ul>
          </div>

          {/* Right: phone image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={phoneImg}
              alt="Pixclick phone"
              className="w-[240px] md:w-[300px] object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
