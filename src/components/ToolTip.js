import React from 'react'

const Tooltip = ({ message, isVisible }) => {
  if (!isVisible) return null

  return (
    <div className='tooltip hidden xl:inline-block'>
      <div className='tooltip-arrow' />
      <div className='text-wrap w-[260px]'>{message}</div>
    </div>
  )
}

const Tooltip2 = ({ message, isVisible }) => {
  if (!isVisible) return null

  return (
    <div className='tooltip'>
      <div className='tooltip-arrow' />
      <div className='w-full'>{message}</div>
    </div>
  )
}

export { Tooltip2 }

export default Tooltip
