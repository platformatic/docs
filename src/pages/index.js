import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Quotes from '@site/src/components/Quotes';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Go to docs ➡️
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoEmbed() {
  return (
    <section className={styles.video}>
      <div className="container">
        <div class="rows">
          <div class="col col--12">
            <h1>Checkout the Platformatic DB basic features</h1>
          </div>
          <div class="col col--6 col--offset-3">
            <iframe src="https://www.loom.com/embed/3a2052674be249ae95bb2b407cf0efac" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Platformatic Open Source Software`}
      description="The documentation of all Open Source libraries that are part of Platformatic.">
      <HomepageHeader />
      <main>
        <VideoEmbed />
        <Quotes />  
        <script defer data-domain="oss.platformatic.dev" src="https://plausible.io/js/plausible.js"></script>
      </main>
    </Layout>
  );
}
