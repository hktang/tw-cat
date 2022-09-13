import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      message: 'Share',
      description: 'Heading for the features section. Please keep the translation short and sweet.',
    }),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        Share practical information on technical writing, doc engineering
        and computer-aided translation.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Tinker',
      description: 'Heading for the features section. Please keep the translation short and sweet.',
    }),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        Not just talk on paper. The only way to get started fast:
        get your hands dirty 🔧.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Feedback',
      description: 'Heading for the features section. Please keep the translation short and sweet.',
    }),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Join the discussion, revise and enrich this course.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
