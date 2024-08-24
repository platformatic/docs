// src/components/sbComponents/Feature.js
import React from 'react'
import { storyblokEditable } from '@storyblok/react'

const Feature = ({ blok }) => (
  <div className='col col--4' {...storyblokEditable(blok)}>
    <div className='text--center' />
    <div className='text--center padding-horiz--md'>
      <h3>{blok.title}</h3>
      <p>{blok.description}</p>

    </div>
  </div>
)

export default Feature
