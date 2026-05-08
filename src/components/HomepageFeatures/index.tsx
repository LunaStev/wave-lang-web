import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type CodeTabKey = 'hello' | 'control' | 'raycaster';

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

type PlatformTier = {
  tier: string;
  title: string;
  platforms: string;
  detail: string;
};

const codeExamples: Record<CodeTabKey, CodeExample> = {
  hello: {
    label: 'Hello',
    title: 'A small entry point',
    summary:
      'Wave keeps the program entry explicit and leaves functionality to the standard library.',
    code: `fun main() {
    println("Hello World");
}`,
    output: 'Hello World',
  },
  control: {
    label: 'Control',
    title: 'Typed flow without ceremony',
    summary:
      'Variables, conditionals, loops, and functions use direct syntax that stays close to the machine model.',
    code: `fun greet(name: str) {
    println("Hello, {}!", name);
}

fun main() {
    var x: i32 = 5;
    var y: i32 = 10;

    if (x < y) {
        greet("Wave");
    }
}`,
    output: 'Hello, Wave!',
  },
  raycaster: {
    label: 'Systems',
    title: 'Low-level code stays visible',
    summary:
      'The compiler is being built for explicit runtime behavior, platform APIs, and native execution.',
    code: `import("std::sys::linux::tty");
import("std::time::clock");

const SCREEN_W: i32 = 120;
const SCREEN_H: i32 = 40;

fun main() {
    var player_x: f64 = 8.0;
    var player_y: f64 = 8.0;
    var running: bool = true;

    while (running) {
        var now_ns: i64 = time_now_monotonic_ns();
        println("frame: {}", now_ns);
    }
}`,
    output: 'frame: 1837469122',
  },
};

const commands: CommandItem[] = [
  {
    label: 'Install',
    command: 'curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest',
    detail: 'Get the latest compiler release on supported Unix-like systems.',
  },
  {
    label: 'Run',
    command: 'wavec run examples/hello.wave',
    detail: 'Compile and execute a Wave source file from the CLI.',
  },
  {
    label: 'Build',
    command: 'wavec build app.wave -o app',
    detail: 'Emit a native binary when you are ready to ship or inspect output.',
  },
  {
    label: 'Debug',
    command: 'wavec build app.wave --debug-wave=tokens,ast,ir',
    detail: 'Inspect compiler stages while working on language behavior.',
  },
];

const platformTiers: PlatformTier[] = [
  {
    tier: 'Tier 1',
    title: 'Primary',
    platforms: 'Linux, Darwin, WaveOS',
    detail: 'Full standard library support, required CI coverage, and release-blocking status.',
  },
  {
    tier: 'Tier 2',
    title: 'Secondary',
    platforms: 'FreeBSD, Redox, Fuchsia',
    detail: 'Maintained build support with partial standard library coverage.',
  },
  {
    tier: 'Tier 3',
    title: 'Experimental',
    platforms: 'OpenBSD',
    detail: 'Compiler build and compile path prioritized while platform coverage grows.',
  },
  {
    tier: 'Tier 4',
    title: 'Unofficial',
    platforms: 'Windows',
    detail: 'Community-maintained status without official standard library target guarantees.',
  },
];

const principles = [
  {
    title: 'No builtin functions',
    detail:
      'The compiler stays small and explicit; higher-level functionality belongs in libraries.',
  },
  {
    title: 'No implicit runtime',
    detail:
      'Wave favors visible behavior and predictable native output over hidden language machinery.',
  },
  {
    title: 'Compiler-first architecture',
    detail:
      'Token, AST, IR, machine-code, and hex debugging modes keep internals inspectable.',
  },
];

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
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function HeroSection(): JSX.Element {
  const logo = useBaseUrl('/img/logo.png');

  return (
    <header className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          <img src={logo} alt="" className={styles.heroLogo} />
          <p className={styles.eyebrow}>Systems programming language</p>
          <Heading as="h1" className={styles.heroTitle}>
            Wave
          </Heading>
          <p className={styles.heroSubtitle}>
            Native systems programming with explicit behavior, standard-library
            driven capability, and compiler internals that stay inspectable.
          </p>

          <div className={styles.heroActions}>
            <Link className={clsx('button', styles.primaryAction)} to="/docs/intro/">
              Read Docs
            </Link>
            <Link
              className={clsx('button', styles.secondaryAction)}
              to="https://github.com/wavefnd/Wave/releases">
              Releases
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickStartSection(): JSX.Element {
  return (
    <section className={styles.quickStart}>
      <div className={clsx('container', styles.quickStartGrid)}>
        <div>
          <p className={styles.sectionKicker}>Quick start</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Install, run, inspect.
          </Heading>
          <p className={styles.sectionLead}>
            The website now reflects the compiler repository directly: a small
            toolchain, explicit CLI commands, and debugging flags for compiler
            development.
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

function CodeLabSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<CodeTabKey>('hello');
  const activeExample = codeExamples[activeTab];
  const tabKeys = useMemo(() => Object.keys(codeExamples) as CodeTabKey[], []);

  return (
    <section className={styles.codeLab}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Language surface</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Small syntax, visible systems intent.
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
                <span>{codeExamples[key].label}</span>
                <strong>{codeExamples[key].title}</strong>
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
                  <span>Output</span>
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

function PrinciplesSection(): JSX.Element {
  return (
    <section className={styles.principles}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Project philosophy</p>
          <Heading as="h2" className={styles.sectionTitle}>
            The compiler does less hidden work.
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

function PlatformSection(): JSX.Element {
  return (
    <section className={styles.platforms}>
      <div className={clsx('container', styles.platformGrid)}>
        <div>
          <p className={styles.sectionKicker}>Target policy</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Platform support is tiered on purpose.
          </Heading>
          <p className={styles.sectionLead}>
            Wave sets expectations for standard library coverage, CI, and
            release stability by target family.
          </p>
        </div>

        <div className={styles.tierList}>
          {platformTiers.map((tier) => (
            <article className={styles.tierRow} key={tier.tier}>
              <div>
                <span>{tier.tier}</span>
                <strong>{tier.title}</strong>
              </div>
              <p>{tier.platforms}</p>
              <small>{tier.detail}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection(): JSX.Element {
  return (
    <section className={styles.community}>
      <div className={clsx('container', styles.communityGrid)}>
        <div>
          <p className={styles.sectionKicker}>Contributing</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Built in public with signed-off changes.
          </Heading>
          <p className={styles.sectionLead}>
            Wave accepts GitHub pull requests and email patches. Contributions
            are expected to be focused, signed off, and verified against the
            compiler toolchain.
          </p>
        </div>

        <div className={styles.contributePanel}>
          <pre>
            <code>{`git checkout -b fix/parser-bug
git commit -s -m "Fix parser behavior"
git format-patch -1
git send-email --to wave-patches@lunastev.org *.patch`}</code>
          </pre>
          <div className={styles.communityActions}>
            <Link className={clsx('button', styles.primaryAction)} to="/docs/intro/">
              Start with Docs
            </Link>
            <Link
              className={clsx('button', styles.secondaryAction)}
              to="https://discord.gg/3nev5nHqq9">
              Join Discord
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
      <CodeLabSection />
      <PrinciplesSection />
      <PlatformSection />
      <CommunitySection />
    </>
  );
}
