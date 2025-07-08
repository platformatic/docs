import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

function WattSupported ({ blok }) {
  return (
    <section>
      <div className='w-full'>
        {' '}
        <div className='text-center flex flex-col items-center md:pb-10 md:mt-10'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mx-4 md:mx-0'>
            <p className='text-white font-semibold text-[16px] md:text-[18px] lg:text-[24px] pt-0 mx-auto text-center md:text-right'>
              {render(blok.Hero_section[3].framework_title)}
            </p>

            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].framework_bg.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
          <p className='text-white font-semibold text-[18px] md:text-[24px] md:pt-2 mx-auto text-right md:mt-8 mb-6'>
            Supporting:
          </p>
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-16 p-4'>
            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].express.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>

            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].nextjs.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].fastify.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].koa.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].remix.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <div className='w-25 h-25'>
              <img
                src={blok.Hero_section[3].astro.filename}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
          <p className='text-white/70 text-base italic mt-2 mb-10'>
            {render(blok.Hero_section[3].paragraph)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WattSupported
