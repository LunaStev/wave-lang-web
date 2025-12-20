// src/theme/Navbar/index.tsx

import React, { useEffect, useState } from 'react';
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

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 16);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const leftItems = navbar.items.filter(
        (item) => item.position === 'left',
    );
    const rightItems = navbar.items.filter(
        (item) => item.position === 'right',
    );

    return (
        <>
            {/* 모바일 사이드바 (Docusaurus 기본) */}
            <NavbarMobileSidebar />

            <nav
                className={`navbar navbar--fixed-top ${styles.navbar} ${
                    isScrolled ? styles.navbarScrolled : ''
                }`}
            >
                {/* 왼쪽 영역 */}
                <div className={styles.navbarContent}>
                    {/* 모바일 햄버거 버튼 */}
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

                    {/* 데스크톱 왼쪽 메뉴 */}
                    <div className={styles.navbarItems}>
                        {leftItems.map((item, i) => (
                            <NavbarItem key={i} {...item} />
                        ))}
                    </div>
                </div>

                {/* 오른쪽 영역 (데스크톱 전용) */}
                <div className={styles.navbarItemsEnd}>
                    {rightItems.map((item, i) => (
                        <NavbarItem key={i} {...item} />
                    ))}

                    <button
                        type="button"
                        aria-label="Toggle theme"
                        className="clean-btn"
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
