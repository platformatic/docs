import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const Grid = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center'
    >
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  )
}

export default Grid
