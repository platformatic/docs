import React, { useState } from "react";
import Lottie from "react-lottie-player";

const TimeToChange = ({ blok }) => {
  return (
    <section className="z-[5] relative py-10 px-6 md:px-10 flex flex-col items-center border-y border-white/15 bg-white dark:bg-[#040607] shadow-custom-black dark:drop-shadow-md">
      xxxx
      <div className="flex px-4 md:px-0 flex-row justify-between w-full max-w-[434px] lg:max-w-[634px] mx-auto relative change__pseudo">
        {blok?.time_to_change.map((change, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={index}
              className="flex flex-col gap-1 items-center bg-white cursor-pointer dark:bg-[#040607] px-3 z-[5] group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative hidden lg:inline-block">
                <img
                  src={change.change_image}
                  alt={change.change_text}
                  className={`h-10 w-10 ${isHovered ? "hidden" : "block"}`}
                />
                {isHovered && (
                  <Lottie
                    loop={false}
                    animationData={JSON.parse(change.change_lottie)}
                    play
                    style={{ width: 40, height: 40 }}
                  />
                )}
              </div>
              <div className="relative inline-block lg:hidden">
                <img
                  src={change.change_image}
                  alt={change.change_text}
                  className="h-5 w-5 md:w-7 md:h-7"
                />
              </div>
              <p
                className={`${
                  index === 0
                    ? "group-hover:text-[#FFAB5E]"
                    : index === 1
                    ? "group-hover:text-[#2192FA]"
                    : "group-hover:text-[#C61BE2]"
                }`}
              >
                {change.change_text}
              </p>
            </div>
          );
        })}
      </div>
      xxxx
    </section>
  );
};

export default TimeToChange;
