import React from 'react';
import styles from './index.module.css';

function VideoEmbed() {
  return (
    <div class="row">
    </div>
  );
}


export default function WhyPlatformatic() {
  return (
    <section class="margin-top--lg">
      <div class="container">
        <div className="row">
          <div className="col col--8 {styles.why}">
            <h1>Why Platformatic?</h1>
            <p>
              Platformatic enables developers to efficiently develop and run APIs at scale.
              Historically, API developers have had to repetitively build infrastructure to satisfy
              foundational requirements, like authentication, authorization, caching, and connection
              to databases, and have had to manage microservices with technologies such as service mesh
              or centralized registries. This work is time consuming, undifferentiated, and painstakingly
              complex. With growing demands of SaaS applications, the amount of API permutations has grown 
              exponentially and has become a development bottleneck. This has led large organizations to 
              create dedicated platform API engineering teams to help teams deliver on business demands.
            </p>
            <p>
              Our goal is to make API development simple: we aim is to remove all friction from the day-to-day
              of backend developers. Platformatic is a series of Open Source tools to build APIs.
              Check out our announcement <a href="https://www.loom.com/share/6a1715285d3d4479841240beaf175275">video</a>.
            </p> 
          </div>
          <div className="col col--4">
            <img src="img/plt-logo.svg" className={styles.light} />  
            <img src="img/plt-logo-inverted.svg" className={styles.dark} />  
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">  
            <h1>Platformatic Service</h1>
            <p>
              Setting up new projects and APIs is boring. We want to make it easy for you to get started and to
              have a production ready setup in no time.
              Platformatic Service is your starting point for creating <a href="https://nodejs.org">Node.js</a> API on top of the
              <a href="https://www.fastify.io">Fastify</a> framework, providing a set of batteries-included
              defaults for all your needs.
            </p>
            <p>
              Checkout Platformatic Service basic features:
            </p>
            <ul>
              <li>Customizable via Node.js and <a href="https://www.fastify.io/">Fastify</a> plugins, with automatic types</li>
              <li>Automatic TypeScript compilation</li>
              <li><a href="https://prometheus.io">Prometheus</a> metrics</li>
              <li>blazing fast live reloads during development</li>
              <li>OpenAPI schema generation</li>
              <li>GraphQL integration</li>
              <li>3rd-party API client generation</li>
              <li>batteries-included project generator</li>
              <li>file-system based routing</li>
            </ul>
          </div>
          <div className="col col--7">
            <img src="/img/platformatic-service-architecture.png" alt="Platformatic Service Architecture" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--5">
            <img src="/img/platformatic-db-architecture.png" alt="Platformatic DB Architecture" />
          </div>
          <div className="col col--6 col--offset-1">  
            <h1>Platformatic DB</h1>
            <p>
              Where you ever tired of generating Create-Read-Update-Delete (CRUD) APIs?
              Platformatic DB is a tool that will allow you to create both OpenAPI
              and GraphQL schemas from your database, without having to write a single line of code.
              The key difference similar tools is that Platformatic DB will allow you to customize
              it via <a href="https://nodejs.org">Node.js</a> and <a href="https://www.fastify.io">Fastify</a> plugins,
              because it is based on Platformatic Service.
            </p>
            <p>
              Checkout Platformatic DB basic features:
            </p>
            <ul>
              <li>Automatic OpenAPI/REST API generation from the SQL schema</li>
              <li>Automatic GraphQL API generation from the SQL schema</li>
              <li>Multiple databases: SQLite, MySQL, MariaDB, PostgreSQL</li>
              <li>Multiple authentication methods: JWT, WebHook, HTTP Headers</li>
              <li>Authorization via role based access control</li>
              <li>Type-Safe via generated types to protect against database interaction</li>
              <li>...and all features of Platformatic Service</li>
            </ul>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div class="col col--6 col--offset-3">
            <div className={styles.video}>
              <iframe src="https://www.loom.com/embed/cb292b03ae684ac3ade99a7717f5b7e7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
