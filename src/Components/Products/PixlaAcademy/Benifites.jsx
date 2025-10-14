import React from "react";
import businessMan from "./../../../assets/pixlaAcademy/p2.png"; // businessman
import dotsBg from "./../../../assets/pixlaAcademy/dots.png";    // dots overlay
import phoneImg from "./../../../assets/pixlaAcademy/p3.png";   // phone

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-20 px-6 md:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-28">

        {/* ---------- Franchise Opportunities ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          
          {/* LEFT SIDE: title + image */}
          <div className="relative flex flex-col items-center md:items-start w-full">
            {/* Title */}
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-10">
              Franchise Opportunities
            </h2>

            {/* image wrapper */}
            <div className="relative">
              {/* dots */}
              <img
                src={dotsBg}
                alt="dots"
                className="absolute top-[-20px] left-[-20px] w-[140px] md:w-[220px] z-10 opacity-80"
              />
              {/* businessman */}
              <img
                src={businessMan}
                alt="businessman"
                className="relative z-20 w-[260px] md:w-[360px] object-cover"
              />
              {/* floating card */}
              <div className="absolute left-[100px] md:left-[180px] bottom-[20px] md:bottom-[190px] bg-[#F2B40A] text-white px-5 py-5 md:px-6 md:py-7 w-[220px] md:w-[240px] shadow-lg z-30">
                <p className="text-[13px] md:text-sm font-medium mb-1">Benefits for Businesses</p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Growth</h3>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-6 md:mt-0">
            <ul className="space-y-4 text-[#1f1f1f] text-[16px] md:text-[17px] leading-relaxed">
              <li>• Join India’s largest skilling network as a franchise partner</li>
              <li>• Set up training centers in your city or district with Pixla’s support</li>
              <li>• Benefit from proven curriculum, branding, and operational guidance</li>
              <li>• Contribute to empowering students and professionals while growing your business</li>
            </ul>
          </div>
        </div>

        {/* ---------- Our Programs Section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* LEFT SIDE: title + phone image + button */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Title */}
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf]">
              Our Programs
            </h2>

            {/* phone image */}
            <img
              src={phoneImg}
              alt="Pixla phone"
              className="w-[200px] md:w-[260px] rounded-md object-cover"
            />

            {/* button */}
            <button className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition-all duration-300">
              Click
            </button>
          </div>

         {/* RIGHT SIDE: 3 content blocks */}
<div className="flex flex-col justify-between h-full">
  <div className="space-y-8">
    {/* Training Programs */}
    <div>
      <h3 className="text-lg text-gray-500 font-semibold mb-2">Training Programs</h3>
      <ul className="list-disc pl-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
        <li>Promoting a greener future through seed ball and sapling initiatives</li>
      </ul>
    </div>

    {/* Internship Opportunities */}
    <div>
      <h3 className="text-lg text-gray-500 font-semibold mb-2">Internship Opportunities</h3>
      <ul className="list-disc pl-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
        <li>3–6 month internships with hands-on experience</li>
        <li>Live project work at Pixla Technology Services</li>
        <li>Placement opportunities</li>
      </ul>
    </div>
  </div>

  {/* Placement Support → goes to bottom */}
  <div className="mt-10">
    <h3 className="text-lg text-gray-500 font-semibold mb-2">Placement Support</h3>
    <ul className="list-disc pl-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
      <li>Guidance to secure jobs in IT and technology sectors</li>
      <li>Resume building, interview preparation, and mentoring</li>
      <li>Access to Pixla’s partner network and recruitment pipeline</li>
    </ul>
  </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
