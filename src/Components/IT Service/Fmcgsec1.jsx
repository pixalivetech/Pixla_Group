
import React from "react";
import Fmcgimg1 from "./../../assets/It/it1.png";
import { FaArrowRight } from "react-icons/fa";
 
const Fmcgsec1 = () => {
  return (
    <section className="bg-[#f2F2F2] px-6 md:px-24 py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
        {/* Heading */}
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            IT Services – Pixla <br/> Group
          </h1>
        </div>
 
        {/* Description */}
        <div className="md:w-1/2">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-black mb-5 text-white px-4 py-2 text-base sm:text-lg md:text-xl  hover:bg-gray-800 transition"
          >
            Get Started →
          </button>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Pixla IT Services delivers digital transformation, training,<br/>  and technology solutions for businesses and professionals.
          </p>
        </div>
      </div>
 
      {/* Image Section */}
      <div className="relative mt-10">
        <img
          src={Fmcgimg1}
          alt="Pixla Group Building"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center "
        />
 
        {/* Overlay Text & Button */}
        <div className="absolute inset-0 flex items-end justify-between px-4 sm:px-6 md:px-8 pb-6">
          {/* Text Box */}
          <div className="p-3 sm:p-4 text-white bg-black/30 backdrop-blur-sm shadow-lg rounded-lg ">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
              “Empowering Growth Beyond Boundaries”
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-snug">
              Connecting industries with innovation and trust. Pixla Group drives
              progress in retail, FMCG, IT, and beyond.
            </p>
          </div>
 
          {/* Arrow Button */}
          {/* <button
            aria-label="open"
            className="ml-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mb-3 bg-white/95 flex items-center justify-center shadow-md transform hover:scale-105 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7M7 7h10v10"
                stroke="#1f2937"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
         <button className="flex items-center gap-2 bg-white text-black px-5 py-5 mb-4 rounded-full hover:bg-gray-800 transition">
      <FaArrowRight className="text-xl rotate-320" />
    </button>
        </div>  
      </div>
 
      {/* Why Choose Section */}
      <div className="flex flex-col md:flex-row items-start mt-10 gap-4 md:gap-6">
        <a
          href="#"
          className="md:w-1/2 text-gray-500 text-sm sm:text-base underline underline-offset-4"
        >
          Why Choose?
        </a>
 
        <p className="md:w-1/2 text-gray-600 text-sm sm:text-base leading-relaxed md:max-w-2xl">
        Pixla IT Services delivers end-to-end digital solutions, skill development through Pixla Academy, and freelancing opportunities via Pixla Works—empowering businesses, professionals, and freelancers to grow and succeed in the digital era.
        </p>
      </div>
    </section>
  );
};
 
export default Fmcgsec1;