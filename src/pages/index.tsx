import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}: A Modern, Fast, and Safe Programming Language`}
            description="Discover Wave, the programming language designed for performance and developer happiness. Write clean, concurrent, and safe code with an intuitive syntax."
        >
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
