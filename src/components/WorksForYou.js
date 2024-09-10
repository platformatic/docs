import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import Testimony from './Testimony'

const WorksForYou = ({ blok }) => {
  return (
    <section>
      <div className='px-4 z-[5] mt-[5rem] lg:mt-[180px] relative max-w-[1160px] mx-auto'>
        <div className='flex flex-col gap-4 w-full items-center text-center px-8'>
          <div className='max-w-[575px] text-[22px] md:text-[36px] font-semibold'>
            {render(blok.services[1].section_title)}
          </div>
          <div className='max-w-[575px] dark:opacity-70 opacity-30'>
            {render(blok.services[1].section_subtitle)}
          </div>
        </div>
        <img
          src={blok.services[1].section_hero_img}
          alt='image'
          className='w-full h-auto mt-10'
        />
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-4  xl:grid-cols-3'>
          {blok.services[1].section_feature.map((features, index) => (
            <div
              className='flex flex-col p-3 gap-3 justify-between border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md '
              key={index}
            >
              <div className='flex flex-1 flex-col items-start gap-3 h-full'>
                {/* icon */}
                <img src={features.icon} alt='icon' className='h-10 w-10' />
                {/* title */}
                <h3 className='text-base md:text-xl font-medium'>
                  {features.title}
                </h3>
                {/* description */}
                <p className='dark:opacity-70 opacity-30'>
                  {render(features.description)}
                </p>
              </div>
              <div>
                <a
                  href={features.cta_link?.url}
                  className='remove-hvr px-4 py-2 h-full flex items-center gap-2 rounded-full text-base w-full border font-light border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white/70 hover:bg-[#00050b]/5 dark:hover:bg-white/15'
                >
                  <img src={features.cta_icon} alt='icon' />
                  {features.cta_caption}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimony */}
      <Testimony blok={blok.services[1]} />
    </section>
  )
}

export default WorksForYou
