import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// Replace these imports with your real image paths
// e.g. import LeftImg from "./../../assets/Home/left.jpg";
import LeftImg from "./../../assets/Home/hero1.png";
import RightImg from "./../../assets/Home/hero1.png";

export default function WhoWeAreSection() {
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-32 font-sans">
      <div className=" mx-auto px-6 md:px-24">
        {/* layout: left | center | right */}
        <div className="flex items-start justify-between gap-6 md:gap-12">
          
          {/* LEFT COLUMN */}
          <div className="w-1/4  hidden md:flex flex-col items-start">
            <h4 className="text-md text-gray-600 mb-4 relative">
              <span className="inline-block border-b border-gray-300 pb-2">Who We Are</span>
            </h4>

            <div className="bg-white  overflow-hidden shadow-sm w-36 h-40 mb-4">
              <img src={LeftImg} alt="who we are" className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-gray-500 max-w-[165px]">
              Active for 7+ years with <br /> proven cross-border experience
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex-1 px-4 md:px-8">
            <p className="text-sm md:text-xl  leading-relaxed max-w-xl mx-auto text-left md:text-left">
              Pixla Group is built on a vision to integrate <br /> media, consumer products, and
              technology <br /> services into a connected ecosystem. With <br /> divisions rapidly growing,
              we empower <br /> brands, professionals, and consumers to <br /> succeed together.
            </p>

            {/* divider + CTA */}
            <div className="mt-8 md:mt-10 flex items-center justify-start md:justify-center gap-6">
              <div className="flex-1 md:flex-none">
                <div className="w-72 h-[1px] bg-gray-300"></div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 text-sm font-medium rounded-sm shadow-sm whitespace-nowrap"
              >
                Learn More <FaArrowUpRightFromSquare className="w-5 h-3" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-1/4 min-w-[180px] hidden md:flex flex-col items-end">
            <p className="text-md text-gray-600 mb-14 text-right">
              Strength of 50+<br/>professionals
            </p>

            <div className="bg-white  overflow-hidden shadow-sm w-42 h-38">
              <img src={RightImg} alt="team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        </div>
    </section>
  );
}
