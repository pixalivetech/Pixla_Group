import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import LeftImg from "./../../assets/Home/hero1.png";
import RightImg from "./../../assets/Home/hero1.png";

export default function WhoWeAreSection() {
  return (
    <section className="bg-[#f2f2f2] py-12 md:py-24 font-sans">
      <div className="mx-auto px-4 sm:px-6 md:px-24">
        {/* ===== DESKTOP / TABLET VIEW ===== */}
        <div className="hidden md:flex items-start justify-between gap-12">
          {/* LEFT COLUMN */}
          <div className="w-1/4 flex flex-col items-start">
            <h4 className="text-md text-gray-600 mb-4 relative">
              <span className="inline-block border-b border-gray-300 pb-2">
                Who We Are
              </span>
            </h4>

            <div className="bg-white overflow-hidden shadow-sm w-36 h-40 mb-4 ">
              <img
                src={LeftImg}
                alt="who we are"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-gray-500 max-w-[165px]">
              Active for 7+ years with <br /> proven cross-border experience
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex-1 px-8">
            <p className="text-xl leading-relaxed max-w-xl mx-auto text-left">
              Pixla Group is built on a vision to integrate <br />
              media, consumer products, and technology <br />
              services into a connected ecosystem. With <br />
              divisions rapidly growing, we empower <br />
              brands, professionals, and consumers to <br />
              succeed together.
            </p>

            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="w-72 h-[1px] bg-gray-300"></div>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white 
                           px-4 py-2 text-base font-medium shadow-sm 
                           whitespace-nowrap hover:bg-gray-800 transition duration-300"
              >
                Learn More <FaArrowUpRightFromSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-1/4 min-w-[180px] flex flex-col items-end">
            <p className="text-md text-gray-600 mb-14 text-right leading-snug">
              Strength of 50+ <br />
              professionals
            </p>

            <div className="bg-white overflow-hidden shadow-sm w-40 h-36 ">
              <img
                src={RightImg}
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Small heading */}
          <h4 className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2">
            Who We Are
          </h4>

          {/* Paragraph */}
          <p className="text-sm leading-relaxed text-gray-700 max-w-xs">
            Pixla Group integrates media, consumer products, and technology into
            one connected ecosystem — empowering brands, professionals, and
            consumers to grow together.
          </p>

          {/* Side-by-side images */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
            <div className="flex flex-col items-center">
              <div className="bg-white overflow-hidden shadow-sm w-full h-40  mb-3">
                <img
                  src={LeftImg}
                  alt="who we are"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600">
                7+ years of <br /> experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white overflow-hidden shadow-sm w-full h-40  mb-3">
                <img
                  src={RightImg}
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600">
                50+ skilled <br /> professionals
              </p>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 
                       text-sm font-medium  shadow-sm whitespace-nowrap 
                       hover:bg-gray-800 transition duration-300"
          >
            Learn More <FaArrowUpRightFromSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
