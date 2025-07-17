import React from 'react'
const ManagingNode = () => {
  const features = [
    {
      title: 'Inconsistent NFRs',
      paragraph: 'A lack of standardized tracing, logging, and HTTP clients across teams creates a maintenance nightmare.',
      icon: '/img/node-icon-1.svg'
    },
    {
      title: 'Development Delays',
      paragraph: 'The time spent on NFRs diverts resources from core features, slowing down development cycles.',
      icon: '/img/node-icon-2.svg'
    },
    {
      title: 'Procedural Complexity',
      paragraph: 'Existing tools often require significant code & process modifications or application re-writes, increasing complexity and reducing agility.',
      icon: '/img/node-icon-3.svg'
    }
  ]
  return (
    <section className='managing-node_section'>
      <section className='container-bg z-2 w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48 mt-32 md:mt-0'>
        <div className='container w-[100%] h-[100%] px-4 md:px-6 max-w-[1440px] mx-auto z-3'>
          <div className='grid gap-6 items-center'>
            <div className='flex flex-col justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className=' font-[600] text-[22px] leading-[26.4px] sm:text-3xl md:text-[32px] bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-500 max-w-3xl mx-auto md:leading-[45px] md:max-w-[700px]'>
                  Handling Node applications is

                  time-consuming, stress-inducing and often requires complex re-writes.
                </h2>
                <p className='text-white/70 text-base md:text-l mx-auto'>
                  Today, teams face:
                </p>
              </div>
              <div className='w-full max-w-6xl space-y-2 mx-auto md:pb-60'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className='bg-black/20 flex flex-col space-y-2 rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105 border-solid border-[0.1px] border-pred/20'
                    >
                      <div className='flex items-center justify-center w-[30px] bg-pred/20 rounded'>
                        <div className='w-10 h-7 flex justify-center items-center'>
                          <img
                            src={feature.icon}
                            className=' w-5 h-5 object-contain'
                            alt=''
                          />
                        </div>
                      </div>
                      <h2 className='text-[18px] font-bold text-white text-left'>
                        {feature.title}
                      </h2>
                      <div className='border-t border-gray-700 mt-auto'>
                        <p className='text-[16px] text-white/70 leading-relaxed text-left'>
                          {feature.paragraph}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ManagingNode
