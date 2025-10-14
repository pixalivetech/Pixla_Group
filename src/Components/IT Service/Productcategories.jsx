import React from "react";
import Fmcgimg3 from "./../../assets/Fmcg/Fmcgimg3.png";

const ProductCategories = () => {
  return (
    <section className="bg-[#f2f2f2] px-6 md:px-24 py-16 md:py-24">
      {/* Section Title */}
     <div className="inline-block border-b-2 border-gray-300 mb-8 ">
  <p className="!text-xl sm:!text-2xl md:!text-xl text-gray-500 font-normal">
   Our Offerings
  </p>
</div>


      {/* Main Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 ">
  {/* Left Image */}
  <div className="flex justify-center md:justify-start">
    <img
      src={Fmcgimg3}
      alt="Pixla Products"
      className="w-70 h-[220px] sm:h-[280px] md:h-[350px] lg:h-[300px] object-cover shadow-md"
    />
  </div>

  {/* Right Content */}
  <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-800 relative -ml-20 sm:-ml-20 lg:-ml-40">
    {/* LEFT COLUMN: Beverages + Wellness Products */}
    <div className="relative pr-4 sm:pr-8 flex flex-col gap-6">

      {/* Vertical Divider with Gap */}
      <div className="hidden sm:block absolute right-0 top-0 h-full w-px bg-gray-300">
        <div className="absolute top-1/2 -translate-y-1/2 h-6 w-px bg-[#f2f2f2]" />
      </div>

      {/* Beverages */}
      <div>
        <h3 className="text-lg text-gray-500 font-semibold mb-2">Technology Solutions & Digital Transformation</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
          <li>Popular and refreshing brands: Pixlare, Fidaa, ClearUp, Mangooza, Cokmak</li>
          <li>Ready-to-drink, flavored, and health-focused options</li>
          <li>Available across retail and online platforms</li>
        </ul>
      </div>

      {/* Wellness Products */}
      <div className="pt-4">
        <h3 className="text-lg text-gray-500 font-semibold mb-2">Pixla Academy – Training & Skill Development</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
          <li>Health-focused products to support well-being and lifestyle</li>
          <li>Includes supplements, nutritional beverages, and daily essentials</li>
          <li>Delivered through retail, e-commerce, and B2B channels</li>
        </ul>
      </div>
    </div>

    {/* RIGHT COLUMN: Groceries */}
    <div className="pl-4 sm:pl-8">
      <h3 className="text-lg text-gray-500 font-semibold mb-2">Pixla Works – Freelancing Platform</h3>
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
