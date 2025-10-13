import React from "react";
import { FaArrowRight } from "react-icons/fa";
import phone from "./../../../assets/Pixalive/phone.png";
import curveBg from "./../../../assets/Pixla/curve.png";
 
const PixlaShowcase = () => {
  return (
    <section className="relative bg-[#f6f6f6] py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Curved background lines */}
      <img
        src={curveBg}
        alt="curve left"
        className="absolute left-0 top-32 w-[400px] md:w-[600px] opacity-50"
      />
      <img
        src={curveBg}
        alt="curve right"
        className="absolute right-0 top-32 w-[400px] md:w-[600px] opacity-50 scale-x-[-1]"
      />
 
      {/* Center phone with connecting lines */}
      <div className="relative flex justify-center items-center w-full mb-16">
        <img
          src={phone}
          alt="Pixalive phone"
          className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] transform rotate-[15deg] drop-shadow-2xl z-10"
        />
 
        {/* Left side labels */}
        <div className="absolute left-[10%] md:left-[18%] top-[35%] flex items-center gap-2">
          <span className="text-sm md:text-base font-medium text-black">
            Broadcast events
          </span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[60px] md:w-[100px]"></div>
        </div>
 
        <div className="absolute left-[12%] bottom-[25%] flex items-center gap-2">
          <span className="text-sm md:text-base font-medium text-black">
            Product launches
          </span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[50px] md:w-[90px]"></div>
        </div>
 
        {/* Right side labels */}
        <div className="absolute right-[10%] md:right-[18%] top-[35%] flex items-center gap-2 flex-row-reverse">
          <span className="text-sm md:text-base font-medium text-black">
            Advisement
          </span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[60px] md:w-[100px]"></div>
        </div>
 
        <div className="absolute right-[12%] bottom-[25%] flex items-center gap-2 flex-row-reverse">
          <span className="text-sm md:text-base font-medium text-black">
            Business
          </span>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="border-t-2 border-dashed border-black w-[50px] md:w-[90px]"></div>
        </div>
      </div>
 
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">3</h2>
          <p className="text-gray-500 uppercase text-sm tracking-wide">
            Total Units
          </p>
        </div>
 
        <div className="bg-[#ededed] py-8 text-center rounded-sm relative">
          <h2 className="text-4xl font-semibold text-black">50+</h2>
          <p className="text-gray-500 uppercase text-sm tracking-wide">
            Team Members
          </p>
          <FaArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 text-black text-xl" />
        </div>
 
        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">100+</h2>
          <p className="text-gray-500 uppercase text-sm tracking-wide">
            Total Projects
          </p>
        </div>
      </div>
    </section>
  );
};
 
export default PixlaShowcase;
 