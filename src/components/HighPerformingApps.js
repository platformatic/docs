import React from 'react'
import SectionTags from './SectionTags'
import { render } from 'storyblok-rich-text-react-renderer'

const HighPerformingApps = ({ blok }) => {
  return (
    <div className='flex flex-col mt-10 md:mt-20 items-center gap-6'>
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
    </div>
  )
}

export default HighPerformingApps
