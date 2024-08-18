import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Pricing',
      href: '/pricing',
      label: 'New',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
      ],
    },
    {
      title: 'Document Compressor',
      items: [
        {
          title: 'Cohere Reranker',
          href: '/docs/components/cohereReranker',
          items: [],
        },
      ],
    },
    {
      title: 'Document Loaders',
      items: [
        {
          title: 'Unstructured Loader',
          href: '/docs/components/unstructuredLoader',
          items: [],
          label: 'New',
        },
      ],
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Wikipedia Tool',
          href: '/docs/components/wikipediaTool',
          items: [],
        },
        {
          title: 'SearchApi Tool',
          href: '/docs/components/searchapiTool',
          items: [],
        },
        {
          title: 'Calculator Tool',
          href: '/docs/components/calculatorTool',
          items: [],
        },
        {
          title: 'LinkedIn Tool',
          href: '/docs/components/linkedinTool',
          items: [],
        },
      ],
    },
    {
      title: 'Chat Models',
      items: [
        {
          title: 'ChatOpenAI',
          href: '/docs/components/chatOpenAi',
          items: [],
        },
        {
          title: 'ChatGemini',
          href: '/docs/components/chatGemini',
          items: [],
        },
        {
          title: 'ChatAnthropic',
          href: '/docs/components/chatAnthropic',
          items: [],
        },
      ],
    },
    {
      title: 'Embedding Models',
      items: [
        {
          title: 'OpenAIEmbeddings',
          href: '/docs/components/openAiEmbedding',
          items: [],
        },
        {
          title: 'GeminiEmbeddings',
          href: '/docs/components/geminiEmbedding',
          items: [],
        },
      ],
    },
    {
      title: 'Agents',
      items: [
        {
          title: 'LinkedIn Agent',
          href: '/docs/components/linkedinAgent',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
