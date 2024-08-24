import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const Feature = ({ blok }) => {
  return (
    <div className='relative border-y border-[#FFFFFF26] py-5'>
      <div class='hidden md:block absolute z-10 md:w-1/2 -bottom-8 right-0 h-[600px] plt-vertical-background-triangle opacity-10'>
        <div class='plt-vertical-background-opacity z-10 h-full top-0 left-0 w-full' />
      </div>
      <div className='flex flex-col items-center z-20 relative'>
        <span className='text-white text-[2rem] mb-[2.8rem] font-bold'>
          {blok.feature_title}
        </span>
        <span className='text-[#FFFFFFB2] text-[1.1rem] w-[90%] lg:w-[60%] text-center mb-[2.5rem] font-normal'>
          {render(blok.feature_description_rich)}
        </span>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1240px] mx-auto w-full'>
          {blok.feature.map((feature, index) => (
            <div
              key={index}
              className='w-[90%] md:w-[25rem] mx-auto flex flex-col items-start gap-y-2 md:gap-y-4 p-2 md:p-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md'
            >
              <img src={feature.icon} alt='feature icon' />
              <span className='text-left text-[1.1rem] font-bold'>
                {feature.title}
              </span>
              <span className='text-left text-[1rem] text-[#FFFFFFB2]'>
                {render(feature.description)}
              </span>
              {feature.cta_caption.length > 0 && (
                <a
                  href={feature.cta_link.url}
                  className='flex items-center border border-[#FFFFFF] rounded-[200px] px-5 h-[34px]'
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

export default Feature
