// src/theme/Navbar/index.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';

import styles from './styles.module.css';
import { MoonIcon, SunIcon } from './icons';

export default function Navbar(): JSX.Element {
    const { navbar } = useThemeConfig();
    const { colorMode, setColorMode } = useColorMode();
    const mobileSidebar = useNavbarMobileSidebar();

    const leftItems = navbar.items.filter(i => i.position === 'left');
    const rightItems = navbar.items.filter(i => i.position === 'right');

    return (
        <>
            {/* Docusaurus 기본 모바일 사이드바 */}
            <NavbarMobileSidebar />

            <nav className={`navbar navbar--fixed-top ${styles.navbar}`}>
                <div className={styles.navbarContent}>
                    {/* 모바일 햄버거 */}
                    <button
                        type="button"
                        className={`navbar__toggle clean-btn ${styles.mobileToggle}`}
                        aria-label="Toggle navigation bar"
                        onClick={mobileSidebar.toggle}
                    >
                        ☰
                    </button>

                    {/* 로고 */}
                    <Link to="/" className={styles.navbarLogo}>
                        {navbar.logo && (
                            <img
                                src={navbar.logo.src}
                                alt={navbar.logo.alt}
                                width={28}
                                height={28}
                            />
                        )}
                        <span>{navbar.title}</span>
                    </Link>

                    {/* 데스크톱 왼쪽 */}
                    <div className={styles.navbarItems}>
                        {leftItems.map((item, i) => (
                            <NavbarItem key={i} {...item} />
                        ))}
                    </div>
                </div>

                {/* 데스크톱 오른쪽 */}
                <div className={styles.navbarItemsEnd}>
                    {rightItems.map((item, i) => (
                        <NavbarItem key={i} {...item} />
                    ))}

                    <button
                        type="button"
                        className="clean-btn"
                        aria-label="Toggle theme"
                        onClick={() =>
                            setColorMode(colorMode === 'dark' ? 'light' : 'dark')
                        }
                    >
                        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </nav>
        </>
    );
}
