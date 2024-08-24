import React from 'react'
import SectionTags from './SectionTags'
import { render } from 'storyblok-rich-text-react-renderer'
import CodeBlockWithCopy from './CodeBlockWithCopy'

const renderContent = (node) => {
  if (Array.isArray(node.content)) {
    return node.content.map((childNode, index) => {
      switch (childNode.type) {
        case 'code_block':
          const codeContent = childNode.content
            .map((textNode) => textNode.text)
            .join('')
          return <CodeBlockWithCopy key={index} code={codeContent} />
        default:
          return render(node)
      }
    })
  }
  return null
}

const BuildApi = ({ blok }) => {
  return (
    <div className='z-[5] relative mt-8 px-4 flex flex-col gap-10'>
      <div className='flex flex-col px-5 items-center gap-4'>
        <SectionTags
          LineGradient={blok.services[0].section_tag_color}
          Circlebg={blok.services[0].section_tag_color}
          tag={blok.services[0].section_tag}
        />
        {/* title */}
        <h1 className='text-center text-[28px] lg:text-[40px] font-semibold'>
          {blok.services[0].section_title}
        </h1>
        <div className='text-center dark:text-white/70 max-w-[714px] text-[#00050b]/15'>
          {render(blok.services[0].section_desc)}
        </div>
      </div>
      {/* grid items */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-[1240px] mx-auto w-full'>
        {blok.services[0].api_features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-y-2 md:gap-y-4 p-4 border dark:border-white/20 border-[#00050b]/30 dark:bg-[#00050b] bg-white  rounded-md col-span-1 ${
              index === blok.services[0]?.api_features?.length - 1 &&
              'col-span-1 md:col-span-2 xl:col-span-3'
            }`}
          >
            <img src={feature.feature_icon} alt='feature icon' />
            <h3 className='text-center text-base md:text-xl font-medium'>
              {feature.feature_title}
            </h3>
            <div
              className={`${
                feature.feature_subcontent.content.find(
                  (item) => item.type === 'bullet_list'
                ) && 'opacity-65'
              } feature__richtext text-sm md:text-base`}
            >
              {' '}
              {renderContent(feature.feature_subcontent)}
            </div>
          </div>
        ))}
      </div>
      {/* cta */}
      <a
        href={blok.services[0].section_cta[0].cta_url.url}
        className='remove-hvr mx-auto px-4 py-2 h-full inline-block rounded-[4px] text-sm w-max border border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white hover:bg-[#00050b]/5 dark:hover:bg-white/15'
      >
        {blok.services[0].section_cta[0].btn_caption}
      </a>
    </div>
  )
}

export default BuildApi
