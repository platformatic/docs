import React, { useState, useEffect, useRef } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import TypeWriteCodeBlock from "./TypeWriteCodeBlock";

// const renderContent = (node) => {
//   if (Array.isArray(node.content)) {
//     return node.content.map((childNode, index) => {
//       switch (childNode.type) {
//         case "code_block":
//           const codeContent = childNode.content
//             .filter((textNode) => typeof textNode.text === "string")
//             .map((textNode) => textNode.text)
//             .join("");
//           return <TypeWriteCodeBlock key={index} code={codeContent} />;
//         default:
//           return render(node);
//       }
//     });
//   }
//   return null;
// };

// const useInView = (ref) => {
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(ref.current); // Stop observing after it's in view
//         }
//       },
//       { threshold: 0.1 } // Adjust threshold as needed
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref]);

//   return inView;
// };

const SeamlessConsume = ({ blok }) => {
  return (
    <section className="relative flex flex-col items-center border-y border-white/15 shadow-custom-black dark:drop-shadow-md">
      {/* Main container */}
      <div className="w-25 h-25">
        <img
          src={blok.Seamless_block[0].seamless_bg.filename}
          className="absolute inset-0 w-full h-full object-cover z-0 "
          alt=""
        />
      </div>
      <div className="w-full">
        {/* Header section */}
        <div className="text-center flex flex-col items-center mb-10 mt-16">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl leading-[1.4] max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500">
            {render(blok.Seamless_block[0].seamless_title)}
          </h2>
          <p className="text-white/70 text-base md:text-l mx-auto md:pb-10">
            {render(blok.Seamless_block[0].seamless_paragraph)}
          </p>
        </div>
        <div className="text-center flex flex-col items-center  mx-4 mb-20 max-w-[900px] md:mx-auto">
          <img src={blok.Seamless_block[0].semlesss_show_bg.filename} alt="" />
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 w-full items-center text-center px-8">
        <div className="max-w-[575px] text-[22px] md:text-[36px] font-semibold">
          {render(blok.title)}
        </div>
        <div className="max-w-[575px] dark:opacity-70 opacity-30">
          {render(blok.subtitle)}
        </div>
      </div>
      <div className="mt-10 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
        {blok.code_blocks.map((code, index) => {
          const sectionRef = useRef(null);
          const inView = useInView(sectionRef);

          return (
            <div
              className={`flex flex-col p-3 gap-3 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md ${
                inView ? "animate" : ""
              }`}
              key={index}
              ref={sectionRef}
            >
              <h1 className="text-[18px] mdtext-xl font-medium">
                {code.code_title}
              </h1>
              <div
                className={`dark:opacity-70 opacity-30 ${
                  inView ? "fade-in" : ""
                }`}
              >
                {render(code.code_desc)}
              </div>
              <img
                src={code.image_before_codeblock}
                className={`w-max ml-[1.5rem] h-10 ${
                  inView ? "fade-in-image-before" : ""
                }`}
                alt="code pointer"
              />
              {inView && (
                <div className={`code-block ${inView ? "fade-in-code" : ""}`}>
                  {renderContent(code.code_line)}
                </div>
              )}
              <img
                src={code.image_after_codeblock}
                className={`w-max ml-[1.5rem] h-10 ${
                  inView ? "fade-in-image-after" : ""
                }`}
                alt="your result"
              />
              <img
                src={code.code_result}
                className={`w-full h-auto ${inView ? "fade-in-result" : ""}`}
                alt="code result"
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center flex-col gap-10 my-10">
        <div className="max-w-[824px] text-center mx-auto dark:opacity-70 opacity-30">
          {render(blok.consolidate_text)}
        </div>
        {/* cta */}
      {/* <a
          href={blok.section_cta[0].cta_url?.url}
          className="remove-hvr mx-auto px-4 py-2 h-full inline-block rounded-[4px] text-sm w-max border border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white hover:bg-[#00050b]/5 dark:hover:bg-white/15"
        >
          {blok.section_cta[0].btn_caption}
        </a>
      </div> */}{" "}
    </section>
  );
};

export default SeamlessConsume;
