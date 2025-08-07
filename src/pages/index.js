import React from 'react'
import Layout from '@theme/Layout'
import Faq from '../components/Faq'
import Seamless from '../components/Seamless'
import HighPerformingApps from '../components/HighPerformingApps'
import Explore from '../components/Explore'
import PutNode from '../components/PutNode'
import ManagingNode from '../components/ManagingNode'

export default function Home () {
  return (
    <Layout
      title='Platformatic Open Source Software'
      description='The documentation of all Open Source libraries that are part of Platformatic.'
    >
      <main className='dark'>
        <section className='bg-transparent flex items-center justify-center sm:min-h-[100vh] bg-cover bg-center bg-no-repeat relative mt-20 md:mt-0'>
          <img src='/img/homepage-bg.svg' alt='Background' className='absolute inset-0 w-full h-full object-cover z-0 ' />
          <div className='max-w-screen-xl mx-auto w-full text-center relative z-10 mt-10 md:mt-0'>
            <div className='max-w-4xl mx-auto flex flex-col justify-center items-center px-2 md:px-0'>
              <h1 className='mb-4 text-[1.6rem] leading-[1.5] md:leading-[54px] font-[700] md:font-[600] md:text-[40px] dark:text-white md:max-w-[603px]'>
                <p>The out-of-the-box,</p>
                <p>open source primitive to <span style={{ color: 'rgb(33, 250, 144)' }}>build &amp; run Node.js</span> applications</p>
              </h1>

              <p className='mb-6 text-white/80 lg:mb-8 md:text-lg text-base lg:text-xl font-normal dark:text-white/80'>Focus on building your Node.js applications, not building around them</p>
              <div className='flex flex-row justify-center items-center gap-4 w-full md:max-w-80 max-w-80 mx-auto'>
                <a href='docs/getting-started/quick-start-watt' className='flex-1'>
                  <button className='bg-white hover:bg-white/80 hover:translate-y-1 outline outline-white/80 outline-[1px] text-black/80 py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]'>Quickstart guide</button>
                </a>
                <a href='https://www.platformatichq.com/contact' className='flex-1'>
                  <button className='bg-transparent hover:bg-white/30 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]'>Get in touch</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ManagingNode />
        <PutNode />
        <Explore />
        <Seamless />
        <HighPerformingApps />
        <Faq />
        <section className='footer-bg overflow-hidden relative border-bottom'>
          <div className='md:h-32 h-20' />
        </section>
      </main>
    </Layout>
  )
}
