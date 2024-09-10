import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const ManagingNode = ({ blok }) => {
  return (
    <section className='py-10 z-[5] relative px-6 md:px-10 flex flex-col items-center border-y border-white/15 bg-white dark:bg-[#040607] shadow-custom-black dark:drop-shadow-md'>
      <div className='flex flex-col gap-8 items-center'>
        <div className='text-xl md:text-[28px] lg-[text-[32px] font-semibold text-black dark:text-white text-center'>
          {render(blok.building_node[0].node_title)}
        </div>
        <h4 className='text-base md:text-lg font-light text-[#00050B]/70 dark:text-white/70 max-w-[46.5rem] text-center'>
          {blok.nodes_subtitle}
        </h4>
      </div>

      <p className='text-[#00050B]/70 dark:text-white/70 text-lg text-center font-extralight'>
        {render(blok.building_node[0].node_subtitle)}
      </p>
    </section>
  )
}

export default ManagingNode
