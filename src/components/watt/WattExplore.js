import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-8 mt-10">
      <div className="flex-1">
        <div>
          <div className="flex items-center gap-2">
            <p className="bg-pyellow/20 rounded-md px-2 text-[14px] self-start mt-8">
              x
            </p>{" "}
            <div className={`mb-10 ms-4`}>
              <div className="">
                <div>
                  <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                    <p className="m-0">Multithreading done right</p>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                A lack of standardized tracing, logging, and HTTP clients across
                teams creates a maintenance nightmare.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-pyellow/20 rounded-md px-2 text-[14px] self-start mt-8">
            x
          </p>{" "}
          <div className={`mb-10 ms-4`}>
            <div className="">
              <div>
                <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                  <p className="m-0">Multithreading done right</p>
                </div>
              </div>
            </div>

            <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
              A lack of standardized tracing, logging, and HTTP clients across
              teams creates a maintenance nightmare.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-pyellow/20 rounded-md px-2 text-[14px] self-start mt-8">
            x
          </p>{" "}
          <div className={`mb-10 ms-4`}>
            <div className="">
              <div>
                <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                  <p className="m-0">Multithreading done right</p>
                </div>
              </div>
            </div>

            <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
              A lack of standardized tracing, logging, and HTTP clients across
              teams creates a maintenance nightmare.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="bg-pyellow/20 rounded-md px-2 text-[14px] self-start mt-8">
                x
              </p>{" "}
              <div className={`mb-10 ms-4`}>
                <div className="">
                  <div>
                    <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                      <p className="m-0">Multithreading done right</p>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                  A lack of standardized tracing, logging, and HTTP clients
                  across teams creates a maintenance nightmare.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="bg-pyellow/20 rounded-md px-2 text-[14px] self-start mt-8">
                x
              </p>{" "}
              <div className={`mb-10 ms-4`}>
                <div className="">
                  <div>
                    <div className="text-[14px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow">
                      <p className="m-0">Multithreading done right</p>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400">
                  A lack of standardized tracing, logging, and HTTP clients
                  across teams creates a maintenance nightmare.
                </p>
              </div>
            </div>
          </div>
          {/* second */}
        </div>
      </div>
    </section>
  );
};

function WattExplore({ blok }) {
  return (
    <section className="w-full relative">
      <section className="z-[5] py-10 px-6 md:px-10 flex flex-col items-center border-y border-white/15 md:mt-25 max-w-6xl mx-auto white_bg ">
        {/* Main container */}
        <div className="hidden md:block absolute z-10 h-[600px] w-[400px]  left-0 bottom-0">
          <div className="side-focus-bg w-full h-full"></div>
        </div>

        <div>
          {/* Header section */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl max-w-5xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500">
              {render(blok.Hero_section[1].focus_title)}
            </h2>
            <p className="text-white/70 text-base md:text-l mx-auto md:mb-10">
              {render(blok.Hero_section[1].focus_paragraph)}
            </p>
            <img
              src={blok.Hero_section[1].focus_img.filename}
              alt={blok.Hero_section[1].focus_img.alt}
            />
            <div className="mt-10 flex flex-col gap-4">
              <p className="text-white font-semibold text-xl md:text-2xl ">
                {render(blok.Hero_section[1].sub_focus_title)}
              </p>
              <p className="text-white italic font-semibold text-xl">
                {render(blok.Hero_section[1].sub_focus_para)}
              </p>
              <p className="text-white/70 text-base md:text-l">
                {render(blok.Hero_section[1].sub_focus_text)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WattExplore;
