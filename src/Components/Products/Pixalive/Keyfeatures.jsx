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
                Real-Time Live Streaming:
              </span>{" "}
              Broadcast events, product launches, or entertainment content instantly.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
                Interactive Engagement:
              </span>{" "}
              Chat, polls, Q&amp;A, and reactions during live sessions.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
                Monetization &amp; Rewards:
              </span>{" "}
              Earn revenue through brand collaborations, gifts, and viewer participation.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
                Event Hosting &amp; Collaboration:
              </span>{" "}
              Host workshops, webinars, and live campaigns.
            </li>
            <li>
              •{" "}
              <span className="font-medium">
                Gold Rewards System:
              </span>{" "}
              Viewers earn Gold Dots while watching live streams, redeemable for products or physical gold.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
 
export default PixlaKeyFeatures;
 