import React from "react";

const PixlaKeyFeatures = () => {
  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:gap-44">
        
        {/* Left side title */}
        <div className="md:w-1/3 w-full flex md:justify-start justify-center mb-10 md:mb-0">
          <h2 className="text-[#7a7a7a] text-[18px] sm:text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
            Key Features
          </h2>
        </div>

        {/* Right side list */}
        <div className="md:w-2/3 w-full">
          <ul className="space-y-6 md:space-y-8 text-[#1f1f1f] text-[15px] sm:text-[16px] md:text-[17px] leading-[2.2rem]">
            {[
              "Short, Engaging Videos: Perfect for brand storytelling and creative content.",
              "Viral Marketing Potential: User-generated content increases reach and visibility.",
              "Advanced Analytics: Track engagement and performance for better results.",
              "Monetization Options: Creators earn revenue through collaborations and promotions.",
              "Gold Rewards System: Users earn Gold Dots on every swipe, redeemable for products or physical gold."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-lg leading-[2.2rem]">•</span>
                <span className="max-w-[480px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PixlaKeyFeatures;
