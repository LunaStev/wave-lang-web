import React from 'react';
import Layout from './Layout';

// MDX 직접 import
import * as advisory1 from './advisories/WLSA-2025-0001.mdx';

const advisories = [
    {
        id: advisory1.meta.id,
        title: advisory1.meta.title,
        published: advisory1.meta.published,
    },
];

export default function SecurityIndex() {
    return (
        <Layout>
            <h2>Published Advisories</h2>
            <ul>
                {advisories.map((a) => (
                    <li key={a.id}>
                        <a href={`/security/${a.id}`}>{a.id}: {a.title} ({a.published})</a>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
