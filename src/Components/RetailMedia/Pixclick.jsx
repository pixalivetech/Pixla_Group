import { FaGooglePlay, FaApple } from "react-icons/fa";
import Pixclick from "./../../assets/RetailMedia/Pix1.png"
import Pixicon from "./../../assets/RetailMedia/Pixclickicon.png"

const PixlclickSection = () => {
  return (
    <section className="bg-[#f2f2f2] text-gray-900 px-6 md:px-24 py-16">
      <h3 className="text-sm md:text-base font-medium mb-4">3. Pixlclick (Affiliate Rewards)</h3>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT IMAGE WITH SPEECH BUBBLE */}
        <div className="relative">
          <img src={Pixclick} alt="Affiliate Example" className="w-full " />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between">
          {/* Description Box */}
          {/* Removed ml-20 and replaced with 'md:ml-20' so it only applies on medium screens and up */}
          <p className="bg-white p-4 font-semibold shadow-md text-sm md:text-base md:ml-20">
            Enables scalable digital marketing by connecting <br/> brands with affiliates, offering
            tracking, analytics,<br/> and performance-based rewards.
          </p>

          {/* Applied margins only from medium screens and up: mt-40 becomes md:mt-40 and ml-20 becomes md:ml-20. */}
          {/* Also replaced the redundant 'mt-6' with the existing 'md:mt-40' to keep it clean, but added a mobile 'mt-6' for spacing. */}
          <div className="mt-6 flex items-start gap-6 md:mt-40 md:ml-20">
            {/* Logo */}
            <img src={Pixicon} alt="Pixlclick Logo" className="w-30 h-30 object-contain" />

            {/* Text */}
            <div>
              <p className="font-medium text-lg">Pixlclick</p>
              <p className="text-gray-600 text-sm">(Affiliate Rewards)</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMPACT + BUTTONS */}
      <div className="mt-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Impact:</strong><br />
          300+ creators onboarded in 60 days.<br />
          +22% sales growth at 70% lower cost than ads.
        </p>

        <div className="flex gap-4 mt-4">
          {/* Play Store Button */}
          <a
            href="#"
            className="flex items-center bg-black text-white px-4 py-2  gap-2 hover:opacity-80 transition"
          >
            <FaGooglePlay className="text-lg" />
            <span className="text-sm">Play Store</span>
          </a>

          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center bg-black text-white px-4 py-2  gap-2 hover:opacity-80 transition"
          >
            <FaApple className="text-lg" />
            <span className="text-sm">App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PixlclickSection;