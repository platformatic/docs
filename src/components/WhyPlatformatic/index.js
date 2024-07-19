import React from 'react'
import styles from './index.module.css'

export default function WhyPlatformatic () {
  return (
    <section class='margin-top--lg'>
      <div class='container'>
        <div className='row'>
          <div className='col col--8 {styles.why}'>
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
              Check out our announcement <a href='https://www.loom.com/share/6a1715285d3d4479841240beaf175275'>video</a>.
            </p>
          </div>
          <div className='col col--4'>
            <img src='img/plt-logo.svg' className={styles.light} />
            <img src='img/plt-logo-inverted.svg' className={styles.dark} />
          </div>
        </div>
        <div className='row margin-top--lg'>
          <div className='col col--4'>
            <h1>Platformatic Service</h1>
            <p>
              Setting up new projects and APIs is boring. We want to make it easy for you to get started and to
              have a production ready setup in no time.
              Platformatic Service is your starting point for creating a <a href='https://nodejs.org'>Node.js</a> API on top of the&nbsp;
              <a href='https://www.fastify.io'>Fastify</a> framework, providing a set of batteries included
              defaults for all your needs.
            </p>
            <p>
              Check out the basic Platformatic Service features:
            </p>
            <ul>
              <li>Customizable via Node.js and <a href='https://www.fastify.io/'>Fastify</a> plugins, with automatic types</li>
              <li>Automatic TypeScript compilation</li>
              <li><a href='https://prometheus.io'>Prometheus</a> metrics</li>
              <li>Blazing fast live reloads during development</li>
              <li>OpenAPI schema generation</li>
              <li>GraphQL integration</li>
              <li>Third-party API client generation</li>
              <li>Batteries included project generator</li>
              <li>File-system based routing</li>
            </ul>
          </div>
          <div className='col col--7'>
            <img src='/img/images/Platformatic_Service_Diagram_(Light_Mode).png' alt='Platformatic Service Architecture' className={styles.light} />
            <img src='/img/images/img-dark/Platformatic_Service_Diagram_(Dark_Mode).png' alt='Platformatic Service Architecture' className={styles.dark} />
          </div>
        </div>
        <div className='row margin-top--lg'>
          <div className='col col--7'>
            <img src='/img/images/Platformatic_DB_Diagram_(Light_Mode).png' alt='Platformatic DB Architecture' className={styles.light} />
            <img src='/img/images/img-dark/Platformatic_DB_Diagram_(Dark_Mode).png' alt='Platformatic DB Architecture' className={styles.dark} />
          </div>
          <div className='col col--4'>
            <h1>Platformatic DB</h1>
            <p>
              Are you tired of creating Create-Read-Update-Delete (CRUD) APIs?
              Platformatic DB is a tool that allows you to create both OpenAPI
              and GraphQL schemas from your database, without having to write a single line of code.
              The key difference to similar tools is that Platformatic DB allows you to customize
              it via <a href='https://nodejs.org'>Node.js</a> and <a href='https://www.fastify.io'>Fastify</a> plugins,
              because it's based on Platformatic Service.
            </p>
            <p>
              Check out the basic Platformatic DB features:
            </p>
            <ul>
              <li>Automatic OpenAPI/REST API generation from the SQL schema</li>
              <li>Automatic GraphQL API generation from the SQL schema</li>
              <li>Multiple databases: SQLite, MySQL, MariaDB, PostgreSQL</li>
              <li>Multiple authentication methods: JWT, WebHook, HTTP Headers</li>
              <li>Authorization via role based access control (RBAC)</li>
              <li>Type-safety via generated types for improved database interactions</li>
            </ul>
          </div>
        </div>
        <div className='row margin-top--lg'>
          <div className='col col--4'>
            <h1>Platformatic Composer</h1>
            <p>
              Want to automatically compose microservices into one ecosystem with a single public API?
              Platformatic Composer is a new way to develop aggregated APIs, starting with OpenAPI composition
              across multiple API sources.
            </p>
            <p>
              Check out the Platformatic Composer features:
            </p>
            <ul>
              <li>OpenAPI composition</li>
              <li>Resolve conflicts between different endpoints</li>
              <li>Automatic schema refresh</li>
              <li>Customizable via Node.js and <a href='https://www.fastify.io/'>Fastify</a> plugins</li>
              <li>Automatic TypeScript compilation</li>
            </ul>
          </div>
          <div className='col col--7'>
            <img src='/img/images/Platformatic_Composer_Diagram_(Light_Mode).png' alt='Platformatic Composer Architecture' className={styles.light} />
            <img src='/img/images/img-dark/Platformatic_Composer_Diagram_(Dark_Mode).png' alt='Platformatic Composer Architecture' className={styles.dark} />
          </div>
        </div>
        <div className='row margin-top--lg'>
          <div className='col col--7'>
            <img src='/img/images/Platformatic_Runtime_Diagram_(Light_Mode).png' alt='Platformatic Runtime Architecture' className={styles.light} />
            <img src='/img/images/img-dark/Platformatic_Runtime_Diagram_(Dark_Mode).png' alt='Platformatic Runtime Architecture' className={styles.dark} />
          </div>
          <div className='col col--4 col--offset-1'>
            <h1>Platformatic Runtime</h1>
            <p>
              The Platformatic Runtime environment enables developers to leverage the perks
              of microservices with the deployment simplicity of a monolith.
              It consolidates all your Node.js applications into a single Node.js process,
              simplifying the development & execution of microservices.
            </p>
            <p>
              Check out the Platformatic Runtime features:
            </p>
            <ul>
              <li>Hot Module Reloading</li>
              <li>In-process routing using <code>fetch()</code> or <a href=''>Platformatic Client</a></li>
              <li>Monorepo support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
