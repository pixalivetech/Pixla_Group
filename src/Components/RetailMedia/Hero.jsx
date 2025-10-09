import React from "react";
import Hero from "./../../assets/RetailMedia/Retailhero.webp"

const PixlaGroup = () => {
  return (
     <section className="bg-[#f2f2f2] px-6 md:px-24  py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Heading & Button */}
        <div className="md:w-1/2">
          <h1 className="text-2xl  md:text-4xl font-semibold text-gray-900 leading-snug ">
            ONE GROUP. MANY <br />
            DIVISIONS. ENDLESS
          </h1>
        
        </div>

        {/* Description */}
        <div className="md:w-1/2 ">
          <button className="bg-black mb-5 text-white px-2 py-1  text-xl hover:bg-gray-800 transition">
            Get Started →
          </button>
          <p className="text-gray-700 ">
            Pixla Group is a diversified enterprise driving innovation and trust across
            retail, FMCG, IT services, and beyond.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 ">
        <img
          src={Hero}
          alt="Pixla Group Building"
          className="w-full h-100 object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0   flex items-end">
        <div className="p-4  text-white bg-black/10 backdrop-blur-sm rounded-md  mb-4 ml-4 shadow-lg">
  <h2 className="text-lg md:text-xl font-semibold mb-1">
    “Empowering Growth Beyond Boundaries”
  </h2>
  <p className="text-gray-200 text-lg ">
    Connecting industries with innovation and trust. Pixla Group drives progress
    in retail, FMCG, IT, and beyond.
  </p>
</div>


          {/* Arrow Button */}
          <div className="absolute bottom-6 mb-4 right-6">
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition">
              <span className="text-2xl text-gray-900">&#8599;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="flex flex-col md:flex-row items-start  mt-8 gap-4">
        <a
  href="#"
  className="md:w-1/2 text-gray-500 text-base whitespace-nowrap underline underline-offset-5"
>
  Why Choose?
</a>

        <p className="md:w-1/2 text-gray-600 text-base leading-relaxed md:max-w-2xl">
          A trusted partner for leading brands, offering multi-platform engagement,
          data-driven solutions, and expertise in digital marketing, retail activations,
          and omnichannel campaigns.
        </p>
      </div>
    </section>
  );
};

export default PixlaGroup;
