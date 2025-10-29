import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import phoneShop from "./../../../assets/Pixlakart/phone.png";
import curveBg from "./../../../assets/pixlakart/curve.png";
import shareIcon from "./../../../assets/pixlakart/share.png";
import cartIcon from "./../../../assets/pixlakart/cart.png";
import likeIcon from "./../../../assets/Pixla/heart.png";

const PixlaShopShowcase = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative  py-16 px-6  md:px-24 flex flex-col items-center overflow-hidden"    >
      {/* Background curves */}
      <img
        src={curveBg}
        alt="curve"
        className="absolute left-0 top-32 w-[400px] md:w-[600px] opacity-40"
      />
      <img
        src={curveBg}
        alt="curve"
        className="absolute right-0 top-32 w-[400px] md:w-[600px] opacity-40 scale-x-[-1]"
      />

      {/* Phone & Icons */}
      <div className="relative flex justify-center items-center w-full mb-16">
        <img
          src={phoneShop}
          alt="Pixla Shop"
          className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] rotate-[15deg] drop-shadow-2xl z-10"
        />

        <img
          src={shareIcon}
          alt="Share"
          className="absolute left-[30%] top-[25%] w-[50px]"
        />
        <img
          src={cartIcon}
          alt="Cart"
          className="absolute left-[30%] bottom-[10%] w-[50px]"
        />
        <img
          src={likeIcon}
          alt="Like"
          className="absolute right-[30%] top-[65%] w-[50px]"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">
            {inView && <CountUp start={0} end={3} duration={2} />}
          </h2>
          <p className="text-gray-500 uppercase text-sm">Total Units</p>
        </div>

        <div className="bg-[#ededed] py-8 text-center rounded-sm relative">
          <h2 className="text-4xl font-semibold text-black">
            {inView && <CountUp start={0} end={50} duration={2.5} />}+
          </h2>
          <p className="text-gray-500 uppercase text-sm">Team Members</p>
          <FaArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 text-black text-xl" />
        </div>

        <div className="bg-[#ededed] py-8 text-center rounded-sm">
          <h2 className="text-4xl font-semibold text-black">
            {inView && <CountUp start={0} end={100} duration={2.5} />}+
          </h2>
          <p className="text-gray-500 uppercase text-sm">Total Projects</p>
        </div>
      </div>
    </section>
  );
};

export default PixlaShopShowcase;
