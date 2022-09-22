import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const quotesData = [{
  name: "James Snell",
  title: "Node.js Technical Steering Committee",
  quote: "Platformatic DB is a great example of how to build a great developer experience on top of a database.",
  avatar: "https://avatars.githubusercontent.com/u/439929?s=460&v=4"
  /*
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
  */
}, {
  name: "Jan Lehnardt",
  title: "Makes @couchdb & #offlinefirst. Made @jsconfeu @greenkeeperio @hoodiehq. CEO at @neighbourh00die.",
  quote: "I always wondered why building APIs isn't that easy.",
  avatar: "https://avatars.githubusercontent.com/u/11321?s=460&v=4"
}, {
  name: "David Mark Clements",
  title: "Dave at Holepunch. Tech lead/primary author of OpenJS Foundation JSNAD & JSNSD Certifications. (Original) Author of Node Cookbook.",
  quote: "A platform that simplifies and streamlines developer collaboration within an organization can revolutionise the organization itself. This is digital transformation distilled to its purest and easiest form.",
  avatar: "https://avatars.githubusercontent.com/u/1190716?s=460&v=4"
}]

function Quotes() {
  return (
    <section className={styles.section__quotes}>
      <div class="container container__quotes">
        <div class="row">
          <div class="col col--12">
            <h1>Quotes</h1>
          </div>
          <div className={styles.quotes}>
            {quotesData.map((quote, index) => ( 
            <div className={styles.quote}>
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
        <div class="row padding--lg">
          <div class="col col--12 padding--lg">
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
