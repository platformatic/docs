import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const Architecture = ({ blok }) => {
  return (
    <div className='py-[2.4rem] relative flex flex-col items-center'>
      <div className='top-0 z-40 w-[95%] md:w-full mx-auto flex flex-col items-center'>
        <div className='w-[167px] h-[33px] rounded-[100px] mb-2 uppercase flex items-center justify-center bg-[#FFFFFF4D]'>
          {blok.architecture_composer[0].header}
        </div>
        <span className='text-white font-bold text-[1.2rem] mb-6'>
          {blok.architecture_composer[0].title}
        </span>
        <div className='w-[90%] md:w-[80%] mb-12 md:mb-3'>
          <img
            src={blok.architecture_composer[0].image}
            className='w-[100%] mx-auto'
            alt=''
          />
        </div>
        <span className='text-[#FFFFFFB2] text-[1rem] text-center w-[90%] md:w-[55%]'>
          {render(blok.architecture_composer[0].content)}
        </span>
      </div>
    </div>
  )
}

export default Architecture
