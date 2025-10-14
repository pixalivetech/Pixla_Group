import React from "react";
import Icon1 from "./../../assets/Home/icon1.png"; // Google Play icon image
import Icon2 from "./../../assets/Home/icon2.png"; // Apple App Store icon image

export default function HeroCTA() {
  return (
    <section className="bg-[#f2f2f2] py-16 md:pb-32">
      <div className="mx-auto px-6 md:px-24">
        {/* Pale panel */}
        <div className="bg-[#E7E7E7] py-12 px-8 text-center">
          {/* small badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block" />
            <span className="text-sm text-gray-600">Pixla Group</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-6">
            Connect, Engage and Grow With Pixla Group
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Join Pixla today and transform your social interactions into{" "}
            <span className="text-black font-medium">
              a pathway for <br />
              wealth creation and community building.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Play Store Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white rounded-sm py-2 px-4 text-sm font-semibold shadow-sm hover:opacity-95 transition"
              aria-label="Download on Play Store"
            >
              <img src={Icon1} alt="Play Store Icon" className="w-5 h-5" />
              <span>Play Store</span>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white rounded-sm py-2 px-4 text-sm font-semibold shadow-sm hover:opacity-95 transition"
              aria-label="Download on App Store"
            >
              <img src={Icon2} alt="App Store Icon" className="w-5 h-5" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
