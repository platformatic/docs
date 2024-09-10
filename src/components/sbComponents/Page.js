// src/components/sbComponents/Page.js
import React from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const Page = ({ blok }) => {
  console.log('Page component received blok:', blok) // remove console.log because it logs in the console
  if (!blok || !blok.body) {
    console.error('Page component received invalid blok:', blok)
    return <div>Loading...</div>
  }

  return (
    <main {...storyblokEditable(blok)} className='px-4'>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}

export default Page
