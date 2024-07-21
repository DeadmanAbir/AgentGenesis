import { NextResponse } from 'next/server';
export async function GET() {
  const data = 'Hello World';
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return NextResponse.json({ data }, { status: 200 });
}
