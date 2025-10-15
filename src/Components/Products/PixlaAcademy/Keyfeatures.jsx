import React from "react";

const PixlaKeyFeatures = () => {
  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:gap-44">
        
        {/* Left Side Title */}
        <div className="md:w-1/3 w-full flex md:justify-start justify-center mb-10 md:mb-0">
          <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
            Key Features
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="md:w-2/3 w-full">
          <ul className="space-y-11 text-[#1f1f1f] text-[17px] leading-[2.3rem] mb-9">
            <li className="flex items-start gap-3">
              <span className="text-lg leading-[2.3rem]">•</span>
              <span className="font-medium max-w-[480px]">
                Largest skilling network in India
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg leading-[2.3rem]">•</span>
              <span className="font-medium max-w-[480px]">
                Industry-relevant skills to enhance employability
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg leading-[2.3rem]">•</span>
              <span className="font-medium max-w-[480px]">
                Real-world experience through internships
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg leading-[2.3rem]">•</span>
              <span className="font-medium max-w-[480px]">
                Career growth support with placement assistance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg leading-[2.3rem]">•</span>
              <span className="font-medium max-w-[480px]">
                Networking opportunities with top professionals and companies
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PixlaKeyFeatures;
