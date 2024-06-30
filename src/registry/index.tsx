import React from 'react';

const agent = {
  'agent-1': {
    name: 'agent-1',

    files: ['registry/components/examples/agent-1.tsx'],
    component: React.lazy(
      () => import('@/registry/components/examples/agent-1'),
    ),
  },
};

export const registry = {
  ...agent,
};
