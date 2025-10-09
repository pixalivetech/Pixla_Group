import React from "react";

// ✅ Replace these with your actual logo image paths
import storyLogo from "./../../assets/AboutUs/Frame1.png";
import visionLogo from "./../../assets/AboutUs/Frame2.png";
import valuesLogo from "./../../assets/AboutUs/Frame3.png";
import missionLogo from "./../../assets/AboutUs/Frame4.png";

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white w-full min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-20 py-20 font-sans">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* LEFT SIDE – "About Us – Pixla Group" */}
        <div className="w-full md:w-1/3 flex md:justify-start">
          <p className="text-gray-400 text-lg md:text-xl underline underline-offset-4 decoration-gray-500 whitespace-nowrap">
            About Us – Pixla Group
          </p>
        </div>

        {/* RIGHT SIDE – Four Grid Cards */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          {/* Card 1 */}
          <div className="flex flex-col gap-5">
            <img
              src={storyLogo}
              alt="Our Story Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-[22px] md:text-[26px] font-semibold">
              Our Story
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[400px]">
              Pixla Group started in media, then expanded into technology, FMCG,
              and consumer businesses, building a diverse and scalable
              ecosystem.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-5">
            <img
              src={visionLogo}
              alt="Our Vision Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-[22px] md:text-[26px] font-semibold">
              Our Vision
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[400px]">
              To be a trusted global business ecosystem that unites industries,
              empowers entrepreneurs, and enriches lives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-5">
            <img
              src={valuesLogo}
              alt="Our Values Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-[22px] md:text-[26px] font-semibold">
              Our Values
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[400px]">
              • Focused on innovation, trust, excellence, collaboration, and
              sustainability, we create future-ready solutions, build lasting
              relationships, uphold high standards, grow together with
              stakeholders, and drive long-term impact.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-5">
            <img
              src={missionLogo}
              alt="Our Mission Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-[22px] md:text-[26px] font-semibold">
              Our Mission
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[400px]">
              • We deliver value-driven solutions across industries, create
              sustainable growth opportunities, and expand with innovation and
              trust at the core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
