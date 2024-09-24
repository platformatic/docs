import React, { useState } from "react";
import Lottie from "react-lottie-player";
import { render } from "storyblok-rich-text-react-renderer";

const Timeline = ({ blok }) => {
  let tablist = blok.watt_tab_list.slice(0, 3);
  let last_list = blok.watt_tab_list.slice(-1);
  console.log(last_list[0].icon.filename, "last list");
  return (
    <section className="w-full">
      <section className="flex flex-col md:flex-row justify-between gap-8">
        <div className="md:block absolute h-[800px] w-[600px] md:right-0 md:bottom-0 bottom-[-200px]">
          <div className="explore_side_bg w-full h-full"></div>
        </div>
        <div className="flex-1">
          <ol className="relative timeline border-l  border-s border-pyellow dark:border-pyellow list-none">
            {tablist.map((item, index) => (
              <li
                key={index}
                className={`mb-10 ms-4 ${index === 2 ? "mb-0" : ""}`}
              >
                <div className="absolute z-20 w-8 h-8 p-[0.4rem] bg-pyellow/20 text-pyellow rounded-md -start-1.5 border border-white dark:border-pyellow dark:bg-pyellow/20 flex justify-center ">
                  <img
                    src={item.icon.filename}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>

                <h3 className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                  {render(item.title)}
                </h3>
                <p className="text-[14px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white">
                  {render(item.subtitle)}
                </p>
                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                  {render(item.paragraph)}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="relative mb-10 md:ms-4">
              <div className="absolute top-0 left-0 w-8 h-8 bg-pyellow/20 p-[0.4rem] rounded-md">
                {" "}
                {/* Added background color, spacing, and slightly rounded corners */}
                <img
                  src={last_list[0].icon.filename}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <div className="pl-12">
                <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                  <p className="m-0">{render(last_list[0].title)}</p>
                </div>
                <p className="text-[14px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white">
                  {render(last_list[0].subtitle)}
                </p>
                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                  {render(last_list[0].paragraph)}
                </p>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col items-center gap-4 border-solid border border-pyellow/20 rounded-xl p-4 py-12">
              <div className="w-25 h-25">
                <img
                  src={blok.wa_bg.filename}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <a
                href={""}
                className="remove-hvr-alt px-6 md:px-6 py-4 h-full flex items-center justify-center gap-2 rounded-[4px] text-sm text-center w-auto md:w-max  bg-[#00050B] dark:bg-white text-white dark:text-[#00050B] hover:shadow-cta-custom-black dark:hover:shadow-custom-white mx-auto"
              >
                {/* {cta.btn_caption} */} {render(blok.wa_btn)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

const Timeline2 = ({ blok }) => {
  let tablist = blok.watt_tab_list;

  return (
    <section className="flex flex-col md:flex-row justify-between gap-8">
      <div className="flex-1">
        {tablist.slice(0, 2).map((item, index) => (
          <div key={index} className="relative mb-10 md:ms-4">
            <div className="absolute top-0 left-0 w-8 h-8 bg-pblue/20 p-[0.4rem] rounded-md">
              {" "}
              {/* Added background color, spacing, and slightly rounded corners */}
              <img
                src={item.icon.filename}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="pl-12">
              <div className="text-[14px] md:text-[18px] font-semibold text-pblue dark:text-pblue">
                <p className="m-0">{render(item.title)}</p>
              </div>
              <p className="text-[14px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white">
                {render(item.subtitle)}
              </p>
              <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                {render(item.paragraph)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <div>
            <div className="relative mb-10 md:ms-4">
              <div className="absolute top-0 left-0 w-8 h-8 bg-pblue/20 p-[0.4rem] rounded-md">
                {" "}
                {/* Added background color, spacing, and slightly rounded corners */}
                <img
                  src={tablist[2].icon.filename}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <div className="pl-12">
                <div className="text-[14px] md:text-[18px] font-semibold text-pblue dark:text-pblue">
                  <p className="m-0">{render(tablist[2].title)}</p>
                </div>
                <p className="text-[14px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white">
                  {render(tablist[2].subtitle)}
                </p>
                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                  {render(tablist[2].paragraph)}
                </p>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col items-center gap-4 border-solid border text-center border-pblue/20 rounded-xl p-4">
            <p className="text-white font-semibold text-[18px]">
              {render(blok.waopen_text)}
            </p>
            <div className="flex gap-2">
              <p className="text-5xl font-extrabold mr-2">
                {render(blok.waopen_downloads.split(" ")[0])}
              </p>

              <p className="text-base text-white/70 text-left max-w-[150px]">
                {render(blok.waopen_downloads.split(" ").slice(1).join(" "))}
              </p>
            </div>
            <a
              href={""}
              className="inline-block px-4 py-2 bg-transparent text-white font-semibold outline outline-[1px] outline-white rounded-md hover:bg-pblue/80 transition-colors duration-300 shadow-cta-custom-black text-[16px]"
            >
              {render(blok.waopen_btn)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Explore = ({ blok }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="z-[5] relative py-10 px-6 md:py-0 md:px-10 flex flex-col items-center border-y border-white/15 shadow-custom-black dark:drop-shadow-md overflow-hidden">
      {/* Main container */}
      <div>
        {/* Header section */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500">
            {render(blok.Explore_platformatic[0].title)}
          </h2>
          <p className="text-white/70 text-base md:text-l mx-auto">
            {render(blok.Explore_platformatic[0].paragraph)}
          </p>
        </div>
        {/* Tabs section */}
        <div className="mt-8 w-full max-w-6xl mx-auto">
          {/* Tab buttons */}
          <div className="flex gap-4 justify-center items-center border-b border-white/20 md:mb-20">
            <p
              className={`px-3 py-1 text-[14px] border-none transition-all duration-300 cursor-pointer ${
                activeTab === 0 ? "rounded-2xl bg-pyellow/20 text-pyellow" : ""
              }`}
              onClick={() => setActiveTab(0)}
            >
              WATT
            </p>
            <p
              className={`px-3 py-1 text-[14px]  border-none transition-all duration-300 cursor-pointer ${
                activeTab === 1 ? "rounded-2xl bg-pblue/20 text-pblue" : ""
              }`}
              onClick={() => setActiveTab(1)}
            >
              OPEN SOURCE TOOLKIT
            </p>
          </div>
          {/* Tab content */}
          <div className="my-4">
            {activeTab === 0 && (
              <Timeline blok={blok.Explore_platformatic[1]} />
            )}
            {activeTab === 1 && (
              <Timeline2 blok={blok.Explore_platformatic[2]} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
