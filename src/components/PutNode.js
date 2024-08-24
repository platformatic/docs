import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import fixImageUrl from '../../util/FixImageUrls'

const PutNode = ({ blok }) => {
  return (
    <section className='py-10 md:py-[104px] px-6 md:px-10 flex flex-col items-center'>
      <div className='text-xl md:text-[28px] lg:text-[2rem] font-semibold text-black dark:text-white text-center'>
        {render(blok.platformatic_puts_node[0].puts_node_title)}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 w-full max-w-7xl lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4 mt-10'>
        {blok.platformatic_puts_node[0].put_node_grid.map((service, index) => (
          <div className='flex flex-col gap-2 items-center' key={index}>
            <img
              src={fixImageUrl(service.item_logo)}
              alt='service'
              className='h-10 w-10'
            />
            <p className='text-[#00050B]/70 dark:text-white/70 text-lg text-center max-w-[19.4rem] md:max-w-[22.83rem] font-light'>
              {render(service.item_desc)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PutNode
