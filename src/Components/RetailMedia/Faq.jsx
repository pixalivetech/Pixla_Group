import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "1. What services does PTS offer?",
    answer:
      "We specialize in custom software development, SaaS solutions, mobile and web app development, DevOps, UI/UX design, and emerging tech solutions including AI/ML, blockchain, and cloud infrastructure.",
  },
  {
    question: "2. Who are your ideal clients?",
    answer:
      "We work with startups, SMEs, and enterprises looking to build scalable and innovative digital products.",
  },
  {
    question: "3. What industries have you worked with?",
    answer:
      "Our experience spans healthcare, finance, e-commerce, logistics, education, and more.",
  },
  {
    question: "4. Do you offer MVP development for startups?",
    answer:
      "Yes, we specialize in rapid prototyping and MVP launches to validate your idea quickly.",
  },
  {
    question: "5. What technologies do you use?",
    answer:
      "We work with React, Node.js, Python, AWS, Kubernetes, Flutter, and more based on business needs.",
  },
  {
    question: "6. How do you manage projects?",
    answer:
      "We follow Agile methodologies with weekly sprints, transparent reporting, and collaborative tools.",
  },
  {
    question: "7. Do you offer post-launch support?",
    answer:
      "Yes, we provide maintenance, scaling, and monitoring for all deployed products.",
  },
  {
    question: "8. Where are you based?",
    answer:
      "We are headquartered globally with a remote-first team structure.",
  },
  {
    question: "9. How do I get started with PTS?",
    answer:
      "Simply reach out via our contact form or email us to schedule a discovery call.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first item

  return (
    <section className="bg-[#f2f2f2] p-6 px-6 md:px-24 py-16">
      {/* Container for the entire FAQ, using the 3-column layout */}
      <div className="grid grid-cols-3 gap-6">

        {/* First Column: Heading */}
        <div className="col-span-1">
          {/* Removed underline classes: underline underline-offset-4 */}
          <h2 className="text-gray-600 underline underline-offset-4 text-sm mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Second/Third Column (Content Area): Holds the list of questions/answers */}
        <div className="col-span-2 divide-y divide-gray-300">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-gray-800 font-medium mr-4">
                  {faq.question}
                </span>

                {/* Icon with round background */}
                <span className="p-1.5 rounded-full bg-[f2f2f2] shadow-md flex items-center justify-center">
                  {openIndex === idx ? (
                    <FiMinus className="text-gray-600 text-lg" />
                  ) : (
                    <FiPlus className="text-gray-600 text-lg" />
                  )}
                </span>
              </button>

              {/* Answer content */}
              {openIndex === idx && (
                <p className="text-gray-600 text-sm mt-3 pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;