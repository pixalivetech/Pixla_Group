import React from 'react'
import Fmcgimg2 from "./../../assets/Fmcg/Fmcgimg2.png"

const Fmcgsec2 = () => {
  return (
  
       <section className="bg-[#f2f2f2] px-6 md:px-24 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Left: Image with Text Overlay */}
           <div className="relative  overflow-hidden shadow-md">
             <img
               src={Fmcgimg2}
               alt="Retail Media Network"
               className="w-full h-64 md:h-80 object-cover"
             />
             <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
               <p className="text-white text-center text-sm md:text-base leading-relaxed max-w-lg">
                 The brand emphasizes taste, reliability, and easy access to enhance everyday living.
               </p>
             </div>
           </div>
   
           {/* Right: Product List */}
           <div className="bg-white  shadow-md p-6 md:p-8 flex flex-col justify-center">
             <h2 className="text-3xl font-semibold text-gray-900 mb-4">#Products</h2>
             <ul className="list-disc list-inside text-black space-y-2 text-base">
               <li>Beverages</li>
               <li>Groceries</li>
               <li>Wellness Products</li>   
             </ul>
           </div>
         </div>
       </section>
     );
   };
   


export default Fmcgsec2