import React, { useState, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

// --- 타입 정의 ---
interface CodeExample {
    title: string;
    code: string;
    output: string;
}

type CodeTabKey = 'hello' | 'variables' | 'functions';

interface FeatureItem {
    titleId: string;
    descriptionId: string;
    icon: string;
    code: string;
}

interface Contributor {
    name: string;
    roleId: string;
    avatar: string;
}

interface Sponsor {
    name: string;
    tierId: string;
    link: string;
}

interface InfiniteScrollProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
}

const AnimatedWave = () => (
    <div className={styles.waveContainer}>
        <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            style={{ width: '100%', height: '100%' }}
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(139, 92, 246,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(139, 92, 246,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(139, 92, 246,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(139, 92, 246,1)" />
            </g>
        </svg>
        {/* Docusaurus는 style jsx가 안 먹을 수 있으므로 일반 style 태그로 변경 */}
        <style>{`
      .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }
      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }
      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }
      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }
      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
      @keyframes move-forever {
        0% {
          transform: translate3d(-90px, 0, 0);
        }
        100% {
          transform: translate3d(85px, 0, 0);
        }
      }
    `}</style>
    </div>
);

// --- 섹션 1: InteractiveHero ---
function InteractiveHero(): JSX.Element {
    const [activeTab, setActiveTab] = useState<CodeTabKey>('hello');

    const codeExamples: Record<CodeTabKey, CodeExample> = {
        hello: {
            title: 'Hello, World',
            code: `fun main() {
  println("Hello, World!");
}`,
            output: 'Hello, World!',
        },
        variables: {
            title: 'Variables & Types',
            code: `fun main() {
  var name: str = "Wave";
  let year: i32 = 2024; // immutable

  println("Language: {}, Year: {}", name, year);
}`,
            output: 'Language: Wave, Year: 2024',
        },
        functions: {
            title: 'Functions',
            code: `fun greet(name: str) -> str {
  return "Hello, " + name;
}

fun main() {
  println(greet("Developer"));
}`,
            output: 'Hello, Developer',
        },
    };

    const { code, output } = codeExamples[activeTab];

    return (
        <header className={clsx(styles.heroBanner)}>
            <div className={clsx('container', styles.heroContent)}>
                <Heading as="h1" className={styles.heroTitle}>
                    <Translate id="homepage.hero.title">
                        A Modern Language for a New Wave of Developers
                    </Translate>
                </Heading>

                <p className={styles.heroSubtitle}>
                    <Translate id="homepage.hero.subtitle">
                        Intuitive syntax, powerful performance, and built-in safety. Wave is designed to make you productive and your applications robust.
                    </Translate>
                </p>

                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        <Translate id="read-the-docs">Read the Docs</Translate>
                    </Link>
                </div>

                <div className={styles.interactiveEditor}>
                    <div className={styles.editorTabs}>
                        {(Object.keys(codeExamples) as CodeTabKey[]).map((key) => (
                            <button
                                key={key}
                                className={clsx(styles.editorTab, { [styles.activeTab]: activeTab === key })}
                                onClick={() => setActiveTab(key)}
                            >
                                {codeExamples[key].title}
                            </button>
                        ))}
                    </div>
                    <div className={styles.editorContent}>
                        <div className={styles.codePane}>
                            <pre><code className="language-wave">{code}</code></pre>
                        </div>
                        <div className={styles.outputPane}>
                            <div className={styles.outputHeader}>OUTPUT</div>
                            <pre><code>{output}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatedWave />
        </header>
    );
}

// --- 섹션 2: Why Wave? ---
const WhyWaveSection: React.FC = () => {
    const features: FeatureItem[] = [
        {
            titleId: 'homepage.features.one.title',
            descriptionId: 'homepage.features.one.description',
            icon: '✨',
            code: `// Less boilerplate, more focus
http.get("/users/:id") { req, res =>
  let user = db.findUser(req.params.id);
  res.json(user);
};`
        },
        {
            titleId: 'homepage.features.two.title',
            descriptionId: 'homepage.features.two.description',
            icon: '🚀',
            code: `// Compile to native code
// Zero-cost abstractions
fun fib(n: i64) -> i64 {
  if (n <= 1) { return n; }
  return fib(n - 1) + fib(n - 2);
}`
        },
        {
            titleId: 'homepage.features.three.title',
            descriptionId: 'homepage.features.three.description',
            icon: '🛡️',
            code: `// No null pointer exceptions
var name: str? = fetchName();
// Compiler ensures safe access
println(name?.length() ?? 0);`
        },
    ];

    return (
        <section className={styles.whyWaveSection}>
            <div className="container">
                <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                    <Translate id="homepage.why_wave.title">Why Choose Wave?</Translate>
                </Heading>
                <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                        <div key={feature.titleId} className={styles.featureCard}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <Heading as="h3"><Translate id={feature.titleId} /></Heading>
                            <p><Translate id={feature.descriptionId} /></p>
                            <div className={styles.featureCode}>
                                <pre><code className="language-wave">{feature.code}</code></pre>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- InfiniteScroll ---
const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ children, direction = 'left', speed = 40 }) => {
    const styleVars: CSSProperties & { [key: string]: string } = {
        '--scroll-speed': `${speed}s`,
        '--scroll-direction': direction === 'left' ? 'normal' : 'reverse',
    };

    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.scrollContent} style={styleVars}>
                <div className={styles.scrollGroup}>{children}</div>
                <div className={styles.scrollGroup} aria-hidden="true">{children}</div>
            </div>
        </div>
    );
};

// --- CommunitySection ---
const CommunitySection: React.FC = () => {
    const contributors: Contributor[] = [
        { name: "LunaStev", roleId: 'homepage.contributors.role.founder', avatar: 'https://avatars.githubusercontent.com/u/96914208?v=4' },
        { name: "Megan0704-1", roleId: 'homepage.contributors.role.contributor', avatar: 'https://avatars.githubusercontent.com/u/94007620?v=4' },
    ];
    const sponsors: Sponsor[] = [
        { name: "heymanbug", tierId: 'homepage.sponsors.tier.honor', link: 'https://github.com/heymanbug' },
    ];

    return (
        <section className={styles.communitySection}>
            <div className="container">
                <div className={styles.communityContainer}>
                    <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                        <Translate id="homepage.contributors.title" />
                    </Heading>
                    <InfiniteScroll direction="right" speed={50}>
                        {contributors.map((c) => (
                            <a
                                href={`https://github.com/${c.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={c.name}
                                className={styles.contributorCard}
                            >
                                <img src={c.avatar} alt={c.name} />
                                <div>
                                    <h3>{c.name}</h3>
                                    <p><Translate id={c.roleId} /></p>
                                </div>
                            </a>
                        ))}
                    </InfiniteScroll>
                </div>

                <div className={styles.communityContainer}>
                    <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                        <Translate id="homepage.sponsors.title" />
                    </Heading>
                    <InfiniteScroll>
                        {sponsors.map((sponsor) => (
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={sponsor.name}
                                className={styles.sponsorCard}
                            >
                                <h3>{sponsor.name}</h3>
                                <p><Translate id={sponsor.tierId} /></p>
                            </a>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>

            <div className={clsx(styles.communityContainer, styles.translateSection)}>
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="homepage.translations.title">Help Translate Wave</Translate>
                </Heading>
                <p>
                    <Translate id="homepage.translations.subtitle">
                        Make Wave accessible to developers worldwide by contributing translations.
                    </Translate>
                </p>
                <a
                    href="https://crowdin.com/project/wave-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.translateButton}
                >
                    🌐 <Translate id="homepage.translations.button">Contribute on Crowdin</Translate>
                </a>
            </div>
        </section>
    );
};

// --- 최종 렌더링 컴포넌트 ---
const HomepageFeatures: React.FC = () => {
    return (
        <>
            <InteractiveHero />
            <WhyWaveSection />
            <CommunitySection />
        </>
    );
};

export default HomepageFeatures;
