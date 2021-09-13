import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '分享',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        分享文档工程、技术翻译、软件汉化等基本工具的应用。
      </>
    ),
  },
  {
    title: '实操',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        拒绝纸上谈兵。快速上手的唯一办法：Get our hands dirty！
      </>
    ),
  },
  {
    title: '反馈',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        欢迎感兴趣的小伙伴加入讨论、修订，丰富这个课程。
      </>
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
