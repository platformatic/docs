import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/graphql-icon.svg').default,
    description: (
      <>
        Platformatic DB creates a GraphQL API from your database schema.
        It also support Apollo Federation.
        You can use the API to query and mutate data.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/openapi.svg').default,
    description: (
      <>
        Platformatic DB creates a REST API from your database schema.
        It generates an OpenAPI 3.0 specification, too.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/fastify-square.svg').default,
    description: (
      <>
        The roots of Platformatic DB are in the Fastify community.
        You can customize it with Fastify plugins.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
