import React from 'react';

// Assuming you have these images in your public folder or import them
// For demonstration, I'm using placeholder image URLs.
// Replace with actual paths to your images:
// import andyLamPhoto from './andy_lam.jpg';
// import reviewThumb1 from './review_thumb1.jpg';
// import reviewThumb2 from './review_thumb2.jpg';
// import reviewThumb3 from './review_thumb3.jpg';
// import reviewThumb4 from './review_thumb4.jpg';


const ReviewsSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-gray-600 text-lg sm:text-xl mb-12">
          Reviews
        </h2>

        {/* Main Review Card Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 mb-16">
          {/* Large Review Image */}
          <div className="flex-shrink-0 mb-8 lg:mb-0 w-64 h-auto sm:w-80 lg:w-96">
            <img 
              src="https://via.placeholder.com/400x600/E0E0E0/808080?text=Andy+Lam" // Replace with actual image path
              alt="Andy Lam" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </div>

          {/* Review Text Content */}
          <div className="flex-grow text-center lg:text-left">
            <p className="text-gray-900 text-4xl sm:text-5xl font-bold mb-4">#1</p>
            <h3 className="text-gray-900 text-3xl sm:text-4xl font-extrabold mb-4">ANDYLAM</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Allows you to collaborate, experiment, and test much more effectively and efficiently
            </p>
            <p className="text-gray-500 text-base">43.9K reviews</p>
          </div>
        </div>

        {/* Smaller Reviewer Images Section (Carousel-like) */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
          {/* Image 1 */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150/E0E0E0/808080?text=Reviewer1" // Replace with actual image path
              alt="Reviewer 1" 
              className="w-full h-full object-cover rounded-lg shadow-md grayscale" // grayscale for B&W
            />
          </div>
          {/* Image 2 */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150/E0E0E0/808080?text=Reviewer2" // Replace with actual image path
              alt="Reviewer 2" 
              className="w-full h-full object-cover rounded-lg shadow-md" 
            />
          </div>
          {/* Image 3 */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150/E0E0E0/808080?text=Reviewer3" // Replace with actual image path
              alt="Reviewer 3" 
              className="w-full h-full object-cover rounded-lg shadow-md" 
            />
          </div>
          {/* Image 4 */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150/E0E0E0/808080?text=Reviewer4" // Replace with actual image path
              alt="Reviewer 4" 
              className="w-full h-full object-cover rounded-lg shadow-md" 
            />
          </div>
          {/* Image 5 (Black and white) */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150/E0E0E0/808080?text=Reviewer5" // Replace with actual image path
              alt="Reviewer 5" 
              className="w-full h-full object-cover rounded-lg shadow-md grayscale" // grayscale for B&W
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;