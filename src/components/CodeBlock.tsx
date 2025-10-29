import { useEffect, useState } from 'react';
import { highlightCode } from '../lib/shiki';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlight?: number[];
}

export function CodeBlock({ code, language = 'typescript', filename, highlight }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    const getHighlightedCode = async () => {
      const html = await highlightCode(code, language, highlight);
      setHighlightedCode(html);
    };
    getHighlightedCode();
  }, [code, language, highlight]);

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-200 shadow-[3px_10px_30px_rgba(0,0,0,0.1)] w-fit min-w-[25vw] max-w-full">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-6 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
          <div className="flex items-center gap-3">
            {filename && <span className="text-sm text-gray-300">{filename}</span>}
            {language && (
              <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span>Copy</span>
          </button>
        </div>
      )}

      {/* Code Content */}
      <pre
        className="overflow-x-auto p-6 text-sm leading-relaxed font-mono bg-white"
        aria-label="Code block"
        data-language={language}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
