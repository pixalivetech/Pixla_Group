import React from "react";
import { UserRound, MessageCircleMore, Zap } from "lucide-react";
import SmallImg from "./../../assets/AboutUs/s1.png";
import BigImg from "./../../assets/AboutUs/s2.png";
import LargeImg from "./../../assets/AboutUs/large.webp";

const MediaAnnouncements = () => {
  const articlesData = [
    {
      id: 1,
      category: "POLITICS",
      title:
        "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
      description:
        "Explore articles, thought leadership posts, and industry insights from Pixla Group. Learn about trends, innovation, and business strategies shaping our ecosystem.",
      imageSrc: SmallImg,
      author: "Somu, K7",
      likes: "10",
      views: "1.4k",
    },
    {
      id: 2,
      category: "POLITICS",
      title:
        "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
      description:
        "Explore articles, thought leadership posts, and industry insights from Pixla Group. Learn about trends, innovation, and business strategies shaping our ecosystem.",
      imageSrc: BigImg,
      author: "Somu, K7",
      likes: "10",
      views: "1.4k",
    },
  ];

  const featuredArticle = {
    caption:
      "The Beginning of Pixla Kalam Foundation is the vision of Mr. Rajasekar Sundaresan, CEO, Pixla Group",
    imageSrc: LargeImg,
  };

  return (
    <section className=" bg-[#F2F2F2] px-6 md:px-24 py-16 font-sans">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 space-y-4 lg:space-y-0">
        <h2 className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#7A7A7A] border-b-2 border-gray-300 pb-1 whitespace-nowrap">
          Media & Announcements
        </h2>

        <p className="text-sm sm:text-base lg:text-[20px] text-[#000000] leading-relaxed lg:max-w-[55%]">
          Stay updated with the latest happenings, press coverage, and insights
          from Pixla Group. Our News & Media section highlights our growth,
          innovations, and impact across industries.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 xl:gap-10">
        {/* Left Column */}
        <div className="divide-y divide-gray-200 space-y-6">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="flex flex-col py-6 space-y-4 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Category + Title + Image Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Left Text */}
                <div className="flex flex-col justify-start flex-1">
                  <div className="text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold text-black uppercase tracking-wide mb-1">
                    {article.category}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium text-black leading-snug cursor-pointer hover:text-gray-700 mt-1">
                    {article.title}
                  </h3>
                </div>

                {/* Right Image */}
                <div className="w-full sm:w-[180px] md:w-[200px] lg:w-[213px] h-auto sm:h-[110px] md:h-[130px] lg:h-[136px] flex-shrink-0">
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    className="w-full h-full object-cover shadow-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#7A7A7A] text-sm sm:text-base lg:text-[17px] leading-relaxed">
                {article.description}
              </p>

              {/* Author + Comments + Views */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm lg:text-[16px] text-[#000000] space-x-4">
                <span className="flex items-center space-x-1">
                  <UserRound className="w-4 h-4 cursor-pointer" />
                  <span>{article.author}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MessageCircleMore className="w-4 h-4 cursor-pointer" />
                  <span>{article.likes}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 cursor-pointer" />
                  <span>{article.views}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start lg:items-end">
          <div className="w-full max-w-[620px]">
            <img
              src={featuredArticle.imageSrc}
              alt="Featured"
              className="w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAnnouncements;
