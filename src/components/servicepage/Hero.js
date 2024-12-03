import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Hero = ({ blok }) => {
  return (
    <header className="dark">
      <div className="flex relative flex-col lg:flex-row items-center">
        <div className="relative px-[2%] lg:px-0 lg:pl-[6rem] pt-[4rem]">
          <img
            src={blok.Hero[0].gradient_left.filename}
            className="absolute -z-10 left-0 lg:-top-[50%]"
            alt="gradient"
          />
          <div className="w-[90%] lg:w-[42.8rem] flex flex-col z-40">
            <a
              className="mb-[2rem] w-[17.2rem]"
              href={blok.Hero[0].github_link.url}
            >
              <button className="w-[17.2rem] h-[2.5rem] bg-[#FFAB5E] rounded-[6.25rem] flex items-center justify-center gap-1">
                <img
                  src={blok.Hero[0].github_logo}
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="github"
                />
                <span className="text-[#00050B] text-[0.8rem] uppercase">
                  {blok.Hero[0].github_text}
                </span>
              </button>
            </a>
            <span className="text-white w-[100%] lg:w-auto text-[30px] lg:text-[3.5rem] font-[700] leading-[36.57px] lg:leading-[4.26rem] mb-[2rem]">
              {render(blok.Hero[0].hero_title)}
            </span>
            <span className="text-[#FFFFFFB2] w-[100%] lg:w-auto text-[1rem] lg:text-[1.2rem] font-[400]">
              {render(blok.Hero[0].hero_subtitle)}
            </span>
            <div className="flex lg:items-center gap-3 lg:gap-4 mt-[2rem] lg:mt-[3.5rem]">
              {blok.Hero[0].cta_buttons.map((cta) => (
                <a
                  key={cta._uid}
                  href={cta.cta_url.url}
                  className={`${
                    cta.btn_variant == "filled"
                      ? "text-[#00283D]"
                      : "hover:text-white"
                  }`}
                >
                  <button
                    className={`${
                      cta.btn_variant == "filled"
                        ? "bg-[#FFFFFF] text-[#00283D]"
                        : "border border-[#FFFFFF]"
                    } rounded-[4px] h-[2.5rem] w-[8rem] lg:w-[9.28rem] text-[1rem] font-[600]`}
                  >
                    {cta.btn_caption}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src={blok.Hero[0].hero_embed.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  );
};

export default Hero;
