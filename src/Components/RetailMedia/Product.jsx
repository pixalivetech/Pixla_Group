import React from "react";
import RetailImage from "./../../assets/RetailMedia/P1.png"; // Replace with your actual image path

const PixlaProducts = () => {
  return (
    <section className="bg-[#f2f2f2] px-6 md:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Image with Text Overlay */}
        <div className="relative  overflow-hidden shadow-md">
          <img
            src={RetailImage}
            alt="Retail Media Network"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
            <p className="text-white text-center text-sm md:text-base leading-relaxed max-w-lg">
              Pixla’s Retail Media Network is transforming how brands connect
              with customers. By combining data-driven advertising, in-store
              activations, and digital engagement strategies,
            </p>
          </div>
        </div>

        {/* Right: Product List */}
        <div className="bg-white  shadow-md p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">#Products</h2>
          <ul className="list-disc list-inside text-black space-y-2 text-base">
            <li>Pixla</li>
            <li>Pixalive</li>
            <li>Pixlakart</li>
            <li>Pixclick</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PixlaProducts;
