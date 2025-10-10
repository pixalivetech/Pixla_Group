// src/components/Footer.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
    <div  className="bg-black text-white px-6 md:px-20 py-10 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-15 gap-8">
        {/* Left Text */}
        <div>
          <h3 className="text-xl font-semibold leading-relaxed">
            DROP US A LINE, AND WE’LL <br /> GET IN TOUCH!
          </h3>
          <a
            href="#"
            className="block mt-3 text-md underline underline-offset-4 hover:text-gray-300"
          >
            SCHEDULE A CALL
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap- text-md font-medium space-x-25 mb-9 md:mb-18">
          <a href="#" className="hover:text-gray-300">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-gray-300">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-gray-300">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-gray-300">
            YOUTUBE
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center md:text-left mb-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center gap-2 justify-center md:justify-end mr-30">
          HELLO@PIXLAGROUP.COM
          <ArrowUpRight size={32} />
        </h2>
      </div>

      {/* THREE COLUMNS */}
      <div className="flex flex-col md:flex-row justify-center md:justify-end text-sm leading-relaxed gap-12 md:gap-10">
        {/* LEFT COLUMN */}
        <div className="max-w-xs  text-center md:text-left">
          <p>
            SY NO 35/2, KONAPPANA AGRAHARA(V), Electronics City, Bangalore South
            Bangalore, Karnataka-560100
          </p>

          <p className="mt-4">
            <span className="font-semibold">Mobile No :</span>{" "}
            <a
              href="tel:8778584566"
              className="text-gray-400 hover:text-gray-200"
            >
              8778584566
            </a>
          </p>

          <p className="mt-1">
            <span className="font-semibold">Email :</span>{" "}
            <a
              href="mailto:contact@pixalivenetwork.com"
              className="text-gray-400 hover:text-gray-200"
            >
              contact@pixalivenetwork.com
            </a>
          </p>
        </div>

        {/* CENTER COLUMN */}
        <div className=" text-center md:text-left">
          <ul className="space-y-1">
            <li className="text-white font-semibold">Divisions ▾</li>
            <li className="hover:text-gray-200 cursor-pointer">About Us</li>
            <li className="hover:text-gray-200 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className=" text-center md:text-left">
          <ul className="space-y-1">
            <li className="text-white font-semibold">Investors & Partners</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-6 text-[13px] text-gray-500">
        <p>@ALL RIGHTS RESERVED, INSPIRUX 2025</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          LET’S MAKE YOUR IDEAS TO LIFE <span className="text-red-500">❤</span>
        </p>
      </div>
      </div>
      {/* Large Background Text */}
      <div className="bg-[#f2f2f2]">
     <div className="w-full  flex justify-center items-center">
        <h1 className=" text-6xl md:text-8xl lg:text-[192px] font-extrabold text-black leading-snug">
          PIXLAGROUP
        </h1>
      </div>
      </div>
    </footer>
  );
}
