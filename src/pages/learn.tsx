import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

import SectionPage from '@site/src/components/SectionPage';

const t = (id: string, message: string) => translate({id, message});

export default function LearnPage(): JSX.Element {
  return (
    <Layout
      title={t('learn.meta.title', 'Learn Wave')}
      description={t(
        'learn.meta.description',
        'Follow the official Wave learning path from installation through syntax, standard library, and project structure.',
      )}>
      <SectionPage
        eyebrow={t('learn.hero.eyebrow', 'Learn')}
        title={t('learn.hero.title', 'A guided path into the Wave language.')}
        lead={t(
          'learn.hero.lead',
          'This section is for onboarding, not raw reference. It points new users through installation, basic syntax, language concepts, and the parts of the docs that matter first.',
        )}
        actions={[
          {label: t('learn.hero.primary', 'Install Wave'), to: '/docs/intro/installation'},
          {label: t('learn.hero.secondary', 'Open docs'), to: '/docs/intro/', variant: 'secondary'},
        ]}
        asideTitle={t('learn.aside.title', 'Start here')}
        asideBody={t(
          'learn.aside.body',
          'The shortest path is install, run a file, learn syntax, then move into std and project structure.',
        )}
        asideCode={`curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
wavec run examples/hello.wave`}
        sections={[
          {
            kicker: t('learn.path.kicker', 'Path'),
            title: t('learn.path.title', 'Move from first install to practical fluency.'),
            lead: t(
              'learn.path.lead',
              'The learning route mirrors the actual documentation hierarchy, but it is ordered for momentum instead of exhaustiveness.',
            ),
            cards: [
              {
                badge: '01',
                title: t('learn.path.install.title', 'Install and run'),
                description: t(
                  'learn.path.install.description',
                  'Set up the compiler, verify the toolchain, and run a first source file.',
                ),
                to: '/docs/intro/installation',
              },
              {
                badge: '02',
                title: t('learn.path.syntax.title', 'Understand syntax'),
                description: t(
                  'learn.path.syntax.description',
                  'Learn variables, functions, control flow, generics, pointers, and storage rules.',
                ),
                to: '/docs/syntax/intro',
              },
              {
                badge: '03',
                title: t('learn.path.projects.title', 'Build real programs'),
                description: t(
                  'learn.path.projects.description',
                  'Move into program structure, CLI usage, and the standard library surface area.',
                ),
                to: '/docs/program/intro',
              },
            ],
          },
          {
            kicker: t('learn.areas.kicker', 'Study areas'),
            title: t('learn.areas.title', 'The main concepts are already in the docs.'),
            cards: [
              {
                title: t('learn.areas.cli.title', 'CLI and toolchain'),
                description: t(
                  'learn.areas.cli.description',
                  'Compiler commands, backend options, diagnostics, and debugging modes.',
                ),
                to: '/docs/intro/cli',
              },
              {
                title: t('learn.areas.std.title', 'Standard library'),
                description: t(
                  'learn.areas.std.description',
                  'Core modules covering env, string, path, memory, system, and networking.',
                ),
                to: '/docs/std/intro',
              },
              {
                title: t('learn.areas.wson.title', 'WSON'),
                description: t(
                  'learn.areas.wson.description',
                  'Learn the project data format alongside the language ecosystem.',
                ),
                to: '/docs/wson/intro',
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}
