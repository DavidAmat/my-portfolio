import type { ProjectSection } from '../components/ProjectDetail';
import { CodeBlock } from '../components/CodeBlock';
import { ImageGrid } from '../components/ImageGrid';

export const analyticsDashboardSections: ProjectSection[] = [
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <div className="space-y-4">
        <p>
          A real-time analytics dashboard built with React, D3.js, and Python backend 
          for monitoring business KPIs and metrics. The platform provides interactive 
          visualizations and customizable widgets for data exploration.
        </p>
        <p>
          The system processes millions of data points per day and provides real-time 
          updates using WebSocket connections. It's designed for scalability and can 
          handle multiple concurrent users without performance degradation.
        </p>
      </div>
    ),
  },
  {
    id: 'tech-stack',
    title: 'Technology Stack',
    content: (
      <div className="space-y-4">
        <p>The dashboard leverages modern web technologies for optimal performance:</p>
        <CodeBlock
          language="typescript"
          filename="dashboard-config.ts"
          code={`// Frontend Stack};`}
        />
      </div>
    ),
  },
  {
    id: 'features',
    title: 'Key Features',
    content: (
      <div className="space-y-4">
        <p>
          The dashboard includes a comprehensive set of features designed for 
          enterprise analytics needs:
        </p>
        <ImageGrid
          columns={2}
          images={[
            {
              src: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=800',
              alt: 'Dashboard overview',
              caption: 'Main dashboard with customizable widgets',
            },
            {
              src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
              alt: 'Analytics charts',
              caption: 'Interactive charts and data visualizations',
            },
          ]}
        />
        <ul className="space-y-2">
          <li>✓ Real-time data updates via WebSockets</li>
          <li>✓ Customizable dashboard layouts</li>
          <li>✓ Export reports to PDF and Excel</li>
          <li>✓ Advanced filtering and drill-down capabilities</li>
          <li>✓ Role-based access control</li>
          <li>✓ Mobile-responsive design</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'implementation',
    title: 'Implementation Highlights',
    content: (
      <div className="space-y-4">
        <p>
          Here's how we implemented the real-time data streaming functionality:
        </p>
        <CodeBlock
          language="typescript"
          filename="useRealtimeData.ts"
          code={`import { useEffect, useState } from 'react';}`}
        />
      </div>
    ),
  },
];
