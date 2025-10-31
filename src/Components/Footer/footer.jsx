import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openDivisions, setOpenDivisions] = useState(false);
  const divisionsRef = useRef(null);

  const divisionsLinks = [
    { name: "Retail", path: "/retail" },
    { name: "FMCG", path: "/fmcg" },
    { name: "IT Services", path: "/it-services" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divisionsRef.current && !divisionsRef.current.contains(event.target)) {
        setOpenDivisions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="font-sans">
      {/* Black Footer Section */}
      <div className="bg-black text-white px-6 md:px-24 py-16">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold leading-snug">
              DROP US A LINE, AND WE’LL <br className="hidden sm:inline" /> GET IN TOUCH!
            </h3>
            <Link
              to="/contact"
              className="block mt-1 text-md underline underline-offset-4 hover:text-gray-300 transition duration-150"
            >
              SCHEDULE A CALL
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-30 gap-y-2 text-sm font-medium">
            {[
              {
                name: "LINKEDIN",
                url: "https://www.linkedin.com/company/pixla-gold-network",
              },
              { name: "INSTAGRAM", url: "https://www.instagram.com/pixla_group/" },
              {
                name: "YOUTUBE",
                url: "https://www.youtube.com/@PixlaGroupOfficial",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-150"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-800 my-8" />

        {/* Email CTA */}
        <div className="flex justify-center md:justify-end mb-6 mt-6 px-4">
          <h2
            className="
              text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 
              font-semibold 
              flex items-center gap-2 
              cursor-pointer 
              hover:text-gray-300 
              transition duration-150 
              whitespace-nowrap
            "
          >
            HELLO@PIXLAGROUP.COM
            <ArrowUpRight
              className="text-white"
              style={{ width: "clamp(20px, 3vw, 38px)", height: "clamp(20px, 3vw, 38px)" }}
            />
          </h2>
        </div>

        {/* Footer Columns */}
        <div className="flex flex-col md:flex-row justify-start md:justify-end text-sm leading-relaxed gap-10 md:gap-12 lg:gap-14">
          {/* Address */}
          <div className="max-w-xs text-left">
            <p>
              SY NO 35/2, KONAPPANA AGRAHARA(V), Electronics City, Bangalore
              South Bangalore, Karnataka-560100
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
                 info@pixlagroup.com
              </a>
            </p>
          </div>

          {/* Divisions */}
          <div className="text-left relative" ref={divisionsRef}>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setOpenDivisions(!openDivisions)}
                  className="text-white font-semibold flex items-center gap-2 hover:text-gray-200 transition duration-150"
                >
                  Divisions ▾
                </button>

                <ul
                  className={`absolute left-0 mt-2 bg-black border border-gray-800 rounded-md overflow-hidden transition-all duration-300 z-10 ${
                    openDivisions ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  {divisionsLinks.map((div, idx) => (
                    <li key={idx}>
                      <Link
                        to={div.path}
                        className="block text-gray-400 hover:text-gray-200 cursor-pointer px-4 py-2 whitespace-nowrap transition duration-150"
                        onClick={() => setOpenDivisions(false)}
                      >
                        {div.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-200 cursor-pointer transition duration-150 font-semibold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white hover:text-gray-200 cursor-pointer transition duration-150 font-semibold"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors & Partners */}
          <div className="text-left">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/investors"
                  className="text-white hover:text-gray-200 cursor-pointer transition duration-150 font-semibold"
                >
                  Investors & Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-200 cursor-pointer transition duration-150 font-semibold"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Added Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-6 text-[13px] text-gray-500 border-t border-gray-800 gap-3">
          <p className="order-3 md:order-1">
            @ALL RIGHTS RESERVED, INSPIRUX 2025
          </p>

          {/* Added Policies */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            <Link to="/terms-and-conditions" className="hover:text-gray-300">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>

          <p className="flex items-center gap-1 order-2 md:order-3">
            LET’S MAKE YOUR IDEAS TO LIFE <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>

      {/* Large Background Text */}
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
