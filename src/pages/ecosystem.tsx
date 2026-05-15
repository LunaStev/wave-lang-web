import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

import SectionPage from '@site/src/components/SectionPage';

const t = (id: string, message: string) => translate({id, message});

export default function EcosystemPage(): JSX.Element {
  return (
    <Layout
      title={t('ecosystem.meta.title', 'Wave Ecosystem')}
      description={t(
        'ecosystem.meta.description',
        'Explore the surrounding Wave ecosystem including Vex, Whale, WSON, and the standard library.',
      )}>
      <SectionPage
        eyebrow={t('ecosystem.hero.eyebrow', 'Ecosystem')}
        title={t('ecosystem.hero.title', 'Wave is a language project with a full surrounding stack.')}
        lead={t(
          'ecosystem.hero.lead',
          'The ecosystem page should explain how the pieces fit together instead of scattering them across docs and external links.',
        )}
        actions={[
          {label: t('ecosystem.hero.primary', 'Read ecosystem docs'), to: '/docs/ecosystem/intro'},
          {label: t('ecosystem.hero.secondary', 'View source'), href: 'https://github.com/wavefnd/Wave', variant: 'secondary'},
        ]}
        asideTitle={t('ecosystem.aside.title', 'Core pieces')}
        asideBody={t(
          'ecosystem.aside.body',
          'Wave is the language, Whale is the compiler toolchain direction, Vex is package tooling, WSON is the data format, and std provides the library surface.',
        )}
        sections={[
          {
            kicker: t('ecosystem.stack.kicker', 'Stack'),
            title: t('ecosystem.stack.title', 'The official stack around the language.'),
            cards: [
              {
                badge: 'Vex',
                title: t('ecosystem.stack.vex.title', 'Vex'),
                description: t(
                  'ecosystem.stack.vex.description',
                  'Package and workflow tooling for building, distributing, and managing Wave projects.',
                ),
                to: '/docs/ecosystem/vex',
              },
              {
                badge: 'Whale',
                title: t('ecosystem.stack.whale.title', 'Whale'),
                description: t(
                  'ecosystem.stack.whale.description',
                  'Compiler and backend direction that the roadmap is built around.',
                ),
                to: '/docs/ecosystem/whale',
              },
              {
                badge: 'WSON',
                title: t('ecosystem.stack.wson.title', 'WSON'),
                description: t(
                  'ecosystem.stack.wson.description',
                  'Wave-oriented data serialization and configuration format.',
                ),
                to: '/docs/wson/intro',
              },
            ],
          },
          {
            kicker: t('ecosystem.std.kicker', 'Library'),
            title: t('ecosystem.std.title', 'The standard library is part of the product story.'),
            cards: [
              {
                title: t('ecosystem.std.env.title', 'System-facing modules'),
                description: t(
                  'ecosystem.std.env.description',
                  'Path, env, sys, net, and time modules shape how real programs are written.',
                ),
                to: '/docs/std/intro',
              },
              {
                title: t('ecosystem.std.program.title', 'Program structure'),
                description: t(
                  'ecosystem.std.program.description',
                  'The program docs show how applications are organized beyond isolated syntax examples.',
                ),
                to: '/docs/program/intro',
              },
              {
                title: t('ecosystem.std.roadmap.title', 'Roadmap fit'),
                description: t(
                  'ecosystem.std.roadmap.description',
                  'The roadmap connects the language, backend, library growth, and tooling into one plan.',
                ),
                to: '/docs/intro/roadmap',
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}
