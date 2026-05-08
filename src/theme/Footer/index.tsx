import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const linkGroups = [
  {
    title: 'Project',
    links: [
      {label: 'Docs', to: '/docs/intro/'},
      {label: 'License', to: '/license'},
      {label: 'Releases', href: 'https://github.com/wavefnd/Wave/releases'},
    ],
  },
  {
    title: 'Community',
    links: [
      {label: 'Discord', href: 'https://discord.gg/3nev5nHqq9'},
      {label: 'Blog', href: 'https://blog.wave-lang.dev'},
      {label: 'Crowdin', href: 'https://crowdin.com/project/wave-website'},
    ],
  },
  {
    title: 'Source',
    links: [
      {label: 'GitHub', href: 'https://github.com/wavefnd/Wave'},
      {label: 'Security', href: 'https://security.wave-lang.dev'},
      {label: 'Source Mirror', href: 'https://source.wave-lang.dev'},
    ],
  },
];

function FooterLink({
  href,
  label,
  to,
}: {
  href?: string;
  label: string;
  to?: string;
}): JSX.Element {
  if (href) {
    return (
      <Link href={href} className={styles.footerLink}>
        {label}
      </Link>
    );
  }

  return (
    <Link to={to ?? '#'} className={styles.footerLink}>
      {label}
    </Link>
  );
}

export default function Footer(): JSX.Element {
  const logo = useBaseUrl('/img/logo.png');

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
              A systems programming language built around explicit behavior,
              native output, and compiler internals that developers can inspect.
            </p>
            <code>curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest</code>
          </section>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            {linkGroups.map((group) => (
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
