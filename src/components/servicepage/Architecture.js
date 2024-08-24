import React from 'react'

const Architecture = ({ blok }) => {
  return (
    <div className='py-[2.4rem] relative flex flex-col items-center'>
      <div class='hidden md:block absolute md:w-[100%] top-0 left-0 plt-vertical-background-triangle opacity-10'>
        <div class='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
      </div>
      <div className='top-0 z-40 w-[90%] md:w-full mx-auto'>
        <img src={blok.architecture} className='w-[100%] mx-auto' alt='' />
      </div>
    </div>
  )
}

export default Architecture
