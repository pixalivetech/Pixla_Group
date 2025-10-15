import React from "react";
import { Link } from "react-router-dom";
import Career from "./../../assets/AboutUs/career.webp"; // ensure image path is correct


const App = () => {
  const headerTitle = "Careers at Pixla Group";
  const headerPoints = [
    "Pixla Group empowers professionals by building talent and nurturing growth.",
    "Through Pixla Works, we offer opportunities for careers, new roles, and freelance projects.",
  ];

  const imageBlockText =
    "Pixla Group provides hands-on internships that equip students and young professionals with real-world skills and career opportunities.";

  const positions = [
    "Retail Media Network",
    "Pixla Consumer Products",
    "IT Services",
  ];

  const placeholderImageUrl = Career;

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-open-sans px-6 md:px-16 lg:px-24 py-16">
      <div className="font-open-sans">
        {/* 1. Header Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 lg:mb-20">
          {/* Left: Title */}
          <div className="md:w-1/3">
            <h1
              className="text-xl md:text-[24px] font-medium text-[#7A7A7A] pb-1"
              style={{
                borderBottom: "2px solid #ccc",
                width: "fit-content",
              }}
            >
              {headerTitle}
            </h1>
          </div>

          {/* Right: Bullet Points */}
          <div className="md:w-2/3">
            <ul className="space-y-4 text-[#7A7A7A] text-base md:text-[20px] leading-relaxed">
              {headerPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#7A7A7A] mr-3 text-lg leading-6">•</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Main Content Section */}
        {/* Updated breakpoint: from md and above use 6-column grid */}
        <section className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          {/* Left Block: Image & Overlay */}
          <div className="md:col-span-4">
            <div
              className="relative w-full overflow-hidden shadow-lg"
              style={{ minHeight: "300px", aspectRatio: "2.5 / 1" }}
            >
              <img
                src={placeholderImageUrl}
                alt="A team of professionals collaborating on a laptop."
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1200x500/666/FFF?text=Team+Image";
                }}
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-10 lg:p-14">
                <p className="text-white text-lg md:text-[24px] font-medium max-w-2xl text-center mb-6 leading-relaxed">
                  {imageBlockText}
                </p>

                <Link
                  to="/retail"
                  className="bg-white text-black text-base md:text-[20px] font-medium px-6 py-3 
                             border border-gray-400 hover:bg-gray-100 transition duration-200"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block: #Positions Card */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 md:p-10 shadow-lg border border-gray-100 h-full">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 md:mb-10">
                #Positions
              </h2>

              <ul className="space-y-4 text-gray-800 text-lg md:text-[21px] ml-2 md:ml-5">
                {positions.map((position, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-900 mr-3 text-xl leading-7">•</span>
                    <p className="font-medium leading-relaxed">{position}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
