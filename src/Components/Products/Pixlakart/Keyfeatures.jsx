import React from "react";
 
const PixlaKeyFeatures = () => {
  return (
    <section className="bg-[#f6f6f6] px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:gap-44">
        
        {/* Left Side Title */}
        <div className="md:w-1/3 w-full flex md:justify-start justify-center mb-10 md:mb-0">
          <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
            Key Features
          </h2>
        </div>
 
        {/* Right Side Content */}
        <div className="md:w-2/3 w-full">
          <ul className="space-y-8 text-[#1f1f1f] text-[17px] leading-relaxed">
            <li>
              •{" "}
              <span className="font-medium">
              Aggregated Shopping: 
              </span>{" "}
              Access products from multiple brands and retailers in a single platform.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Personalized Experience:
              </span>{" "}
              AI-driven recommendations for relevant products.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Easy Checkout & Payments:
              </span>{" "}
              Secure, fast, and user-friendly transactions.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Gold Rewards System:
              </span>{" "}
              Users earn Gold Dots on purchases, redeemable for consumer products or physical gold.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Promotions & Campaigns:
              </span>{" "}
              Brands can run special offers, discounts, and loyalty programs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
 
export default PixlaKeyFeatures;
 