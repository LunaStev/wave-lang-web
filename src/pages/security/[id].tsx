import React from 'react';
import Layout from './Layout';

import * as advisory1 from './advisories/WLSA-2025-0001.mdx';

const advisoryMap = {
    'WLSA-2025-0001': advisory1,
};

export default function AdvisoryPage({ location }: { location: { pathname: string } }) {
    const id = location.pathname.split('/').pop() || '';
    const advisory = advisoryMap[id];

    if (!advisory) {
        return <Layout><h2>Advisory Not Found</h2></Layout>;
    }

    const { meta, default: Content } = advisory;

    return (
        <Layout>
            <h2>{meta.id}: {meta.title}</h2>
            <p><b>Severity:</b> {meta.severity}</p>
            <p><b>Discovered:</b> {meta.discovered}</p>
            <p><b>Published:</b> {meta.published}</p>
            <p><b>Affected Versions:</b> {meta.affected.join(', ')}</p>
            <p><b>Fixed In:</b> {meta.fixedIn}</p>
            <hr />
            <Content />
        </Layout>
    );
}
