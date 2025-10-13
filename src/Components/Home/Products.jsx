import React from "react";
import ShortVideoIcon from "./../../assets/Home/picon1.png";
import LiveStreamingIcon from "./../../assets/Home/picon2.png";
import AffiliateIcon from "./../../assets/Home/picon3.png";
import EcommerceIcon from "./../../assets/Home/picon4.png";

// 👇 4 different card images
import Card1 from "./../../assets/Home/pcard1.png";
import Card2 from "./../../assets/Home/pcard1.png";
import Card3 from "./../../assets/Home/pcard1.png";
import Card4 from "./../../assets/Home/pcard1.png";

export default function ProductsServices() {
  const services = [
    {
      icon: ShortVideoIcon,
      title: "Pixla (Short Video)",
      description:
        "A dynamic short video platform empowering creators to share, engage, and grow.",
      img: Card1,
    },
    {
      icon: LiveStreamingIcon,
      title: "Pixalive (Live Streaming)",
      description:
        "An interactive live streaming platform connecting creators and audiences in real time.",
      img: Card2,
    },
    {
      icon: AffiliateIcon,
      title: "Pixclick (Affiliate Market)",
      description:
        "Affiliate marketing made simple – enabling businesses and individuals to earn through smart referrals.",
      img: Card3,
    },
    {
      icon: EcommerceIcon,
      title: "Pixlakart (E-commerce)",
      description:
        "A next-generation e-commerce platform designed to simplify online shopping and empower sellers.",
      img: Card4,
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-24 py-16 md:py-32 font-sans">
      {/* Header */}
       <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left side */}
        <p className="text-gray-400 text-sm md:text-lg inline-block border-b border-gray-400 font-medium mb-1 cursor-pointer">Our Products & Services</p>

        {/* Right side */}
        <h2 className="text-white text-xl md:text-2xl font-semibold max-w-2xl text-left md:text-left">
          Reimagining how brands connect with customers through data-driven
          retail advertising.
        </h2>
      </div>
<br />
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="p-4 flex justify-start">
              <img src={item.icon} alt={item.title} className="w-10 h-10" /><br /><br />
              
            </div>
              <h3 className="text-white font-semibold text-md mb-2 px-4">
                {item.title}
              </h3>
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              
              <p className="text-gray-300 text-sm flex-grow">
                {item.description}
              </p>

              {/* Explore Button */}
              <div className="mt-4">
                <button className="bg-white text-black text-sm px-4 py-2 w-full flex justify-center items-center gap-2 hover:bg-gray-200 transition-colors">
                  Explore <span className="text-black">↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
