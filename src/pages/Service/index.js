/* global MutationObserver */

import React, { useEffect } from 'react'
import {
  useStoryblok,
  storyblokInit,
  apiPlugin
} from '@storyblok/react'
import Layout from '@theme/Layout'

import Page from '../../components/sbComponents/Page'
import Architecture from '../../components/servicepage/Architecture'
import Hero from '../../components/servicepage/Hero'
import Feature from '../../components/servicepage/Feature'
import GetStarted from '../../components/servicepage/GetStarted'
import LearnPlatformatic from '../../components/servicepage/LearnPlatformatic'

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page
  },
  apiOptions: {
    region: 'eu'
  }
})

export default function Service () {
  let slug = 'service'
  const story = useStoryblok(slug, { version: 'draft' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '22380288',
          formId: '554864dd-bc26-4f05-94c8-26267a188f9c',
          target: '#service',
          region: 'na1',
          cssClass: 'light-mode',
          onFormReady: function ($form) {
            const iframe = document.querySelector('iframe')
            if (iframe) {
              const observer = new MutationObserver(
                (mutationsList, observer) => {
                  for (const mutation of mutationsList) {
                    if (
                      mutation.type === 'childList' &&
                      iframe.contentDocument
                    ) {
                      const doc =
                        iframe.contentDocument || iframe.contentWindow?.document
                      if (doc) {
                        // Set the background color of the iframe's body
                        doc.body.style.backgroundColor = '#040607'
                        // doc.body.style.backgroundColor = darkMode
                        //   ? '#00050b'
                        //   : '#FAFAFA'

                        const labels = doc.querySelectorAll('label')
                        labels.forEach((label) => {
                          // label.style.color = darkMode ? 'white' : '#00050b'
                          label.style.color = '#ffffff'
                        })
                        observer.disconnect() // Stop observing after labels and background are adjusted
                      }
                    }
                  }
                }
              )

              observer.observe(iframe.contentDocument, {
                childList: true,
                subtree: true
              })
            } else {
              console.error('Iframe not found.')
            }
          }
        })
      } else {
        console.error('hbspt not available.')
      }
    })

    script.addEventListener('error', () => {
      console.error('Failed to load the script.')
    })
  }, [story])

  if (globalThis.window && globalThis.window.location.pathname !== '/') {
    slug = globalThis.window.location.pathname.replace('/', '')
  }
  if (!story || !story.content) {
    return <div>Loading...</div>
  }

  return (
    <Layout title='Hello' description='Hello React Page'>
      <Hero blok={story.content} />
      <main>
        <Architecture blok={story.content} />
        <Feature blok={story.content} />
        <GetStarted blok={story.content} />
        <LearnPlatformatic blok={story.content} />
        <div
          className='!text-[#00050b] dark:!text-white w-[90%] lg:w-[35%] mx-auto border border-[#FFFFFF26] rounded-[6px] my-4 px-[1rem] py-8'
          id='service'
        />
      </main>
    </Layout>
  )
}
