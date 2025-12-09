// src/components/KeyInitiatives.jsx
import React, { useRef, useEffect, useState } from "react";
import DivisionImage from "./../../assets/Home/key.png"; // Replace with your image path

export default function KeyInitiatives() {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }

    // Recalculate height on window resize
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initiatives = [
    {
      title: "Digital Empowerment",
      description:
        "Through Pixla (Short Video Platform) and our digital services, we help individuals and businesses grow online, connect with audiences, and embrace digital opportunities.",
    },
    {
      title: "Financial Inclusion",
      description:
        "With Pixla Gold, users can save and invest in digital gold, with flexible plans and the option to convert it into jewellery — making gold saving simple and secure for everyone.",
    },
    {
      title: "Skill Development & Employment",
      description:
        "Pixla Academy helps learners build real-world skills through practical training and internships, preparing them for successful careers.",
    },
    {
      title: "Consumer Innovation",
      description:
        "Pixla Brands brings trusted products across fashion, cosmetics, grocery, and wellness, offering quality and value for modern consumers.",
    },
    {
      title: "Technology Transformation",
      description:
        "Pixla Technology Services delivers IT solutions and digital platforms that help businesses grow, innovate, and adapt to the future.",
    },
    {
      title: "Environmental Initiatives",
      description:
        "Through our Seed Ball Campaign and Tree Plantation drives, Pixla Group promotes sustainability, spreading awareness about climate responsibility and working towards a greener tomorrow.",
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
          Pixla Group is committed to creating meaningful change through
          innovation, technology, and social impact. Each of our initiatives
          focuses on empowering people, supporting communities, and building a
          better and more sustainable future.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start md:items-stretch">
        {/* Left Image */}
        <div
          className="md:w-1/3 flex justify-center md:justify-start"
          style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
        >
          <img
            src={DivisionImage}
            alt="Key Initiatives Illustration"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Grid */}
        <div
          ref={contentRef}
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 pl-0 md:pl-10"
        >
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col pr-4 md:pr-6 ${
                idx % 2 === 0 ? "md:border-r-2 border-gray-300" : ""
              }`}
            >
              <h5 className="text-gray-700 text-lg mb-2 font-semibold">
                {item.title}
              </h5>
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
