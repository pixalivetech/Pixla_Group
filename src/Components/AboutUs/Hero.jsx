import React, { useEffect, useRef, useState } from "react";
import HeroImg from "./../../assets/AboutUs/A1.webp";
import { ArrowUpRight } from "lucide-react"; // <-- put your image here (src/assets/hero.jpg)

/**
 * Animated counter hook
 * animates from 0 to target when `start` becomes true
 */
function useCountUp(target, duration = 1400, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const from = 0;
    const to = target;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // smooth ease
      const current = Math.round(from + (to - from) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
      else setValue(to);
    }
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // intersection observer to start animations when visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // counters (animated)
  const count1 = useCountUp(3, 900, visible);    // TOTAL UNITS (3)
  const count2 = useCountUp(50, 1200, visible);  // TEAM MEMBERS (50+)
  const count3 = useCountUp(100, 1400, visible); // TOTAL PROJECTS (100+)

  // helpers for display with + where needed
  const display2 = count2 >= 50 ? `${count2}+` : `${count2}`;
  const display3 = count3 >= 100 ? `${count3}+` : `${count3}`;

  return (
    <section ref={sectionRef} className="bg-gray-100 px-6 md:px-12 lg:px-24 py-12">
      {/* Large heading */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-3xl lg:text-4xl  font-semibold text-gray-900 leading-tight">
          ONE GROUP. MANY DIVISIONS. ENDLESS OPPORTUNITIES.
        </h1>

        {/* small two-line paragraph */}
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl">
          Pixla Group is a diversified enterprise driving innovation and trust across retail, FMCG, IT services, and beyond.
        </p>

        {/* image with blurred overlay card */}
        <div className="mt-8 w-full">
          <div className="relative rounded-md overflow-hidden shadow-md">
            {/* Image */}
            <img
              src={HeroImg}
              alt="Hero"
              className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover object-center"
            />

            {/* Blurred overlay card (bottom-left) */}
            <div className="absolute left-6 right-6 bottom-6 md:left-12 md:right-12 md:bottom-12 flex items-center">
              <div className="flex-1 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm rounded-xl px-6 py-6 md:px-8 md:py-8 text-white shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">"Empowering Growth Beyond Boundaries”</h3>
                <p className="text-sm md:text-base text-gray-100/90">
                  Connecting industries with innovation and trust, Pixla Group drives progress in retail, FMCG, IT, and beyond
                </p>
              </div>

              {/* circular arrow button on right */}
              <button
                aria-label="open"
                className="ml-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-md transform hover:scale-105 transition"
              >
                {/* up-right arrow SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M7 7h10v10" stroke="#1f2937" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* three info cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm flex items-center justify-between">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-gray-800">
                {count1}
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-500">TOTAL UNITS</div>
            </div>
            <div className="ml-4">
              <div className="w-10 h-10 rounded-full bg-gray-900/95 flex items-center justify-center">
                {/* small chevron in circle */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 11l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-sm shadow-sm flex items-center justify-between">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900">
                {display2}
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-500">TEAM MEMBERS</div>
            </div>
            <div className="ml-4">
              <div className="w-10 h-10 rounded-full bg-gray-900/95 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 11l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 (dark) */}
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-sm shadow-sm flex items-center justify-between">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold">
                {display3}
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-300">TOTAL PROJECTS</div>
            </div>
            <div className="ml-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 11l5-5 5 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
