import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroImg from "./../../assets/AboutUs/A1.webp";
import { ArrowUpRight } from "lucide-react";

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
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
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

  const count1 = useCountUp(3, 900, visible);
  const count2 = useCountUp(50, 1200, visible);
  const count3 = useCountUp(100, 1400, visible);

  const display2 = count2 >= 50 ? `${count2}+` : `${count2}`;
  const display3 = count3 >= 100 ? `${count3}+` : `${count3}`;

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#F2F2F2] px-6 md:px-12 lg:px-24 py-12 font-['Open Sans']"
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight">
          ONE GROUP. MANY DIVISIONS. ENDLESS OPPORTUNITIES.
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-base md:text-[24px] font-medium text-[#525151] max-w-3xl">
          Pixla Group is a diversified enterprise driving innovation and trust
          across retail, FMCG, IT services, and beyond.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="mt-8 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden shadow-md">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover object-center"
          />

          {/* Overlay card */}
          <div className="absolute left-6 right-6 bottom-6 md:left-12 md:right-12 md:bottom-7 flex items-center">
            <motion.div
              className="flex-1 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm rounded-xl px-2 py-3 md:px-5 md:py-5 text-white shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-[28px] font-Medium mb-2">
                "Empowering Growth Beyond Boundaries”
              </h3>
              <p className="text-sm md:text-[16px] text-[#FFFFFF] font-Medium">
                Connecting industries with innovation and trust, Pixla Group
                drives progress in retail, FMCG, IT, and beyond
              </p>
            </motion.div>

            {/* Circular arrow button */}
            <motion.button
              aria-label="open"
              className="ml-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-md transform hover:scale-105 transition"
              initial={{ opacity: 0, x: 50 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ArrowUpRight className="text-gray-800" size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Info cards */}
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Card 1 */}
        <motion.div variants={fadeUp} className="bg-white p-6 md:p-8  shadow-sm flex items-center justify-between">
          <div>
            <div className="text-4xl md:text-[42px] font-semibold text-gray-800">
              {count1}
            </div>
            <div className="mt-2 text-sm md:text-[20px] text-[#898888]">
              TOTAL UNITS
            </div>
          </div>
          <button
            className="bg-black rounded-full p-2 inline-flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            aria-label="Go to link"
          >
            <ArrowUpRight className="text-white" size={20} />
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} className="bg-gray-50 p-6 md:p-8  shadow-sm flex items-center justify-between">
          <div>
            <div className="text-4xl md:text-[42px] font-semibold text-gray-900">
              {display2}
            </div>
            <div className="mt-2 text-sm md:text-[20px] text-[#898888]">
              TEAM MEMBERS
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUp} className="bg-[#1C1C1C] text-white p-6 md:p-8  shadow-sm flex items-center justify-between">
          <div>
            <div className="text-4xl md:text-[42px] font-semibold">
              {display3}
            </div>
            <div className="mt-2 text-sm md:text-[20px] text-[#898888]">
              TOTAL PROJECTS
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
