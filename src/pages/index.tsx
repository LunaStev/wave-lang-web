import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            // 1. 홈페이지에만 적용될 특별한 클래스 이름을 부여합니다.
            wrapperClassName="homepage-wrapper"
            // 2. 타이틀을 좀 더 캐치프레이즈처럼 바꿔줍니다.
            title={`${siteConfig.title} - Ride the New Wave of Development`}
            description="Discover Wave, the programming language designed for performance and developer happiness. Write clean, concurrent, and safe code with an intuitive syntax."
        >
            {/* 3. <main> 태그를 제거해도 Layout 컴포넌트가 알아서 잘 처리해줍니다. 코드가 더 깔끔해집니다. */}
            <HomepageFeatures />
        </Layout>
    );
}