import React from "react";
import { Link } from "react-router-dom";
import handshakeImage from "./../../assets/Home/partner.png";

export default function InvestorsAndPartners() {
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-24 px-6 md:px-24">
      <div className="mx-auto">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-normal text-gray-700 mb-12">
          Investors &amp; Partners – Grow with
          <br />
          <span className="font-semibold">Pixla Group</span>
        </h1>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-2">
          {/* Left: Image with soft gray background */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            {/* Soft gray background container */}
            {/* Added lg:overflow-visible to allow the image to spill out on desktop only */}
            {/* The default is overflow-hidden for mobile to contain the image */ }
            <div className="relative bg-gray-200 flex justify-center items-center lg:items-start h-[330px] w-[320px] overflow-hidden lg:overflow-visible">
              {/* Image inside separate div */}
              {/* The aggressive positioning is restored here, but the container's overflow handles mobile */}
              <div className="lg:mt-20 lg:-mr-40 mt-10"> 
                <img
                  src={handshakeImage}
                  alt="Partners shaking hands"
                  className="w-[330px] h-[330px] object-cover shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:w-1/2 text-gray-700">
            <p className="text-lg leading-relaxed mb-8 max-w-xl">
             At Pixla Group, we believe in growing together. We invite visionary investors and strategic partners to join us in shaping India’s first integrated digital and consumer ecosystem.

By collaborating with Pixla Group, you become part of a dynamic journey that blends technology, sustainability, innovation, and social impact. Together, we can build businesses that not only thrive but also make a difference in people’s lives.

Let’s create the future—together.

👉 Partner with Pixla Group. Invest in tomorrow.   
            </p>

          
            <div className="mt-10">
              <Link to ="/contact">
              <button
                type="button"
                className="inline-block py-3 px-10 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition"
              >
                Contact us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}