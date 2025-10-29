import { CodeBlock } from './CodeBlock';
import InlineBadgeText from './InlineBadgeText';

export default function MarkdownContent({ md }: { md: string }) {
    const src = md.replace(/\r\n?/g, '\n');
    const lines = src.split('\n');

    type Block =
        | { type: 'h1' | 'h2' | 'h3' | 'h4'; text: string }
        | { type: 'p'; text: string }
        | { type: 'blockquote'; text: string }
        | { type: 'image'; src: string; alt: string }
        | { type: 'code'; lang: string; filename?: string; code: string };

    const blocks: Block[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Code fence: ```lang:filename or ```lang
        if (line.startsWith('```')) {
            const m = line.match(/^```([^:\s`]+)(?::(\S+))?/);
            const lang = m?.[1] || 'text';
            const filename = m?.[2];
            const code: string[] = [];
            i++;
            while (i < lines.length && !lines[i].startsWith('```')) {
                code.push(lines[i]); i++;
            }
            if (i < lines.length && lines[i].startsWith('```')) i++;
            blocks.push({ type: 'code', lang, filename, code: code.join('\n') });
            continue;
        }

        if (line.startsWith('### ')) { blocks.push({ type: 'h3', text: line.slice(4) }); i++; continue; }
        if (line.startsWith('## ')) { blocks.push({ type: 'h2', text: line.slice(3) }); i++; continue; }
        if (line.startsWith('# ')) { blocks.push({ type: 'h1', text: line.slice(2) }); i++; continue; }

        if (line.trim() === '') { i++; continue; }

        // Image: ![alt](src)
        if (line.startsWith('![')) {
            const m = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
            if (m) {
                const [, alt, src] = m;
                blocks.push({ type: 'image', src, alt });
                i++;
                continue;
            }
        }

        // Blockquote (greedy until blank or block)
        if (line.startsWith('> ')) {
            const quote: string[] = [line.slice(2)];
            i++;
            while (
                i < lines.length &&
                lines[i].startsWith('> ')
            ) {
                quote.push(lines[i].slice(2));
                i++;
            }
            blocks.push({ type: 'blockquote', text: quote.join('\n') });
            continue;
        }

        // Paragraph (greedy until blank or block)
        const para: string[] = [line];
        i++;
        while (
            i < lines.length &&
            lines[i].trim() !== '' &&
            !lines[i].startsWith('####') &&
            !lines[i].startsWith('###') &&
            !lines[i].startsWith('##') &&
            !lines[i].startsWith('# ') &&
            !lines[i].startsWith('![') &&
            !lines[i].startsWith('> ') &&
            !lines[i].startsWith('```')
        ) { para.push(lines[i]); i++; }
        blocks.push({ type: 'p', text: para.join(' ') });
    }

    const processInlineMarkdown = (s: string) => {
        // Badge sugar: [#color](text) → `text`{#color}
        let processed = s.replace(/\[#([0-9a-fA-F]{6})\]\(([^)]+)\)/g, (_m, hex, text) => {
            const safe = String(text).replace(/`/g, '');
            return `\`${safe}\`{#${hex}}`;
        });

        // Bold: **text** → <strong>text</strong>
        processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // Italic: *text* → <em>text</em>
        processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Inline code: `text` → <code>text</code> (but skip badge syntax)
        processed = processed.replace(/`([^`]+)`(?!\{#[0-9a-fA-F]{6}\})/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>');

        return processed;
    };

    return (
        <div className="space-y-4">
            {blocks.map((b, idx) => {
                if (b.type === 'h1') return <h1 key={idx} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(b.text) }} />;
                if (b.type === 'h2') return <h2 key={idx} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(b.text) }} />;
                if (b.type === 'h3') return <h3 key={idx} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(b.text) }} />;
                if (b.type === 'h4') return <h4 key={idx} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(b.text) }} />;
                if (b.type === 'image') return <img key={idx} src={b.src} alt={b.alt} className="max-w-full h-auto rounded-lg shadow-md" />;
                if (b.type === 'blockquote') return <blockquote key={idx} className="border-l-4 border-blue-500 pl-4 italic text-foreground/80"><InlineBadgeText text={processInlineMarkdown(b.text)} /></blockquote>;
                if (b.type === 'code')
                    return <CodeBlock key={idx} language={b.lang} filename={b.filename} code={b.code} />;
                return <p key={idx}><InlineBadgeText text={processInlineMarkdown(b.text)} /></p>;
            })}
        </div>
    );
}