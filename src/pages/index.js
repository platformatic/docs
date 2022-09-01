import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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

const quotesData = [{
  name: "James Snell",
  title: "Node.js Technical Steering Committee",
  quote: "Quote from James",
  avatar: "https://avatars.githubusercontent.com/u/439929?s=460&v=4"
}, {
  name: "Feross Aboukhadijeh",
  title: "Founder & CEO, Socket.dev",
  quote: "Quote from Feross",
  avatar: "https://avatars.githubusercontent.com/u/121766?s=460&v=4"
}, {
  name: "Charlie Robbins",
  title: "",
  quote: "Quote from Charlie",
  avatar: "https://avatars.githubusercontent.com/u/4624?s=460&v=4"
}, {
  name: "David Mark Clements",
  title: "",
  quote: "Quote from Dave",
  avatar: "https://avatars.githubusercontent.com/u/1190716?s=460&v=4"
}]

function Quotes() {
  return (
    <section className={styles.quotes}>
      <div class="container">
        <div class="row">
          <div class="col col--12">
            <h1>Quotes</h1>
          </div>

          {quotesData.map((quote, index) => ( 
          <div class="col col--3">
            <div class="card">
              <div class="card__header">
                <div class="avatar">
                  <img
                    class="avatar__photo"
                    src={quote.avatar} />
                  <div class="avatar__intro">
                    <div class="avatar__name">{quote.name}</div>
                    <small class="avatar__subtitle">
                      {quote.title}
                    </small>
                  </div>
                </div>
              </div>
              <div class="card__body">
                <p> {quote.quote} </p>
              </div>
            </div>
          </div>
          ))}
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
      </main>
    </Layout>
  );
}
