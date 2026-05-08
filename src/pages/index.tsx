import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            wrapperClassName="homepage-wrapper"
            title={`${siteConfig.title} - Systems Programming Language`}
            description="Wave is a systems programming language focused on explicit behavior, native output, and inspectable compiler internals."
        >
            <HomepageFeatures />
        </Layout>
    );
}
