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

            <header className={styles.navbar}>
                <div className={styles.inner}>
                    {/* 왼쪽 */}
                    <div className={styles.left}>
                        {/* 모바일 햄버거 */}
                        <button
                            type="button"
                            className={`navbar__toggle clean-btn ${styles.toggle}`}
                            aria-label="Toggle navigation bar"
                            onClick={mobileSidebar.toggle}
                        >
                            ☰
                        </button>

                        {/* 로고 */}
                        <Link to="/" className={styles.logo}>
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

                        {/* 데스크톱 왼쪽 메뉴 */}
                        <nav className={styles.menu}>
                            {leftItems.map((item, i) => (
                                <NavbarItem key={i} {...item} />
                            ))}
                        </nav>
                    </div>

                    {/* 오른쪽 */}
                    <div className={styles.right}>
                        <nav className={styles.menu}>
                            {rightItems.map((item, i) => (
                                <NavbarItem key={i} {...item} />
                            ))}
                        </nav>

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
                </div>
            </header>
        </>
    );
}
