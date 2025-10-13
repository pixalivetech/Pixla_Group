import React from "react";

const WhoWeAre = () => {
  return (
    <section className=" bg-[#f5f5f5] px-6 md:px-24  py-16 flex justify-center font-Open Sans">
      <div className=" flex flex-col md:flex-row items-start justify-between">
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
