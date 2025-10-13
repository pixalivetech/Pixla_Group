import React from 'react';
 import Career from './../../assets/AboutUs/career.webp'; // Removed the failing local import

// Main component containing the entire UI screen
const App = () => {

  // --- Configuration Data ---
  const headerTitle = "Careers at Pixla Group";
  const headerPoints = [
    "Pixla Group empowers professionals by building talent and nurturing growth.",
    "Through Pixla Works, we offer opportunities for careers, new roles, and freelance projects."
  ];

  const imageBlockText = "Pixla Group provides hands-on internships that equip students and young professionals with real-world skills and career opportunities.";
  const positions = [
    "Retail Media Network",
    "Pixla Consumer Products",
    "IT Services"
  ];
  // Replaced the local import with a robust placeholder image URL
  const placeholderImageUrl = Career; 

  return (
    // Outer container matching the subtle off-white background of the screenshot
    <div className="min-h-screen bg-gray-50 font-Open Sans px-6 md:px-24  py-16">
      {/* Content wrapper to center and limit width */}
      <div className="font-open-sans ">

        {/* 1. Header Section: Title and Bullet Points */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 lg:mb-20">
          
          {/* Left Side: Title with Underline */}
          <div className="lg:w-1/3">
            <h1 
              className="text-xl md:text-[24px] font-medium text-[#7A7A7A] pb-1"
              style={{ 
                // Custom underline style to match the subtle look in the image
                borderBottom: '2px solid #ccc',
                width: 'fit-content' // Keeps the underline only under the text
              }}
            >
              {headerTitle}
            </h1>
          </div>
          
          {/* Right Side: Two Paragraphs/Bullet Points */}
          {/* Adjust width to take up more space on desktop */}
          <div className="lg:w-2/3">
            <ul className="space-y-4 text-[#7A7A7A] text-base md:text-[24px]">
              {headerPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  {/* Subtle dark gray dot bullet to match the image */}
                  <span className="text-[#7A7A7A] mr-3 text-lg leading-6">•</span> 
                  <p className="leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Main Content Section: Image Block and Positions Card */}
        {/* Uses grid for responsive layout. Stacks on mobile, side-by-side on desktop. 
            The grid ratio (3/5 and 2/5) is set to visually match the image's layout. */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Left Block: Image, Text Overlay, and Button */}
          <div className="lg:col-span-3">
            <div 
              className="relative w-full overflow-hidden shadow-lg"
              // Set a responsive aspect ratio for the image container
              style={{ minHeight: '300px', aspectRatio: '2.5 / 1' }} 
            >
              {/* Background Image with Dark Overlay for readability */}
              <img 
                src={placeholderImageUrl} // Using the placeholder URL now
                alt="A team of professionals collaborating on a laptop."
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x500/666/FFF?text=Team+Image" }}
              />
              {/* Dark overlay to make text pop, matching the image contrast */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Overlaid Content (Text and Button) */}
              {/* Centered the button and text block as requested */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-10 lg:p-14">
                {/* Three line paragraph: L1 > L2 > L3 pattern and centered text */}
                <p className="text-white text-lg md:text-[24px] font-medium max-w-2xl text-center mb-6 leading-relaxed">
                  {imageBlockText}
                </p>
                
                {/* Explore Button - now centered horizontally */}
                <button 
                  className="bg-white text-[#000000] text-base font-medium px-6 py-3 rounded-lg 
                             border border-gray-400 cursor-pointer hover:bg-gray-100 transition duration-200"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Positions Card */}
          <div className="lg:col-span-2">
            <div 
              className="bg-white p-6 md:p-10 shadow-lg border border-gray-100 h-full"
              // On desktop, the h-full ensures the card matches the height of the image block
            >
              {/* Heading: #Positions */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                #Positions
              </h2>

              {/* Bulleted List of Positions */}
              <ul className="space-y-3 text-gray-800 text-lg">
                {positions.map((position, index) => (
                  <li key={index} className="flex items-start">
                    {/* Darker dot bullet matching the image */}
                    <span className="text-gray-900 mr-3 text-xl leading-7">•</span>
                    <p className="font-medium leading-relaxed">{position}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default App;
