import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

export default function GetStarted({ blok }) {
  return (
    <div className=" bg-[#040607]">
      <div className="w-full max-w-3xl space-y-2 mx-auto pb-10">
        <h2 className="lg:text-[32px] text-[22px] font-[600] text-center lg:pt-20 pt-8 pb-1">
          {blok.cache_started[0].title}
        </h2>
        <p className="text-white/70 text-center mb-4 max-w-[500px] sm:mx-auto mx-4">
          {blok.cache_started[0].subtitle}
        </p>
        <ol className="text-white/70 space-y-4 mx-2">
          {blok.cache_started[0].cache_get_started_list.map((list, index) => (
            <li key={index}>{render(list.list)}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
