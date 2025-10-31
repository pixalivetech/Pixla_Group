import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import pixaliveVideo from "./../../../assets/Pixlaacademy/v4.mp4"; // 🎥 replace with your actual video file name
 
const PixaliveHero = () => {
  const navigate = useNavigate();
 
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={pixaliveVideo} type="video/mp4" />
      </video>
 
      {/* 🔹 Light Black Overlay */}
 
      {/* 🔹 Back Arrow Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-white text-black p-2 rounded-full shadow-md hover:opacity-80 transition cursor-pointer z-10"
      >
        <FaArrowLeft size={20} />
      </button>
 
      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          INDIA'S LARGEST SKILLING & PLACEMENT COMPANY
        </h1>
        <p className="text-base md:text-lg mb-6 text-gray-200">
          Pixla Academy offers training, internship, and placement to help
          students and professionals build successful tech careers.
        </p>
 
        {/* 🔹 Store Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            className="h-10"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10"
          />
        </div>
 
        {/* 🔹 Rating Section */}
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center text-3xl font-semibold">
            4.5
            <div className="flex ml-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
            </div>
          </div>
          <p className="text-gray-300 text-sm">43.9K reviews</p>
        </div>
      </div>
    </section>
  );
};
 
export default PixaliveHero;
 