import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

// Replace these with your actual image paths
import ImgLeft from "./../../assets/RetailMedia/L1.png";
import ImgRight from "./../../assets/RetailMedia/L2.png";
import PixaliveLogo from "./../../assets/RetailMedia/Logo.png";

const PixaliveProject = () => {
  return (
    <section className="bg-[#f2f2f2] text-gray-900 px-6 md:px-24 py-16">
      {/* Title & Description */}
      <div className="grid md:grid-cols-2 gap-10 mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          2. Pixalive – Live Streaming Platform
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Enables real-time customer interaction through live events, driving
          high engagement and conversions for launches, demos, and influencer
          collaborations.
        </p>
      </div>

      {/* Top Row: Two Equal Responsive Images */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-[280px] md:h-[380px] lg:h-[420px] bg-white  shadow-lg overflow-hidden">
          <img
            src={ImgLeft}
            alt="Pixalive Event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[280px] md:h-[380px] lg:h-[420px] bg-[#ebe6e6]  shadow-lg overflow-hidden">
          <img
            src={ImgRight}
            alt="Pixalive Payment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-3 gap-10 items-start mt-12">
        {/* Left: Logo + Description */}
        <div className="flex flex-col items-start space-y-3">
          <img
            src={PixaliveLogo}
            alt="Pixalive Logo"
            className="w-28 h-28 object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold">Pixalive</h3>
            <p className="text-gray-600 text-sm">
              (Live Streaming + Creator Monetization)
            </p>
          </div>
        </div>

        {/* Middle: Empty for layout balance */}
        <div></div>

        {/* Right: Impact + Store Buttons */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-2">
              Impact:
            </h3>
            <ul className="text-gray-700 text-sm space-y-2 list-disc ml-6">
              <li>20,000+ live viewers in first event.</li>
              <li>+25% ticket sales through live promotions.</li>
              <li>60% repeat audience rate.</li>
            </ul>
          </div>

          {/* Store Buttons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 text-sm space-x-2 hover:bg-gray-800 transition"
            >
              <FaGooglePlay className="text-lg" />
              <span>Play Store</span>
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 text-sm space-x-2 hover:bg-gray-800 transition"
            >
              <FaApple className="text-lg" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixaliveProject;
