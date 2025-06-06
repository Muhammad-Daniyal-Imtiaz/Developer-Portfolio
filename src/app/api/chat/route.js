import { NextResponse } from 'next/server';
import { LlamaCloudIndex } from "llamaindex"
// Remove the edge runtime - this will make it a regular Serverless Function
// export const runtime = 'edge'; // ← Remove or comment this line

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const index = new LlamaCloudIndex({
      name: "ethnic-mandrill-2025-06-02",
      projectName: "Default",
      organizationId: "2dc37c55-d35a-4681-b1f0-bdde341645e4",
      apiKey: process.env.LLAMA_CLOUD_API_KEY,
    });

    const retriever = index.asRetriever({
      similarityTopK: 5,
      sparseSimilarityTopK: 3,
      alpha: 0.5,
      enableReranking: true,
      rerankTopN: 3,
    });

    const nodes = await retriever.retrieve({ query: message });

    const responseContent = nodes
      .map(node => node.node.getContent())
      .join('\n\n');

    return NextResponse.json({
      response: responseContent || "I couldn't find relevant information in the CV."
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
