// src/components/sbComponents/HomepageFeatures.js
import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Feature from './Feature'

const HomepageFeatures = ({ blok }) => (
  <section className={styles.features} {...storyblokEditable(blok)}>
    <div className='container'>
      <div className='row'>
        {blok.features.map((nestedBlok) => (
          <Feature blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  </section>
)

export default HomepageFeatures
