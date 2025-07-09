import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

// --- 섹션 1: 새로운 Hero 섹션 (인터랙티브 코드 예제 포함) ---
function InteractiveHero() {
    const [activeTab, setActiveTab] = useState('hello');

    const codeExamples = {
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
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className={styles.heroTitle}>
                    <Translate id="homepage.hero.title">A Modern Language for a New Wave of Developers</Translate>
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
                        {Object.keys(codeExamples).map(key => (
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
        </header>
    );
}


// --- 섹션 2: Why Wave? (핵심 장점) ---
const WhyWaveSection = () => {
    const features = [
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
                    {features.map((feature, idx) => (
                        <div key={idx} className={styles.featureCard}>
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
    )
}

// --- 무한 스크롤 컴포넌트 ---
const InfiniteScroll = ({ children, direction = 'left', speed = 40 }) => (
    <div className={styles.scrollWrapper}>
        <div className={styles.scrollContent} style={{ '--scroll-speed': `${speed}s`, '--scroll-direction': direction === 'left' ? 'normal' : 'reverse' }}>
            <div className={styles.scrollGroup}>{children}</div>
            <div className={styles.scrollGroup} aria-hidden="true">{children}</div>
        </div>
    </div>
);

// --- 기여자 및 스폰서 섹션 ---
const CommunitySection = () => {
    // TODO: 이 데이터는 나중에 실제 데이터로 교체하세요.
    const contributors = [
        { name: "LunaStev", roleId: 'homepage.contributors.role.founder', avatar: 'https://avatars.githubusercontent.com/u/96914208?v=4', link: 'https://github.com/LunaStev' },
        { name: "Kuo, Mei-Chun", roleId: 'homepage.contributors.role.contributor', avatar: 'https://avatars.githubusercontent.com/u/94007620?v=4', link: 'https://github.com/Megan0704-1' },
        // 예시: { name: "github_username", roleId: 'homepage.contributors.role.compiler', avatar: 'https://github.com/github_username.png' }
    ];
    const sponsors = [
        { name: "heymanbug", tierId: 'homepage.sponsors.tier.honor', link: 'https://github.com/heymanbug' },
        // 예시: { name: "SponsorName", tierId: 'homepage.sponsors.tier.platinum', link: '#' },
    ];

    return (
        <section className={styles.communitySection}>
            <div className="container">
                <div className={styles.communityContainer}>
                    <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                        <Translate id="homepage.contributors.title" />
                    </Heading>
                    <InfiniteScroll direction="right" speed={50}>
                        {contributors.map((c, idx) => (
                            <a href={`https://github.com/${c.name}`} target="_blank" rel="noopener noreferrer" key={idx} className={styles.contributorCard}>
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
                        {sponsors.map((sponsor, idx) => (
                            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={idx} className={styles.sponsorCard}>
                                <h3>{sponsor.name}</h3>
                                <p><Translate id={sponsor.tierId} /></p>
                            </a>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        </section>
    );
};

// --- 최종 렌더링 컴포넌트 ---
export default function HomepageFeatures() {
    return (
        <>
            <InteractiveHero />
            <WhyWaveSection />
            <CommunitySection />
        </>
    );
}