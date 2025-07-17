import React, { useState } from 'react'

const WattTimeline = ({ data }) => {
  const tablist = data.slice(0, 3)
  const lastList = data.slice(-1)

  return (
    <section className='w-full'>
      <section className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='md:block absolute h-[800px] w-[600px] md:right-0 md:bottom-0 bottom-[-200px]'>
          <div className='explore_side_bg w-full h-full' />
        </div>
        <div className='flex-1'>
          <ol className='relative timeline border-l  border-s border-pyellow dark:border-pyellow list-none'>
            {tablist.map((item, index) => (
              <li key={index} className={`mb-10 ${index === 2 ? 'mb-0' : ''}`}>
                <div className='absolute z-20 w-8 h-8 p-[0.4rem] bg-pyellow/20 text-pyellow rounded-md -start-4 border border-white dark:border-pyellow dark:bg-pyellow/20 flex justify-center '>
                  <img
                    src={item.icon}
                    className='w-full h-full object-contain'
                    alt=''
                  />
                </div>

                <div className=''>
                  <div className='text-[16px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow'>
                    <p className='m-0'>{item.title}</p>
                  </div>
                  <p className='text-[16px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white'>
                    {item.subtitle}
                  </p>
                  <p className='mb-4 text-base font-normal text-white/70 dark:text-gray-400'>
                    {item.paragraph}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className='flex-1'>
          <div className='flex flex-col gap-4'>
            <div className='relative mb-10 md:ms-4'>
              <div className='absolute top-4 left-[-1rem] md:left-0 w-8 h-8 bg-pyellow/20 p-[0.4rem] rounded-md'>
                {' '}
                {/* Added background color, spacing, and slightly rounded corners */}
                <img
                  src={lastList[0].icon}
                  className='w-full h-full object-contain'
                  alt=''
                />
              </div>
              <div className='pl-8 md:pl-12'>
                <div className='text-[16px] md:text-[18px] font-semibold text-pyellow dark:text-pyellow'>
                  <p className='m-0'>{lastList[0].title}</p>
                </div>
                <p className='text-[16px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white'>
                  {lastList[0].subtitle}
                </p>
                <p className='mb-4 text-base font-normal text-white/70 dark:text-gray-400'>
                  {lastList[0].paragraph}
                </p>
              </div>
            </div>
            {/* second */}
            <div className='flex flex-col items-center gap-4 border-solid border border-pyellow/20 rounded-xl p-4 py-12'>
              <div className='w-25 h-25'>
                <img
                  src='/img/watt-explore-bg.svg'
                  className='w-full h-full object-contain'
                  alt=''
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

const OpenSourceTimeline = ({ data }) => {
  const tablist = data

  return (
    <section className='flex flex-col md:flex-row justify-between gap-8'>
      <div className='flex-1'>
        {tablist.slice(0, 2).map((item, index) => (
          <div key={index} className='relative mb-10 md:ms-4'>
            <div className='absolute top-4 left-0 w-8 h-8 bg-pblue/20 p-[0.4rem] rounded-md'>
              {' '}
              {/* Added background color, spacing, and slightly rounded corners */}
              <img
                src={item.icon}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
            <div className='pl-12'>
              <div className='text-[16px] md:text-[18px] font-semibold text-pblue dark:text-pblue'>
                <p className='m-0'>{item.title}</p>
              </div>
              <p className='text-[16px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white'>
                {item.subtitle}
              </p>
              <p className='mb-4 text-base font-normal text-white/70 dark:text-gray-400'>
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-1'>
        <div className='flex flex-col gap-4'>
          <div>
            <div className='relative mb-10 md:ms-4'>
              <div className='absolute top-4 left-0 w-8 h-8 bg-pblue/20 p-[0.4rem] rounded-md'>
                {' '}
                {/* Added background color, spacing, and slightly rounded corners */}
                <img
                  src={tablist[2].icon}
                  className='w-full h-full object-contain'
                  alt=''
                />
              </div>
              <div className='pl-12'>
                <div className='text-[16px] md:text-[18px] font-semibold text-pblue dark:text-pblue'>
                  <p className='m-0'>{tablist[2].title}</p>
                </div>
                <p className='text-[16px] md:text-[18px] mb-4 italic font-normal text-white dark:text-white'>
                  {tablist[2].subtitle}
                </p>
                <p className='mb-4 text-base font-normal text-white/70 dark:text-gray-400'>
                  {tablist[2].paragraph}
                </p>
              </div>
            </div>
          </div>
          {/* second */}
          <div className='flex flex-col items-center gap-4 border-solid border text-center border-pblue/20 rounded-xl p-4'>
            <p className='text-white font-semibold text-[18px] max-w-[350px]'>
              The leading open source toolkit used by million of developers globally
            </p>
            <div className='flex gap-2'>
              <p className='text-5xl font-extrabold mr-2'>3M</p>
              <p className='text-base text-white/70 text-left max-w-[150px]'>monthly NPM downloads</p>
            </div>
            <a
              href='https://platformatic.dev/docs/Overview'
              className='inline-block px-4 py-2 bg-transparent text-white font-semibold outline outline-[1px] outline-white rounded-md hover:bg-pblue/80 transition-colors duration-300 shadow-cta-custom-black text-[16px] mt-4'
            >
              Read our docs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0)
  const watt = [
    {
      icon: '/img/watt-icon-1.svg',
      title: 'Comprehensive NFR management',
      subtitle: 'Simplify critical app functions without the hassle.',
      paragraph: 'Abstracts away time-consuming tasks like logging, tracing, observability, and resource allocation—allowing your team to focus on building, not managing infrastructure.'
    },
    {
      icon: '/img/watt-icon-2.svg',
      title: 'Integrated OpenTelemetry tracing',
      subtitle: 'Get full visibility into your app’s performance.',
      paragraph: 'Track application behavior in real-time with built-in OpenTelemetry tracing. Automatically monitor distributed services and gain insights into dependencies and performance.'
    },
    {
      icon: '/img/watt-icon-3.svg',
      title: 'Unified logging with Pino',
      subtitle: 'Streamline your logging strategy effortlessly.',
      paragraph: 'Leverage  Pino for fast, efficient, and structured logging across your Node.js applications, ensuring that you can monitor performance without complexity.'
    },
    {
      icon: '/img/watt-icon-4.svg',
      title: 'Multithreading done right',
      subtitle: 'Enable multithreading on your Node.js applications instantly.',
      paragraph: 'Optimize resource allocation and dramatically increase efficiency, allowing your app to handle more traffic seamlessly.'
    }
  ]

  const openSource = [
    {
      icon: '/img/oss-icon-1.svg',
      title: 'Build APIs quickly',
      subtitle: 'Platformatic is opinionated on distributed backends, but not prescriptive',
      paragraph: 'With your team, create, package and publish configurations on your internal npm registry. Accelerate Open API and GraphQL development and cut repetitive tasks.'
    },
    {
      icon: '/img/oss-icon-2.svg',
      title: 'Seamlessly consume your API',
      subtitle: 'Based on [fetch], Platformatic Client runs on every JavaScript runtime.',
      paragraph: 'Automatically generate a type-safe and low-dependency client from an OpenAPI Schema or GraphQL endpoint. Works for service-to-service and frontend-to-backend communications.'
    },
    {
      icon: '/img/oss-icon-3.svg',
      title: 'Innovate fast',
      subtitle: 'Quickly build your base application with Platformatic Stackables\' templates.',
      paragraph: 'Go beyond starter kits. Take your configurations, package them and publish them on your internal npm registry. Access & use the same core configurations.'
    }
  ]
  return (
    <section className='z-[5] relative py-10 px-6 md:py-0 md:px-10 flex flex-col items-center border-y border-white/15 shadow-custom-black dark:drop-shadow-md overflow-hidden'>
      {/* Main container */}
      <div>
        {/* Header section */}
        <div className='text-center flex flex-col items-center'>
          <h2 className='text-[28px] leading-[35px] sm:text-3xl md:text-[40px] md:leading-[54px] max-w-3xl mx-auto bg-clip-text text-transparent font-bold bg-gradient-to-t from-white to-gray-500'>
            Explore Platformatic’s

            Open Source functionality:
          </h2>
          <p className='text-white/70 text-base  md:text-[18px] mx-auto sm:max-w-[550px]'>
            The foundation for running high-performance Node.js apps and efficient development teams.
          </p>
        </div>
        {/* Tabs section */}
        <div className='mt-8 w-full max-w-6xl mx-auto'>
          {/* Tab buttons */}
          <div className='flex gap-4 justify-center items-center border-b border-white/20 mb-20'>
            <p
              className={`px-3 py-1 text-[14px] border-none transition-all duration-300 cursor-pointer ${
                activeTab === 0 ? 'rounded-2xl bg-pyellow/20 text-pyellow' : ''
              }`}
              onClick={() => setActiveTab(0)}
            >
              WATT
            </p>
            <p
              className={`px-3 py-1 text-[14px]  border-none transition-all duration-300 cursor-pointer ${
                activeTab === 1 ? 'rounded-2xl bg-pblue/20 text-pblue' : ''
              }`}
              onClick={() => setActiveTab(1)}
            >
              OPEN SOURCE TOOLKIT
            </p>
          </div>
          {/* Tab content */}
          <div className='my-4'>
            {activeTab === 0 && (
              <WattTimeline data={watt} />
            )}
            {activeTab === 1 && (
              <OpenSourceTimeline data={openSource} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore
