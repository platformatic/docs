import React, { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

function FaqSection({ faq, title }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-pblack flex flex-col items-center border-top shadow-custom-black dark:drop-shadow-md px-4 sm:px-6 md:mt-20 md:pb-16 pb-6 border-bottom">
      <div className="w-full mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          {render(title)}
        </h3>
        <div className="space-y-4">
          {faq.map((faq, index) => (
            <div key={index} className="border-b-2 border-white/10">
              <div
                className={`rounded-lg cursor-pointer ${
                  index !== 2 ? "border-bottom" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center text-base md:text-[18px] text-white p-6 hover:bg-white/5 transition-colors">
                  <span className="text-base md:text-[18px] mr-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  {render(faq.question)}
                </div>
                {openIndex === index && (
                  <p className="text-white/70 p-6 pt-0 pb-0">
                    {render(faq.answer)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
