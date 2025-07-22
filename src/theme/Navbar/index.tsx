// src/theme/Navbar/index.tsx

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { MoonIcon, SunIcon } from './icons';

import NavbarItem from '@theme/NavbarItem';

function Navbar(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const { navbar } = useThemeConfig();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [theme, setTheme] = useState(() =>
        typeof window !== 'undefined' ? document.documentElement.getAttribute('data-theme') || 'dark' : 'dark'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    const leftItems = navbar.items.filter((item) => item.position === 'left');
    const rightItems = navbar.items.filter((item) => item.position === 'right');

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.navbarContent}>
                {/* 1. 로고와 사이트 이름 */}
                <Link to="/" className={styles.navbarLogo}>
                    {navbar.logo && <img src={navbar.logo.src} alt={navbar.logo.alt} width={28} height={28} />}
                    <span>{navbar.title}</span>
                </Link>

                {/* 2. 왼쪽 메뉴 아이템들 (docusaurus.config.ts 기반) */}
                <div className={styles.navbarItems}>
                    {leftItems.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                </div>
            </div>

            {/* 3. 오른쪽 끝 아이템들 (docusaurus.config.ts 기반) */}
            <div className={styles.navbarItemsEnd}>
                {rightItems.map((item, i) => (
                    <NavbarItem {...item} key={i} />
                ))}
                <button onClick={toggleTheme} aria-label="Toggle theme" className="clean-btn">
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;