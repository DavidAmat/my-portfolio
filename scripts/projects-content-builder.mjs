import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const CONTENT_PROJECTS_DIR = path.resolve('content/projects');
const OUT_DIR = path.resolve('src/projects');

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

function buildProjectFolder(projectFolderName) {
    const projectDir = path.join(CONTENT_PROJECTS_DIR, projectFolderName);
    const outFile = path.join(OUT_DIR, `${projectFolderName}.generated.tsx`);

    console.log(`Building project: ${projectFolderName}`);

    if (!fs.existsSync(projectDir)) {
        console.warn(`Project directory ${projectDir} does not exist, skipping...`);
        return;
    }

    const files = fs.readdirSync(projectDir).filter((f) => f.endsWith('.md'));
    if (files.length === 0) {
        console.warn(`No markdown files found in ${projectDir}, skipping...`);
        return;
    }

    const projects = [];

    for (const f of files) {
        const raw = fs.readFileSync(path.join(projectDir, f), 'utf8');
        const { data, content } = matter(raw);
        const { id, title, description, date, readTime, tags, technologies } = data || {};
        if (!id || !title || !description || !date || !readTime || !Array.isArray(tags)) {
            throw new Error(`Front-matter missing fields in ${f} (project: ${projectFolderName})`);
        }
        const sections = splitSections(content);
        const sectionsTsx = sections.map((s) =>
            `{
      id: '${s.id}',
      title: '${s.title.replace(/'/g, "\\'")}',
      content: (<MarkdownContent md={\`${escapeTpl(s.rawMd)}\`} />)
    }`
        ).join(',\n');

        projects.push(`{
    id: '${id}',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${description.replace(/'/g, "\\'")}',
    date: '${date.replace(/'/g, "\\'")}',
    readTime: '${readTime.replace(/'/g, "\\'")}',
    tags: ${JSON.stringify(tags)},
    sections: [${sectionsTsx}]
  }`);
    }

    const exportName = `${projectFolderName.replace(/-/g, '')}Projects`;
    const out = `/* AUTO-GENERATED. DO NOT EDIT. */
import type { ProjectStory } from '../components/ProjectDetail';
import MarkdownContent from '../components/MarkdownContent';

export const ${exportName}: ProjectStory[] = [
${projects.join(',\n')}
];
`;

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, out, 'utf8');
    console.log(`Wrote ${outFile}`);
}

// Main execution
if (!fs.existsSync(CONTENT_PROJECTS_DIR)) {
    console.warn(`Content projects directory ${CONTENT_PROJECTS_DIR} does not exist! Skipping projects build.`);
    process.exit(0);
}

// Get all project folders
const projectFolders = fs.readdirSync(CONTENT_PROJECTS_DIR).filter(item => {
    const itemPath = path.join(CONTENT_PROJECTS_DIR, item);
    return fs.statSync(itemPath).isDirectory();
});

if (projectFolders.length === 0) {
    console.warn('No project folders found in content/projects/');
    process.exit(0);
}

console.log(`Found project folders: ${projectFolders.join(', ')}`);

// Build each project folder
for (const projectFolder of projectFolders) {
    buildProjectFolder(projectFolder);
}

console.log('Project content building completed!');
