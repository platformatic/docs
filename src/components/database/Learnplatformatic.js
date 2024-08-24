import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const LearnPlatformatic = ({ blok }) => {
  return (
    <div className='relative py-[4rem] flex flex-col items-center border-y border-[#FFFFFF26]'>
      <div class='hidden md:block absolute md:w-[400px] -bottom-4 right-0 h-[280px] plt-vertical-background-triangle opacity-10'>
        <div class='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
      </div>
      <span className='text-[1.8rem] text-center md:text-[2.5rem] font-[600] mb-[2.5rem]'>
        {blok.learnplatformatic[0].title}
      </span>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {blok.learnplatformatic[0].cards.map((card) => (
          <div
            key={card._uid}
            className='flex flex-col w-[25rem] h-[10.5rem] justify-between items-start p-2 gap-y-2 md:gap-y-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md'
          >
            <img src={card.feature_icon} alt='feature icon' />
            <h3 className='text-base md:text-xl font-medium text-left w-[75%]'>
              {card.feature_title}
            </h3>
            <a
              href={card.link_url.url}
              className='flex items-center gap-2 text-[1rem] text-[#FAE421] font-[400]'
            >
              <span>{card.label}</span>
              <img src={card.icon} className='w-[8px] h-[10px]' alt='' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LearnPlatformatic
