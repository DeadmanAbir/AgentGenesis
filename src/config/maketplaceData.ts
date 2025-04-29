import { Product } from '@/types/products';

export const mockProducts: Product[] = [
  {
    id: 'post-pilot',
    name: 'PostPilot',
    description:
      'Your AI-driven content automation SaaS for social media platforms.',
    tags: ['AI', 'Automation', 'Linkedin', 'Social Media'],
    imageUrl:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1745932788140/d1f283bc-7307-488a-bcd3-5ae3a9c32348.png',
    liveUrl: 'https://postpilot.agentgenesis.dev/',
    featured: true,
    details: {
      overview: `PostPilot is an automation tool that uses AI to generate content for social media platforms. You can upload context, create posts based on it, generate AI-powered drafts until you're satisfied, and then schedule your posts for publishing.`,
      features: [
        'Add sources to give context for better post generation',
        'Create LinkedIn posts through the AI dashboard (connect your account in the integrations section)',
        'Write, edit, and improve posts with AI assistance',
        'Post directly to LinkedIn from the dashboard',
        'Schedule posts (multi-platform integration coming soon 🚀)',
      ],
      techStack: [
        'React',
        'Express',
        'Typescript',
        'Agentgeneis',
        'Supabase',
        'Tanstack Query',
        'Tanstack Router',
      ],
      createdBy: 'AgentGenesis Team',
      createdAt: 'April 2025',
    },
  },
];
