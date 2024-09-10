import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const GetStarted = ({ blok }) => {
  return (
    <div className='py-[5rem] mt-12 flex flex-col items-center border-y border-[#FFFFFF26]'>
      <span className='text-[2.5rem] font-[600] mb-[2.5rem]'>
        {blok.getstarted[0].title}
      </span>
      <div className='flex items-center mb-[2.5rem]'>
        <img
          src={blok.getstarted[0].icon}
          className='w-[1rem] h-[1rem]'
          alt='copy'
        />
        <span className='text-[1rem] roboto-mono font-[400] ml-2'>
          {blok.getstarted[0].codeblock}
        </span>
      </div>
      <span className='text-[1rem] font-[400] text-center text-[#FFFFFFB2]'>
        {render(blok.getstarted[0].content)}
      </span>
    </div>
  )
}

export default GetStarted
