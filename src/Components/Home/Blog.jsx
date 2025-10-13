// src/components/BlogsInsights.jsx
import React from "react";
/* replace these with your real images */
import Img1 from "./../../assets/Home/blog1.png";
import Img2 from "./../../assets/Home/blog2.png";
import Img3 from "./../../assets/Home/blog3.png";

const posts = [
  {
    id: 1,
    category: "POLITICS",
    title: "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
    author: "Somu, K7",
    comments: 10,
    likes: "1.4k",
    img: Img1,
  },
  {
    id: 2,
    category: "POLITICS",
    title: "CFIF Leads Coalition Urging Congress to Support the Save Local Business",
    author: "Somu, K7",
    comments: 10,
    likes: "1.4k",
    img: Img2,
  },
  {
    id: 3,
    category: "ECONOMY",
    title: "How Urban Policy Shapes Local Business Recovery After Crisis",
    author: "Somu, K7",
    comments: 8,
    likes: "900",
    img: Img3,
  },
];

export default function BlogsInsights() {
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* top row: left label + center intro */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-42 mb-12">
          <div className="md:w-1/4">
            <p className="inline-block border-b-2 border-gray-200 text-gray-500 font-medium  cursor-pointer">Blogs &amp; Insights</p>
          </div>

          <div className="md:w-3/4">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-800 leading-snug ">
              Explore articles, thought leadership posts, and industry insights from Pixla Group.
              
            </h2>
          </div>
        </div>

        {/* posts row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className=" overflow-hidden flex flex-row md:flex-col lg:flex-row items-start gap-4 p-4"
            >
              {/* image column */}
              <div className="flex-shrink-0">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-[110px] h-[90px] object-cover"
                />
              </div>

              {/* content column */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <span className="text-xs md:text-sm font-semibold text-gray-700">{p.category}</span>
                </div>

                <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-900 leading-snug">
                  {p.title}
                </h3>

                <div className="mt-3 flex items-center text-xs font-semibold text-gray-500 gap-4">
                  <div className="flex items-center gap-2">
                    {/* author icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 20c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-black">{p.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* comment icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-black">{p.comments}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* like icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-black">{p.likes}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
