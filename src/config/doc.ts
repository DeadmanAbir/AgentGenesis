import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Agents',
      href: '/agents',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/agents',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Agent 1',
          href: '/agents/components/agent1',
          items: [],
        },
      ],
    },
  ],
};
