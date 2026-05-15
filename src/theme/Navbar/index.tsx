import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarItem from '@theme/NavbarItem';

import styles from './styles.module.css';

type NavLink = {
  label: string;
  to: string;
  match?: 'prefix' | 'exact';
};

const localeDropdownItem = {
  type: 'localeDropdown' as const,
  position: 'right' as const,
  dropdownItemsBefore: [],
  dropdownItemsAfter: [],
};

const t = (id: string, message: string) => translate({id, message});

function isActive(pathname: string, item: NavLink): boolean {
  if (item.match === 'exact') {
    return pathname === item.to;
  }

  return item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
}

export default function Navbar(): JSX.Element {
  const logo = useBaseUrl('/img/logo.png');
  const {pathname} = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links: NavLink[] = [
    {label: t('nav.home', 'Home'), to: '/', match: 'exact'},
    {label: t('nav.docs', 'Docs'), to: '/docs'},
    {label: t('nav.learn', 'Learn'), to: '/learn'},
    {label: t('nav.ecosystem', 'Ecosystem'), to: '/ecosystem'},
    {label: t('nav.releases', 'Releases'), to: '/releases'},
    {label: t('nav.community', 'Community'), to: '/community'},
  ];

  return (
    <header className={styles.navbar}>
      <div className={clsx('container', styles.shell)}>
        <Link to="/" className={styles.brand} onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="" />
          <span>Wave</span>
        </Link>

        <nav className={styles.desktopNav} aria-label={t('nav.aria', 'Primary navigation')}>
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={clsx(styles.navLink, isActive(pathname, item) && styles.navLinkActive)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="https://github.com/wavefnd/Wave" className={styles.githubLink}>
            GitHub
          </Link>
          <div className={styles.desktopLocale}>
            <NavbarItem {...localeDropdownItem} />
          </div>
          <NavbarColorModeToggle className={styles.colorToggle} />
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={t('nav.menu', 'Toggle navigation menu')}>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={clsx(styles.mobileMenu, mobileOpen && styles.mobileMenuOpen)}>
        <nav className={styles.mobileNav} aria-label={t('nav.mobile.aria', 'Mobile navigation')}>
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={clsx(styles.mobileLink, isActive(pathname, item) && styles.mobileLinkActive)}
              onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href="https://github.com/wavefnd/Wave"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}>
            GitHub
          </Link>
          <div className={styles.mobileLocale}>
            <NavbarItem {...localeDropdownItem} />
          </div>
        </nav>
      </div>
    </header>
  );
}
