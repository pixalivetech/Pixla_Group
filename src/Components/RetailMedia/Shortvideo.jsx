import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa"; // ✅ Correct icon imports
import S1 from "./../../assets/RetailMedia/S1.png"; // ✅ Replace with your correct image path
import PixlaLogo from "./../../assets/RetailMedia/Pixla.png"; // ✅ Replace with your correct logo path

const PixlaSection = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-8">
          1. Pixla – Short Video Platform
        </h2>

        {/* Main Grid */}
        <div className="grid-2 md:grid-cols-3 gap-10 items-center">
          {/* Left Side - Phone Image */}
          <div className="flex justify-center">
            <img
              src={S1}
              alt="Pixla App Preview"
              className="rounded-lg shadow-md w-full max-w-2xl"
            />
          </div>

          {/* Right Side - Info */}
          <div className="flex flex-col justify-center space-y-8 md:pl-10">
            <div>
              <h3 className="text-gray-500 text-sm font-semibold">Category</h3>
              <p className="text-base">Social media</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-semibold">Year</h3>
              <p className="text-base">2025</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start mt-16">
          {/* Pixla Logo + Description */}
          <div className="flex items-start space-x-6">
            <img
              src={PixlaLogo}
              alt="Pixla Logo"
              className="w-16 h-16 rounded"
            />
            <div>
              <h3 className="text-xl font-semibold">Pixla</h3>
              <p className="text-gray-600 text-sm">
                (Short Video + Gold Rewards)
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div className="space-y-2">
            <h3 className="text-gray-800 font-semibold">Impact:</h3>
            <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
              <li>+180% daily active users in 90 days.</li>
              <li>+50% average watch time.</li>
              <li>Boosted cross-platform activity.</li>
              <li>(Pixla → Pixlakart → Pixla Gold Network).</li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-wrap space-x-4 mt-10">
          <a
            href="#"
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm space-x-2 hover:bg-gray-800 transition"
          >
            <FaGooglePlay className="text-lg" />
            <span>Play Store</span>
          </a>
          <a
            href="#"
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm space-x-2 hover:bg-gray-800 transition"
          >
            <FaApple className="text-lg" />
            <span>App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PixlaSection;
