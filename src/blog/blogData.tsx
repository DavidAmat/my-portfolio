import type { BlogDetailProps } from '../components/BlogDetail';
import { blog1Blogs } from './blog-1/blog-1.generated';
import { blog2Blogs } from './blog-2/blog-2.generated';

export function getBlogDetails(topicId: string): BlogDetailProps | null {
    const blogMap: Record<string, BlogDetailProps> = {
        'blog-1': {
            topicId: 'blog-1',
            topicTitle: 'Blog 1',
            stories: blog1Blogs,
            onBack: () => { },
        },
        'blog-2': {
            topicId: 'blog-2',
            topicTitle: 'Blog 2',
            stories: blog2Blogs,
            onBack: () => { },
        },
    };

    return blogMap[topicId] || null;
}

