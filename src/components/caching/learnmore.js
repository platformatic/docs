import React from 'react';
import fixImageUrl from '../../../util/FixImageUrls';
import { render } from 'storyblok-rich-text-react-renderer';

export default function LearnMore ({ blok }) {
  return (
    <div>
      <div className='flex flex-col w-full max-w-6xl space-y-2 mx-auto pb-20'>
        <h2 className='lg:text-[32px] text-[22px] font-[600] text-center pt-20 pb-1 mx-2'>
          {blok.cache_learn[0].title}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6'>
          {blok.cache_learn[0].learn_more_card.map((feature, index) => (
            <div
              key={index}
              className='bg-black/20 flex flex-col space-y-2 rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105 border-solid border-[0.1px] border-white/20 mx-4 lg:mx-0'
            >
              <div className='flex-grow'>
                <div className='flex items-center justify-center w-[30px] bg-green/20 rounded mb-2'>
                  <div className='w-10 h-7 flex justify-center items-center'>
                    <img
                      src={fixImageUrl(feature.icon)}
                      className=' w-5 h-5 object-contain'
                      alt=''
                    />
                  </div>
                </div>
                <h2 className='text-[18px] font-bold text-white text-left'>
                  {render(feature.title)}
                </h2>
              </div>
              <div className='border-t border-gray-700 mt-auto'>
                <p className='text-[16px] text-white/70 leading-relaxed text-left'>
                  {render(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
