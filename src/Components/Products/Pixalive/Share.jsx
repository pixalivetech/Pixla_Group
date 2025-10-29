import React from "react";
import phoneImage from "./../../../assets/Pixla/a6.png"; // your full phone-with-QR image
 
export default function DownloadApp() {
  return (
    <div className=" bg-[#f2f2f2]  px-6 md:px-24 py-16 mb-10;">
      {/* Outer Box with linear gradient */}
      <div
        className="shadow-lg flex flex-col md:flex-row items-center justify-between   px-6 md:px-24 py-16"
        style={{
          background: "linear-gradient(180deg, #D8D8D7 0%, #FFFFFF 46.63%, #D8D8D7 100%)",
        }}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Download the app now!
          </h2>
          <p className="text-gray-600 text-lg">
            Experience Short video platform <br /> every swipe earn gold coin
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-12"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
 
        {/* Right Section - Phone Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={phoneImage}
            alt="Phone showing QR code"
            className="w-[260px] md:w-[320px] lg:w-[360px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}