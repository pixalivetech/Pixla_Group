import React from "react";
import businessMan from "./../../../assets/pixlaAcademy/p2.png"; // businessman image
import dotsBg from "./../../../assets/pixlaAcademy/dots.png";    // dotted overlay
import peopleBg from "./../../../assets/pixlaAcademy/peoplebg.png"; // faint people background
import phoneImg from "./../../../assets/Pixlaacademy/p3.png";        // phone image for second section

const PixlaBenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-20 px-6 md:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-28">

        {/* ---------- Franchise Opportunities ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          
          {/* LEFT SIDE: image composition */}
          <div className="relative flex justify-center md:justify-start w-full">
            
            {/* 1️⃣ faint background with people */}
            <img
              src={peopleBg}
              alt="people background"
              className="absolute top-0 left-[-40px] w-[420px] h-[320px] object-cover opacity-40 z-0"
            />

            {/* 2️⃣ dotted pattern */}
            <img
              src={dotsBg}
              alt="dots"
              className="absolute top-10 left-[-30px] w-[160px] opacity-80 z-10"
            />

            {/* 3️⃣ businessman main image */}
            <img
              src={businessMan}
              alt="businessman"
              className="relative z-20 w-[280px] md:w-[360px] object-cover"
            />

            {/* 4️⃣ black box behind the yellow one */}
            <div className="absolute bottom-[-10px] left-0 md:left-[40px] bg-black w-[250px] h-[100px] md:w-[270px] md:h-[120px] z-30"></div>

            {/* 5️⃣ yellow box with text */}
            <div className="absolute bottom-[-20px] left-[60px] bg-[#f6b800] text-black px-5 py-5 md:px-6 md:py-7 w-[220px] md:w-[240px] z-40 shadow-lg">
              <p className="text-[13px] font-medium mb-1">
                “Benefits for Businesses”
              </p>
              <h3 className="text-2xl font-semibold leading-tight">Growth</h3>
            </div>
          </div>

          {/* RIGHT SIDE: text content */}
          <div className="pt-6 md:pt-0">
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Franchise Opportunities
            </h2>

            <ul className="space-y-6 text-[#1f1f1f] text-[17px] leading-relaxed list-inside">
              <li>• Join India’s largest skilling network as a franchise partner</li>
              <li>• Set up training centers in your city or district with Pixla’s support</li>
              <li>• Benefit from proven curriculum, branding, and operational guidance</li>
              <li>• Contribute to empowering students and professionals while growing your business</li>
            </ul>
          </div>
        </div>

        {/* ---------- Our Programs Section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT: phone image */}
          <div className="flex justify-center md:justify-start items-start">
            <img
              src={phoneImg}
              alt="Pixla phone"
              className="w-[200px] md:w-[260px] rounded-md object-cover"
            />
          </div>

          {/* RIGHT: programs content */}
          <div>
            <h2 className="text-[#7a7a7a] text-[20px] font-medium underline underline-offset-4 decoration-[#bfbfbf] mb-6">
              Our Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Training Programs */}
              <div>
                <p className="font-semibold text-gray-700 mb-3">Training Programs</p>
                <ul className="list-disc ml-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
                  <li>Promoting a greener future through seed ball and sapling initiatives.</li>
                </ul>
              </div>

              {/* Internship Opportunities */}
              <div>
                <p className="font-semibold text-gray-700 mb-3">Internship Opportunities</p>
                <ul className="list-disc ml-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
                  <li>3–6 month internships with hands-on experience</li>
                  <li>Live project work at Pixla Technology Services</li>
                  <li>Placement opportunities</li>
                </ul>
              </div>

              {/* Placement Support */}
              <div className="md:col-span-2">
                <p className="font-semibold text-gray-700 mb-3">Placement Support</p>
                <ul className="list-disc ml-5 space-y-2 text-[16px] text-gray-800 leading-relaxed">
                  <li>Guidance to secure jobs in IT and technology sectors</li>
                  <li>Resume building, interview preparation, and mentoring</li>
                  <li>Access to Pixla’s partner network and recruitment pipeline</li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <button className="bg-black text-white px-8 py-2 mt-6 hover:bg-gray-800 transition-all duration-300">
              Click
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PixlaBenefitsSection;
