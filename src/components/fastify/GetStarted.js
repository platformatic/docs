import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const GetStarted = ({ blok }) => {
  return (
    <div className='relative py-[5rem] mt-12 flex flex-col items-center border-y border-[#FFFFFF26]'>
      <div class='hidden md:block absolute z-10 md:w-[280px] bottom-0 right-0 h-[250px] plt-vertical-background-triangle opacity-10'>
        <div class='plt-vertical-background-opacity z-10 h-full top-0 left-0 w-full' />
      </div>
      <span className='text-[1.8rem] lg:text-[2.5rem] w-[100%] lg:w-[40%] text-center font-[600] mb-[2.5rem]'>
        {blok.getstarted[0].title}
      </span>
      <span className='text-[1rem] font-[400] lg:w-[50%] text-center text-[#FFFFFFB2]'>
        {render(blok.getstarted[0].content)}
      </span>
    </div>
  )
}

export default GetStarted
