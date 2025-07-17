import React from 'react'

const Seamless = () => {
  return (
    <section className='relative flex flex-col items-center border-y border-white/15 shadow-custom-black dark:drop-shadow-md'>
      {/* Main container */}
      <div className='w-25 h-25'>
        <img
          src='/img/seamless-bg.svg'
          className='absolute inset-0 w-full h-full object-cover z-0 '
          alt=''
        />
      </div>
      <div className='w-full'>
        {/* Header section */}
        <div className='text-center flex flex-col items-center mb-10 md:mb-4 mt-16'>
          <h2 className='text-[28px] sm:text-3xl md:text-[40px] md:leading-[54px] leading-[35px] max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500'>
            Works for you, your team, <br /> and your architecture
          </h2>
          <p className='text-white/70 text-base md:text-[18px] mx-auto md:pb-10'>
            Seamless integration with your existing Node.js ecosystem
          </p>
        </div>
        <div className='text-center flex flex-col items-center  mx-4 mb-20 max-w-[900px] md:mx-auto'>
          <img src='/img/diagram-platformatic-features-1.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default Seamless
