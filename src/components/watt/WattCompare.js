import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

export const ComparisonCard = ({ title, items, isAfter }) => (
  <div
    className={`bg-black/20 flex flex-col space-y-2 rounded-lg shadow-lg p-4 transition-all duration-300 border-solid border-[0.1px] ${
      isAfter ? "border-green/20" : "border-pred/20"
    } flex-1`}
  >
    {!isAfter && (
      <>
        <div className="comp_bg"></div>
        <div className="comp_bg2"></div>
      </>
    )}
    {isAfter && <div className="comp_bg1"></div>}
    <div
      className={`text-${
        isAfter ? "green" : "pred"
      } text-[14px] text-center pb-4`}
    >
      {render(title)}
    </div>
    <ul className="space-y-6 list-none m-0 p-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="w-6 h-6 mr-2 flex-shrink-0 mt-1"
            fill="none"
            stroke={isAfter ? "#21fa90" : "#fa2121"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isAfter ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
            ></path>
          </svg>
          <span className="text-white/70 text-[14px]">{render(item.item)}</span>
        </li>
      ))}
    </ul>
  </div>
);

function WattCompare({ blok }) {
  const beforeItems = blok.Hero_section[2].compare_box[0];
  const afterItems = blok.Hero_section[2].compare_box[1];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hidden md:block absolute z-10 h-[600px] w-[400px]  right-[-160px] bottom-0">
        <div className="right-focus-bg w-full h-full"></div>
      </div>
      <section className="z-[5] py-10 px-6 md:px-10 flex flex-col items-center border-y border-white/15">
        <div className="w-full mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <ComparisonCard
              title={beforeItems.comp_title}
              items={beforeItems.list}
              isAfter={false}
            />
            <ComparisonCard
              title={afterItems.comp_title}
              items={afterItems.list}
              isAfter={true}
            />
          </div>
        </div>
        <section className="flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto mt-20">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className={`mb-10 `}>
                <div className="">
                  <div>
                    <div className="text-[14px] md:text-[18px] font-semibold text-white dark:text-white flex gap-2">
                      <span className="bg-white/10 rounded text-white px-2 py-1 px-2">
                        <span className="build_bg p-2"></span>
                      </span>
                      <p className="m-0">
                        {" "}
                        Kubernetes-ready to run Node.js apps
                      </p>
                    </div>
                    <p className="ml-10 font-medium italic">
                      Get full visibility into your apps performance
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400 ml-10 mt-4">
                  Seamlessly leverage the power of multithreading within your
                  Kubernetes deployment.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`mb-10 `}>
                <div className="">
                  <div>
                    <div className="text-[14px] md:text-[18px] font-semibold text-white dark:text-white flex gap-2">
                      <span className="bg-white/10 rounded text-white px-2 py-1 px-2">
                        <span className="build_bg3 p-2"></span>
                      </span>
                      <p className="m-0">Comprehensive non-functional requirement management</p>
                    </div>
                    <p className="ml-10 font-medium italic">
                      Simplify critical app functions without the hassle.
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400 ml-10 mt-4">
                  Abstract away time-consuming tasks like logging, tracing,
                  observability, and resource allocation—allowing your team to focus
                  on building, not managing infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className={`mb-10 `}>
                    <div className="">
                      <div>
                        <div className="text-[14px] md:text-[18px] font-semibold text-white dark:text-white flex gap-2">
                          <span className="bg-white/10 rounded text-white px-2 py-1 px-2">
                            <span className="build_bg2 p-2"></span>
                          </span>
                          <p className="m-0">
                            Integrated OpenTelemetry tracing
                          </p>
                        </div>
                        <p className="ml-10 font-medium italic">
                          Get full visibility into your app's performance
                        </p>
                      </div>
                    </div>

                    <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400 ml-10 mt-4">
                      Track application behavior in real-time with built-in
                      OpenTelemetry tracing. Automatically monitor distributed
                      services and gain insights into dependencies and
                      performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`mb-10 `}>
                    <div className="">
                      <div>
                        <div className="text-[14px] md:text-[18px] font-semibold text-white dark:text-white flex gap-2">
                          <span className="bg-white/10 rounded text-white px-2 py-1 px-2">
                            <span className="build_bg4 p-2"></span>
                          </span>
                          <p className="m-0"> Unified logging with Pino </p>
                        </div>
                        <p className="ml-10 font-medium italic">
                          Streamline your logging strategy effortlessly.
                        </p>
                      </div>
                    </div>

                    <p className="mb-4 text-base font-normal text-white/70 dark:text-gray-400 ml-10 mt-4">
                      Leverage Pino for fast, efficient, and structured logging
                      across your Node.js applications, ensuring that you can
                      monitor performance without complexity.
                    </p>
                  </div>
                </div>
              </div>
              {/* second */}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default WattCompare;
