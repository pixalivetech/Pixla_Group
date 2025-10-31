import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShortVideoIcon from "./../../assets/Home/picon1.png";
import LiveStreamingIcon from "./../../assets/Home/picon2.png";
import AffiliateIcon from "./../../assets/Home/picon3.png";
import EcommerceIcon from "./../../assets/Home/picon4.png";
import AcademyIcon from "./../../assets/Home/picon5.png";

// 👇 Card images
import Card1 from "./../../assets/Home/pcard1.png";
import Card2 from "./../../assets/Home/pcard1.png";
import Card3 from "./../../assets/Home/pcard1.png";
import Card4 from "./../../assets/Home/pcard1.png";
import Card5 from "./../../assets/Home/pcard1.png";

export default function ProductsServices() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(true); // 👈 Start paused (no scroll until mouse leaves)

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1;
    let animationFrame;

    const scrollAnimation = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += direction * 1.2; // scroll speed

        // Reverse direction at edges
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          direction = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        }
      }
      animationFrame = requestAnimationFrame(scrollAnimation);
    };

    animationFrame = requestAnimationFrame(scrollAnimation);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const services = [
    {
      icon: ShortVideoIcon,
      title: "Pixla (Short Video)",
      description:
        "A dynamic short video platform empowering creators to share, engage, and grow.Where creativity meets opportunity — anytime.",
      img: Card1,
      path: "/pixla",
    },
    {
      icon: LiveStreamingIcon,
      title: "Pixalive (Live Streaming)",
      description:
        "An interactive live streaming platform connecting creators and audiences in real time.",
      img: Card2,
      path: "/pixalive",
    },
   
    {
      icon: AcademyIcon,
      title: "Pixla Academy",
      description:
        "A global learning hub empowering students and professionals with industry-ready skills, innovation, and real-world knowledge.",
      img: Card5,
      path: "/pixlaacademy",
    },
  ];

  return (
    <section className="bg-black text-white pl-6 md:pl-24 py-16 md:py-32 font-sans overflow-hidden">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-sm md:text-lg inline-block border-b border-gray-400 font-medium mb-1 cursor-pointer">
          Our Products & Services
        </p>
        <h2 className="text-white text-xl md:text-2xl font-semibold max-w-2xl text-left md:text-left">
          Reimagining how brands connect with customers through data-driven
          retail advertising.
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pr-0"
        onMouseLeave={() => setIsPaused(false)} // 👈 Start scrolling when mouse leaves
        onMouseEnter={() => setIsPaused(true)}  // 👈 Stop scrolling when mouse enters
      >
        {services.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="p-5 flex justify-start">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-2 px-5">
              {item.title}
            </h3>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Description + Button */}
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-gray-300 text-sm flex-grow leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5">
                <button
                  onClick={() => navigate(item.path)}
                  className="bg-white text-black text-sm px-4 py-2 w-full flex justify-center items-center gap-2 hover:bg-gray-200 transition-all"
                >
                  Explore <span className="text-black">↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
