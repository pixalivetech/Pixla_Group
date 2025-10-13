import React from 'react';
import { User, Heart, Eye } from 'lucide-react'; // Icons for the social metrics
import SmallImg from "./../../assets/AboutUs/s1.png";
import BigImg from "./../../assets/AboutUs/s2.png";
import LargeImg from "./../../assets/AboutUs/large.webp"

// --- MOCK DATA ---
const articlesData = [
  // ... (Data for AnnouncementCard remains the same)
  {
    id: 1,
    category: "POLITICS",
    title: "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
    description: "Explore articles, thought leadership posts, and industry insights from Pixla Group. Learn about trends, innovation, and business strategies shaping our ecosystem.",
    imageSrc: SmallImg, 
    author: "Somu, K7",
    likes: "10",
    views: "1.4k"
  },
  {
    id: 2,
    category: "POLITICS",
    title: "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
    description: "Explore articles, thought leadership posts, and industry insights from Pixla Group. Learn about trends, innovation, and business strategies shaping our ecosystem.",
    imageSrc: BigImg, 
    author: "Somu, K7",
    likes: "10",
    views: "1.4k"
  },
];

const featuredArticle = {
  caption: "The Beginning of Pixla Kalam Foundation is the vision of Mr. Rajasekar Sundaresan, CEO, Pixla Group",
  imageSrc: LargeImg,
};

// --- ANNOUNCEMENT CARD COMPONENT (Remains Unchanged) ---
const AnnouncementCard = ({ category, title, description, imageSrc, author, likes, views }) => (
  <div className="flex flex-col pt-8 first:pt-0 ">
    <div className="text-xs md:text-[20px] font-medium text-[#000000] uppercase mb-2 tracking-wider">
      {category}
    </div>
    <div className="flex space-x-2">
      <div className="flex-1">
        <h3 className="text-base md:text-[20px] font-bold leading-relaxed mt-6 text-[#000000] mb-2 cursor-pointer hover:text-gray-700">
          {title}
        </h3>
        <p className="text-[#7A7A7A] text-sm md:text-[20px] mb-3 hidden sm:block">
          {description}
        </p>
        <div className="flex items-center text-xs md:text-[16px] text-[#000000] space-x-4">
          <span className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </span>
        </div>
      </div>
      <div className="w-24 h-24 flex-shrink-0 ml-0 md:ml-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-sm md:w-[213px] md:h-[146px]"
        />
      </div>
    </div>
  </div>
);

// --- MEDIA ANNOUNCEMENTS MAIN SECTION ---
const MediaAnnouncements = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-white font-sans mt-20">
      
      {/* --- MODIFIED HEADER SECTION ---
        Using flex and justify-between to place the title left and the text right.
      */}
      <div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
        
        {/* Title (Left Side) */}
        <h1 className="text-xl  md:text-[24px] font-medium text-[#7A7A7A] inline-block border-b-2 border-gray-300 pb-1 flex-shrink-0">
          Media & Announcements
        </h1>
        
        {/* Paragraph (Right Side) */}
        <p className="text-base md:text-[24px] text-[#000000] leading-relaxed   md:w-3/5 lg:w-1/2 md:text-left">
          Stay updated with the latest happenings, press coverage, and insights from Pixla Group. Our News & Media section highlights our growth, innovations, and impact across industries.
        </p>
      </div>

      {/* Content Grid (Remains Unchanged) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        
        {/* Left Column: News/Announcement List */}
        <div className="lg:col-span-1 border-b lg:border-none lg:divide-y divide-gray-200">
          {articlesData.map(article => (
            <AnnouncementCard key={article.id} {...article} />
          ))}
          <div className="h-4 border-b border-gray-200 lg:hidden"></div>
        </div>

        {/* Right Column: Featured Article */}
        <div className="lg:col-span-2 mt-8 lg:mt-0 ml-0 lg:ml-25">
          <div className="bg-white">
            {/* <div className="p-4 bg-gray-50 border-y border-gray-200">
              <p className="text-sm text-gray-800 font-semibold">
                {featuredArticle.caption}
              </p>
            </div> */}
            <div className="relative">
              <img
                src={featuredArticle.imageSrc}
                alt="Featured Announcement"
                className="w-full h-auto object-cover max-w-[620px] max-h-[658px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaAnnouncements;