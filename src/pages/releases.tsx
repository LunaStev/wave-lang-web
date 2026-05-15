import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

import SectionPage from '@site/src/components/SectionPage';

const t = (id: string, message: string) => translate({id, message});

export default function ReleasesPage(): JSX.Element {
  return (
    <Layout
      title={t('releases.meta.title', 'Wave Releases')}
      description={t(
        'releases.meta.description',
        'Track published releases, installation channels, and the roadmap that leads to future Wave milestones.',
      )}>
      <SectionPage
        eyebrow={t('releases.hero.eyebrow', 'Releases')}
        title={t('releases.hero.title', 'Published releases, install channels, and roadmap context.')}
        lead={t(
          'releases.hero.lead',
          'This page is the official release doorway: what users can install now, where release notes live, and how that relates to the longer development roadmap.',
        )}
        actions={[
          {label: t('releases.hero.primary', 'Open GitHub releases'), href: 'https://github.com/wavefnd/Wave/releases'},
          {label: t('releases.hero.secondary', 'Read roadmap'), to: '/docs/intro/roadmap', variant: 'secondary'},
        ]}
        asideTitle={t('releases.aside.title', 'Version install')}
        asideBody={t(
          'releases.aside.body',
          'Users should be able to install the latest compiler or pin a specific release version from here.',
        )}
        asideCode={`curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta`}
        sections={[
          {
            kicker: t('releases.current.kicker', 'Current flow'),
            title: t('releases.current.title', 'Where releases and progress live today.'),
            cards: [
              {
                badge: 'GitHub',
                title: t('releases.current.notes.title', 'Release notes'),
                description: t(
                  'releases.current.notes.description',
                  'Published versions, downloadable artifacts, and release summaries are managed on GitHub Releases.',
                ),
                href: 'https://github.com/wavefnd/Wave/releases',
              },
              {
                badge: 'Docs',
                title: t('releases.current.install.title', 'Installation guide'),
                description: t(
                  'releases.current.install.description',
                  'The install docs explain latest installs, specific version pinning, and uninstall flow.',
                ),
                to: '/docs/intro/installation',
              },
              {
                badge: 'Roadmap',
                title: t('releases.current.roadmap.title', 'Development stages'),
                description: t(
                  'releases.current.roadmap.description',
                  'The roadmap defines the path from pre-beta through release candidate and release.',
                ),
                to: '/docs/intro/roadmap',
              },
            ],
          },
          {
            kicker: t('releases.policy.kicker', 'Policy'),
            title: t('releases.policy.title', 'The release page should set expectations clearly.'),
            cards: [
              {
                title: t('releases.policy.latest.title', 'Latest channel'),
                description: t(
                  'releases.policy.latest.description',
                  'Use the install script with `latest` when you want the newest recommended release.',
                ),
              },
              {
                title: t('releases.policy.pin.title', 'Pinned versions'),
                description: t(
                  'releases.policy.pin.description',
                  'Use explicit version install flags when reproducing environments or comparing compiler behavior.',
                ),
              },
              {
                title: t('releases.policy.future.title', 'Future summary'),
                description: t(
                  'releases.policy.future.description',
                  'As the project matures, this page can expand into stable, prerelease, and nightly distinctions.',
                ),
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}
