import React from "react";
import SectionTags from "./SectionTags";
import { render } from "storyblok-rich-text-react-renderer";

const HighPerformingApps = ({ blok }) => {
  return (
    <section className="relative flex flex-col items-center  shadow-custom-black dark:drop-shadow-md px-4 sm:px-6 md:mt-20 max-w-6xl mx-auto">
      {/* Main container */}
      <div className="w-full">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20">
          {/* Title and subtitle */}
          <div className="mb-6 md:mb-0 max-w-2xl">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl xl:text-5xl/none max-w-3xl bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 text-left mb-4">
              {render(blok.Seamless_block[0].ready_title)}
            </h2>
            <p className="text-white/70 text-base md:text-l text-left m-0 pb-0">
              {render(blok.Seamless_block[0].ready_paragraph)}
            </p>
          </div>
          {/* CTA buttons */}
          <div className="flex flex-row sm:flex-row gap-4">
            <button className="bg-white hover:bg-white/80 text-black py-2 px-4 rounded border-none w-full sm:w-auto">
              {render(blok.Seamless_block[0].ready_sales_btn)}
            </button>
            <button className="bg-transparent hover:bg-white/10 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-full sm:w-auto">
              {render(blok.Seamless_block[0].ready_guide_btn)}
            </button>
          </div>
        </div>
        {/* Infrastructure section */}
        <div className="flex flex-col md:flex-row gap-8 bg-transparent rounded-xl border border-white/10 border-solid w-full md:w-[78%] m-auto">
          {/* Infrastructure background */}
          <div className="w-25 h-25 mb-4">
            <img
              src={blok.Seamless_block[0].ready_box_img.filename}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          {/* Infrastructure content */}
          <div className="flex flex-2 flex-col justify-center items-start text-left p-4 md:w-[60%]">
            <div className="w-25 h-25">
              <img
                src={blok.Seamless_block[0].logo.filename}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <h3 className="text-left text-xl md:text-2xl font-semibold mb-2 pt-2">
              {render(blok.Seamless_block[0].teady_box_title)}
            </h3>
            <p className="text-left text-white/70 mb-2">
              {render(blok.Seamless_block[0].ready_box_para)}
            </p>
            <p className="text-left text-white/70 border-top pt-6 font-light cursor-pointer">
              {render(blok.Seamless_block[0].ready_box_link)}
            </p>
          </div>
        </div>
        {/* Footer text */}
        <p className="text-white text-[14px] md:text-[18px] font-semibold text-center md:text-center mt-4">
          {render(blok.Seamless_block[0].last_paragraph)}
        </p>
      </div>
    </section>
  );
};

export default HighPerformingApps;
