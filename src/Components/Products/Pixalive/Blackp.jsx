import React from "react";
import { FaStar } from "react-icons/fa";
import pixaliveLogo from "./../../../assets/Pixla/a1.png";
 
const PixlaHeroSection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 py-14 text-center">
      {/* Logo */}
      <img
        src={pixaliveLogo}
        alt="Pixalive Logo"
        className="h-16 w-auto mb-8"
      />
 
      {/* Title */}
      <h1 className="text-[70px] md:text-[110px] font-extrabold leading-none mb-4">
        Pixalive
      </h1>
 
      {/* Subtitle */}
      <p className="text-lg text-gray-300 mb-3">Live Streaming Platform</p>
 
      {/* Gold Benefits */}
      <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold mb-12">
        <FaStar className="text-yellow-400" size={14} />
        <span className="tracking-widest text-white">GOLD BENEFITS</span>
        <FaStar className="text-yellow-400" size={14} />
      </div>
 
      {/* Offer Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 mb-14">
        {/* Left */}
        <div>
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-gray-400 text-sm">
            At all restaurants within 4km
          </p>
        </div>
 
        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold">Up to 30% extra off</h3>
          <p className="text-gray-400 text-sm">
            At 20,000 partner restaurant’s
          </p>
        </div>
      </div>
 
      {/* Store Buttons */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Play Store"
          className="h-12"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12"
        />
      </div>
    </section>
  );
};
 
export default PixlaHeroSection;