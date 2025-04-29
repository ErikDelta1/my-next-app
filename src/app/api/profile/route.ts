import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'John Doe', job: 'Software Engineer at Example Corp.' }, { status: 200 });
}