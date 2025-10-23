# How to Add New Project Detail Pages

This guide explains how to add new detailed project pages to your portfolio.

## Quick Start

To add a new project detail page, follow these steps:

### 1. Create a New Project File

Create a new file in the `/projects` directory, for example: `/projects/my-new-project.tsx`

```tsx
import { ProjectSection } from '../components/ProjectDetail';
import { CodeBlock } from '../components/CodeBlock';
import { ImageGrid } from '../components/ImageGrid';

export const myNewProjectSections: ProjectSection[] = [
  {
    id: 'overview', // Unique ID for this section (used for table of contents navigation)
    title: 'Project Overview',
    content: (
      <div className="space-y-4">
        <p>
          Your project description goes here. You can use regular HTML and React components.
        </p>
        <p>
          Add multiple paragraphs to explain your project in detail.
        </p>
      </div>
    ),
  },
  {
    id: 'implementation',
    title: 'Implementation Details',
    content: (
      <div className="space-y-4">
        <p>Explain how you built this project.</p>
        
        {/* Add code blocks */}
        <CodeBlock
          language="python"
          filename="main.py"
          code={`def hello_world():
    print("Hello, World!")
    return True`}
        />
        
        {/* Add images */}
        <ImageGrid
          columns={2}
          images={[
            {
              src: 'https://example.com/image1.jpg',
              alt: 'Screenshot 1',
              caption: 'This is the first screenshot',
            },
            {
              src: 'https://example.com/image2.jpg',
              alt: 'Screenshot 2',
              caption: 'This is the second screenshot',
            },
          ]}
        />
      </div>
    ),
  },
  // Add more sections as needed
];
```

### 2. Register Your Project

Open `/projects/projectData.tsx` and add your project to the `projectsMap`:

```tsx
import { myNewProjectSections } from './my-new-project';

// Inside getProjectDetails function, add to projectsMap:
'7': {  // Use the next available ID
  id: '7',
  title: 'My New Project',
  description: 'A brief description of what this project does.',
  category: 'AI & Machine Learning', // or 'Data Science' or 'Full Stack'
  tags: ['Python', 'React', 'etc'],
  image: 'https://unsplash.com/your-image-url',
  date: 'December 2024',
  readTime: '10 min read',
  githubUrl: 'https://github.com/yourrepo', // Optional
  liveUrl: 'https://yourdemo.com', // Optional
  sections: myNewProjectSections,
  onBack: () => {},
},
```

### 3. Add to Projects List

Open `/components/Projects.tsx` and add your project to the `projects` array:

```tsx
{
  id: '7',
  title: 'My New Project',
  description: 'Brief description for the card.',
  category: 'AI & Machine Learning',
  image: 'https://unsplash.com/your-image-url',
  tags: ['Python', 'React'],
}
```

## Available Components

### CodeBlock

Display code with syntax highlighting and copy functionality:

```tsx
<CodeBlock
  language="python"  // or "typescript", "javascript", etc.
  filename="example.py"  // Optional
  code={`your code here`}
/>
```

### ImageGrid

Display images in a grid layout:

```tsx
<ImageGrid
  columns={2}  // 1, 2, or 3 columns
  images={[
    {
      src: 'image-url',
      alt: 'Alt text',
      caption: 'Optional caption',
    },
  ]}
/>
```

### VideoEmbed

Embed videos (for future use):

```tsx
<VideoEmbed
  src="/path/to/video.mp4"
  title="Video Title"
  caption="Optional caption"
/>
```

### Custom HTML

You can use any standard HTML in your content:

```tsx
content: (
  <div className="space-y-4">
    <p>Regular paragraph</p>
    
    <ul className="space-y-2">
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    
    <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
      <h4 className="mb-3">Highlighted Box</h4>
      <p>Important information goes here</p>
    </div>
    
    <table className="w-full">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </tbody>
    </table>
  </div>
)
```

## Tips

1. **Section IDs**: Use simple, URL-friendly IDs for sections (e.g., 'overview', 'implementation', 'results')

2. **Images**: Use Unsplash or host your images. Make sure URLs are accessible.

3. **Code Formatting**: Use proper indentation in your code blocks. The backticks preserve formatting.

4. **Tailwind Classes**: Use Tailwind CSS classes for styling. Common patterns:
   - `space-y-4` for vertical spacing between elements
   - `rounded-xl` for rounded corners
   - `bg-blue-50 dark:bg-blue-950/20` for light/dark mode colors

5. **Content Length**: Aim for 3-6 sections per project for good readability.

6. **Keep It Organized**: One file per project in the `/projects` folder.

## Example Structure

A well-structured project typically includes:

1. **Overview** - What the project does, why it matters
2. **Architecture/Tech Stack** - How it's built
3. **Implementation** - Key code examples and features
4. **Results/Performance** - Metrics, outcomes, achievements
5. **Future Improvements** - What's next

Happy documenting! 🚀
