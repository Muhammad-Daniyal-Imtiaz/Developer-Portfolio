import { NextResponse } from 'next/server';
import { LlamaCloudIndex } from "llamaindex";

export const runtime = 'edge'; // Optional: use edge runtime for faster responses

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Initialize LlamaCloudIndex with your configuration
    const index = new LlamaCloudIndex({
      name: "ethnic-mandrill-2025-06-02", // Your index name
      projectName: "Default",
      organizationId: "2dc37c55-d35a-4681-b1f0-bdde341645e4", // Your org ID
      apiKey: process.env.LLAMA_CLOUD_API_KEY,
    });

    // Configure retriever
    const retriever = index.asRetriever({
      similarityTopK: 5,
      sparseSimilarityTopK: 3,
      alpha: 0.5,
      enableReranking: true,
      rerankTopN: 3,
    });

    // Retrieve relevant nodes
    const nodes = await retriever.retrieve({
      query: message
    });

    // Extract and format the response
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