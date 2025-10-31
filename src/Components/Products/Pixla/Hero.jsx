import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// ✅ Replace with your actual image imports
import phone from "./../../../assets/pixla/phone copy.png";
import likeIcon from "./../../../assets/Pixla/like.png";
import shareIcon from "./../../../assets/Pixla/share.png";
import uploadIcon from "./../../../assets/Pixla/upload.png";
import heartIcon from "./../../../assets/Pixla/heart.png";
import curveBg from "./../../../assets/Pixla/curve.png"; // your curve line image

const PixlaShowcase = () => {
  // 👁 Detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative  py-16 px-6  md:px-24 flex flex-col items-center overflow-hidden"    >
      {/* Background curves (Left + Right) */}
      <img
        src={curveBg}
        alt="Curve Left"
        className="absolute left-0 top-40 h-[60%] w-auto opacity-40 object-contain"
      />
      <img
        src={curveBg}
        alt="Curve Right"
        className="absolute right-0 top-40 h-[60%] w-auto opacity-40 object-contain scale-x-[-1]"
      />

      {/* Floating Icons */}
      <img
        src={likeIcon}
        alt="Like"
        className="absolute top-1/4 left-100 w-14 md:w-20 animate-float-slow"
      />
      <img
        src={shareIcon}
        alt="Share"
        className="absolute top-1/4 right-100 w-14 md:w-20 animate-float"
      />
      <img
        src={uploadIcon}
        alt="Upload"
        className="absolute bottom-1/4 left-100 w-14 md:w-20 animate-float-delay"
      />
      <img
        src={heartIcon}
        alt="Heart"
        className="absolute bottom-1/4 right-100 w-14 md:w-20 animate-float"
      />

      {/* Center Phone */}
      <div className="relative z-20 flex justify-center mb-30">
        <img
          src={phone}
          alt="Pixla App"
          className="w-[300px] sm:w-[260px] md:w-[340px] lg:w-[360px] transform rotate-12 drop-shadow-2xl hover:rotate-6 transition-transform duration-700"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full relative z-10">
        {/* Total Units */}
        <div className="bg-[#eaeaea] rounded-sm p-6 text-center">
          <h2 className="text-4xl font-semibold">
            {inView && <CountUp start={0} end={3} duration={2} />}
          </h2>
          <p className="text-gray-600 uppercase text-sm tracking-wide">
            Total Units
          </p>
        </div>

        {/* Team Members */}
        <div className="bg-[#eaeaea] rounded-sm p-6 text-center relative">
          <h2 className="text-4xl font-semibold">
            {inView && <CountUp start={0} end={50} duration={2.5} />}+
          </h2>
          <p className="text-gray-600 uppercase text-sm tracking-wide">
            Team Members
          </p>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <FaArrowRight className="text-black text-xl" />
          </div>
        </div>

        {/* Total Projects */}
        <div className="bg-[#eaeaea] rounded-sm p-6 text-center">
          <h2 className="text-4xl font-semibold">
            {inView && <CountUp start={0} end={100} duration={3} />}+
          </h2>
          <p className="text-gray-600 uppercase text-sm tracking-wide">
            Total Projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixlaShowcase;
