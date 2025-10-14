import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./../../assets/Home/hero.png";
import Hero1 from "./../../assets/Home/hero1.png";

/** Animate numbers */
function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    setValue(0);
    startRef.current = null;

    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setValue(target);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

/** Format number (for k / +) */
function formatAnimatedValue(numericValue, originalLabel) {
  const hasK = typeof originalLabel === "string" && originalLabel.toLowerCase().includes("k");
  const hasPlus = typeof originalLabel === "string" && originalLabel.includes("+");

  if (hasK) {
    const valK = numericValue / 1000;
    const display =
      Math.abs(valK - Math.round(valK)) < 0.05 ? Math.round(valK).toString() : valK.toFixed(1);
    return `${display}k${hasPlus ? "+" : ""}`;
  }
  return `${numericValue}${hasPlus ? "+" : ""}`;
}

const DivisionsSection = () => {
  const stats = [
    { id: 1, label: "1.2k", target: 1200, caption: "Projects Completed" },
    { id: 2, label: "8+", target: 8, caption: "Years of Experience" },
    { id: 3, label: "99+", target: 99, caption: "Trusted Companies" },
    { id: 4, label: "1.3k", target: 1300, caption: "Happy Clients" },
  ];

  const animatedValues = stats.map((s) => useCountUp(s.target, 1600));

  return (
    <div className="bg-[#f2f2f2] py-12 md:py-24 font-sans">
      <div className="mx-auto px-4 sm:px-6 md:px-24 text-center">
        {/* --- Top Text and Headings --- */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 tracking-wider mb-2">
            One Group. Many Divisions
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 mb-6">
            <div className="h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-32 bg-gray-200 rounded-full overflow-hidden">
              <img src={Hero1} alt="" className="w-full h-full object-cover opacity-70" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight text-center">
              Endless Opportunities
            </h1>

            <div className="h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-32 bg-gray-200 rounded-full overflow-hidden">
              <img src={Hero1} alt="" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Pixla Group drives impact across industries from Retail Media and FMCG to IT
            Services. With innovation, technology, and trust, we are building the future.
          </p>
        </div>

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

          {/* Main Image */}
          <div className="mt-8 overflow-hidden ">
            <img
              src={Hero}
              alt="Team members working on computers"
              className="w-full h-100 object-cover"
            />
          </div>
        </div>

        {/* --- Statistics Bar --- */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-40 items-center">
          {stats.map((s, idx) => {
            const animated = animatedValues[idx];
            return (
              <div key={s.id} className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
                  {formatAnimatedValue(animated, s.label)}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 text-center">
                  {s.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DivisionsSection;
