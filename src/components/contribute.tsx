import Link from 'next/link';
import { BugIcon } from 'lucide-react';

import { getGitHubIssueUrl } from '@/lib/github';
import { Agent } from 'contentlayer/generated';

export function Contribute({ doc }: { doc: Agent }) {
  const contributeLinks = [
    {
      text: 'Report an issue',
      icon: BugIcon,
      href: getGitHubIssueUrl({
        owner: 'DeadmanAbir',
        repo: 'AgentGenesis',
        title: `[bug]: ${doc.slug}`,
        labels: ['bug', 'documentation'],
        template: 'bug_report.md',
      }),
    },
  ];

  return (
    <div className="space-y-2">
      <p className="font-medium">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
