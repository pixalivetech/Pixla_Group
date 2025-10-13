import React from 'react';
import Mark from './../../assets/AboutUs/mark.webp'

// Data structure for the content
const content = {
  eventTitle: "Events – Pixla Group",
  eventTitleColor: "text-gray-400", // Subtler color for the title
  eventDescription: "Stay updated with Pixla Group’s key events, showcasing our growth, innovation, and community engagement.",
  businessTitle: "#Business Opportunities",
  listItems: [
    "Product Launches",
    "Webinars",
    "Meetups",
    "Competitions & Hackathons",
    "Awards & Recognitions",
    "CSR Initiatives",
    "Product Demos & Showcases"
  ],
};

const App = () => {
  // Component to simulate the complex image with the dark offset background
  const ImageSection = () => (
    <div className="relative w-full h-full min-h-[300px] md:min-h-0 aspect-video md:aspect-square lg:aspect-video xl:aspect-square">
      {/* Simulation of the dark offset background box */}
      <div className="hidden md:block absolute w-[90%] h-[90%] bg-gray-900 top-4 left-4 rounded-2xl shadow-xl"></div>
      
      {/* Main Image/Content Block - Adjusted to fit the two-column grid gracefully */}
      <div className="relative w-full h-full bg-black text-black p-6 sm:p-4   flex flex-col justify-end overflow-hidden">
        
        {/* Placeholder for the statue image (using a high-contrast image URL for visual fidelity) */}
        {/* Note: I'm using a placeholder image that visually suggests the original screenshot's style (a statue/classical look) */}
        <img
          src={Mark}
          alt="Statue Image"
          className="  w-full h-full md:w-[512px] md:h-[484px] object-cover mb-0 md:mb-22"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/222222/cccccc?text=Image+Placeholder" }}
        />
        
       
      </div>
    </div>
  );

  return (
    // Set the background to black and enforce Open Sans for the entire application
    <div 
      className="min-h-screen bg-black text-white px-6 md:px-24  py-16" 
      style={{ fontFamily: 'Open Sans, sans-serif' }}
    >
      <div className="font-open-sans">
        
        {/* 1. TOP SECTION: Event Title (Left) and Description (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:mb-24">
          
          {/* Left Column: Events Title */}
          <div className="flex items-start">
            <h1 className={`text-xl sm:text-2xl font-bold ${content.eventTitleColor}`}>
              {content.eventTitle}
            </h1>
          </div>
          
          {/* Right Column: Description Paragraph */}
          <div className="flex items-start">
            <p className="text-base sm:text-[24px] text-[#7A7A7A] max-w-lg">
              {content.eventDescription}
            </p>
          </div>
        </div>

        {/* 2. MAIN SECTION: Image (Left) and Opportunities List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Image Area */}
          <div className="order-2 lg:order-1">
            <ImageSection />
          </div>

          {/* Right Column: Business Opportunities */}
          <div className="order-1 lg:order-2 space-y-8 pt-8 lg:pt-0">
            {/* Title */}
            <h2 className="text-xl sm:text-[42px] lg:text-[42px] font-medium leading-tight">
              {content.businessTitle}
            </h2>

            {/* List of Opportunities - UPDATED to remove list-disc and ml-6 */}
            <ul className="list-none text-lg sm:text-xl text-white space-y-3">
              {content.listItems.map((item, index) => (
                // Custom dot styling applied. pl-6 provides indentation.
                <li key={index} className="pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-1 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>

            {/* Explore Button */}
            <button
              className="mt-8 px-8 py-3 bg-white text-black text-lg font-semibold  shadow-2xl transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-yellow-400"
              onClick={() => console.log('Explore button clicked')}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
