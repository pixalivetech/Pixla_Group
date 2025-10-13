import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 flex justify-center font-Open Sans">
      <div className="w-[1280px] px-6 flex flex-col md:flex-row items-start justify-between">
        {/* Left Section - Title */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-[#7A7A7A] text-[18px] font-medium border-b border-gray-400 inline-block pb-1">
            Who We Are
          </h2>
        </div>

        {/* Right Section - Paragraph */}
        <div className="md:w-2/3 text-[16px] leading-relaxed text-[#1a1a1a]">
          <p className="md:text-[24px]">
            Pixla Group is a diversified business ecosystem that started with
            media, connecting brands with audiences through innovative
            solutions. Over time, we expanded into FMCG, IT Services, and other
            consumer-focused businesses, creating a connected ecosystem that
            empowers brands, professionals, and consumers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
