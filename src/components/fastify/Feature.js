import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const Feature = ({ blok }) => {
  return (
    <div className='relative border-t border-[#FFFFFF26] py-5 mb-4'>
      <div className='hidden md:block absolute z-10 md:w-[280px] top-0 left-0 h-[250px] plt-vertical-background-triangle opacity-10'>
        <div className='plt-vertical-background-opacity z-10 h-full top-0 left-0 w-full' />
      </div>
      <div className='flex flex-col items-center z-20 relative'>
        <span className='text-white text-[2.8rem] mb-[2.8rem] font-bold'>
          {blok.feature_title}
        </span>
        <div className='flex flex-col lg:flex-row flex-wrap max-w-[1240px] mx-auto w-full mb-4'>
          {blok.feature.map((feature, index) => (
            <div
              key={index}
              className={`w-[90%] ${
                index >= blok.feature.length - 2
                  ? 'md:w-[49%] mt-4'
                  : 'md:w-[25rem]'
              } mx-auto flex flex-col items-center gap-y-2 md:gap-y-4 p-2 md:p-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md`}
            >
              <img src={feature.icon} alt='feature icon' />
              <span className='text-left text-[1.1rem] font-bold'>
                {feature.title}
              </span>
              <span className='text-center text-[1rem] text-[#FFFFFFB2]'>
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
        <a
          href={blok.feature_get_started[0].cta_url.url}
          className='border border-[#FFFFFF] py-1.5 px-3 rounded-[4px] flex items-center justify-center'
        >
          <span className='text-white font-[600] text-[1rem]'>{blok.feature_get_started[0].btn_caption}</span>
        </a>
      </div>
    </div>
  )
}

export default Feature
