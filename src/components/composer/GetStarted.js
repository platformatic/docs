import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const GetStarted = ({ blok }) => {
  return (
    <div className='py-[5rem] mt-12 flex flex-col items-center border-y border-[#FFFFFF26]'>
      <span className='text-[2.5rem] font-[600] mb-[2.5rem]'>
        {blok.getstarted[0].title}
      </span>
      <span className='text-[1rem] roboto-mono font-[400] ml-2'>
        {blok.getstarted[0].codeblock}
      </span>
      <div className='flex items-center mb-[2.5rem]'>
        <img
          src={blok.getstarted[0].icon}
          className='md:w-[41.4rem] md:h-[44.8rem]'
          alt='icon'
        />
      </div>
    </div>
  )
}

export default GetStarted
