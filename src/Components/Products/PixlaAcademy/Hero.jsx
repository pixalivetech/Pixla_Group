import React from "react";
import { FaArrowRight } from "react-icons/fa";
import phoneAcademy from "./../../../assets/PixlaAcademy/phone.png";
import curveBg from "./../../../assets/Pixla/curve.png";

const PixlaAcademyShowcase = () => {
  return (
    <section className="relative bg-[#f6f6f6] py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Background Curves */}
      <img src={curveBg} alt="curve" className="absolute left-0 top-32 w-[400px] md:w-[600px] opacity-40" />
      <img src={curveBg} alt="curve" className="absolute right-0 top-32 w-[400px] md:w-[600px] opacity-40 scale-x-[-1]" />

      {/* Center Phone */}
      <div className="relative flex justify-center items-center w-full mb-16">
        <img src={phoneAcademy} alt="Pixla Academy phone" className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] rotate-[15deg] drop-shadow-2xl z-10" />

        {/* Left Labels */}
        <div className="absolute left-[10%] md:left-[18%] top-[40%] flex items-center gap-2">
          <span className="font-medium text-black">Training Programs</span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[80px]"></div>
        </div>

        {/* Right Labels */}
        <div className="absolute right-[10%] md:right-[18%] top-[35%] flex items-center gap-2 flex-row-reverse">
          <span className="font-medium text-black">Internship Opportunities</span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[100px]"></div>
        </div>

        <div className="absolute right-[12%] bottom-[25%] flex items-center gap-2 flex-row-reverse">
          <span className="font-medium text-black">Placement Support</span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[100px]"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">3</h2>
          <p className="text-gray-500 uppercase text-sm">Total Units</p>
        </div>
        <div className="bg-[#ededed] py-8 text-center rounded-sm relative">
          <h2 className="text-4xl font-semibold text-black">50+</h2>
          <p className="text-gray-500 uppercase text-sm">Team Members</p>
          <FaArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 text-black text-xl" />
        </div>
        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">100+</h2>
          <p className="text-gray-500 uppercase text-sm">Total Projects</p>
        </div>
      </div>
    </section>
  );
};

export default PixlaAcademyShowcase;
