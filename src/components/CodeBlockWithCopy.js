import React, { useState } from 'react'
import Tooltip from './ToolTip'

const CodeBlockWithCopy = ({ code }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setTooltipVisible(true)
    setTimeout(() => setTooltipVisible(false), 1500)
  }

  return (
    <div>
      <pre className='bg-white relative border overflow-visible dark:bg-[#00050b] p-2 rounded flex items-center dark:border-white/20 border-[#00050b]/30 gap-2'>
        <div
          onClick={copyToClipboard}
          className='relative p-[2px] rounded-md w-max hover:bg-[#00050b]/5 dark:hover:bg-white/15'
        >
          <svg
            width='16'
            height='17'
            viewBox='0 0 16 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='p-1 h-6 w-6 rounded text-sm cursor-pointer'
          >
            <path
              d='M6 14.0003V5.44531C6 5.16917 6.22386 4.94531 6.5 4.94531H10.5365C10.6594 4.94531 10.7779 4.99054 10.8696 5.07238L13.833 7.71894C13.9393 7.8138 14 7.94945 14 8.09187V14.0003C14 14.2765 13.7761 14.5003 13.5 14.5003H6.5C6.22386 14.5003 6 14.2765 6 14.0003Z'
              stroke='white'
              stroke-linecap='round'
            />
            <path
              d='M10.5 8.28958V4.94531L14 8.28958H10.5Z'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M9.5 4.46723L7.36816 2.62196C7.27729 2.5433 7.16112 2.50001 7.04093 2.50001H4.61364H2.5C2.22386 2.50001 2 2.72386 2 3.00001L2.00001 11.1335C2.00001 11.4096 2.22386 11.6335 2.50001 11.6335H5.50001'
              stroke='white'
              stroke-linecap='round'
            />
          </svg>
          <Tooltip
            message='You are ready to start. Just paste it in your command-line'
            isVisible={tooltipVisible}
          />
        </div>
        <code className='language-bash w-full text-wrap'>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlockWithCopy
