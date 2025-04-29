import { Product } from '@/types/products';

export const mockProducts: Product[] = [
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description:
      'A comprehensive analytics dashboard for tracking key metrics and visualizing data with interactive charts.',
    tags: ['Analytics', 'Dashboard', 'Data Visualization'],
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://agentgenesis.dev',
    featured: true,
    details: {
      overview:
        'This analytics dashboard provides a comprehensive view of your business metrics with real-time updates and interactive visualizations. Built with AgentGenesis components, it integrates seamlessly with various data sources and offers customizable widgets.',
      features: [
        'Real-time data visualization',
        'Interactive charts and graphs',
        'Customizable dashboard layout',
        'Data export and sharing capabilities',
        'User permission management',
      ],
      techStack: ['React', 'D3.js', 'AgentGenesis UI', 'WebSocket API'],
      createdBy: 'AgentGenesis Team',
      createdAt: 'April 2025',
    },
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description:
      'Generate high-quality content for your blog, social media, or marketing campaigns using advanced AI.',
    tags: ['AI', 'Content', 'Generation', 'Marketing'],
    imageUrl:
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://agentgenesis.dev',
    featured: false,
    details: {
      overview:
        'The AI Content Generator leverages advanced language models to help you create high-quality content for various purposes. From blog posts to social media updates, this tool can help you generate engaging content that resonates with your audience.',
      features: [
        'Multiple content types (blog, social media, email)',
        'Tone adjustment settings',
        'SEO optimization suggestions',
        'Content templates library',
        'Batch generation capabilities',
      ],
      techStack: ['React', 'OpenAI API', 'AgentGenesis Components', 'Firebase'],
      createdBy: 'Content AI Labs',
      createdAt: 'March 2025',
    },
  },
  {
    id: 'customer-support-agent',
    name: 'Customer Support Agent',
    description:
      'An AI-powered customer support agent that can handle inquiries, provide solutions, and escalate issues when needed.',
    tags: ['Customer Support', 'AI Agent', 'Chatbot'],
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://agentgenesis.dev',
    featured: true,
    details: {
      overview:
        'The Customer Support Agent is an AI-powered solution for handling customer inquiries efficiently. It can understand context, provide accurate responses, and seamlessly escalate complex issues to human agents when necessary.',
      features: [
        '24/7 automated customer support',
        'Natural language processing',
        'Knowledge base integration',
        'Smart escalation protocols',
        'Conversation history and analytics',
      ],
      techStack: [
        'React',
        'Natural Language Processing',
        'AgentGenesis Framework',
        'WebSocket',
      ],
      createdBy: 'Support Innovations Inc.',
      createdAt: 'February 2025',
    },
  },
  {
    id: 'code-assistant',
    name: 'Code Assistant',
    description:
      'An intelligent coding assistant that helps developers write, debug, and optimize code across multiple languages.',
    tags: ['Development', 'Coding', 'IDE', 'AI Assistant'],
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://agentgenesis.dev',
    featured: false,
    details: {
      overview:
        'The Code Assistant is designed to enhance developer productivity by providing intelligent code suggestions, bug detection, and optimization recommendations across multiple programming languages.',
      features: [
        'Multi-language support',
        'Code completion and suggestions',
        'Automated bug detection',
        'Performance optimization recommendations',
        'Integration with popular IDEs',
      ],
      techStack: ['React', 'Monaco Editor', 'AgentGenesis AI', 'WebAssembly'],
      createdBy: 'DevTools AI',
      createdAt: 'April 2025',
    },
  },
  {
    id: 'virtual-meeting-assistant',
    name: 'Virtual Meeting Assistant',
    description:
      'Enhance your meetings with real-time transcription, action item tracking, and AI-powered summaries.',
    tags: ['Meetings', 'Productivity', 'Transcription', 'AI'],
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://agentgenesis.dev',
    featured: false,
    details: {
      overview:
        'The Virtual Meeting Assistant transforms how teams conduct meetings by providing real-time transcription, automatic action item extraction, and comprehensive meeting summaries to ensure no important details are missed.',
      features: [
        'Real-time meeting transcription',
        'Automatic action item detection',
        'Meeting summary generation',
        'Calendar integration',
        'Searchable meeting archive',
      ],
      techStack: [
        'React',
        'WebRTC',
        'Speech-to-Text API',
        'AgentGenesis UI Components',
      ],
      createdBy: 'Productive Meetings Inc.',
      createdAt: 'January 2025',
    },
  },
];
