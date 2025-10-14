import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Div1 from "./../../assets/Home/div1.png";
import Div2 from "./../../assets/Home/div2.png";
import Div3 from "./../../assets/Home/div3.png";

export default function OurDivisions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const divisions = [
    {
      id: "01",
      title: "Retail Media Network",
      description:
        "Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising, in-store activations, and digital strategies—boosting visibility, personalization, and growth.",
      tags: [
        { name: "Pixla", desc: "Short Video" },
        { name: "Pixalive", desc: "Live Streaming" },
        { name: "Pixclick", desc: "Affiliate Marketing" },
        { name: "Pixlakart", desc: "E-commerce" },
      ],
      img: Div1,
    },
    {
      id: "02",
      title: "FMCG / Pixla Consumer Products",
      description:
        "We create and market a diverse range of consumer products that combine innovation and quality to meet everyday needs and inspire customer loyalty.",
      tags: [
        { name: "PixTaste", desc: "Food & Beverage" },
        { name: "PixGlow", desc: "Personal Care" },
        { name: "PixHome", desc: "Home Essentials" },
        { name: "PixKart", desc: "Ecommerce" },
      ],
      img: Div2,
    },
    {
      id: "03",
      title: "IT Services – Technology solutions",
      description:
        "Providing cutting-edge IT services, tech upskilling programs, and freelancing opportunities for professionals to grow and innovate globally.",
      tags: [
        { name: "PixTech", desc: "Software Development" },
        { name: "PixTrain", desc: "Corporate Training" },
        { name: "PixHire", desc: "Freelance Network" },
        { name: "PixAlive", desc: "IT Service" },
      ],
      img: Div3,
    },
  ];

  return (
    <section className="bg-[#f2f2f2] px-6 md:px-24 py-16 md:py-24 font-sans">
      {/* Header */}
    <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end pb-8 border-b-2 border-gray-200 md:ml-85 text-center md:text-left gap-2">
  <div>
    <p className="inline-block text-sm md:text-lg border-b-2 border-gray-200 text-gray-500 font-medium mb-1 cursor-pointer">
      Our Divisions
    </p>
    <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-800 leading-snug">
      Our divisions deliver specialized solutions to drive innovation,
      engagement, and growth
    </h2>
  </div>
  <FaArrowUpRightFromSquare className="w-6 h-6 text-gray-700 mt-2 md:mt-0" />
</div>
      {/* ===== Desktop View ===== */}
      <div
        className="hidden md:grid mt-0 grid-cols-[300px_1fr] gap-10"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Left Images */}
        <div className="flex flex-col gap-6">
          {divisions.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-full object-cover transition-all duration-700 cursor-pointer ${
                  activeIndex === idx
                    ? "h-76 opacity-100"
                    : "h-42 opacity-80 grayscale-[30%]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          {divisions.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className="border-b-2 border-gray-200 py-8 cursor-pointer transition-all duration-500"
            >
              <div className="grid grid-cols-[200px_1fr] items-start gap-12">
                {/* ID + Tags */}
                <div className="flex flex-col items-start pt-3">
                  <p className="text-3xl md:text-4xl font-medium ">{item.id}.</p>
                  <br />
                  <br />
                  <br />
                  <div
                    className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
                      activeIndex === idx
                        ? "max-h-[500px] opacity-100 mt-10"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-1">
                      {item.tags.map((tag, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-600 leading-snug whitespace-nowrap"
                        >
                          <span className="font-semibold text-gray-900">
                            {tag.name}
                          </span>{" "}
                          <span className="text-gray-500">({tag.desc})</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Title + Desc + Button */}
                <div className="flex flex-col items-start w-full">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mt-8 text-left ">
                    {item.title}
                  </h3>

                  <div
                    className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
                      activeIndex === idx
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 mt-4 leading-relaxed max-w-lg text-left ml-auto">
                      {item.description}
                    </p>

                    <div className="flex justify-end mt-12">
                      <button className="bg-black text-white text-sm px-6 py-2 w-fit flex items-center gap-3 hover:bg-gray-800 transition-all">
                        Explore
                        <FaArrowUpRightFromSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="md:hidden flex flex-col gap-8 mt-10">
        {divisions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white  shadow-md overflow-hidden border border-gray-100"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-5">
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <motion.span
                  animate={{
                    rotate: activeIndex === idx ? 45 : 0,
                  }}
                  className="text-gray-500 text-lg font-bold"
                >
                  +
                </motion.span>
              </div>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description.slice(0, 90)}...
              </p>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, scale: 0.98, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4"
                  >
                    <div className="space-y-1">
                      {item.tags.map((tag, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-600 leading-snug whitespace-nowrap"
                        >
                          <span className="font-semibold text-gray-900">{tag.name}</span>{" "}
                          <span className="text-gray-500">({tag.desc})</span>
                        </p>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-5 bg-black text-white text-sm px-6 py-2 w-full flex items-center justify-center gap-2  hover:bg-gray-800 transition-all"
                    >
                      Explore
                      <FaArrowUpRightFromSquare className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
