import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { ComparisonCard } from "./watt/WattCompare";

const Header = ({ blok }) => (
  <div className="space-y-2">
    {console.log(blok.title_header, "title_header")}
    <h2 className="text-[28px] font-bold tracking-tighter sm:text-3xl md:text-4xl  mx-auto">
      <span className="text-[28px] sm:text-3xl md:text-4xl max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 mr-2">
        {blok.title_header.split(" ")[0]}
      </span>
      <span className="text-green">{blok.title_header.split(" ")[1]}</span>
    </h2>
    <p className="text-white/70 text-base md:text-l mx-auto md:pb-10">
      {render(blok.title_paragraph)}
    </p>
  </div>
);

const BackgroundImage = ({ blok }) => (
  <div className="">
    <img
      src={blok.bg_img.filename}
      className="w-full h-full object-contain"
      alt=""
    />
  </div>
);

const SupportedTechnologies = ({ blok }) => (
  <div className="w-full">
    <p className="text-white text-[18px] md:text-[24px] font-semibold mx-auto md:pt-20">
      {render(blok.paragraph)}
    </p>
    <div className="flex flex-wrap justify-between items-center p-4 md:mb-8">
      {blok.images.map((Logo, index) => (
        <div className="w-25 h-25">
          <img
            key={index}
            src={Logo.image.filename}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      ))}
    </div>
    <p className="text-white/70 text-base italic">
      {render(blok.italic_paragraph)}
    </p>
  </div>
);

const PutNode = ({ blok }) => {
  return (
    <section className="relative w-full py-10 md:pb-0 flex flex-col items-center justify-center space-y-8 text-center ">
      <div className="flex flex-col items-center justify-center text-center green-bg">
        <Header blok={blok.platformatic_intro[0]} />
        <BackgroundImage blok={blok.platformatic_intro[0]} />
        <SupportedTechnologies blok={blok.platformatic_intro[0]} />
      </div>

      <div className="compare-container-bg">
        <div className="w-full mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <ComparisonCard
              title={blok.platformatic_intro[1].comp_title}
              items={blok.platformatic_intro[1].list}
              isAfter={false}
            />
            <ComparisonCard
              title={blok.platformatic_intro[2].comp_title}
              items={blok.platformatic_intro[2].list}
              isAfter={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PutNode;
