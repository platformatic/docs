import React from 'react'
import SectionTags from './SectionTags'
import { render } from 'storyblok-rich-text-react-renderer'

const FacingNodeChallenge = ({ blok }) => {
  return (
    <div className='flex px-8 mt-10 md:mt-20 mb-[44px] md:mb-[5rem] lg:mb-[180px] flex-col items-center gap-6'>
      <SectionTags
        LineGradient={blok.tag_color}
        Circlebg={blok.tag_color}
        tag={blok.tag_title}
        className='!font-normal !text-white'
      />
      <div className='flex flex-col gap-4 w-full items-center text-center px-8'>
        <div className='max-w-[575px] text-[22px] md:text-[36px] font-semibold'>
          {render(blok.section_title)}
        </div>
        <div className='max-w-[575px] dark:opacity-70 opacity-30'>
          {render(blok.section_subtitle)}
        </div>
      </div>
      <img
        src={blok.section_img}
        alt='image'
        className='w-full h-auto mt-10 max-w-[1160px] mx-auto'
      />
      {/* cta */}
      <a
        href={blok.section_cta[0].cta_url?.url}
        className='remove-hvr mt-4 mx-auto px-4 py-2 h-full inline-block rounded-[4px] text-sm w-max border border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white hover:bg-[#00050b]/5 dark:hover:bg-white/15'
      >
        {blok.section_cta[0].btn_caption}
      </a>
    </div>
  )
}

export default FacingNodeChallenge
