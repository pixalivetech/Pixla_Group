import React from 'react';
import Mark from './../../assets/AboutUs/mark.webp';
import { Link } from 'react-router-dom';

const content = {
  eventTitle: "Events – Pixla Group",
  eventTitleColor: "text-gray-400",
  eventDescription:
    "Stay updated with Pixla Group’s key events, showcasing our growth, innovation, and community engagement.",
  businessTitle: "#Business Opportunities",
  listItems: [
    "Product Launches",
    "Webinars",
    "Meetups",
    "Competitions & Hackathons",
    "Awards & Recognitions",
    "CSR Initiatives",
    "Product Demos & Showcases",
  ],
};

const App = () => {
  const ImageSection = () => (
    <div className="relative ">
      {/* Dark shadow background box */}
      <div className="hidden md:block absolute w-[90%] h-[90%] bg-gray-900 top-4 left-4 rounded-2xl shadow-xl"></div>

      {/* Image */}
      <div className="relative w-full h-full bg-black p-6 flex flex-col justify-end overflow-hidden">
        <img
          src={Mark}
          alt="Statue"
          className="w-full h-full md:w-[512px] md:h-[484px] object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://placehold.co/800x800/222222/cccccc?text=Image+Placeholder';
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      className="bg-black text-white px-6 md:px-24 py-16"
      style={{ fontFamily: 'Open Sans, sans-serif' }}
    >
      <div className="font-open-sans">
        {/* 1️⃣ Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-16 md:mb-24">
          {/* Left Title */}
          <div className="flex items-start">
            <h1
              className={`text-xl md:text-[28px] lg:text-[28px] font-bold ${content.eventTitleColor}`}
            >
              {content.eventTitle}
            </h1>
          </div>

          {/* Right Description */}
          <div className="flex items-start">
            <p className="text-base md:text-[24px] text-[#7A7A7A] max-w-lg md:ml-6">
              {content.eventDescription}
            </p>
          </div>
        </div>

        {/* 2️⃣ Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <ImageSection />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 space-y-8 pt-8 md:pt-0">
            <h2 className="text-[32px] md:text-[42px] lg:text-[42px] font-medium leading-tight">
              {content.businessTitle}
            </h2>

            <ul className="list-none text-lg md:text-[20px] lg:text-[20px] text-white md:ml-5 space-y-4">
              {content.listItems.map((item, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-1 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/fmcg"
              className="mt-4    px-8 py-3 bg-white text-black text-lg md:text-[20px] font-semibold shadow-2xl hover:bg-gray-200 transition duration-300"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
