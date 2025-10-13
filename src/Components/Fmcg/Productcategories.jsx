import React from "react";
import Fmcgimg3 from "./../../assets/Fmcg/Fmcgimg3.png"

const ProductCategories = () => {
  return (
    <section className="bg-[#f2f2f2] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16">
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
        Our Product Categories
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image */}
        <div className="w-80 flex justify-center md:justify-start">
          <img
            src={Fmcgimg3}
            alt="Pixla Products"
            className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          {/* Beverages */}
          <div>
            <h3 className="text-l text-gray-500 sm:text-l font-semibold  mb-2">Beverages</h3>
            <ul className="list-disc text-sm sm:text-base leading-relaxed">
              <li>Popular and refreshing brands: Pixlare, Fidaa, ClearUp, Mangozaa, Cokmak</li>
              <li>Ready-to-drink, flavored, and health-focused options</li>
              <li>Available across retail and online platforms</li>
            </ul>
          </div>

          {/* Groceries */}
          <div>
            <h3 className="text-l text-gray-500 sm:text-l font-semibold text-mb-2">Groceries</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>Staples, pulses, oils, and spices for home and business use</li>
              <li>Focus on quality, purity, and affordability</li>
              <li>Distributed through Pixla Network and partner channels</li>
            </ul>
          </div>

          {/* Wellness Products */}
          <div>
            <h3 className="text-lg text-gray-500 sm:text-l font-semibold mb-2">
              Wellness Products
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>Health-focused products to support well-being and lifestyle</li>
              <li>Includes supplements, nutritional beverages, and daily essentials</li>
              <li>Delivered through retail, e-commerce, and B2B channels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
