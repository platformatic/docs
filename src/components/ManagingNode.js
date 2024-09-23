import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const ManagingNode = ({ blok }) => {
  const features = blok.build_node[0].node_box;
  console.log(blok.build_node[0].node_title, "title");
  return (
    <section className="managing-node_section">
      <section className="container-bg z-2 w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container w-[100%] h-[100%] px-4 md:px-6 max-w-[1440px] mx-auto z-3">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-bold sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-500 max-w-3xl mx-auto">
                  {render(blok.build_node[0].node_title)}
                </h2>
                <p className="text-white/70 text-base md:text-l mx-auto">
                  {render(blok.build_node[0].node_subtitle)}
                </p>
              </div>
              <div className="w-full max-w-6xl space-y-2 mx-auto md:pb-60">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-black/20 flex flex-col space-y-2 rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105 border-solid border-[0.1px] border-pred/20"
                    >
                      <div className="flex items-center justify-center w-[30px] bg-pred/20 rounded">
                        <div className="w-10 h-7 flex justify-center items-center">
                          <img
                            src={feature.icon.filename}
                            className=" w-5 h-5 object-contain"
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="text-[18px] font-bold text-white text-left">
                        {render(feature.title)}
                      </h2>
                      <div className="border-t border-gray-700 mt-auto">
                        <p className="text-[16px] text-white/70 leading-relaxed text-left">
                          {render(feature.paragraph)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ManagingNode;
//       {render(blok.building_node[0].node_title)}
//     </div>
//     <h4 className='text-base md:text-lg font-light text-[#00050B]/70 dark:text-white/70 max-w-[46.5rem] text-center'>
//       {blok.nodes_subtitle}
//     </h4>
//   </div>

//   <p className='text-[#00050B]/70 dark:text-white/70 text-lg text-center font-extralight'>
//     {render(blok.building_node[0].node_subtitle)}
//   </p>
