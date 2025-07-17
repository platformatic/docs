import React from 'react'

export const ComparisonCard = ({ title, items, isAfter }) => (
  <div
    className={`bg-black/20 flex flex-col space-y-2 rounded-lg shadow-lg p-4 transition-all duration-300 border-solid border-[0.1px] ${
      isAfter ? 'border-green/20' : 'border-pred/20'
    } flex-1`}
  >
    {!isAfter && (
      <>
        <div className='comp_bg' />
        <div className='comp_bg2' />
      </>
    )}
    {isAfter && <div className='comp_bg1' />}
    <div
      className={`text-${
        isAfter ? 'green' : 'pred'
      } text-[12px] text-center pb-4`}
    >
      {title}
    </div>
    <ul className='space-y-6 list-none m-0 p-0'>
      {items.map((item, index) => (
        <li key={index} className='flex items-start text-left'>
          <svg
            className='w-4 h-4 mr-2 flex-shrink-0 mt-1'
            fill='none'
            stroke={isAfter ? '#21fa90' : '#fa2121'}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isAfter ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
            />
          </svg>
          <span className='text-white/70 text-left text-[16px]'>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
)
