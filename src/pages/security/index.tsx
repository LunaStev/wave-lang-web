import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from './Layout';

interface AdvisoryMeta {
    id: string;
    title: string;
    published: string;
}

export default function SecurityIndex({ advisories }: { advisories: AdvisoryMeta[] }) {
    return (
        <Layout title="Wave Security Advisories">
            <h2>Published Advisories</h2>
            <ul>
                {advisories.map((advisory) => (
                    <li key={advisory.id}>
                        <Link href={`/security/${advisory.id}`}>
                            <strong>{advisory.id}</strong>: {advisory.title} ({advisory.published})
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export async function getStaticProps() {
    const advisoriesDir = path.join(process.cwd(), 'pages/security/advisories');
    const files = fs.readdirSync(advisoriesDir).filter((file) => file.endsWith('.mdx'));

    const advisories = files.map((filename) => {
        const fullPath = path.join(advisoriesDir, filename);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(fileContent);
        return {
            id: data.id,
            title: data.title,
            published: data.published,
        };
    });

    // 최신 순 정렬
    advisories.sort((a, b) => b.id.localeCompare(a.id));

    return {
        props: { advisories },
    };
}
