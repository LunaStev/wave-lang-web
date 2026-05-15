import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type CodeTabKey = 'hello' | 'server' | 'inspect';

type CodeExample = {
  label: string;
  title: string;
  summary: string;
  code: string;
  output: string;
};

type CommandItem = {
  label: string;
  command: string;
  detail: string;
};

type RouteItem = {
  title: string;
  description: string;
  to: string;
  badge: string;
};

type Principle = {
  title: string;
  detail: string;
};

type ReleaseItem = {
  title: string;
  detail: string;
};

const t = (id: string, message: string) => translate({id, message});

function CopyButton({command}: {command: string}): JSX.Element {
  const [copied, setCopied] = useState(false);

  function copyCommand() {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    navigator.clipboard
      .writeText(command)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      })
      .catch(() => undefined);
  }

  return (
    <button type="button" className={styles.copyButton} onClick={copyCommand}>
      {copied
        ? t('shared.copy.copied', 'Copied')
        : t('shared.copy.copy', 'Copy')}
    </button>
  );
}

function HeroSection(): JSX.Element {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true">
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />
      </div>

      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {t('home.hero.eyebrow', 'Official home of the Wave programming language')}
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              {t('home.hero.title', 'One language for systems, tooling, and the stack around it.')}
            </Heading>
            <p className={styles.heroLead}>
              {t(
                'home.hero.lead',
                'Wave is building a unified language ecosystem around explicit behavior, native output, inspectable compiler stages, and a standard library that scales from CLI tools to low-level systems work.',
              )}
            </p>

            <div className={styles.heroActions}>
              <Link className={clsx('button', styles.primaryAction)} to="/docs/intro/">
                {t('home.hero.primary', 'Read the docs')}
              </Link>
              <Link className={clsx('button', styles.secondaryAction)} to="/learn">
                {t('home.hero.secondary', 'Start learning')}
              </Link>
            </div>

            <dl className={styles.heroFacts}>
              <div>
                <dt>{t('home.hero.fact.philosophy.label', 'Philosophy')}</dt>
                <dd>{t('home.hero.fact.philosophy.value', 'Explicit behavior over hidden magic')}</dd>
              </div>
              <div>
                <dt>{t('home.hero.fact.targets.label', 'Focus')}</dt>
                <dd>{t('home.hero.fact.targets.value', 'Compiler, std, package tooling, data format')}</dd>
              </div>
              <div>
                <dt>{t('home.hero.fact.status.label', 'Status')}</dt>
                <dd>{t('home.hero.fact.status.value', 'Active design and compiler work')}</dd>
              </div>
            </dl>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.terminalHeader}>
              <span />
              <span />
              <span />
            </div>
            <pre className={styles.terminal}>
              <code>{`$ curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
$ wavec run hello.wave
Hello, Wave

$ wavec build kernel.wave --debug-wave=tokens,ast,ir
[tokens] ok
[ast] ok
[ir] ok
[codegen] native binary ready`}</code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickStartSection(): JSX.Element {
  const commands: CommandItem[] = [
    {
      label: t('home.quickstart.install.label', 'Install'),
      command: 'curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest',
      detail: t(
        'home.quickstart.install.detail',
        'Install the latest published compiler quickly on supported Unix-like systems.',
      ),
    },
    {
      label: t('home.quickstart.run.label', 'Run'),
      command: 'wavec run examples/hello.wave',
      detail: t(
        'home.quickstart.run.detail',
        'Compile and execute a Wave source file from the command line.',
      ),
    },
    {
      label: t('home.quickstart.inspect.label', 'Inspect'),
      command: 'wavec build app.wave --debug-wave=tokens,ast,ir',
      detail: t(
        'home.quickstart.inspect.detail',
        'Inspect compiler stages while developing the language or debugging behavior.',
      ),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.twoColumn)}>
        <div className={styles.sectionCopy}>
          <p className={styles.sectionKicker}>{t('home.quickstart.kicker', 'Installation')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.quickstart.title', 'Install fast, then move directly into code.')}
          </Heading>
          <p className={styles.sectionLead}>
            {t(
              'home.quickstart.lead',
              'The official site should answer the first practical question immediately: how to get Wave, how to run it, and how to inspect what the compiler is doing.',
            )}
          </p>
        </div>

        <div className={styles.commandStack}>
          {commands.map((item) => (
            <article className={styles.commandRow} key={item.label}>
              <div className={styles.commandMeta}>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
              <pre className={styles.commandLine}>
                <code>{item.command}</code>
              </pre>
              <CopyButton command={item.command} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleSection(): JSX.Element {
  const examples: Record<CodeTabKey, CodeExample> = {
    hello: {
      label: t('home.examples.hello.label', 'Hello'),
      title: t('home.examples.hello.title', 'Small entry point'),
      summary: t(
        'home.examples.hello.summary',
        'Wave keeps the entry point explicit and the source readable without hiding the mechanics.',
      ),
      code: `fun main() {
    println("Hello, Wave");
}`,
      output: 'Hello, Wave',
    },
    server: {
      label: t('home.examples.server.label', 'Flow'),
      title: t('home.examples.server.title', 'Typed control flow'),
      summary: t(
        'home.examples.server.summary',
        'Basic branching and loops stay direct, with little syntax between the programmer and the behavior.',
      ),
      code: `fun main() {
    var retries: i32 = 3;

    while (retries > 0) {
        println("retry {}", retries);
        retries -= 1;
    }
}`,
      output: 'retry 3',
    },
    inspect: {
      label: t('home.examples.inspect.label', 'Inspect'),
      title: t('home.examples.inspect.title', 'Compiler visibility'),
      summary: t(
        'home.examples.inspect.summary',
        'The toolchain is designed to expose tokens, AST, IR, and native output instead of obscuring them.',
      ),
      code: `fun add(a: i32, b: i32): i32 {
    return a + b;
}

fun main() {
    var sum: i32 = add(20, 22);
    println("{}", sum);
}`,
      output: '42',
    },
  };

  const [activeTab, setActiveTab] = useState<CodeTabKey>('hello');
  const tabKeys = Object.keys(examples) as CodeTabKey[];
  const activeExample = examples[activeTab];

  return (
    <section className={clsx(styles.section, styles.bandSection)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t('home.examples.kicker', 'Example')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.examples.title', 'Show the language, not a generic landing page.')}
          </Heading>
        </div>

        <div className={styles.editorShell}>
          <div className={styles.editorSidebar}>
            {tabKeys.map((key) => (
              <button
                type="button"
                key={key}
                className={clsx(styles.editorTab, activeTab === key && styles.editorTabActive)}
                onClick={() => setActiveTab(key)}>
                <span>{examples[key].label}</span>
                <strong>{examples[key].title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.editorPanel}>
            <div className={styles.editorHeader}>
              <div>
                <span className={styles.windowDot} />
                <span className={styles.windowDot} />
                <span className={styles.windowDot} />
              </div>
              <span>examples/{activeTab}.wave</span>
            </div>

            <div className={styles.editorBody}>
              <pre>
                <code>{activeExample.code}</code>
              </pre>
              <aside>
                <p>{activeExample.summary}</p>
                <div className={styles.outputBox}>
                  <span>{t('home.examples.output', 'Output')}</span>
                  <code>{activeExample.output}</code>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteSection(): JSX.Element {
  const routes: RouteItem[] = [
    {
      title: t('home.routes.docs.title', 'Docs'),
      description: t(
        'home.routes.docs.description',
        'Language reference, compiler options, standard library, WSON, and ecosystem documents.',
      ),
      to: '/docs/intro/',
      badge: '/docs',
    },
    {
      title: t('home.routes.learn.title', 'Learn'),
      description: t(
        'home.routes.learn.description',
        'A guided path from installation to syntax, project structure, and practical next steps.',
      ),
      to: '/learn',
      badge: '/learn',
    },
    {
      title: t('home.routes.ecosystem.title', 'Ecosystem'),
      description: t(
        'home.routes.ecosystem.description',
        'The surrounding Wave stack: Vex, Whale, WSON, and the standard library direction.',
      ),
      to: '/ecosystem',
      badge: '/ecosystem',
    },
    {
      title: t('home.routes.releases.title', 'Releases'),
      description: t(
        'home.routes.releases.description',
        'Release channels, installation targets, roadmap links, and published release notes.',
      ),
      to: '/releases',
      badge: '/releases',
    },
    {
      title: t('home.routes.community.title', 'Community'),
      description: t(
        'home.routes.community.description',
        'Discord, GitHub, translation participation, and contribution guidance for the project.',
      ),
      to: '/community',
      badge: '/community',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t('home.routes.kicker', 'Structure')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.routes.title', 'The site now reflects the actual project map.')}
          </Heading>
        </div>

        <div className={styles.routeGrid}>
          {routes.map((route) => (
            <Link key={route.to} className={styles.routeCard} to={route.to}>
              <span>{route.badge}</span>
              <Heading as="h3">{route.title}</Heading>
              <p>{route.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection(): JSX.Element {
  const principles: Principle[] = [
    {
      title: t('home.principles.one.title', 'One language, many domains'),
      detail: t(
        'home.principles.one.detail',
        'Wave aims to cover systems work, tooling, networking, hardware-facing code, and more without forcing the project into unrelated languages.',
      ),
    },
    {
      title: t('home.principles.two.title', 'Compiler behavior should stay visible'),
      detail: t(
        'home.principles.two.detail',
        'Inspection modes for tokens, AST, IR, machine code, and output keep the language honest about what it does.',
      ),
    },
    {
      title: t('home.principles.three.title', 'Libraries carry capability'),
      detail: t(
        'home.principles.three.detail',
        'The language keeps core behavior explicit while the ecosystem grows capability through std, Vex, Whale, and WSON.',
      ),
    },
  ];

  return (
    <section className={clsx(styles.section, styles.surfaceSection)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>{t('home.principles.kicker', 'Philosophy')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.principles.title', 'The project philosophy belongs on the front page.')}
          </Heading>
        </div>

        <div className={styles.principleGrid}>
          {principles.map((principle) => (
            <article className={styles.principleCard} key={principle.title}>
              <Heading as="h3">{principle.title}</Heading>
              <p>{principle.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReleaseSection(): JSX.Element {
  const releases: ReleaseItem[] = [
    {
      title: t('home.release.roadmap.title', 'Roadmap'),
      detail: t(
        'home.release.roadmap.detail',
        'Follow the staged path from pre-beta through release candidate in the project roadmap.',
      ),
    },
    {
      title: t('home.release.notes.title', 'Published releases'),
      detail: t(
        'home.release.notes.detail',
        'Release notes live on GitHub so the official site can point clearly to what has shipped.',
      ),
    },
    {
      title: t('home.release.channels.title', 'Install targets'),
      detail: t(
        'home.release.channels.detail',
        'The install script supports the latest channel and explicit version pinning for reproducible setups.',
      ),
    },
  ];

  return (
    <section className={clsx(styles.section, styles.releaseSection)}>
      <div className={clsx('container', styles.twoColumn)}>
        <div className={styles.sectionCopy}>
          <p className={styles.sectionKicker}>{t('home.release.kicker', 'Roadmap and releases')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.release.title', 'Keep progress, release notes, and roadmap in one visible place.')}
          </Heading>
          <p className={styles.sectionLead}>
            {t(
              'home.release.lead',
              'The home page should not bury project status. It should point directly to what Wave is building next and what users can install today.',
            )}
          </p>

          <div className={styles.heroActions}>
            <Link className={clsx('button', styles.primaryAction)} to="/releases">
              {t('home.release.primary', 'View releases')}
            </Link>
            <Link className={clsx('button', styles.secondaryAction)} to="/docs/intro/roadmap">
              {t('home.release.secondary', 'Read roadmap')}
            </Link>
          </div>
        </div>

        <div className={styles.releaseList}>
          {releases.map((item) => (
            <article className={styles.releaseCard} key={item.title}>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TranslationSection(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.translationSection)}>
      <div className={clsx('container', styles.translationShell)}>
        <div className={styles.sectionCopy}>
          <p className={styles.sectionKicker}>{t('home.translation.kicker', 'Translation')}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {t('home.translation.title', 'Help make Wave readable in more languages.')}
          </Heading>
          <p className={styles.sectionLead}>
            {t(
              'home.translation.lead',
              'Wave already has multi-language structure in the site. Crowdin should be part of the official front door so contributors can help keep the website and docs current across languages.',
            )}
          </p>
        </div>

        <div className={styles.translationCard}>
          <Heading as="h3">{t('home.translation.card.title', 'Translate on Crowdin')}</Heading>
          <p>
            {t(
              'home.translation.card.body',
              'Join translation work for the website and documentation, improve outdated pages, and help the language project feel native to more communities.',
            )}
          </p>
          <div className={styles.heroActions}>
            <Link
              className={clsx('button', styles.primaryAction)}
              href="https://crowdin.com/project/wave-website">
              {t('home.translation.primary', 'Open Crowdin')}
            </Link>
            <Link className={clsx('button', styles.secondaryAction)} to="/community">
              {t('home.translation.secondary', 'See community guide')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <HeroSection />
      <QuickStartSection />
      <ExampleSection />
      <RouteSection />
      <PhilosophySection />
      <ReleaseSection />
      <TranslationSection />
    </>
  );
}
