import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Div1 from "./../../assets/Home/div1.png";
import Div2 from "./../../assets/Home/div2.png";
import Div3 from "./../../assets/Home/div3.png";

export default function OurDivisions() {
  const [activeIndex, setActiveIndex] = useState(null);

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
        { name: "PixKart", desc: "Ecommers" },
      ],
      img: Div2,
    },
    {
      id: "03",
      title: "IT Services – Technology solutions, training, and freelancing",
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

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 md:px-20 py-16 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start pb-10 border-b border-gray-200">
        <div>
          <p className="text-gray-500 font-medium mb-1">Our Divisions</p>
          <h2 className="text-[22px] md:text-[26px] font-medium max-w-2xl text-gray-800 leading-snug">
            Our divisions deliver specialized solutions to drive innovation,
            engagement, and growth
          </h2>
        </div>
        <FaArrowUpRightFromSquare className="w-6 h-6 text-gray-700 mt-2" />
      </div>

      {/* Layout */}
      <div className="mt-10 grid md:grid-cols-[300px_1fr] gap-10">
        {/* Left Side Images */}
        <div className="flex flex-col gap-6">
          {divisions.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.title}
                onClick={() => handleToggle(idx)}
                className={`rounded-md w-full object-cover transition-all duration-700 cursor-pointer ${
                  activeIndex === idx
                    ? "h-78 opacity-100"
                    : "h-32 opacity-80 grayscale-[30%]"
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
              onClick={() => handleToggle(idx)}
              className="border-b border-gray-200 py-12 cursor-pointer transition-all duration-500"
            >
              {/* Use grid so ID column is fixed width and content column takes remaining space.
                  Title and description will be aligned to the end (right) within their column. */}
              <div className="grid grid-cols-[96px_1fr] items-start gap-6">
                {/* ID column: stays same place */}
                <div className="flex items-start">
                  <p className="text-4xl md:text-5xl font-light text-gray-400 ">
                    {item.id}.
                  </p>
                </div>

                {/* Content column: align title & description to end (right) */}
                <div className="flex flex-col items-end"> 
                  {/* Title aligned to end */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 text-right">
                    {item.title}
                  </h3>

                  {/* Expandable section (description + tags + button) */}
                  <div
                    className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
                      activeIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Description aligned to the right and constrained width for nice layout */}
                    <p className="text-gray-600 mt-1 leading-relaxed max-w-lg text-right ml-auto">
                      {item.description}
                    </p>

                    <br />

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                      {/* Tags (unchanged) */}
                      <div className="space-y-1">
                        {item.tags.map((tag, i) => (
                          <p key={i} className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">
                              {tag.name}
                            </span>{" "}
                            <span className="text-gray-500">({tag.desc})</span>
                          </p>
                        ))}
                      </div>

                      {/* Button (unchanged) */}
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
    </section>
  );
}
