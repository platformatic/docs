import React from 'react'

const SectionTags = ({ LineGradient, Circlebg, tag, className }) => {
  return (
    <div>
      <div className='section-header__num-cont'>
        <div
          className='line'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(198, 27, 226, 0) 0%, ${LineGradient})`
          }}
        />
        <div
          className={`circle ${Circlebg} ${className} uppercase tracking-widest font-regular`}
          style={{
            background: Circlebg
          }}
        >
          {tag}
        </div>
      </div>
    </div>
  )
}

export default SectionTags
