import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

import SectionPage from '@site/src/components/SectionPage';

const t = (id: string, message: string) => translate({id, message});

export default function CommunityPage(): JSX.Element {
  return (
    <Layout
      title={t('community.meta.title', 'Wave Community')}
      description={t(
        'community.meta.description',
        'Join the Wave community through Discord, GitHub, translation work, and contribution guidance.',
      )}>
      <SectionPage
        eyebrow={t('community.hero.eyebrow', 'Community')}
        title={t('community.hero.title', 'Join discussion, track source, and contribute in public.')}
        lead={t(
          'community.hero.lead',
          'The community page should make participation obvious: where to talk, where to file issues, where to send code, and how to help with translations.',
        )}
        actions={[
          {label: t('community.hero.primary', 'Join Discord'), href: 'https://discord.gg/3nev5nHqq9'},
          {label: t('community.hero.secondary', 'Open GitHub'), href: 'https://github.com/wavefnd/Wave', variant: 'secondary'},
        ]}
        asideTitle={t('community.aside.title', 'Contribution path')}
        asideBody={t(
          'community.aside.body',
          'Start by reading docs, then discuss in Discord or open an issue, and finally send a focused pull request or translation contribution.',
        )}
        asideCode={`git checkout -b docs/improve-home
git commit -s -m "Refine website structure"
git push origin HEAD`}
        sections={[
          {
            kicker: t('community.links.kicker', 'Channels'),
            title: t('community.links.title', 'The main public channels for the project.'),
            cards: [
              {
                badge: 'Discord',
                title: t('community.links.discord.title', 'Real-time discussion'),
                description: t(
                  'community.links.discord.description',
                  'Use Discord for questions, progress updates, and community conversation.',
                ),
                href: 'https://discord.gg/3nev5nHqq9',
              },
              {
                badge: 'GitHub',
                title: t('community.links.github.title', 'Source and issues'),
                description: t(
                  'community.links.github.description',
                  'The repository is the source of truth for code, issues, and release artifacts.',
                ),
                href: 'https://github.com/wavefnd/Wave',
              },
              {
                badge: 'Crowdin',
                title: t('community.links.crowdin.title', 'Translations'),
                description: t(
                  'community.links.crowdin.description',
                  'Help localize the site and docs so the language project reaches more developers.',
                ),
                href: 'https://crowdin.com/project/wave-website',
              },
            ],
          },
          {
            kicker: t('community.guide.kicker', 'Contributing'),
            title: t('community.guide.title', 'The page should show what contribution looks like.'),
            cards: [
              {
                title: t('community.guide.docs.title', 'Read the docs first'),
                description: t(
                  'community.guide.docs.description',
                  'Use the official docs and roadmap to align contributions with the current direction.',
                ),
                to: '/docs/intro/',
              },
              {
                title: t('community.guide.issues.title', 'Discuss and open issues'),
                description: t(
                  'community.guide.issues.description',
                  'Clarify bugs, missing docs, or roadmap questions in public before large changes.',
                ),
                href: 'https://github.com/wavefnd/Wave/issues',
              },
              {
                title: t('community.guide.prs.title', 'Send focused changes'),
                description: t(
                  'community.guide.prs.description',
                  'Small, clear pull requests and translation contributions are easier to review and merge.',
                ),
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}
