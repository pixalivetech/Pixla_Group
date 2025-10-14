import React from "react";
import businessMan from "./../../../assets/Pixla/p2.png";
import dotsBg from "./../../../assets/Pixla/dots.png";
import orangeBg from "./../../../assets/Pixalive/people.png";
import phoneImg from "./../../../assets/Pixalive/p3.png";

const PixlaBenefitsSection = () => {
  const ListStyle = { listStyleType: "none" };

  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-24 md:gap-32">
        {/* ------------------------------------- Benefits for Businesses ------------------------------------- */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <h2 className="text-gray-800 text-[20px] font-semibold underline underline-offset-4 decoration-gray-400 text-left">
            Benefits for Businesses
          </h2>

          {/* Image + Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-[4px] gap-10">
            {/* LEFT: Image */}
            <div className="relative flex justify-center md:justify-start h-[300px] md:h-[400px] w-full">
              <img
                src={orangeBg}
                alt="Crowd background"
                className="absolute top-[1px] right-1/2 transform -translate-x-1/2 md:right-[-150px] w-[350px] md:w-[450px] h-[280px] md:h-[370px] object-cover object-center z-10 opacity-20"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 90%, black 100%)",
                }}
              />
              <img
                src={businessMan}
                alt="Businessman"
                className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-[250px] md:w-[350px] h-[300px] md:h-[350px] object-cover object-top z-40"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 20%)",
                }}
              />
              <img
                src={dotsBg}
                alt="dots pattern"
                className="absolute top-[1px] left-[10px] md:left-[-40px] w-[90px] md:w-[130px] opacity-40 z-80"
              />
              {/* Black Box */}
              <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 md:left-[-20px] md:translate-x-0 bg-black text-white px-4 py-6 z-10 shadow-xl w-[280px] md:w-[450px] h-[180px] md:h-[250px] flex flex-col items-center justify-center text-center">
                <div className="absolute top-[-80px] right-[-40px] md:top-[-99px] md:right-[-87px] bg-black text-white w-[180px] md:w-[250px] h-[150px] md:h-[230px] flex items-center justify-center shadow-md">
                  <h3 className="text-[13px] md:text-[15px] font-semibold absolute top-[25px] left-[20px] md:top-[30px] md:left-[30px]">
                    “Benefits for Businesses
                  </h3>
                  <h1 className="text-[22px] md:text-[28px] font-extrabold absolute top-[50px] left-[25px] md:top-[60px] md:left-[35px]">
                    Growth”
                  </h1>
                </div>
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="flex flex-col justify-center md:pl-10 md:mb-80 mt-8 md:mt-0">
              <ul
                className="space-y-4 md:space-y-5 text-gray-800 text-[16px] md:text-[18px] leading-relaxed font-normal"
                style={ListStyle}
              >
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                  Boost engagement with interactive live sessions
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                  Promote products or services in real-time
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                  Track audience interaction and ROI
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                  Build brand loyalty through live experiences
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------- Benefits for Users ------------------------------------- */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <h2 className="text-gray-800 text-[20px] font-semibold underline underline-offset-4 decoration-gray-400">
            Benefits for Users
          </h2>

          {/* IMAGE + TEXT Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-[4px] gap-10">
            {/* LEFT: Phone Image */}
            <div className="relative flex justify-center md:justify-start items-start h-[220px] md:h-[260px]">
              <img
                src={phoneImg}
                alt="Pixla phone"
                className="w-[220px] md:w-[250px] h-[220px] md:h-[240px] object-cover object-top"
              />
            </div>

            {/* RIGHT: Text Content */}
            <div className="flex flex-col justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Creators */}
                <div>
                  <p className="font-semibold text-gray-900 mb-3 text-[16px] md:text-[18px]">
                    For Creators / Hosts:
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-[16px] md:text-[18px] text-gray-800 leading-relaxed">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Broadcast content to a live audience
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Earn revenue through gifts, sponsorships, and collaborations
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Engage with followers in real-time
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Participate in platform campaigns and events
                    </li>
                  </ul>
                </div>

                {/* Viewers */}
                <div className="md:pl-8 mt-8 md:mt-0">
                  <p className="font-semibold text-gray-900 mb-3 text-[16px] md:text-[18px]">
                    For Viewers / Audience:
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-[16px] md:text-[18px] text-gray-800 leading-relaxed">
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Access live, interactive content
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Earn Gold Dots for watching and participating
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Redeem Gold Dots for products or physical gold
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Interact with creators via chat, polls, and reactions
                    </li>
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                      Discover trends and exclusive live events
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
