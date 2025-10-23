import type { BlogDetailProps } from '../components/BlogDetail';
import { erpCocktailsStories } from './erp-cocktails';
import { homeWorkstationStories } from './home-workstation';
import { myPortfolioStories } from './my-portfolio';

export function getBlogDetails(topicId: string): BlogDetailProps | null {
    const blogMap: Record<string, BlogDetailProps> = {
        'home-workstation': {
            topicId: 'home-workstation',
            topicTitle: 'Home Workstation',
            stories: homeWorkstationStories,
            onBack: () => { },
        },
        'erp-cocktails': {
            topicId: 'erp-cocktails',
            topicTitle: 'ERP Cocktails',
            stories: erpCocktailsStories,
            onBack: () => { },
        },
        'my-portfolio': {
            topicId: 'my-portfolio',
            topicTitle: 'My Portfolio',
            stories: myPortfolioStories,
            onBack: () => { },
        },
    };

    return blogMap[topicId] || null;
}

