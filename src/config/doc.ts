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
  ],
};
