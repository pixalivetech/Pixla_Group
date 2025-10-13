import { Section } from 'lucide-react'
import React from 'react'

const Keyfeatures = () => {
  return (
       <section className="bg-[#f6f6f6] px-6 md:px-24 py-16">
        <div className="flex flex-col md:flex-row items-start  ">
        <a
          href="#"
          className="md:w-1/2 text-gray-500 text-sm sm:text-base underline underline-offset-4"
        >
          Key Features
        </a>
      <ul className='list-disc space-y-7  md:w-1/2 text-black-800 text-sm sm:text-base sm-ml-2 leading-relaxed'>
        <li>End-to-end IT solutions for businesses of all sizes</li>
        <li>Training and talent development to build a skilled workforce</li>
        <li>Freelancing opportunities to unlock income and experience</li>
        <li>Scalable, future-ready digital platform</li>
      </ul>
      </div> 
      </section>
   
  )
}

export default Keyfeatures