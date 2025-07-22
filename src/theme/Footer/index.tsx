// src/theme/Footer/index.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Footer(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* 섹션 1: 로고 및 설명 */}
                <div className={styles.footerSection}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit', marginBottom: '1rem' }}>
                        <img src={siteConfig.favicon} alt="Wave Logo" width={28} height={28} />
                        <h3 style={{ margin: 0 }}>{siteConfig.title}</h3>
                    </Link>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                        A modern language for a new wave of developers.
                    </p>
                </div>

                {/* 섹션 2: 주요 링크 */}
                <div className={styles.footerSection}>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to="/docs/intro">Documentation</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/showcase">Showcase</Link></li>
                    </ul>
                </div>

                {/* 섹션 3: 커뮤니티 */}
                <div className={styles.footerSection}>
                    <h3>Community</h3>
                    <ul>
                        <li><a href={siteConfig.customFields.githubUrl as string} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Discord (soon)</a></li>
                        <li><a href="https://crowdin.com/project/wave-website" target="_blank" rel="noopener noreferrer">Translate</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                Copyright © {new Date().getFullYear()} {siteConfig.organizationName}. Built with Docusaurus.
            </div>
        </footer>
    );
}

export default Footer;