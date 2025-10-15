import React from "react";
import Fmcgimg3 from "./../../../assets/pixlaAcademy/p3.png";

const ProductCategories = () => {
  return (
    <section className="px-6 sm:px-12 md:px-24 py-16 md:py-24">
      {/* Section Title */}
      <div className="inline-block border-b-2 border-gray-300 mb-8">
        <p className="text-xl sm:text-2xl md:text-xl text-gray-500 font-normal">
          Our Offerings
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left Image */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Fmcgimg3}
            alt="Pixla Products"
            className="w-full max-w-[350px] h-[220px] sm:h-[280px] md:h-[350px] lg:h-[300px] object-cover shadow-md"
          />

          {/* Black Click Button */}
          <div className="relative w-full flex justify-center mt-15">
  <button
    className="bg-black text-white px-6 py-2 w-[150px] font-medium hover:bg-gray-800 transition 
               absolute left-1/2 -translate-x-[120%] rounded-md"
  >
    Click
  </button>
</div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-800 gap-8 sm:gap-6 relative md:-ml-20 lg:-ml-40">
          {/* LEFT COLUMN: Beverages & Wellness */}
          <div className="relative pr-0 sm:pr-8 flex flex-col gap-6">
            {/* Vertical Divider */}
            <div className="hidden sm:block absolute right-0 top-0 h-full w-px bg-gray-300">
              <div className="absolute top-1/2 -translate-y-1/2 h-6 w-px bg-[#f2f2f2]" />
            </div>

            {/* Beverages */}
            <div>
              <h3 className="text-lg text-gray-500 font-semibold mb-2">
                Beverages
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
                <li>Popular and refreshing brands: Pixlare, Fidaa, ClearUp, Mangooza, Cokmak</li>
                <li>Ready-to-drink, flavored, and health-focused options</li>
                <li>Available across retail and online platforms</li>
              </ul>
            </div>

            {/* Wellness Products */}
            <div className="pt-4">
              <h3 className="text-lg text-gray-500 font-semibold mb-2">
                Wellness Products
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
                <li>Health-focused products to support well-being and lifestyle</li>
                <li>Includes supplements, nutritional beverages, and daily essentials</li>
                <li>Delivered through retail, e-commerce, and B2B channels</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Groceries */}
          <div className="pl-0 sm:pl-8">
            <h3 className="text-lg text-gray-500 font-semibold mb-2">
              Groceries
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>Staples, pulses, oils, and spices for home and business use</li>
              <li>Focus on quality, purity, and affordability</li>
              <li>Distributed through Pixla Network and partner channels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
