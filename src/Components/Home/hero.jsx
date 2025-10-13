import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./../../assets/Home/hero.png";
import Hero1 from "./../../assets/Home/hero1.png";

/**
 * Small hook to animate a number from 0 -> target using requestAnimationFrame.
 * - `target` is a numeric target (e.g. 1200 for 1.2k)
 * - `duration` in ms
 * - returns animated numeric value
 */
function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    // reset if target changes
    setValue(0);
    startRef.current = null;

    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure exact final value
        setValue(target);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

/**
 * Helper to format the animated number to match the original labels:
 * If originalLabel contains 'k' -> show one decimal with 'k' (e.g. 1.2k)
 * If originalLabel contains '+' -> append '+'
 * Otherwise show integer
 */
function formatAnimatedValue(numericValue, originalLabel) {
  const hasK = typeof originalLabel === "string" && originalLabel.toLowerCase().includes("k");
  const hasPlus = typeof originalLabel === "string" && originalLabel.includes("+");

  if (hasK) {
    // convert to thousands and show one decimal if needed
    const valK = numericValue / 1000;
    // show one decimal (but if .0 show integer)
    const display =
      Math.abs(valK - Math.round(valK)) < 0.05 ? Math.round(valK).toString() : valK.toFixed(1);
    return `${display}k${hasPlus ? "+" : ""}`;
  }

  // normal integer with optional plus
  return `${numericValue}${hasPlus ? "+" : ""}`;
}

const DivisionsSection = () => {
  // define stats with numeric targets and original display labels
  const stats = [
    { id: 1, label: "1.2k", target: 1200, caption: "Projects Completed" },
    { id: 2, label: "8+", target: 8, caption: "Years of Experience" },
    { id: 3, label: "99+", target: 99, caption: "Trusted Companies" },
    { id: 4, label: "1.3k", target: 1300, caption: "Happy Clients" },
  ];

  // animated values
  const animatedValues = stats.map((s) => useCountUp(s.target, 1600));

  return (
    // Main container with a light gray background (bg-gray-50 or bg-gray-100)
    <div className="bg-[#f2f2f2] py-16 md:py-32 font-sans">
      <div className="mx-auto px-6 md:px-24 text-center">
        {/* --- Top Text and Headings --- */}
        <div className="mb-12">
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wider mb-2">
            One Group. Many Divisions
          </h2>

          {/* Main Heading with Images */}
          <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-6">
            <div className="h-10 w-24 md:h-12 md:w-32 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
              <img src={Hero1} alt="" className="w-full h-full object-cover opacity-70" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
              Endless Opportunities
            </h1>

            <div className="h-10 w-24 md:h-12 md:w-32 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
              <img src={Hero1} alt="" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>

          {/* Description Text */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Pixla Group drives impact across industries from Retail Media and FMCG to IT
            Services. With innovation, technology, and trust, we are building the future.
          </p>
        </div>

        {/* --- Button and Main Image --- */}
        <div className="relative">
          {/* Explore Divisions Button */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
            <div className="bg-[#f2f2f2]/100 backdrop-blur-sm pl-30 pb-8 pr-30 shadow-lg">
              <a
                href="#"
                className="inline-flex items-center justify-center 
                       bg-black text-white px-8 py-3 
                       text-base font-medium shadow-lg 
                       hover:bg-gray-800 transition duration-300 z-10 
                       absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-auto"
              >
                Explore Divisions <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Large Image */}
          <div className="mt-8 overflow-hidden">
            <img src={Hero} alt="Team members working on computers" className="w-full h-100 object-cover" />
          </div>
        </div>

        {/* --- Statistics Bar --- */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {stats.map((s, idx) => {
            const animated = animatedValues[idx];
            return (
              <div key={s.id} className="flex flex-col items-center">
                <p className="text-4xl md:text-5xl font-semibold text-black">
                  {formatAnimatedValue(animated, s.label)}
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-1">{s.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DivisionsSection;
