import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

interface Props {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export default function Layout({ children, title = 'Wave Security', description }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {description && <meta name="description" content={description} />}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Wave Security Advisories</h1>
                </header>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Wave Project</p>
                </footer>
            </div>
        </>
    );
}
