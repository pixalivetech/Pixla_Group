import React from "react";
 
const PixlaKeyFeatures = () => {
  return (
    <section className="bg-[#f6f6f6] px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:gap-44">
        
        {/* Left Side Title */}
        <div className="md:w-1/3 w-full flex md:justify-start justify-center mb-10 md:mb-0">
          <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
            Key Features
          </h2>
        </div>
 
        {/* Right Side Content */}
        <div className="md:w-2/3 w-full">
          <ul className="space-y-8 text-[#1f1f1f] text-[17px] leading-relaxed">
            <li>
              •{" "}
              <span className="font-medium">
              Largest skilling network in India              </span>{" "}
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Industry-relevant skills to enhance employability
              </span>{" "}
              
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Real-world experience through internships
              </span>{" "}
              
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Career growth support with placement assistance
              </span>{" "}
              
            </li>
            <li>
              •{" "}
              <span className="font-medium">
              Networking opportunities with top professionals and companies
              </span>{" "}
              companies
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
 
export default PixlaKeyFeatures;
 