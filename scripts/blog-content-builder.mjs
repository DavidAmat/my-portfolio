import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const CONTENT_BLOGS_DIR = path.resolve('content/blogs');
const OUT_DIR = path.resolve('src/blog');

const slug = (s) =>
    s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const escapeTpl = (s) => s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

function splitSections(all) {
    // Split on "## " headings for sections
    const text = all.trim();
    return text.split(/\n(?=##\s+)/g).map((part) => {
        const m = part.match(/^##\s+(.+)\n?([\s\S]*)$/);
        if (!m) return null;
        const [, title, rawMd] = m;
        return { id: slug(title), title: title.trim(), rawMd: (rawMd || '').trim() };
    }).filter(Boolean);
}

function buildBlogFolder(blogFolderName) {
    const blogDir = path.join(CONTENT_BLOGS_DIR, blogFolderName);
    const outFile = path.join(OUT_DIR, blogFolderName, `${blogFolderName}.generated.tsx`);

    console.log(`Building blog: ${blogFolderName}`);

    if (!fs.existsSync(blogDir)) {
        console.warn(`Blog directory ${blogDir} does not exist, skipping...`);
        return;
    }

    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
    if (files.length === 0) {
        console.warn(`No markdown files found in ${blogDir}, skipping...`);
        return;
    }

    const stories = [];

    for (const f of files) {
        const raw = fs.readFileSync(path.join(blogDir, f), 'utf8');
        const { data, content } = matter(raw);
        const { id, title, description, date, readTime, tags } = data || {};
        if (!id || !title || !description || !date || !readTime || !Array.isArray(tags)) {
            throw new Error(`Front-matter missing fields in ${f} (blog: ${blogFolderName})`);
        }
        const sections = splitSections(content);
        const sectionsTsx = sections.map((s) =>
            `{
      id: '${s.id}',
      title: '${s.title.replace(/'/g, "\\'")}',
      content: (<MarkdownContent md={\`${escapeTpl(s.rawMd)}\`} />)
    }`
        ).join(',\n');

        stories.push(`{
    id: '${id}',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${description.replace(/'/g, "\\'")}',
    date: '${date.replace(/'/g, "\\'")}',
    readTime: '${readTime.replace(/'/g, "\\'")}',
    tags: ${JSON.stringify(tags)},
    sections: [${sectionsTsx}]
  }`);
    }

    const exportName = `${blogFolderName.replace(/-/g, '')}Blogs`;
    const out = `/* AUTO-GENERATED. DO NOT EDIT. */
import type { BlogStory } from '../../components/BlogDetail';
import MarkdownContent from '../../components/MarkdownContent';

export const ${exportName}: BlogStory[] = [
${stories.join(',\n')}
];
`;

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, out, 'utf8');
    console.log(`Wrote ${outFile}`);
}

// Main execution
if (!fs.existsSync(CONTENT_BLOGS_DIR)) {
    console.error(`Content blogs directory ${CONTENT_BLOGS_DIR} does not exist!`);
    process.exit(1);
}

// Get all blog folders
const blogFolders = fs.readdirSync(CONTENT_BLOGS_DIR).filter(item => {
    const itemPath = path.join(CONTENT_BLOGS_DIR, item);
    return fs.statSync(itemPath).isDirectory();
});

if (blogFolders.length === 0) {
    console.warn('No blog folders found in content/blogs/');
    process.exit(0);
}

console.log(`Found blog folders: ${blogFolders.join(', ')}`);

// Build each blog folder
for (const blogFolder of blogFolders) {
    buildBlogFolder(blogFolder);
}

console.log('Blog content building completed!');
