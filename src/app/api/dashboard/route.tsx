import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Handle GET request
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}