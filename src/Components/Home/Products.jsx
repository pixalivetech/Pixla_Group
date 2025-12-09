import React, { useEffect, useRef, useState } from "react";
import ShortVideoIcon from "./../../assets/Home/picon1.png";
import LiveStreamingIcon from "./../../assets/Home/picon2.png";
import AffiliateIcon from "./../../assets/Home/picon3.png";
import EcommerceIcon from "./../../assets/Home/picon4.png";
import AcademyIcon from "./../../assets/Home/picon5.png";

// 👇 Card images (replace or add real images as needed)
import Card1 from "./../../assets/Home/pcard1.png";
import Card2 from "./../../assets/Home/pcard1.png";
import Card3 from "./../../assets/Home/pcard1.png";
import Card4 from "./../../assets/Home/pcard1.png";
import Card5 from "./../../assets/Home/pcard1.png";
import Card6 from "./../../assets/Home/pcard1.png";
import Card7 from "./../../assets/Home/pcard1.png";

export default function ProductsServices() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true); // start paused until mouse leaves

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1;
    let animationFrame;

    const scrollAnimation = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += direction * 1.2; // scroll speed

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
      title: "Social Media & Entertainment",
      description:
        "Pixla — our short-video and social platform — helps people express themselves, share stories, and connect with a wider community through engaging content and creator tools.",
      img: Card1,
      link: "https://pixla.in/",
    },
    {
      icon: LiveStreamingIcon,
      title: "FMCG & Pixla Brands",
      description:
        "Under Pixla Brands we deliver everyday products across fashion, cosmetics, grocery, and wellness — combining quality, convenience and strong supply-chain partnerships.",
      img: Card2,
      link: "https://pixlabrands.com/",
    },
  
    {
      icon: AcademyIcon,
      title: "Education & Training (Pixla Academy)",
      description:
        "Pixla Academy provides practical courses, mentorship and internship programs to prepare learners for industry roles with hands-on projects and placement support.",
      img: Card4,
      link: "https://www.pixlaacademy.com/",
    },
    {
      icon: AffiliateIcon,
      title: "Gold & Jewellery (Pixla Gold)",
      description:
        "Save and invest in digital gold via flexible plans and convert savings into real jewellery — supported by our trusted partners and secure vaulting.",
      img: Card5,
      link: "https://pixlagold.com/",
    },
    {
      icon: ShortVideoIcon,
      title: "Technology Solutions",
      description:
        "Pixla Technology Services offers software development, digital platforms and IT consulting that help businesses scale and adapt to change.",
      img: Card6,
      link: "https://pixlatech.com/",
    },
    {
      icon: LiveStreamingIcon,
      title: "Research & Innovation (R&D)",
      description:
        "Our R&D teams explore new technologies and product ideas, building prototypes and innovations that strengthen the entire Pixla ecosystem.",
      img: Card7,
      link: "/it-services",
    },
  ];

  return (
    <section className="bg-black text-white pl-6 md:pl-24 py-16 md:py-32 font-sans overflow-hidden">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-sm md:text-lg inline-block border-b border-gray-400 font-medium mb-1 cursor-default">
          Our Products & Services
        </p>

        <div className="max-w-2xl">
          <h2 className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
            Pixla Group offers a wide range of products and services designed to connect people, empower
            businesses, and improve everyday life. Each division focuses on quality, innovation, and trust
            to deliver the best experience to our users and partners.
          </h2>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        role="list"
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pr-4"
        onMouseLeave={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
      >
        {services.map((item, idx) => (
          <article
            key={idx}
            role="listitem"
            tabIndex={0}
            className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default bg-gradient-to-b from-black/60 to-black/40 flex flex-col h-full"
            aria-label={item.title}
          >
            {/* Icon + Title */}
            <div className="p-5 flex items-center gap-4">
              <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 object-contain" loading="lazy" />
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-36 md:h-40 object-cover"
              loading="lazy"
            />

            {/* Description + Button */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black text-sm px-4 py-2 w-full inline-flex justify-center items-center gap-2 hover:bg-gray-200 transition-all rounded-lg"
                  aria-label={`Visit ${item.title} website`}
                >
                  Visit Website <span className="text-black">↗</span>
                </a>
              </div>
            </div>
          </article>
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
