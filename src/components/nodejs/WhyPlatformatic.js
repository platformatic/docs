import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const WhyPlatformatic = ({ blok }) => {
  return (
    <div className='relative border-t border-[#FFFFFF26] pt-[7rem]'>
      <div className='flex flex-col items-center z-20 mb-[4rem] relative'>
        <span className='text-white w-[90%] lg:w-[45%] text-[1.8rem] text-center lg:text-[2.8rem] mb-[2.8rem] font-bold'>
          {blok.feature_title}
        </span>
        <div className='flex flex-col md:flex-row flex-wrap gap-5 max-w-[1240px] mx-auto w-full'>
          {blok.feature.map((feature, index) => (
            <div
              key={index}
              className={`w-[90%] ${
                index >= blok.feature.length - 2
                  ? 'md:w-[49%]'
                  : ' md:w-[25rem]'
              } mx-auto flex flex-col justify-between items-start gap-y-2 md:gap-y-4 p-2 md:p-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md`}
            >
              <div className='flex flex-col'>
                <img src={feature.icon} className='w-[40px] h-[40px]' alt='feature icon' />
                <span className='text-left text-[1.1rem] font-bold'>
                  {feature.title}
                </span>
                <span className='text-left text-[1rem] text-[#FFFFFFB2]'>
                  {render(feature.description)}
                </span>
              </div>
              {feature.cta_caption.length > 0 && (
                <a
                  href={feature.cta_link.url}
                  className='flex w-[100%] justify-center items-center border border-[#FFFFFF] rounded-[200px] h-[34px]'
                >
                  <img
                    src={feature.cta_icon}
                    className='w-[16px] h-[16px]'
                    alt=''
                  />
                  <span className='text-white text-[1rem] font-[400] ml-1'>
                    {feature.cta_caption}
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyPlatformatic
