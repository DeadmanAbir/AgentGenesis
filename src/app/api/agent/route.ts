import { NextResponse } from 'next/server';

const mdxContent = `

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Cell 1   | Cell 2   |
| Row 2    | Cell 3   | Cell 4   |
`;

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({ content: mdxContent }, { status: 200 });
}
