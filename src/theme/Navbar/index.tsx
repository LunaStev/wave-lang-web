// src/theme/Navbar/index.tsx

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'; // useColorMode 추가
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { MoonIcon, SunIcon } from './icons';

import NavbarItem from '@theme/NavbarItem';

function Navbar(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const { navbar } = useThemeConfig();
    const [isScrolled, setIsScrolled] = useState(false);

    // Docusaurus의 공식 테마 관리 훅을 사용합니다.
    // 이 방법이 로컬 스토리지 동기화 등 모든 것을 알아서 처리해줘서 훨씬 안정적입니다.
    const { colorMode, setColorMode } = useColorMode();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = colorMode === 'dark' ? 'light' : 'dark';
        setColorMode(newTheme);
    };

    const leftItems = navbar.items.filter((item) => item.position === 'left');
    const rightItems = navbar.items.filter((item) => item.position === 'right');

    return (
        // ✅ [핵심 수정] Docusaurus의 기본 클래스인 'navbar'와 'navbar--fixed-top'을 추가합니다.
        // 이렇게 하면 Docusaurus가 이 요소의 높이를 정상적으로 인식할 수 있게 됩니다.
        <nav
            className={`navbar navbar--fixed-top ${styles.navbar} ${
                isScrolled ? styles.navbarScrolled : ''
            }`}
        >
            <div className={styles.navbarContent}>
                {/* 1. 로고와 사이트 이름 */}
                <Link to="/" className={styles.navbarLogo}>
                    {navbar.logo && <img src={navbar.logo.src} alt={navbar.logo.alt} width={28} height={28} />}
                    <span>{navbar.title}</span>
                </Link>

                {/* 2. 왼쪽 메뉴 아이템들 */}
                <div className={styles.navbarItems}>
                    {leftItems.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                </div>
            </div>

            {/* 3. 오른쪽 끝 아이템들 */}
            <div className={styles.navbarItemsEnd}>
                {rightItems.map((item, i) => (
                    <NavbarItem {...item} key={i} />
                ))}
                <button onClick={toggleTheme} aria-label="Toggle theme" className="clean-btn">
                    {/* ✅ colorMode 훅을 사용하도록 수정 */}
                    {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
