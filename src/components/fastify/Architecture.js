import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const Architecture = ({ blok }) => {
  return (
    <div className='py-[2.4rem] relative border-y border-[#FFFFFF26] flex flex-col items-center bg-[#040607]'>
      <div className='top-0 z-40 w-[95%] md:w-full mx-auto flex flex-col items-center'>
        <span className='text-white font-bold text-[2.5rem] mb-6'>
          {blok.architecture_composer[0].title}
        </span>
        <span className='text-[#FFFFFFB2] text-[1rem] text-center w-[90%] md:w-[45%]'>
          {render(blok.architecture_composer[0].content)}
        </span>
      </div>
    </div>
  )
}

export default Architecture
