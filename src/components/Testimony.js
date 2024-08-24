import fixImageUrl from '../../util/FixImageUrls'

const Testimony = ({ blok }) => {
  return (
    <div className='mt-4 px-4 flex flex-col gap-8 w-full items-center relative'>
      <div className='p-4 flex flex-col gap-4 border rounded-[6px] w-full max-w-[1160px] border-white/30 shadow-custom-black dark:shadow-none bg-white dark:bg-[#040607] z-[3]'>
        <div className='flex gap-4 flex-row items-center justify-between'>
          {/* image, name, and company info */}
          <span className='flex items-center md:items-start gap-2 md:gap-4'>
            <img
              src={fixImageUrl(blok.section_testimonial_img)}
              alt='user_image'
              height={10}
              width={10}
              className='w-10 h-10 rounded-full shrink-0'
            />
            <div className='gap-y-1'>
              <h2 className='text-base text-[#00050B] dark:text-white font-semibold'>
                {blok.section_testimonial_name}
              </h2>
              <p className='text-[#00050B]/70 dark:text-white/70 text-sm'>
                {blok.section_testimonial_job_desc}
              </p>
            </div>
          </span>
          {/* company logo */}
          <a href={blok.section_testimonial_icon_link}>
            <img
              src={fixImageUrl(blok.section_testimonial_icon_img)}
              alt='company_logo'
              className='  h-5 md:h-6 w-5 md:w-6 cursor-pointer'
            />
          </a>
        </div>
        {/* divider */}
        <div className='w-full border-[0.5px] border-[#00050b]/30 dark:border-white/30 rounded-full' />
        {/* description */}
        <p className='text-sm md:text-base text-[#00050B]/70 dark:text-white/70'>
          {blok.section_testimonial_testimony}
        </p>
      </div>
    </div>
  )
}

export default Testimony
