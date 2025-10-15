import React, { useState } from "react";
/* Replace these with your actual images */
import Thumb1 from "./../../assets/Home/thumb1.png";
import Thumb2 from "./../../assets/Home/thumb2.png";
import Thumb3 from "./../../assets/Home/thumb3.png";
import Thumb4 from "./../../assets/Home/thumb4.png";
import Thumb5 from "./../../assets/Home/thumb5.png";

const initialReviews = [
  { id: 1, name: "ANDYLAM", text: "Allows you to collaborate, experiment, and test much more effectively and efficiently.", count: "43.9K reviews", img: Thumb1 },
  { id: 2, name: "DAVID", text: "Amazing user experience and performance.", count: "21.4K reviews", img: Thumb2 },
  { id: 3, name: "MARK", text: "Helps teams connect seamlessly across projects.", count: "18.2K reviews", img: Thumb3 },
  { id: 4, name: "JAMES", text: "Clean design and super intuitive interface.", count: "32.7K reviews", img: Thumb4 },
  { id: 5, name: "EMMA", text: "Reliable, efficient, and a joy to use every day.", count: "27.1K reviews", img: Thumb5 },
];

export default function ReviewsSection() {
  const [order, setOrder] = useState(initialReviews);

  const rotateToSecond = (clickedId) => {
    let newOrder = [...order];
    const clickedIndex = newOrder.findIndex((r) => r.id === clickedId);
    if (clickedIndex === 1) return;
    while (newOrder[1].id !== clickedId) {
      newOrder.unshift(newOrder.pop());
    }
    setOrder(newOrder);
  };

  return (
    <div className="bg-[#f2f2f2] py-16 px-4 md:px-24 font-sans overflow-hidden">
      <h4 className="text-gray-500 text-sm md:text-lg inline-block border-b-2 border-gray-200 font-medium mb-8 cursor-pointer">
        Reviews
      </h4>

      <div className="flex flex-wrap justify-center items-end gap-6 relative transition-all duration-700 ease-in-out">
        {order.map((review, index) => {
          const isActive = index === 1;

          return (
            <div
              key={review.id}
              className={`relative flex flex-col md:flex-row items-center md:items-start transition-all duration-700 ease-in-out cursor-pointer group`}
              onClick={() => rotateToSecond(review.id)}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden shadow-md transition-all duration-700 ease-in-out transform ${
                  isActive
                    ? "w-[220px] h-[400px] md:z-20 scale-105 md:group-hover:-translate-y-[30px]"
                    : "w-[150px] h-[150px] md:w-[180px] md:h-[195px] z-10 scale-100"
                }`}
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Box */}
              {isActive && (
                <div className="mt-4 md:mt-0 md:absolute md:left-full md:bottom-60 md:ml-1 bg-[#f2f2f2] p-6 w-[90%] max-w-[350px] md:w-[350px] rounded-md  transition-all duration-700 opacity-100 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">#{review.id}</h3>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">{review.name}</h2>
                  <p className="text-sm mt-3 text-gray-600">{review.text}</p>
                  <p className="text-sm mt-4 text-gray-500">{review.count}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
