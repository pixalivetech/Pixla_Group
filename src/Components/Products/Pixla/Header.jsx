import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import pixla1 from "./../../../assets/pixla/p1.png";
 
const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center  px-6 md:px-24  py-16"
      style={{ backgroundImage: `url(${pixla1})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
 
      {/* Left arrow */}
      <button className="absolute top-8 left-8 bg-white text-black p-2 rounded">
        <FaArrowLeft size={20} />
      </button>
 
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          PIXLA – WHERE CREATIVITY MEETS FUN, GROWTH, AND REWARDS
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A vibrant short-video platform that blends entertainment, marketing,
          and rewards, empowering creators, brands, and users to engage and grow
          together.
        </p>
 
        {/* Store buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-black flex items-center gap-2 px-4 py-2 rounded">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-8"
            />
          </button>
          <button className="bg-black flex items-center gap-2 px-4 py-2 rounded">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-8"
            />
          </button>
        </div>
 
        {/* Rating */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 text-2xl font-semibold">
            4.5{" "}
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
          </div>
          <p className="text-gray-200 text-sm mt-1">43.9K reviews</p>
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection;