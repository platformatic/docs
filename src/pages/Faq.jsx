import React, { useState } from 'react'

function Faq () {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const faqs = [
    {
      question: 'Do I need to re-write my app to use Platformatic?',
      answer: 'No, Platformatic allows you to bring your Node.js Fastify, Express, Koa, Next.js, Remix, and Astro apps, plug in, and play.'
    },
    {
      question: 'Does Platformatic Watt support frameworks not listed above?',
      answer: 'If it’s not listed above, then no- however, contact us and we will see what we can do.'
    },
    {
      question: 'Is Platformatic Open Source?',
      answer: <span>Yes, it’s Apache-2.0 licensed. You can find the source code at <a target='_blank' href='https://github.com/platformatic/platformatic' rel='noreferrer'>https://github.com/platformatic/platformatic</a>.</span>
    }
  ]
  return (
    <section className='relative bg-pblack flex flex-col items-center border-top shadow-custom-black dark:drop-shadow-md px-4 sm:px-6 md:mt-20 md:pb-16 pb-6 border-bottom'>
      <div className='w-full mt-16 max-w-4xl mx-auto'>
        <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
          FAQ
        </h3>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b-2 border-white/10'>
              <div
                className={`rounded-lg cursor-pointer ${
                  index !== 2 ? 'border-bottom' : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className='flex items-center text-base md:text-[18px] text-white p-6 hover:bg-white/5 transition-colors'>
                  <span className='text-base md:text-[18px] mr-4'>
                    {openIndex === index ? '−' : '+'}
                  </span>
                  {faq.question}
                </div>
                {openIndex === index && (
                  <p className='text-white/70 p-6 pt-0 pb-0'>
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
