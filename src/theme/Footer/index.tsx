import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common'; // useThemeConfig 훅 사용
import styles from './styles.module.css';

function Footer(): JSX.Element {
    const { footer } = useThemeConfig();

    if (!footer) {
        return null;
    }

    const { copyright, links } = footer;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {links.map((linkItem, i) => (
                    <div key={i} className={styles.footerSection}>
                        {linkItem.title && <h3>{linkItem.title}</h3>}
                        {linkItem.items && linkItem.items.length > 0 && (
                            <ul>
                                {linkItem.items.map((item, key) => (
                                    <li key={key}>
                                        {/* to: 내부 링크, href: 외부 링크 구분 */}
                                        {item.to ? (
                                            <Link to={item.to}>{item.label}</Link>
                                        ) : (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {copyright && (
                <div
                    className={styles.copyright}
                    dangerouslySetInnerHTML={{ __html: copyright }}
                />
            )}
        </footer>
    );
}

export default Footer;