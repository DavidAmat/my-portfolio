import React from 'react';
import { Badge } from './ui/badge';

function getTextColorForBackground(hex: string): 'black' | 'white' {
    const sanitized = hex.replace('#', '');
    const r = parseInt(sanitized.substring(0, 2), 16) / 255;
    const g = parseInt(sanitized.substring(2, 4), 16) / 255;
    const b = parseInt(sanitized.substring(4, 6), 16) / 255;
    // relative luminance
    const [R, G, B] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    return luminance > 0.5 ? 'black' : 'white';
}

// Parser for backtick+color syntax and inline HTML
// Example: "Highlight `Jupyter Hub`{#2563eb} in blue" or "<strong>bold</strong>"
export function InlineBadgeText({ text }: { text: string }) {
    const parts: React.ReactNode[] = [];
    const badgeRegex = /`([^`]+)`\{#([0-9a-fA-F]{6})\}/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = badgeRegex.exec(text)) !== null) {
        const [full, label, hex] = match;
        const start = match.index;
        if (start > lastIndex) {
            // Render HTML in the text before the badge
            const beforeText = text.slice(lastIndex, start);
            parts.push(<span key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: beforeText }} />);
        }
        const color = `#${hex}`;
        const fg = getTextColorForBackground(color) === 'white' ? 'white' : 'black';
        parts.push(
            <Badge
                key={`badge-${start}-${hex}`}
                variant="secondary"
                style={{ backgroundColor: color, color: fg, borderColor: 'transparent' }}
                className="align-[2px]"
            >
                {label}
            </Badge>
        );
        lastIndex = start + full.length;
    }

    if (lastIndex < text.length) {
        // Render remaining HTML
        const remainingText = text.slice(lastIndex);
        parts.push(<span key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: remainingText }} />);
    }

    return <>{parts}</>;
}

export default InlineBadgeText;


