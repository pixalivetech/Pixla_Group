import React from "react";

const PixlaKeyFeatures = () => {
  const features = [
    "Affiliate Network: Connects brands with affiliates to expand reach and sales.",
    "Performance Tracking: Monitor clicks, conversions, and revenue in real-time.",
    "Monetization Opportunities: Affiliates earn commissions for driving sales.",
    "Campaign Management: Brands can create, manage, and optimize campaigns easily.",
    "Gold Rewards System: Users participating in campaigns can earn Gold Dots, redeemable for products or physical gold."
  ];

  return (
    <section className="bg-[#f6f6f6] px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:gap-44">
        
        {/* Left Side Title */}
        <div className="md:w-1/3 w-full flex md:justify-start justify-center mb-10 md:mb-0">
          <h2 className="text-[#7a7a7a] text-[18px] sm:text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
            Key Features
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="md:w-2/3 w-full">
          <ul className="space-y-6 md:space-y-8 text-[#1f1f1f] text-[15px] sm:text-[16px] md:text-[17px] leading-[2.2rem]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-lg leading-[2.2rem]">•</span>
                <span className="max-w-[480px]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PixlaKeyFeatures;
