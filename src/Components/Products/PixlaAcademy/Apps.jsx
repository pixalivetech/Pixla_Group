import React from "react";
import pixlaLogo from "./../../../assets/Pixla/a1.png";
import pixla from "./../../../assets/Pixla/a4.png";
import pixalive from "./../../../assets/Pixla/a1.png";
import pixlakart from "./../../../assets/Pixla/a2.png";
import pixclick from "./../../../assets/Pixla/a5.png";
import pixlaacademy from "./../../../assets/Pixla/a3.png";
 
const divisions = [
  {
    name: "Pixla",
    description: "Pixla is a short-video platform to engage, earn, and grow.",
    image: pixla,
    gradient: "from-[#FCE9CC] to-white",
    link: "/pixla",
  },
  {
    name: "Pixalive",
    description: "Pixla is a short-video platform to engage, earn, and grow.",
    image: pixalive,
    gradient: "from-[#D1D1D1] to-white",
    link: "/pixalive",
  },
  {
    name: "Pixlakart",
    description: "Pixla is a short-video platform to engage, earn, and grow.",
    image: pixlakart,
    gradient: "from-[#C5FAD5] to-white",
    link: "/pixlakart",
  },
  {
    name: "PixClick",
    description: "Pixla is a short-video platform to engage, earn, and grow.",
    image: pixclick,
    gradient: "from-[#B2E1FF] to-white",
    link: "/pixclick",
  },
  {
    name: "Pixla Academy",
    description: "Pixla is a short-video platform to engage, earn, and grow.",
    image: pixlaacademy,
    gradient: "from-[#FDE08D] to-white",
    link: "/pixla-academy",
  },
];
 
const PixlaGroup = () => {
  const handleClick = (link) => {
    window.location.href = link; // navigates to the link
  };
 
  return (
<div className="bg-[#f2F2F2]  flex flex-col items-center px-6 md:px-24  py-16">      {/* Header */}
      <div className="text-center mb-12">
        <img src={pixlaLogo} alt="Pixla Group Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Pixla Group</h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Power of India’s <br className="block md:hidden" /> Changing Lifestyles
        </p>
      </div>
 
      {/* Grid Section */}
      <div className="flex flex-col items-center">
        {/* Top 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-22 max-w-10xl">
          {divisions.slice(0, 4).map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.link)}
              className={`w-[220px] h-[260px] md:w-[250px] md:h-[280px] rounded-md border border-gray-200 bg-gradient-to-b ${item.gradient}
              flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer `}
            >
              <div className="bg-black rounded-md w-20 h-20 flex items-center justify-center mb-4">
                <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm max-w-[180px]">{item.description}</p>
            </div>
          ))}
        </div>
 
        {/* Centered bottom card */}
        <div
          onClick={() => handleClick(divisions[4].link)}
          className={`w-[220px] h-[260px] md:w-[250px] md:h-[280px] rounded-md border border-black bg-gradient-to-b ${divisions[4].gradient}
          flex flex-col items-center justify-center text-center shadow-sm mt-13 hover:scale-105 transition-transform duration-300 cursor-pointer`}
        >
          <div className="bg-black rounded-md w-20 h-20 flex items-center justify-center mb-4">
            <img
              src={divisions[4].image}
              alt={divisions[4].name}
              className="w-10 h-10 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{divisions[4].name}</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">{divisions[4].description}</p>
        </div>
      </div>
    </div>
  );
};
 
export default PixlaGroup;