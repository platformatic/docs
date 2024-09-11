import React from 'react'
import {
  useStoryblok,
  storyblokInit,
  apiPlugin,
  StoryblokComponent
} from '@storyblok/react'
import Layout from '@theme/Layout'

import Page from '../../components/sbComponents/Page'
import { render } from 'storyblok-rich-text-react-renderer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Architecture from '../../components/fastify/Architecture'
import GetStarted from '../../components/fastify/GetStarted'
import HubSpotForm from '../../components/HubSpotForm'
import Feature from '../../components/fastify/Feature'
import PlatformaticWork from '../../components/fastify/PlatformaticWork'
import UsingPlatformatic from '../../components/fastify/UsingPlatformatic'

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
    <header className='dark'>
      <div className='w-full relative pb-12 flex flex-col lg:flex-row items-start lg:items-center'>
        <div class='hidden md:block absolute md:w-[320px] -bottom-12 left-0 h-[400px] plt-vertical-background-triangle opacity-10'>
          <div class='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
        </div>
        <div className='relative px-[2%] lg:px-0 lg:pl-[6rem] pb-[3rem] pt-[4rem]'>
          <img
            src={blok.hero[0].gradient_left.filename}
            className='absolute -z-10 left-0 lg:-top-[50%]'
            alt='gradient'
          />
          <div className='w-[90%] lg:w-[42.8rem] flex flex-col z-40'>
            <a className='mb-[2rem]' href={blok.hero[0].github_link.url}>
              <button className='h-[2.5rem] bg-[#FFFFFF] px-5 rounded-[6.25rem] flex items-center justify-center gap-1'>
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
            <span className='text-[#FFFFFFB2] w-[80%] lg:w-auto text-[1rem] lg:text-[1.2rem] font-[400]'>
              {render(blok.hero[0].hero_subtitle)}
            </span>
            <div className='flex lg:items-center gap-3 lg:gap-4 mt-[2rem] lg:mt-[3.5rem]'>
              {blok.hero[0].cta_buttons.map((cta) => (
                <a
                  key={cta._uid}
                  href={cta.cta_url.url}
                  className={`${
                    cta.btn_variant == 'filled'
                      ? 'text-[#00283D]'
                      : 'hover:text-white'
                  }`}
                >
                  <button
                    className={`${
                      cta.btn_variant == 'filled'
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
        <div className='w-[100%]'>
          <img src={blok.hero[0].hero_image} className='' alt='hero_image' />
        </div>
      </div>
    </header>
  )
}

export default function Fastify () {
  const { siteConfig } = useDocusaurusContext()
  let slug = 'fastify'
  if (globalThis.window && globalThis.window.location.pathname !== '/') {
    slug = globalThis.window.location.pathname.replace('/', '')
  }
  const story = useStoryblok(slug, { version: 'draft' })
  if (!story || !story.content) {
    return <div>Loading...</div>
  }

  return (
    <Layout title='Hello' description='Hello React Page'>
      <PageHeader blok={story.content} />
      <Architecture blok={story.content} />
      <Feature blok={story.content} />
      <GetStarted blok={story.content} />
      <PlatformaticWork blok={story.content} />
      <UsingPlatformatic blok={story.content} />
      <div
        className='!text-[#00050b] dark:!text-white w-[90%] lg:w-[35%] mx-auto border border-[#FFFFFF26] rounded-[6px] my-4 px-[1rem] py-8'
        id='database'
      />
      <HubSpotForm
        portalId='22380288'
        formId='9d88e23d-89fb-4beb-9d4d-0a844ca6639d'
        targetId='database'
        region='na1'
      />
    </Layout>
  )
}