import { transformerNotationDiff } from '@shikijs/transformers';
import type { ShikiTransformer } from 'shiki';
import { createHighlighter } from 'shiki/bundle/web';

const highlighterPromise = createHighlighter({
    themes: ['github-light'],
    langs: [
        'python',
        'javascript',
        'typescript',
        'json',
        'bash',
        'html',
        'css',
        'sql',
        'yaml',
        'markdown',
        'tsx',
    ],
});

function createPreAttrsTransformer(attrs: Record<string, string>): ShikiTransformer {
    return {
        name: 'custom-pre-attrs',
        pre(node) {
            for (const key in attrs) {
                node.properties[key] = attrs[key];
            }
            node.properties.style = 'background-color: transparent';
        },
        code(node) {
            node.properties.style = 'background-color: transparent';
        },
    };
}

export async function highlightCode(
    code: string,
    language: string,
    highlightLines: number[] = [],
    attrs: Record<string, string> = {},
) {
    const highlighter = await highlighterPromise;

    return highlighter.codeToHtml(code, {
        lang: language,
        theme: 'github-light',
        transformers: [
            transformerNotationDiff(),
            {
                name: 'transformer-highlight-lines',
                line(node, lineNumber) {
                    if (highlightLines.includes(lineNumber)) {
                        node.properties ??= {};
                        node.properties['data-highlighted'] = 'true';
                    }
                },
            },
            createPreAttrsTransformer(attrs),
        ],
    });
}
