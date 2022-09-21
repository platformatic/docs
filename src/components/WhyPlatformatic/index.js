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
          <div className="col col--6 {styles.why}">
            <h2>Why Platformatic?</h2>
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
            </p> 
          </div>
          <div className="col col--6">
            <div className={styles.why} > 
              <iframe src="https://www.loom.com/embed/6a1715285d3d4479841240beaf175275" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--6">
            <img src="/img/platformatic-db-architecture.png" alt="Platformatic DB Architecture" />
          </div>
          <div className="col col--6">  
            <h2>Our first tool: Plaformatic DB</h2>
            <p>
              The first friction we are solving is the tiresome mapping of databases table to APIs that
              burden any developer. Platformatic DB is a tool that will allow you to create both OpenAPI
              and GraphQL schemas from your database, without having to write a single line of code.
              The key difference with other tools is that Platformatic DB will allow you to customize
              it via <a href="https://nodejs.org">Node.js</a> and
              <a href="https://www.fastify.io">Fastify</a> plugins.
            </p>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className={styles.features} class="col col--6">
            <h2>Platformatic DB basic features</h2>
            <ul>
              <li>Automatic OpenAPI/REST API generation</li>
              <li>Automatic GraphQL API generation</li>
              <li>Multiple databases: SQLite, MySQL, MariaDB, PostgreSQL</li>
              <li>Multiple authentication methods: JWT, WebHook, HTTP Headers</li>
              <li>Authorization via role based access control</li>
              <li>Customizable via Node.js and Fastify plugins</li>
            </ul>
          </div>
          <div class="col col--6">
            <div className={styles.video}>
              <iframe src="https://www.loom.com/embed/3a2052674be249ae95bb2b407cf0efac" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
