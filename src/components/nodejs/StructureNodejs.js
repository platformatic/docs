import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const StructureNodejs = ({ blok }) => {
  return (
    <div className='relative py-[5rem] mt-12 flex flex-col items-center border-y border-[#FFFFFF26]'>
      <span className='text-[1.8rem] md:text-[2.5rem] w-[90%] lg:w-[45%] text-center font-[600] mb-[1.5rem]'>
        {render(blok.feature_get_started[0].section_title)}
      </span>
      <span className='text-[1rem] font-[400] w-[90%] lg:w-[50%] mb-[1.5rem] text-center text-[#FFFFFFB2]'>
        {render(blok.feature_get_started[0].section_subtitle)}
      </span>
      <a
        href={blok.feature_get_started[0].section_cta[0].cta_url.url}
        className='border border-white rounded-[4px] text-white text-[1rem] px-[1rem] py-[0.5rem] font-semibold'
      >
        {blok.feature_get_started[0].section_cta[0].btn_caption}
      </a>
    </div>
  )
}

export default StructureNodejs
