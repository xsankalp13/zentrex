import { zentrexKnowledgeBase } from '@/data/llm-knowledge-base';

export async function GET() {
  return new Response(zentrexKnowledgeBase, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0', // Always serve fresh data
    },
  });
}