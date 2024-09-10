import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import WhyPlatformatic from '../components/WhyPlatformatic'
import styles from './index.module.css'

import {
  useStoryblok,
  storyblokInit,
  apiPlugin
} from '@storyblok/react'

import Page from '../components/sbComponents/Page'
import Teaser from '../components/sbComponents/Teaser'
import Grid from '../components/sbComponents/Grid'
import Feature from '../components/sbComponents/Feature'
import SbHomepageFeatures from '../components/sbComponents/HomePageFeatures'
import { render } from 'storyblok-rich-text-react-renderer'
import ManagingNode from '../components/ManagingNode'
import PutNode from '../components/PutNode'
import TimeToChange from '../components/TimeToChange'
import BuildApi from '../components/BuildApi'
import WorksForYou from '../components/WorksForYou'
import SeamlessConsume from '../components/SeamlessConsume'
import HighPerformingApps from '../components/HighPerformingApps'
import FacingNodeChallenge from '../components/FacingNodeChallenge'
import DeployInSeconds from '../components/DeployInSeconds'

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    HomepageFeatures: SbHomepageFeatures,
    ManageNode: ManagingNode,
    PutNode,
    TimeToChange,
    BuildApi,
    WorksForYou,
    SeamlessConsume,
    HighPerformingApps,
    FacingNodeChallenge,
    DeployInSeconds,
    WhyPlatformatic
  },
  apiOptions: {
    region: 'eu'
  }
})

function HomepageHeader ({ blok }) {
  const { siteConfig } = useDocusaurusContext()
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <header className='h-full xl:h-screen dark overflow-hidden'>
      <div className='flex justify-between max-w-[1440px] mx-auto relative flex-col-reverse py-16 xl:py-0 lg:flex-row h-full gap-4 xl:gap-32 overflow-hidden'>
        <div className='flex flex-col gap-6 shrink-0 pl-4 pr-4 lg:pr-0 md:pr-6 md:pl-6 lg:pl-10 2xl:pl-16 pt-6 xl:pt-16 2xl:pt-24 max-w-screen-xl'>
          {/* github */}
          <a
            className='dark:text-white text-[#00050b] dark:hover:!text-white hover:text-[#00050b]  '
            href={blok.hero_section[0].github_link.url}
          >
            <div className='rounded-full border dark:border-white/70 w-max flex items-center border-[#00057b]/15 gap-2 px-4 py-2 hover:bg-[#00050b]/5 dark:hover:bg-white/15'>
              {blok.hero_section[0].github_text}
              <img src={blok.hero_section[0].github_logo} alt='github' />
            </div>
          </a>
          <div className='hero__title text-[32px] leading-[30px] md:text-[2.5rem] md:leading-[40px] lg:leading-[50px] xl:leading-[65px] 2xl:leading-[80px] lg:text-4xl xl:text-5xl 2xl:text-[64px]'>
            {render(blok.hero_section[0].hero_title)}
          </div>
          <div className='hero__subtitle text-lg max-w-[500px] xl:max-w-[650px] dark:text-white/70 text-[#00050b]/30'>
            {' '}
            {render(blok.hero_section[0].hero_subtitle)}
          </div>
          <div className='flex gap-2 items-center mt-2'>
            {blok.hero_section[0].cta_buttons.map((cta, index) => (
              <div key={index}>
                {cta.btn_variant?.toLowerCase() === 'filled'
                  ? (
                    <a
                      href={cta.cta_url?.url}
                      className='remove-hvr-alt px-2 md:px-4 py-2 h-full flex items-center gap-2 rounded-[4px] text-sm text-center w-auto md:w-max  bg-[#00050B] dark:bg-white text-white dark:text-[#00050B] hover:shadow-cta-custom-black dark:hover:shadow-custom-white'
                    >
                      <img src={cta.icon} alt='icon' />
                      {cta.btn_caption}
                    </a>
                    )
                  : (
                    <a
                      href={cta.cta_url?.url}
                      className='remove-hvr px-2 md:px-4 py-2 h-full inline-block rounded-[4px] text-sm w-auto md:w-max border text-center border-[#00050B] cursor-pointer dark:border-white text-[#00050B] dark:text-white hover:bg-[#00050b]/5 dark:hover:bg-white/15'
                    >
                      {cta.btn_caption}
                    </a>
                    )}
              </div>
            ))}
          </div>
          {/* trusted by */}
          <div className='pt-0 md:pt-4 xl:pt-8 2xl:pt-14 relative gap-6 md:gap-10 items-center flex flex-col md:flex-row'>
            <p className='uppercase dark:text-white/70 text-[#00050b]/30 tracking-widest font-medium'>
              {blok.hero_section[0].trusted_by_title}
            </p>
            <div className='flex items-center gap-5'>
              {blok.hero_section[0].trusted_by_logos.map((trust, index) => (
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className='w-full h-[40px] 2xl:h-[60px] cursor-pointer'
                >
                  {hoveredIndex === index
                    ? (
                      <img
                        key={index}
                        src={trust.image_logo_hovered}
                        alt='trust'
                        className='w-full h-full'
                      />
                      )
                    : (
                      <img
                        key={index}
                        src={trust.image_logo}
                        alt='trust'
                        className='w-full h-full'
                      />
                      )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          src={blok.hero_section[0].hero_image}
          alt='hero'
          className=' hidden lg:inline-block absolute h-auto w-full right-[-50px] xl:right-[-80px] 2xl:right-[-100px] max-h-[400px] xl:max-h-[550px] 2xl:max-h-[650px] lg:w-1/2 top-1/2 max-w-[400px] xl:max-w-[600px] 2xl:max-w-[793px] -translate-y-1/2'
        />
        <div className='lg:hidden w-full h-full flex justify-center items-center'>
          <img
            src={blok.hero_section[0].hero_image}
            alt='hero'
            className=' relative h-auto w-full max-w-[300px] md:max-w-[500px]'
          />
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  let slug = 'home'
  if (globalThis.window && globalThis.window.location.pathname !== '/') {
    slug = globalThis.window.location.pathname.replace('/', '')
  }
  const story = useStoryblok(slug, { version: 'draft' })
  if (!story || !story.content) {
    return <div>Loading...</div>
  }

  return (
    <Layout
      title='Platformatic Open Source Software'
      description='The documentation of all Open Source libraries that are part of Platformatic.'
    >
      <HomepageHeader blok={story.content} />
      <main className='dark'>
        {/* <StoryblokComponent blok={story.content} /> */}
        <ManagingNode blok={story.content} />
        <PutNode blok={story.content} />
        <TimeToChange blok={story.content} />
        <section className='overflow-hidden'>
          <div class='hidden md:block absolute md:w-1/2 top-[135%] left-0 h-[2300px] plt-vertical-background-triangle opacity-10'>
            <div class='plt-vertical-background-opacity h-full absolute top-0 left-0 w-full' />
          </div>
          <BuildApi blok={story.content} />
          <WorksForYou blok={story.content} />
        </section>
        <SeamlessConsume blok={story.content.services[2]} />
        <HighPerformingApps blok={story.content.services[3]} />
        <section className='overflow-hidden relative'>
          <FacingNodeChallenge blok={story.content.services[4]} />
          <DeployInSeconds blok={story.content.services[5]} />
          <WhyPlatformatic blok={story.content.services[6]} />
        </section>
      </main>
    </Layout>
  )
}
