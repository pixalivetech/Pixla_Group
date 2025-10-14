import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Import your actual images here
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

  // 🔹 Team data
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
      { name: "Kathirvel  ", role: "Software Developer", img: Kathirvel   },
      { name: "DhivinKumar  ", role: "Frontend Intern", img: DhivinKumar },
      { name: "Rajadurai  ", role: "Software Developer", img: Rajadurai   },
      { name: "Godwin Shibu  ", role: "Software Developer", img: GodwinShibu   },
      { name: "Gayathri  ", role: "Software Developer", img: Gayathri   },
    ],
    flutter: [
      { name: "Sudhakar", role: "Software Developer", img: Sudhakar },
    ],
    design: [
      { name: "Somanathan", role: "UI/UX Designer", img: Somanathan },
      { name: "Kesavan", role: "UI/UX Designer", img: Kesavan },
      { name: "Surya", role: "UI/UX Designer", img: Surya },
    ],
  };

  return (
    <section className=" bg-[#f4f4f4] px-6 md:px-24  py-16 font-poppins">
      {/* Top Section */}
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h2 className="text-lg md:text-[24px] font-semibold text-[#7A7A7A] underline underline-offset-4 decoration-gray-400">
          Our Team
        </h2>
        <p className="text-base md:text-[24px] text-[#000000] max-w-2xl text-left md:text-left mt-2 md:mt-10">
        We’re a diverse team of 30+ developers, designers, and thinkers building meaningful digital experiences together.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-10 md:gap-35 mb-10 md:mb-17 px-3">
        {[
          { key: "management", label: "Management Team" },
          { key: "react", label: "React Team" },
          { key: "flutter", label: "Flutter Team" },
          { key: "design", label: "Design Team" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTeam(tab.key)}
            className={`px-4 py-2 border text-sm md:text-[24px] transition-all ${
              activeTeam === tab.key
                ? "bg-black text-white border-black"
                : "bg-transparent text-gray-500 border-gray-300 hover:border-black hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Grid */}
      <div className="font-open sans">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {teams[activeTeam].map((member, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden rounded-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
                  />
                </div>
                <div className="flex items-start justify-between mt-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <ArrowUpRight className="text-gray-900 w-5 h-5 mt-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamSection;
