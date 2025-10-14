import React from "react";
import { FaArrowRight } from "react-icons/fa";
import phoneShop from "./../../../assets/Pixlakart/phone.png";
import curveBg from "./../../../assets/pixlakart/curve.png";
import shareIcon from "./../../../assets/pixlakart/share.png";
import cartIcon from "./../../../assets/pixlakart/cart.png";
import likeIcon from "./../../../assets/Pixla/like.png";

const PixlaShopShowcase = () => {
  return (
    <section className="relative bg-[#f6f6f6] py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Background curves */}
      <img src={curveBg} alt="curve" className="absolute left-0 top-32 w-[400px] md:w-[600px] opacity-40" />
      <img src={curveBg} alt="curve" className="absolute right-0 top-32 w-[400px] md:w-[600px] opacity-40 scale-x-[-1]" />

      {/* Phone & Icons */}
      <div className="relative flex justify-center items-center w-full mb-16">
        <img src={phoneShop} alt="Pixla Shop" className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] rotate-[15deg] drop-shadow-2xl z-10" />

        <img src={shareIcon} alt="Share" className="absolute left-[10%] top-[45%] w-[50px]" />
        <img src={cartIcon} alt="Cart" className="absolute left-[20%] bottom-[30%] w-[50px]" />
        <img src={likeIcon} alt="Like" className="absolute right-[10%] top-[45%] w-[50px]" />
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

export default PixlaShopShowcase;
