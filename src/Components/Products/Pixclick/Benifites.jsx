import React from "react";
import groupBg from "./../../../assets/Pixclick/group.png"; // faded group image
import dotsBg from "./../../../assets/Pixla/dots.png"; // dotted decoration
import businessMan from "./../../../assets/Pixla/p2.png"; // businessman
import phoneImg from "./../../../assets/Pixclick/p3.png"; // phone

const PixlaBenefitsSection = () => {
  return (
    <section className="background: #F2F2F2; py-16 md:py-24 px-5 md:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        {/* ---------- Benefits for Businesses ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start w-full">
            {/* single clean background layer
            <div
              className="absolute top-[-10px] left-[-10px] w-[340px] md:w-[460px] h-[260px] md:h-[320px] rounded-md z-0"
              style={{
                background:
                  "linear-gradient(180deg, #eaeaea 0%, #ffffff 100%)",
                opacity: 0.8,
              }}
            /> */}

            {/* dots decoration */}
            <img
              src={dotsBg}
              alt="dots"
              className="absolute top-[-28px] left-[-28px] w-[120px] md:w-[210px] z-10 opacity-80"
            />

            {/* businessman (main image) */}
            <img
              src={businessMan}
              alt="business man"
              className="relative z-20 w-[220px] md:w-[320px] object-cover"
            />

            {/* Blue Growth card */}
            <div className="absolute left-[100px] md:left-[180px] bottom-[20px] md:bottom-[150px] bg-[#2f80ed] text-white px-4 py-3 md:px-8 md:py-8 shadow-lg z-30 ">
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
              <li>• Increase brand reach and sales through affiliates</li>
              <li>• Track campaign performance and ROI accurately</li>
              <li>• Launch cost-effective, performance-based marketing campaigns</li>
              <li>• Build long-term partnerships with trusted affiliates</li>
            </ul>
          </div>
        </div>

        {/* ---------- Benefits for Users / Affiliates ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[#8d8d8d] text-[18px] md:text-[20px] font-medium mb-6 underline underline-offset-4 decoration-[#bfbfbf]">
              Benefits for Users / Affiliates
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[#1f1f1f] text-[15px] md:text-[16px] leading-relaxed">
              <li>• Earn commissions by promoting products or services</li>
              <li>• Track earnings and performance in real-time</li>
              <li>• Access campaigns from multiple brands in one platform</li>
              <li>• Earn Gold Dots that can be redeemed for products or physical gold</li>
              <li>• Grow a personal brand and business opportunities</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={phoneImg}
              alt="Pixclick phone"
              className="w-[200px] md:w-[300px] object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
