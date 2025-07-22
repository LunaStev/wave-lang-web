// src/theme/Navbar/index.tsx

import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import type { NavbarItemConfig } from '@docusaurus/theme-common';

import styles from './styles.module.css';
import { GithubIcon, MoonIcon, SunIcon } from './icons'; // 아이콘을 위한 별도 파일 생성 (아래 설명 참고)

function Navbar(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const { navbar } = useThemeConfig();
    const [isScrolled, setIsScrolled] = useState(false);

    // 간단한 스크롤 감지 로직
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16); // 1rem
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 다크 모드 토글 로직
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.getAttribute('data-theme') || 'dark';
        }
        return 'dark';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
            {/* 1. 로고와 사이트 이름 */}
            <Link to="/" className={styles.navbarLogo}>
                <img src={siteConfig.favicon} alt={`${siteConfig.title} Logo`} width={24} height={24} />
                <span>{siteConfig.title}</span>
            </Link>

            {/* 2. 메뉴 아이템들 */}
            <div className={styles.navbarItems}>
                {navbar.items.map((item: NavbarItemConfig, i: number) => (
                    <Link key={i} to={item.to || item.href} className="navbar__item navbar__link">
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* 3. 오른쪽 끝 아이템들 (다크모드 토글, GitHub 링크) */}
            <div className={styles.navbarItemsEnd}>
                <button onClick={toggleTheme} aria-label="Toggle theme" className="clean-btn">
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
                <a href={siteConfig.customFields.githubUrl as string} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <GithubIcon />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;