import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const WhyPlatformatic = ({ blok }) => {
  return (
    <div className='relative px-5 -[5] pt-20 pb-10 lg:pb-20 md:px-6 lg:px-10 max-w-[1240px] mx-auto w-full flex flex-col gap-y-[104px]'>
      <div className='flex flex-col gap-y-8 items-center '>
        <div className='flex flex-col gap-4 w-full items-center'>
          <div className='max-w-[575px] text-center text-[22px] md:text-[36px] font-semibold'>
            {render(blok.title)}
          </div>
          <div className='max-w-[630px]  feature__richtext dark:opacity-70 opacity-30'>
            {render(blok.subtitle)}
          </div>
        </div>
        {/* cta */}
        <div className='w-full flex gap-2 justify-start md:justify-center'>
          {blok.cta_options.map((cta, index) => (
            <div key={index}>
              {cta.btn_variant?.toLowerCase() === 'filled'
                ? (
                  <a
                    href={cta.cta_url?.url}
                    className='remove-hvr-alt px-4 py-2 h-full flex items-center gap-2 rounded-[4px] text-sm md:w-max bg-[#00050B] dark:bg-white text-white dark:text-[#00050B] hover:shadow-cta-custom-black dark:hover:shadow-custom-white'
                  >
                    <img src={cta.icon} alt='icon' />
                    {cta.btn_caption}
                  </a>
                  )
                : (
                  <a
                    href={cta.cta_url?.url}
                    className='remove-hvr px-4 py-2 h-full inline-block rounded-[4px] text-sm md:w-max border border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white hover:bg-[#00050b]/5 dark:hover:bg-white/15'
                  >
                    {cta.btn_caption}
                  </a>
                  )}
            </div>
          ))}
        </div>
      </div>

      {/* email update */}
      <div className='flex flex-col dark:bg-[#00050b] bg-white gap-y-3 dark:border-white/15 border-[#00050b]/5 items-start border rounded-md p-4 max-w-[1240px] w-full mx-auto lg:w-[1110px]'>
        <div className='text-base md:text-xl font-semibold'>
          {render(blok.updates_title)}
        </div>
        <div className='flex flex-col md:flex-row gap-3 w-full items-start md:items-center '>
          <div className='dark:opacity-70 opacity-15'>
            {render(blok.updates_subtitle)}
          </div>
          {/* icon */}
          <img
            src={blok.newsletter_icon}
            alt='icon'
            className='w-[15px] h-[15px] hidden md:inline-block'
          />
          {/* form */}
          <form
            class='border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white h-15 w-full md:w-auto grow pl-2 flex justify-between rounded-[4px]'
            method='post'
            onsubmit="return sendForm('send-form-email')"
            data-hs-cf-bound='true'
          >
            <input
              id='send-form-email'
              type='email'
              name='email'
              placeholder='example@email.com'
              class='border-0 bg-transparent outline-none w-full'
              wfd-id='id1'
            />
            <button alt='send email for information' type='submit' class='p-3'>
              <svg
                width='14'
                height='12'
                viewBox='0 0 14 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.84615 6.00049L1 11.0005L13 6.00049L1 1.00049L2.84615 6.00049ZM2.84615 6.00049H7.46154'
                  stroke='#707070'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WhyPlatformatic
