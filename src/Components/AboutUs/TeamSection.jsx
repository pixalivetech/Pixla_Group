import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Import your actual images
import ceo from "./../../assets/AboutUs/ceo.png";
import Sathish from "./../../assets/AboutUs/sathish.png";
import Murugan from "./../../assets/AboutUs/murugan.png";
import Mohan from "./../../assets/AboutUs/mogan.png";
import Sivakumar from "./../../assets/AboutUs/sivakumar.png";
import Vijay from "./../../assets/AboutUs/vijay.png";
import Mayakannan from "./../../assets/AboutUs/mayakannan.png";
import Kathirvel from "./../../assets/AboutUs/kathirvel.png";
import DhivinKumar from "./../../assets/AboutUs/dhivin.png";
import Rajadurai from "./../../assets/AboutUs/rajadurai.png";
import GodwinShibu from "./../../assets/AboutUs/godwinshibu.png";
import Gayathri from "./../../assets/AboutUs/gayathri.png";
import Sudhakar from "./../../assets/AboutUs/sudhakar.png";
import Somanathan from "./../../assets/AboutUs/somanathan.png";
import Kesavan from "./../../assets/AboutUs/kesavan.png";
import Surya from "./../../assets/AboutUs/surya.png";

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState("management");

  const teams = {
    management: [
      { name: "Rajaseker Sundaresan", role: "CEO & Founder", img: ceo },
      { name: "Sathishkumar", role: "Chief Product Officer", img: Sathish },
      { name: "Murugan", role: "Lead Product Engineer", img: Murugan },
    ],
    react: [
      { name: "Mohan", role: "Software Developer", img: Mohan },
      { name: "Sivakumar", role: "Software Developer", img: Sivakumar },
      { name: "Vijay", role: "Software Developer", img: Vijay },
      { name: "Mayakannan", role: "Software Developer", img: Mayakannan },
      { name: "Kathirvel", role: "Software Developer", img: Kathirvel },
      { name: "DhivinKumar", role: "Frontend Intern", img: DhivinKumar },
      { name: "Rajadurai", role: "Software Developer", img: Rajadurai },
      { name: "Godwin Shibu", role: "Software Developer", img: GodwinShibu },
      { name: "Gayathri", role: "Software Developer", img: Gayathri },
    ],
    flutter: [{ name: "Sudhakar", role: "Software Developer", img: Sudhakar }],
    design: [
      { name: "Somanathan", role: "UI/UX Designer", img: Somanathan },
      { name: "Kesavan", role: "UI/UX Designer", img: Kesavan },
      { name: "Surya", role: "UI/UX Designer", img: Surya },
    ],
  };

  const tabsData = [
    { key: "management", label: "Management Team" },
    { key: "react", label: "React Team" },
    { key: "flutter", label: "Flutter Team" },
    { key: "design", label: "Design Team" },
  ];

  const getTabClass = (key) =>
    activeTeam === key
      ? "bg-black text-white border-black"
      : "bg-transparent text-gray-500 border-gray-300 hover:border-black hover:text-black";

  return (
    <section className="bg-[#F2F2F2] px-6 md:px-24 py-16 font-sans">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <h2 className="text-xl md:text-2xl font-normal text-[#7A7A7A] underline underline-offset-4 decoration-gray-400">
          Our Team
        </h2>
        <p className="md:col-span-3 text-base md:text-[21px] text-[#000000] max-w-2xl ml-0 md:ml-14">
          We’re a diverse team of 30+ developers, designers, and thinkers
          building meaningful digital experiences together.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 md:gap-5 md:mt-16 mt-5 md:space-x-8 space-x-0">
        {tabsData.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTeam(tab.key)}
            className={`px-4 py-2 border text-sm md:text-base lg:text-lg font-normal transition-colors duration-300 ${getTabClass(
              tab.key
            )}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll - Hidden Scrollbar */}
      <div
        className="relative mt-8 md:mt-16 overflow-x-auto pb-4"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <style>
          {`
            .hide-scroll::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div className="hide-scroll">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex space-x-12 flex-nowrap"
              style={{
                width: "max-content", // fits only actual content width
                minWidth: "100%",
                scrollSnapType: "x mandatory",
              }}
            >
              {teams[activeTeam].map((member, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col flex-shrink-0"
                  style={{ width: "300px", scrollSnapAlign: "start" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden ">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-500"
                    />
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <div>
                      <h3 className="text-lg font-semibold text-black leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-700 font-normal leading-snug">
                        {member.role}
                      </p>
                    </div>
                    <ArrowUpRight className="text-black w-5 h-5 flex-shrink-0" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
