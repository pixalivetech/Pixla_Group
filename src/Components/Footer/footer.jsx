import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Footer Content Section (Black Background) */}
      <div className="bg-black text-white px-6 md:px-24 py-16 font-sans">
        {/* Top Section: Contact CTA and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 gap-8">
          {/* Left Text */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold leading-snug">
              DROP US A LINE, AND WE’LL <br className="hidden sm:inline" /> GET IN TOUCH!
            </h3>
            <a
              href="#"
              className="block mt-1 text-md underline underline-offset-4 hover:text-gray-300 transition duration-150"
            >
              SCHEDULE A CALL
            </a>
          </div>

          {/* Social Links */}
          {/* Increased gap and space-x for better mobile touch targets */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#" className="hover:text-gray-300 transition duration-150">
              LINKEDIN
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-150">
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-150">
              FACEBOOK
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-150">
              YOUTUBE
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-800 my-8" />

        {/* Middle Section: Email Address */}
        <div className="flex justify-center md:justify-end  mb-10 mt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center gap-2 cursor-pointer hover:text-gray-300 transition duration-150">
            HELLO@PIXLAGROUP.COM
            <ArrowUpRight size={38} className="text-white" />
          </h2>
        </div>

        {/* THREE COLUMNS (Address, Divisions, Investors) */}
        <div className="flex flex-col md:flex-row justify-start md:justify-end text-sm leading-relaxed gap-10 md:gap-12 lg:gap-20">
          {/* LEFT COLUMN: Address & Contact Details */}
          <div className="max-w-xs text-left">
            <p>
              SY NO 35/2, KONAPPANA AGRAHARA(V), Electronics City, Bangalore South
              Bangalore, Karnataka-560100
            </p>

            <p className="mt-4">
              <span className="font-semibold">Mobile No :</span>{" "}
              <a
                href="tel:8778584566"
                className="text-gray-400 hover:text-gray-200 transition duration-150"
              >
                8778584566
              </a>
            </p>

            <p className="mt-1">
              <span className="font-semibold">Email :</span>{" "}
              <a
                href="mailto:contact@pixalivenetwork.com"
                className="text-gray-400 hover:text-gray-200 transition duration-150"
              >
                contact@pixalivenetwork.com
              </a>
            </p>
          </div>

          {/* CENTER COLUMN: Divisions */}
          <div className="text-left">
            <ul className="space-y-2">
              <li className="text-white font-semibold">Divisions ▾</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer transition duration-150">About Us</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer transition duration-150">Careers</li>
            </ul>
          </div>

          {/* RIGHT COLUMN: Investors & Partners */}
          <div className="text-left">
            <ul className="space-y-2">
              <li className="text-white font-semibold">Investors & Partners</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer transition duration-150">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-6 text-[13px] text-gray-500 border-t border-gray-800">
          <p className="order-2 md:order-1 mt-3 md:mt-0">@ALL RIGHTS RESERVED, INSPIRUX 2025</p>
          <p className="flex items-center gap-1 order-1 md:order-2">
            LET’S MAKE YOUR IDEAS TO LIFE <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>

      {/* Large Background Text Section (Gray Background) */}
      {/* Fluid font size used for maximum responsiveness */}
      <div className="bg-[#f2f2f2] overflow-hidden select-none">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-extrabold text-black leading-none py-10 tracking-tight whitespace-nowrap opacity-20 transition duration-300 hover:opacity-100">
            PIXLAGROUP
          </h1>
        </div>
      </div>
    </footer>
  );
}