import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Replace these with your actual images */
import Thumb1 from "./../../assets/Home/thumb1.png";
import Thumb2 from "./../../assets/Home/thumb2.png";
import Thumb3 from "./../../assets/Home/thumb3.png";
import Thumb4 from "./../../assets/Home/thumb4.png";
import Thumb5 from "./../../assets/Home/thumb5.png";

const reviews = [
  {
    img: Thumb1,
    text: "Pixla Group is redefining what it means to connect, learn, and grow in the digital world. Every division reflects innovation and passion.",
    name: "Karthik R.",
    role: "Entrepreneur",
  },
  {
    img: Thumb2,
    text: "I joined through the Pixla Academy program, and it changed my career path completely. The training and mentorship were top-notch!",
    name: "Divya S.",
    role: "Software Engineer",
  },
  {
    img: Thumb3,
    text: "Pixla Brands offers amazing FMCG products — high quality, affordable, and proudly made in India.",
    name: "Nithya M.",
    role: "Retail Partner",
  },
  {
    img: Thumb4,
    text: "Saving gold with Pixla Gold is simple and transparent. I love that I can convert my savings into jewellery anytime.",
    name: "Vivek A.",
    role: "Pixla Gold Customer",
  },
  {
    img: Thumb5,
    text: "Pixla Group’s vision to integrate social, tech, and commerce under one ecosystem is truly inspiring. A company built for the future.",
    name: "Harini P.",
    role: "Digital Strategist",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f2f2f2] py-16 px-4 md:px-24 font-sans overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          What People Say About Pixla Group
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real voices. Real experiences. See how Pixla Group is creating impact
          across industries.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto text-center"
          >
            <img
              src={reviews[current].img}
              alt={reviews[current].name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
            />
            <p className="text-yellow-500 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 italic mb-4">"{reviews[current].text}"</p>
            <h3 className="font-bold text-gray-900 text-lg">
              — {reviews[current].name}
            </h3>
            <p className="text-gray-500 text-sm">{reviews[current].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8 space-x-2 absolute bottom-0 translate-y-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-gray-800 w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
