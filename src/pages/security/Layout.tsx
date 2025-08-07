import React from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Wave Security Advisories</h1>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Wave Project</p>
            </footer>
        </div>
    );
}
