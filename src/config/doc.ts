import { MainNavItem, SidebarNavItem } from '@/types/nav';
// import {
//   cachedBlogPosts,
//   fetchBlogPosts,
// } from '../components/blog-list-search';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Components',
      href: '/components',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
    {
      title: 'Showcase',
      href: '/showcase',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/components',
          items: [],
        },
      ],
    },
    {
      title: 'Document Compressor',
      items: [
        {
          title: 'Cohere Reranker',
          href: '/components/cohereReranker',
          items: [],
        },
      ],
    },
    {
      title: 'Document Loaders',
      items: [
        {
          title: 'Unstructured Loader',
          href: '/components/unstructuredLoader',
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
          href: '/components/wikipediaTool',
          items: [],
        },
        {
          title: 'SearchApi Tool',
          href: '/components/searchapiTool',
          items: [],
        },
        {
          title: 'Calculator Tool',
          href: '/components/calculatorTool',
          items: [],
        },
        {
          title: 'LinkedIn Tool',
          href: '/components/linkedinTool',
          items: [],
        },
        {
          title: 'TweetScraper Tool',
          href: '/components/tweetScraperTool',
          items: [],
        },
      ],
    },
    {
      title: 'Chat Models',
      items: [
        {
          title: 'ChatOpenAI',
          href: '/components/chatOpenAi',
          items: [],
        },
        {
          title: 'ChatGemini',
          href: '/components/chatGemini',
          items: [],
        },
        {
          title: 'ChatAnthropic',
          href: '/components/chatAnthropic',
          items: [],
        },
        {
          title: 'ChatwatsonxAi',
          href: '/components/chatwatsonxAi',
          items: [],
        },
      ],
    },
    {
      title: 'Embedding Models',
      items: [
        {
          title: 'OpenAIEmbeddings',
          href: '/components/openAiEmbedding',
          items: [],
        },
        {
          title: 'GeminiEmbeddings',
          href: '/components/geminiEmbedding',
          items: [],
        },
      ],
    },
    {
      title: 'Agents',
      items: [
        {
          title: 'LinkedIn Agent',
          href: '/components/linkedinAgent',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};

// (async () => {
//   await fetchBlogPosts();
//   const blogPosts = cachedBlogPosts;

//   docsConfig.sidebarNav.find((section) => section.title === 'Blog')!.items =
//     blogPosts.map((post) => ({
//       title: post.title,
//       href: post.slug,
//       items: [],
//       label: 'New',
//     }));
// })();
