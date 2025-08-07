import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Layout from './Layout';

interface AdvisoryMeta {
    id: string;
    title: string;
    severity: string;
    discovered: string;
    published: string;
    affected: string[];
    fixedIn: string;
}

export default function AdvisoryPage({ source, meta }: { source: string; meta: AdvisoryMeta }) {
    return (
        <Layout title={meta.id + ' - ' + meta.title}>
            <h2>{meta.id}: {meta.title}</h2>
            <p><b>Severity:</b> {meta.severity}</p>
            <p><b>Discovered:</b> {meta.discovered}</p>
            <p><b>Published:</b> {meta.published}</p>
            <p><b>Affected Versions:</b> {meta.affected.join(', ')}</p>
            <p><b>Fixed In:</b> {meta.fixedIn}</p>
            <hr />
            <MDXRemote source={source} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const dir = path.join(process.cwd(), 'pages/security/advisories');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

    const paths = files.map((filename) => ({
        params: { id: filename.replace(/\.mdx$/, '') },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const filePath = path.join(process.cwd(), 'pages/security/advisories', `${params.id}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return {
        props: {
            source: content,
            meta: data,
        },
    };
}
