import React, { useEffect } from 'react'
import {
  useStoryblok,
  storyblokInit,
  apiPlugin
} from '@storyblok/react'
import Layout from '@theme/Layout'

import Page from '../../components/sbComponents/Page'
import { render } from 'storyblok-rich-text-react-renderer'
import Architecture from '../../components/composer/Architecture'
import Feature from '../../components/stackables/Feature'
import TemplateMarketPlace from '../../components/stackables/TemplateMarketPlace'
import LearnPlatformatic from '../../components/stackables/Learnplatformatic'

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

function PageHeader ({ blok }) {
  return (
    <header className='dark mb-[5rem]'>
      <div className='w-full relative flex flex-col lg:flex-row items-center'>
        <div className='hidden md:block absolute md:w-[320px] -bottom-[13rem] left-0 h-[190px] plt-vertical-background-triangle opacity-10'>
          <div className='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
        </div>
        <div className='relative px-[2%] lg:px-0 lg:pl-[6rem] pt-[4rem]'>
          <img
            src={blok.hero[0].gradient_left.filename}
            className='absolute -z-10 left-0 lg:-top-[50%]'
            alt='gradient'
          />
          <div className='w-[90%] lg:w-[42.8rem] flex flex-col z-40'>
            <a className='mb-[2rem]' href={blok.hero[0].github_link.url}>
              <button className='h-[2.5rem] bg-[#FA6221] px-5 rounded-[6.25rem] flex items-center justify-center gap-1'>
                <img
                  src={blok.hero[0].github_logo}
                  className='w-[1rem] h-[1rem]'
                  alt='github'
                />
                <span className='text-[#00050B] text-[0.8rem] uppercase'>
                  {blok.hero[0].github_text}
                </span>
              </button>
            </a>
            <span className='text-white w-[100%] lg:w-auto text-[30px] lg:text-[3.5rem] font-[700] leading-[36.57px] lg:leading-[4.26rem] mb-[2rem]'>
              {render(blok.hero[0].hero_title)}
            </span>
            <span className='text-white w-[100%] lg:w-auto text-[24px] lg:text-[1.8rem] font-[700] mb-[2rem]'>
              {render(blok.hero[0].hero_subtitle)}
            </span>
            <span className='text-[#FFFFFFB2] w-[100%] lg:w-auto text-[1rem] lg:text-[1.2rem] font-[400]'>
              {render(blok.hero[0].hero_subtitle2)}
            </span>
            <div className='flex lg:items-center gap-3 lg:gap-4 mt-[2rem] lg:mt-[3.5rem]'>
              {blok.hero[0].cta_buttons.map((cta) => (
                <a
                  key={cta._uid}
                  href={cta.cta_url.url}
                  className={`${
                    cta.btn_variant === 'filled'
                      ? 'text-[#00283D]'
                      : 'hover:text-white'
                  }`}
                >
                  <button
                    className={`${
                      cta.btn_variant === 'filled'
                        ? 'bg-[#FFFFFF] text-[#00283D]'
                        : 'border border-[#FFFFFF]'
                    } rounded-[4px] h-[2.5rem] w-[8rem] lg:w-[9.28rem] text-[1rem] font-[600]`}
                  >
                    {cta.btn_caption}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className=''>
          <iframe
            width='560'
            height='315'
            src={blok.hero[0].hero_embed.url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </header>
  )
}

export default function Stackables () {
  let slug = 'stackables'
  const story = useStoryblok(slug, { version: 'draft' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '22380288',
          formId: '2615228f-2c36-46b5-8e1d-7f4494a9b7b4',
          target: '#stackables',
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
                        iframe.contentDocument ||
                        iframe.contentWindow?.document
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
      <PageHeader blok={story.content} />
      <Architecture blok={story.content} />
      <Feature blok={story.content} />
      <TemplateMarketPlace blok={story.content} />
      <LearnPlatformatic blok={story.content} />
      <div
        className='!text-[#00050b] dark:!text-white w-[90%] lg:w-[35%] mx-auto border border-[#FFFFFF26] rounded-[6px] my-4 px-[1rem] py-8'
        id='stackables'
      />
    </Layout>
  )
}
