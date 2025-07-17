import React from 'react'
import { ComparisonCard } from './ComparisonCard'

const Header = () => (
  <div className='space-y-2'>
    <h2 className='text-[28px] font-bold sm:text-3xl md:text-4xl  mx-auto'>
      <span className='text-[28px] sm:text-3xl md:text-[40px] max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 mr-2'>
        Introducing
      </span>
      <span className='text-green'>Platformatic</span>
    </h2>
    <p className='text-white/70 text-base md:text-l md:pb-10 mx-2 md:mx-0 md:max-w-[550px] px-2 md:px-0'>
      The foundation for running high-performance Node.js apps and efficient development teams.
    </p>
  </div>
)

const BackgroundImage = () => (
  <div className='mx-4 md:mx-0'>
    <img
      src='/img/putnode-bg.svg'
      className='w-full h-full object-contain'
      alt=''
    />
  </div>
)

const SupportedTechnologies = function ({ images }) {
  return (
    <div className='w-full'>
      <p className='text-white text-[18px] md:text-[24px] font-semibold mx-auto md:pt-20 mb-8 px-2 md:px-0 md:mx-0'>
        Not just another runtime. <span className='text-green'>We are built for Node.js</span>, while supporting:
      </p>
      <div className='flex flex-wrap justify-center md:justify-between items-center md:p-4'>
        {images.map((image, index) => (
          <div key={index} className='md:w-25 md:h-25 w-21 h-21 p-4 md:p-0'>
            <img
              src={`/img/${image}.svg`}
              className='w-full h-full object-contain'
              alt=''
            />
          </div>
        ))}
      </div>
      <p className='text-white/70 text-base italic md:mt-10 mb-10'>
        Just plug in and play.
      </p>
    </div>
  )
}

const PutNode = () => {
  const before = [
    'Disjointed developer experience',
    'Inefficient handling of NFRs',
    'Slow development cycles',
    'Confusion around best practices'
  ]

  const after = [
    'Build without the endless loop of setup and maintenance',
    'Streamlined NFR handling',
    'Faster development & API creation',
    'Built-in best practices atop existing processes'
  ]
  const images = [
    'express',
    'fastify-logo',
    'koa',
    'nextjs',
    'remix',
    'astro'
  ]
  return (
    <section className='relative w-full py-10 md:pb-0 flex flex-col items-center justify-center space-y-8 text-center '>
      <div className='flex flex-col items-center justify-center text-center green-bg space-y-6 md:space-y-0'>
        <Header />
        <BackgroundImage />
        <SupportedTechnologies images={images} />
      </div>

      <div className='compare-container-bg'>
        <div className='card_bg'>
          <div className='w-full mx-auto max-w-5xl px-4'>
            <div className='flex flex-col md:flex-row gap-8 '>
              <ComparisonCard
                title='BEFORE PLATFORMATIC'
                items={before}
                isAfter={false}
              />
              <ComparisonCard
                title='WITH PLATFORMATIC'
                items={after}
                isAfter
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PutNode
