import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

function WattReady({ blok }) {
  return (
    <section className="relative flex flex-col items-center  shadow-custom-black dark:drop-shadow-md px-4 sm:px-6 md:mt-20 mb-10">
      {/* Main container */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20">
          {/* Title and subtitle */}
          <div className="mb-6 md:mb-0 max-w-xl">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl leading-[1.4] max-w-3xl bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 text-left mb-4">
              {render(blok.Hero_section[4].heading)}
            </h2>
            <p className="text-white/70 text-base md:text-l text-left m-0 pb-0">
              {render(blok.Hero_section[4].paragraph)}
            </p>
          </div>
          {/* CTA buttons */}
          <div className="flex flex-row sm:flex-row gap-4">
            <a
              href="https://www.platformatichq.com/contact"
              className="text-white"
            >
              <button className="bg-transparent hover:bg-white/10 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-full sm:w-auto">
                {render(blok.Hero_section[4].button_text)}
              </button>
            </a>
          </div>
        </div>
        {/* Infrastructure section */}
        <div className="flex flex-col md:flex-row gap-8 bg-transparent rounded-xl border border-white/10 border-solid w-full md:w-[78%] m-auto">
          {/* Infrastructure background */}

          <div className="w-25 h-25">
            <img
              src={blok.Hero_section[4].box_img.filename}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          {/* Infrastructure content */}
          <div className="flex flex-col justify-center items-start text-left p-4 space-y-4">
            <div className="w-20 h-20 mb-2">
              <img
                src={blok.Hero_section[4].box_logo_img.filename}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <h3 className="text-left text-xl md:text-2xl font-semibold mb-0">
              {render(blok.Hero_section[4].box_title)}
            </h3>
            <p className="text-left text-white/70 pb-0 mb-0">
              {render(blok.Hero_section[4].box_para)}
            </p>
            <p className="text-left text-white/70 border-top pt-4 font-semibold">
              <a
                href="https://www.platformatichq.com/node-principles"
                className="text-white"
              >
                {render(blok.Hero_section[4].box_button_text)}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WattReady;
