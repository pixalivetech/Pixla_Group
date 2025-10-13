import React from "react";
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
            <div className="relative bg-gray-200  flex justify-center items-start h-[330px] w-[320px]">
              {/* Image inside separate div */}
              <div className="mt-20 -mr-40">
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
              Pixla Group is committed to building a strong ecosystem of growth, innovation,
              and collaboration. We invite investors, franchise partners, and collaborators to
              explore exciting opportunities across our divisions and products.
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-9 text-black">
              #Business Opportunities
            </h2>

            <ul className="space-y-4 text-lg max-w-md text-black">
              <li className="flex items-start gap-3">
                <span className="flex-none  text-2xl font-extrabold">•</span>
                <span className="font-semibold" >Retail Media Network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none  text-2xl font-extrabold">•</span>
                <span className="font-semibold">FMCG / Pixla Consumer Products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none  text-2xl font-extrabold">•</span>
                <span className="font-semibold">IT Services – Technology solutions</span>
              </li>
            </ul>

            <div className="mt-10">
              <button
                type="button"
                className="inline-block py-3 px-10 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
