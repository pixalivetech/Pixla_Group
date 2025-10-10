import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import S1 from "./../../assets/RetailMedia/S1.png"; // Phone preview
import PixlaLogo from "./../../assets/RetailMedia/Pixla.png"; // Logo

const PixlaProject = () => {
  return (
    <section className="bg-[#f2f2f2] text-gray-800 px-6 md:px-24 py-16">
      <div className=" mx-auto">
        {/* Title */}
        <h2 className="text-base md:text-lg  text-gray-600 underline underline-offset-5 font-medium mb-4">
          1. Pixla – Short Video Platform
        </h2>

      {/* Top Row */}
<div className="grid md:grid-cols-3 items-start gap-6">
  {/* Left (spanning 2 columns): App Image */}
  <div className="md:col-span-2">
    <img
      src={S1}
      alt="Pixla App Preview"
      className="w-full h-auto  shadow-lg"
    />
  </div>

  {/* Right: Category + Year */}
  <div className="flex flex-col item-end ">
    <div className="mb-8">
      <h3 className="text-black font-semibold text-sm">Category</h3>
      <p className="text-gray-600 text-base">Social media</p>
    </div>
    <div>
      <h3 className="text-black font-semibold text-sm">Year</h3>
      <p className="text-gray-600 text-base">2025</p>
    </div>
  </div>
</div>


       {/* Bottom Row */}
<div className="grid md:grid-cols-3 gap-10 items-start mt-12">
  {/* Left: Logo + Description */}
  <div className="flex flex-col items-start space-y-3">
    <img
      src={PixlaLogo}
      alt="Pixla Logo"
      className="w-30 h-30 object-contain"
    />
    <div>
      <h3 className="text-lg text-black font-semibold">Pixla</h3>
      <p className="text-gray-600 text-sm">
        (Short Video + Gold Rewards)
      </p>
    </div>
  </div>

  {/* Middle: Empty Column for spacing */}
  <div></div>

  {/* Right: Impact + Buttons */}
  <div className="flex flex-col space-y-4">
    <div>
      <h3 className="text-black font-semibold text-base mb-2">
        Impact:
      </h3>
      <ul className="text-gray-700 text-sm space-y-2 list-disc ml-6">
        <li>+180% daily active users in 90 days.</li>
        <li>+50% average watch time.</li>
        <li>Boosted cross-platform activity.</li>
        <li>(Pixla → Pixlakart → Pixla Gold Network).</li>
      </ul>
    </div>

    {/* Store Buttons */}
    <div className="flex space-x-4 mt-4">
      <a
        href="#"
        className="flex items-center bg-black text-white px-4 py-2  text-sm space-x-2 hover:bg-gray-800 transition"
      >
        <FaGooglePlay className="text-lg" />
        <span>Play Store</span>
      </a>
      <a
        href="#"
        className="flex items-center bg-black text-white px-4 py-2  text-sm space-x-2 hover:bg-gray-800 transition"
      >
        <FaApple className="text-lg" />
        <span>App Store</span>
      </a>
    </div>
  </div>
</div>

        </div>
      
    </section>
  );
};

export default PixlaProject;
