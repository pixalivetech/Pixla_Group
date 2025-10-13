// src/components/KeyInitiatives.jsx
import React from "react";
import DivisionImage from "./../../assets/Home/key.png"; // Replace with your image path

export default function KeyInitiatives() {
  const initiatives = [
    {
      title: "Seed Ball Campaign & Tree <br> Plantation",
      description:
        "Promoting a greener future through seed ball and sapling initiatives.",
    },
    {
      title: "Women Empowerment <br> Drives",
      description:
        "Encouraging skill development and entrepreneurship among women.",
    },
    {
      title: "Digital Literacy <br> Programs",
      description:
        "Bridging the digital divide by training students and communities.",
    },
    {
      title: "Environmental Awareness",
      description:
        "Spreading awareness about sustainability and climate responsibility.",
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-16 px-6 md:px-24 md:py-24 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
        <h4 className="text-gray-500 text-sm md:text-lg inline-block border-b-2 border-gray-200 font-medium mb-1 cursor-pointer">
          Our Key Initiatives
        </h4>
        <p className="text-black font-semibold text-lg md:text-2xl max-w-2xl text-left md:text-left">
          Our divisions deliver specialized solutions to drive innovation,
          engagement, and growth.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/3 ml-20">
          <img
            src={DivisionImage}
            alt="Division"
            className="w-50 h-55 object-cover"
          />
        </div>

        {/* Right Grid */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-30">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col pr-4 md:pr-6 ${
                idx % 2 === 0 ? "md:border-r-2 border-gray-300" : ""
              }`}
            >
              {/* ✅ Title with <br> tag support */}
              <h5
                className="text-gray-400 text-md mb-2 font-semibold"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h5>

              {/* Description */}
              <p className="text-gray-800 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
