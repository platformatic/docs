import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'
import WhyPlatformatic from '../components/WhyPlatformatic'
import styles from './index.module.css'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='docs/getting-started/quick-start-guide'
          >
            Get started 🚀
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  return (
    <Layout
      title='Platformatic Open Source Software'
      description='The documentation of all Open Source libraries that are part of Platformatic.'
    >
      <HomepageHeader />
      <main>
        <WhyPlatformatic />
      </main>
    </Layout>
  )
}
