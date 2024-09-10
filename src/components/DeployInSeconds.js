import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const DeployInSeconds = ({ blok }) => {
  return (
    <section className='relative'>
      <div className='py-10 z-[5] my-4 md:my-10 lg:my-20 relative px-6 md:px-10 flex flex-col items-center border-y border-white/15 bg-white dark:bg-[#040607] shadow-custom-black dark:drop-shadow-md'>
        <div className='flex flex-col gap-4 w-full items-center text-center px-8'>
          <div className='flex gap-1 items-center'>
            <img src={blok.icon} alt='icon' className='h-10 w-11' />
            <div className='max-w-[575px] text-[28px] md:text-[40px] font-semibold'>
              {blok.title}
            </div>
          </div>
          <div className='max-w-[575px] dark:opacity-70 opacity-30'>
            {render(blok.desc)}
          </div>
        </div>
      </div>
      <div class='hidden md:block absolute md:w-1/3 xl:w-1/4 top-[-80%] right-0 h-[1200px] plt-vertical-background-triangle opacity-25'>
        <div class='plt-vertical-background-opacity h-full absolute top-0 right-0 w-full' />
      </div>
    </section>
  )
}

export default DeployInSeconds
