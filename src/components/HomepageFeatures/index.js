import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

function Feature({titleId, descriptionId}) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">
            <Translate id={titleId} />
          </Heading>
          <p>
            <Translate id={descriptionId} />
          </p>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  const features = [
    {
      titleId: 'homepage.features.one.title',
      descriptionId: 'homepage.features.one.description',
    },
    {
      titleId: 'homepage.features.two.title',
      descriptionId: 'homepage.features.two.description',
    },
    {
      titleId: 'homepage.features.three.title',
      descriptionId: 'homepage.features.three.description',
    },
  ];

  const codeExample = `fun main() {
  var a :i32 = 10;
  
  println("Hello World {}", a);
}`;

  const contributors = [
    {
      name: "LunaStev",
      roleId: 'homepage.contributors.role.founder'
    },
    {
      name: "LunaStev",
      roleId: 'homepage.contributors.role.founder'
    },
    {
      name: "LunaStev",
      roleId: 'homepage.contributors.role.founder'
    },
    {
      name: "LunaStev",
      roleId: 'homepage.contributors.role.founder'
    }
  ];

  const sponsors = [
    {
      name: "heymanbug",
      tierId: 'homepage.sponsors.tier.honor'
    },
    {
      name: "heymanbug",
      tierId: 'homepage.sponsors.tier.honor'
    },
    {
      name: "heymanbug",
      tierId: 'homepage.sponsors.tier.honor'
    },
    {
      name: "heymanbug",
      tierId: 'homepage.sponsors.tier.honor'
    }
  ];

  return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {features.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
          </div>

          <div className={styles.codeSection}>
            <Heading as="h2">
              <Translate id="homepage.code.title" />
            </Heading>
            <pre>
            <code className="language-wave">{codeExample}</code>
          </pre>
          </div>

          <div className={styles.communitySection}>
            <ContributorsSection contributors={contributors} />
            <SponsorsSection sponsors={sponsors} />
          </div>
        </div>
      </section>
  );
}

const InfiniteScroll = ({ children, direction = 'left', speed = 20 }) => {
  return (
      <div className={styles.scrollWrapper}>
        <div
            className={styles.scrollContent}
            style={{
              '--scroll-speed': `${speed}s`,
              '--scroll-direction': direction === 'left' ? 'normal' : 'reverse'
            }}
        >
          <div className={styles.scrollGroup}>{children}</div>
          <div className={styles.scrollGroup} aria-hidden>{children}</div>
        </div>
      </div>
  );
};

// 스폰서 섹션
const SponsorsSection = ({ sponsors }) => {
  return (
      <div className={styles.sponsorsSection}>
        <h2>
          <Translate id="homepage.sponsors.title" />
        </h2>
        <InfiniteScroll>
          {sponsors.map((sponsor, idx) => (
              <div key={idx} className={styles.sponsor}>
                <h3>{sponsor.name}</h3>
                <p>
                  <Translate id={sponsor.tierId} />
                </p>
              </div>
          ))}
        </InfiniteScroll>
      </div>
  );
};

// 기여자 섹션
const ContributorsSection = ({ contributors }) => {
  return (
      <div className={styles.contributorsSection}>
        <h2>
          <Translate id="homepage.contributors.title" />
        </h2>
        <InfiniteScroll direction="right" speed={25}>
          {contributors.map((contributor, idx) => (
              <div key={idx} className={styles.contributor}>
                <h3>{contributor.name}</h3>
                <p>
                  <Translate id={contributor.roleId} />
                </p>
              </div>
          ))}
        </InfiniteScroll>
      </div>
  );
};
