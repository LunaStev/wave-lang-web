import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: (
        <>
        <Translate id="powerful-and-flexible">
          Powerful and Flexible
        </Translate>
        </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <Translate id="main-one">
        Wave is built to handle everything from low-level system programming to
        high-level applications, offering flexibility and performance in one unified
        language.
      </Translate>
      </>
    ),
  },
  {
    title: (
        <>
          <Translate id="focus-on-efficiency">
            Focus on Efficiency
          </Translate>
        </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <Translate id="main-two">
        With Wave, you can concentrate on solving complex problems directly, using
        a single language across diverse domains like web development, AI, and hardware.
      </Translate>
      </>
    ),
  },
  {
    title: (
        <>
          <Translate id="optimized-for-performance">
            Optimized for Performance
          </Translate>
        </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <Translate id="main-three">
        Wave allows you to write high-performance code that runs efficiently on any
        platform, without compromising on ease of use or safety.
      </Translate>
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
        <Heading as="h3">{title}</Heading>
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
