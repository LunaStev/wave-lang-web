import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

type FooterGroup = {
  title: string;
  links: Array<{
    label: string;
    to?: string;
    href?: string;
  }>;
};

const t = (id: string, message: string) => translate({id, message});

function FooterLink(props: {label: string; to?: string; href?: string}): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href} className={styles.footerLink}>
        {props.label}
      </Link>
    );
  }

  return (
    <Link to={props.to ?? '/'} className={styles.footerLink}>
      {props.label}
    </Link>
  );
}

export default function Footer(): JSX.Element {
  const logo = useBaseUrl('/img/logo.png');
  const groups = useMemo<FooterGroup[]>(
    () => [
      {
        title: t('footer.group.product', 'Product'),
        links: [
          {label: t('footer.link.home', 'Home'), to: '/'},
          {label: t('footer.link.docs', 'Docs'), to: '/docs/intro/'},
          {label: t('footer.link.learn', 'Learn'), to: '/learn'},
          {label: t('footer.link.ecosystem', 'Ecosystem'), to: '/ecosystem'},
        ],
      },
      {
        title: t('footer.group.project', 'Project'),
        links: [
          {label: t('footer.link.releases', 'Releases'), to: '/releases'},
          {label: t('footer.link.community', 'Community'), to: '/community'},
          {label: t('footer.link.roadmap', 'Roadmap'), to: '/docs/intro/roadmap'},
          {label: t('footer.link.license', 'License'), to: '/license'},
        ],
      },
      {
        title: t('footer.group.external', 'External'),
        links: [
          {label: 'GitHub', href: 'https://github.com/wavefnd/Wave'},
          {label: 'Discord', href: 'https://discord.gg/3nev5nHqq9'},
          {label: 'Crowdin', href: 'https://crowdin.com/project/wave-website'},
          {label: 'Blog', href: 'https://blog.wave-lang.dev'},
        ],
      },
    ],
    [],
  );

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <section className={styles.brandBlock}>
            <Link to="/" className={styles.brand}>
              <img src={logo} alt="" />
              <span>Wave</span>
            </Link>
            <p>
              {t(
                'footer.description',
                'Wave is a language project for explicit systems programming, inspectable compiler stages, and a coherent ecosystem around the language itself.',
              )}
            </p>
            <code>curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest</code>
          </section>

          <nav className={styles.footerNav} aria-label={t('footer.aria', 'Footer navigation')}>
            {groups.map((group) => (
              <div className={styles.footerGroup} key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <span>Copyright 2023 - {new Date().getFullYear()} LunaStev & Wave Foundation</span>
          <span>Mozilla Public License 2.0</span>
        </div>
      </div>
    </footer>
  );
}
