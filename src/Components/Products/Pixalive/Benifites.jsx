import React from "react";
import businessMan from "./../../../assets/Pixla/p2.png";
import dotsBg from "./../../../assets/Pixla/dots.png";
import orangeBg from "./../../../assets/Pixalive/people.png";
import phoneImg from "./../../../assets/Pixalive/p3.png";

const PixlaBenefitsSectionMobile = () => {
  const ListStyle = { listStyleType: "none" };

  return (
    <section className="bg-white py-12 px-6">
      <div className="flex flex-col gap-20">
        {/* ------------------- Benefits for Businesses ------------------- */}
        <div className="flex flex-col gap-6">
          <h2 className="text-gray-800 text-[18px] font-semibold underline underline-offset-4 decoration-gray-400">
            Benefits for Businesses
          </h2>

          {/* Image + Content (Stacked for Mobile) */}
          <div className="flex flex-col items-center relative">
            <div className="relative w-full flex justify-center">
              <img
                src={orangeBg}
                alt="Crowd background"
                className="absolute top-0 w-[320px] h-[220px] object-cover opacity-20"
              />
              <img
                src={businessMan}
                alt="Businessman"
                className="relative w-[220px] h-[220px] object-cover object-top z-10"
              />
              <img
                src={dotsBg}
                alt="Dots background"
                className="absolute top-[10px] left-[20px] w-[100px] opacity-40"
              />
            </div>

            {/* Overlay box */}
            <div className="mt-4 bg-black text-white px-4 py-5 w-full text-center shadow-md">
              <h3 className="text-[14px] font-semibold">
                “Benefits for Businesses
              </h3>
              <h1 className="text-[22px] font-extrabold">Growth”</h1>
            </div>

            {/* Text Content */}
            <ul
              className="space-y-3 text-gray-800 text-[16px] leading-relaxed font-normal mt-5"
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

        {/* ------------------- Benefits for Users ------------------- */}
        <div className="flex flex-col gap-6">
          <h2 className="text-gray-800 text-[18px] font-semibold underline underline-offset-4 decoration-gray-400">
            Benefits for Users
          </h2>

          {/* Phone Image */}
          <div className="flex justify-center">
            <img
              src={phoneImg}
              alt="Pixla phone"
              className="w-[220px] h-[220px] object-cover object-top"
            />
          </div>

          {/* Text for Creators */}
          <div>
            <p className="font-semibold text-gray-900 mb-3 text-[17px]">
              For Creators / Hosts:
            </p>
            <ul
              className="space-y-3 text-[16px] text-gray-800 leading-relaxed font-normal"
              style={ListStyle}
            >
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Broadcast content to a live audience
              </li>
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Earn revenue through gifts and sponsorships
              </li>
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Engage with followers in real-time
              </li>
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Participate in platform events and campaigns
              </li>
            </ul>
          </div>

          {/* Text for Viewers */}
          <div>
            <p className="font-semibold text-gray-900 mb-3 text-[17px]">
              For Viewers / Audience:
            </p>
            <ul
              className="space-y-3 text-[16px] text-gray-800 leading-relaxed font-normal"
              style={ListStyle}
            >
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Access live, interactive content
              </li>
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Earn Gold Dots for watching and participating
              </li>
              <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-black">
                Redeem Gold Dots for products or gold
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
    </section>
  );
};

export default PixlaBenefitsSectionMobile;
