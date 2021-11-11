import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Hypersonic Syndicate bridge',
    Svg: require('../../static/img/sonic.svg').default,
    description: (
      <>
        SAO bridge used to process cross-EVM/OLVM transactions superious fast
        without waiting so much time, syndicate security and less fees
      </>
    ),
  },
  {
    title: 'Powered by OLVM',
    Svg: require('../../static/img/grand-master-key.svg').default,
    description: (
      <>
        OLVM used in order to support smart contracts transactions with tendermint layer
        to make it cheap and rapid
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
