import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { ComparisonCard } from './watt/WattCompare'

const Header = ({ blok }) => (
  <div className='space-y-2'>
    <h2 className='text-[28px] font-bold sm:text-3xl md:text-4xl  mx-auto'>
      <span className='text-[28px] sm:text-3xl md:text-[40px] max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500 mr-2'>
        {blok.title_header.split(' ')[0]}
      </span>
      <span className='text-green'>{blok.title_header.split(' ')[1]}</span>
    </h2>
    <p className='text-white/70 text-base md:text-l md:pb-10 mx-2 md:mx-0 md:max-w-[550px] px-2 md:px-0'>
      {render(blok.title_paragraph)}
    </p>
  </div>
)

const BackgroundImage = ({ blok }) => (
  <div className='mx-4 md:mx-0'>
    <img
      src={blok.bg_img.filename}
      className='w-full h-full object-contain'
      alt=''
    />
  </div>
)

const SupportedTechnologies = ({ blok }) => (
  <div className='w-full'>
    <p className='text-white text-[18px] md:text-[24px] font-semibold mx-auto md:pt-20 mb-8 px-2 md:px-0 md:mx-0'>
      {render(blok.paragraph)}
    </p>
    <div className='flex flex-wrap justify-center md:justify-between items-center md:p-4'>
      {blok.images.map((Logo, index) => (
        <div key={index} className='md:w-25 md:h-25 w-21 h-21 p-4 md:p-0'>
          <img
            src={Logo.image.filename}
            className='w-full h-full object-contain'
            alt=''
          />
        </div>
      ))}
    </div>
    <p className='text-white/70 text-base italic md:mt-10 mb-10'>
      {render(blok.italic_paragraph)}
    </p>
  </div>
)

const PutNode = ({ blok }) => {
  return (
    <section className='relative w-full py-10 md:pb-0 flex flex-col items-center justify-center space-y-8 text-center '>
      <div className='flex flex-col items-center justify-center text-center green-bg space-y-6 md:space-y-0'>
        <Header blok={blok.platformatic_intro[0]} />
        <BackgroundImage blok={blok.platformatic_intro[0]} />
        <SupportedTechnologies blok={blok.platformatic_intro[0]} />
      </div>

      <div className='compare-container-bg'>
        <div className='card_bg'>
          <div className='w-full mx-auto max-w-5xl px-4'>
            <div className='flex flex-col md:flex-row gap-8 '>
              <ComparisonCard
                title={blok.platformatic_intro[1].comp_title}
                items={blok.platformatic_intro[1].list}
                isAfter={false}
              />
              <ComparisonCard
                title={blok.platformatic_intro[2].comp_title}
                items={blok.platformatic_intro[2].list}
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
