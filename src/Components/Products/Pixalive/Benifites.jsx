import React from "react";
import businessMan from "./../../../assets/Pixla/p2.png"; // left big image (businessman)
import dotsBg from "./../../../assets/Pixla/dots.png";     // dotted decoration
import orangeBg from "./../../../assets/Pixla/orange.png"; // subtle orange rectangle (we render as div)
import phoneImg from "./../../../assets/Pixla/p3.png";     // phone image used in Users section

/**
 * PixlaBenefitsSection
 *
 * - Desktop: left column contains stacked images/decorations, right column contains text lists.
 * - Mobile: images stack above the text and everything remains centered/readable.
 *
 * Tailwind classes are used. Adjust widths/heights or colors to match your exact assets if needed.
 */
const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-20 px-6 md:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-28">

        {/* ---------- Benefits for Businesses ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* LEFT: image composition (businessman + decorations) */}
          <div className="relative flex justify-center md:justify-start">
            {/* faint blurred background image (we use orange bg block to simulate) */}
            <div
              className="absolute top-[-10px] left-[-20px] w-[420px] h-[300px] rounded-md"
              style={{
                backgroundImage: `url(${orangeBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: 0.12,
                filter: "blur(0px)",
                zIndex: 0,
              }}
            />

            {/* dotted pattern */}
            <img
              src={dotsBg}
              alt="dots pattern"
              className="absolute top-0 left-[-20px] w-[160px] opacity-70 z-10"
            />

            {/* large businessman image */}
            <img
              src={businessMan}
              alt="Businessman"
              className="relative z-20 w-[280px] md:w-[360px] object-cover rounded-sm"
            />

            {/* black overlay box with "Growth" text */}
            <div className="absolute z-30 md:bottom-[-20px] bottom-0 left-0 md:left-[60px] bg-black text-white px-5 py-6 md:px-6 md:py-8">
              <p className="text-sm text-gray-300 mb-2">“Benefits for Businesses”</p>
              <h3 className="text-2xl md:text-3xl font-semibold">Growth</h3>
            </div>
          </div>

          {/* RIGHT: content for Businesses */}
          <div className="pt-6 md:pt-0">
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Benefits for Businesses
            </h2>

            <ul className="space-y-6 text-[#1f1f1f] text-[17px] leading-relaxed list-inside">
              <li>• Boost engagement with interactive live sessions</li>
              <li>• Promote products or services in real-time</li>
              <li>• Track audience interaction and ROI</li>
              <li>• Build brand loyalty through live experiences</li>
            </ul>
          </div>
        </div>

        {/* ---------- Benefits for Users ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* LEFT: phone image (kept left as requested) */}
          <div className="flex justify-center md:justify-start items-start">
            <img
              src={phoneImg}
              alt="Pixla phone"
              className="w-[200px] md:w-[260px] rounded-md object-cover"
            />
          </div>

          {/* RIGHT: two-column lists (Creators / Viewers) */}
          <div>
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Benefits for Users
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-700 mb-3">For Creators / Hosts:</p>
                <ul className="list-disc ml-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
                  <li>Broadcast content to a live audience</li>
                  <li>Earn revenue through gifts, sponsorships, and collaborations</li>
                  <li>Engage with followers in real-time</li>
                  <li>Participate in platform campaigns and events</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-700 mb-3">For Viewers / Audience:</p>
                <ul className="list-disc ml-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
                  <li>Access live, interactive content</li>
                  <li>Earn Gold Dots for watching and participating</li>
                  <li>Redeem Gold Dots for products or physical gold</li>
                  <li>Interact with creators via chat, polls, and reactions</li>
                  <li>Discover trends and exclusive live events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
