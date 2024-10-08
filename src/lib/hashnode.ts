interface Query {
  query: string;
  variables?: object;
  tags?: Array<string>;
}

export async function query({ query, variables, tags }: Query): Promise<any> {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.errors) {
    console.error('GraphQL Errors:', data.errors);
    throw new Error(`GraphQL query failed: ${JSON.stringify(data.errors)}`);
  }

  return data;
}
