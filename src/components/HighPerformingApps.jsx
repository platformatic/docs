import React from 'react'

const HighPerformingApps = () => {
  return (
    <section className='relative flex flex-col items-center  shadow-custom-black dark:drop-shadow-md px-4 sm:px-6 md:mt-20 max-w-6xl mx-auto'>
      {/* Main container */}
      <div className='w-full'>
        {/* Header section */}
        <div className='flex flex-col md:flex-row leading-[1.4] justify-between items-start md:items-end mb-10 md:mb-20'>
          {/* Title and subtitle */}
          <div className='mb-6 md:mb-0 max-w-2xl'>
            <h2 className='text-[28px] sm:text-3xl md:text-[40px] md:leading-[54px] leading-[35px] max-w-3xl bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 text-left mb-4'>
              Ready to optimize your
              Node.js infrastructure?
            </h2>
            <p className='text-white/70 text-base md:text-l text-left m-0 pb-0'>
              Get started with Platformatic and take the hassle out of managing non-functional requirements like logging, tracing, and scaling.
            </p>
          </div>
          {/* CTA buttons */}
          <div className='flex flex-row sm:flex-row gap-4 w-[90%] md:w-80 mb-10 md:mb-0'>
            <a href='https://platformatichq.com/contact' className='flex-1'>
              <button className='bg-white hover:bg-white/80 hover:translate-y-1 outline outline-white/80 outline-[1px] text-black/80 py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]'>
                Talk to sales
              </button>
            </a>
            <a href='/docs/getting-started/quick-start-watt' className='flex-1'>
              <button className='bg-transparent hover:bg-white/30 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]'>
                Quickstart guide
              </button>
            </a>
          </div>
        </div>
        {/* Infrastructure section */}
        <div className='flex flex-col md:flex-row gap-8 bg-transparent rounded-xl border border-white/10 border-solid w-full md:w-[78%] m-auto'>
          {/* Infrastructure background */}
          <div className='w-25 h-25 mb-4'>
            <img
              src='/img/node-pillars.svg'
              className='w-full h-full object-contain'
              alt=''
            />
          </div>
          {/* Infrastructure content */}
          <div className='flex flex-2 flex-col justify-center items-start text-left p-4 md:w-[60%]'>
            <div className='w-25 h-25'>
              <img
                src='/img/platformatic-logo.svg'
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <h3 className='text-left text-[22px] md:text-[32px] font-[600] mb-2 pt-2'>
              Pillars of Node.js
            </h3>
            <p className='text-left text-white/70 mb-2'>
              9 principles for doing Node.js right in enterprise environments
            </p>
            <p className='text-left text-[14px] text-white/70 border-top pt-6 font-light cursor-pointer'>
              <a href='https://www.platformatichq.com/node-principles' target='_blank' rel='noreferrer'>
                Get the guide
              </a>
            </p>
          </div>
        </div>
        {/* Footer text */}
        <p className='text-white md:text-[18px] font-semibold text-center md:text-center mt-4 mb-20 md:mb-10'>
          Learn more about Node.js best practices in our blogs
        </p>
      </div>
    </section>
  )
}

export default HighPerformingApps
