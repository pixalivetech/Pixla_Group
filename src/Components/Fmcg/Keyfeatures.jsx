import { Section } from 'lucide-react'
import React from 'react'

const Keyfeatures = () => {
  return (
       <section className="bg-[#f2f2f2] px-6 md:px-24 py-16">
        <div className="flex flex-col md:flex-row items-start mt-10 gap-4 md:gap-6">
        <a
          href="#"
          className="md:w-1/2 text-gray-500 text-sm sm:text-base underline underline-offset-4"
        >
          Key Features
        </a>
      <ul className='list-disc space-y-7  md:w-1/2 text-black-800 text-sm sm:text-base leading-relaxed md:max-w-2xl'>
        <li>High-quality products trusted by consumers</li>
        <li>Wide distribution network across retail, B2B, and online platforms</li>
        <li>Brand reliability and recognition across multiple product linesli</li>
        <li>Supports retailers, franchises, and partner businesses</li>
      </ul>
      </div> 
      </section>
   
  )
}

export default Keyfeatures