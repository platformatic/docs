import React from 'react'

const Feature = ({ blok }) => {
  return (
    <div className='flex flex-col items-center relative px-[2%] md:px-0'>
      <div className='hidden md:block absolute md:w-1/2 bottom-[-150px] right-0 h-[280px] plt-vertical-background-triangle opacity-10'>
        <div className='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
      </div>
      <span className='text-white text-[2.8rem] mb-[2.8rem] font-bold'>
        {blok.feature_title}
      </span>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 max-w-[1240px] mx-auto w-full'>
        {blok.feature.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-y-2 md:gap-y-4 p-2 md:p-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white rounded-md ${
              index >= blok.feature?.length - 2 && 'col-span-1 md:col-span-2'
            }`}
          >
            <img src={feature.feature_icon} alt='feature icon' />
            <h3 className='text-center text-base md:text-xl font-medium'>
              {feature.feature_title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature
