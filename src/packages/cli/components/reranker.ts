import { CohereClient } from 'cohere-ai';

interface DocumentInterface<
  Result extends Record<string, any> = Record<string, any>,
> {
  content: string;
  score: Result;
  id?: string; // Optional identifier for the document
}

interface CohereRerankProps {
  apiKey: string; // The API key to use
  model?: string; // The name of the model to use (default: "rerank-english-v3.0")
  topN?: number; // How many documents to return (default: document length)
  maxChunksPerDoc?: number; // The maximum number of chunks per document (default: 10)
}

export class CohereReranking {
  private model: string;
  private topN?: number;
  private client: CohereClient;
  private maxChunksPerDoc: number;

  constructor(props: CohereRerankProps) {
    const {
      apiKey,
      model = 'rerank-english-v3.0',
      topN,
      maxChunksPerDoc = 10,
    } = props;

    if (!apiKey || apiKey.length === 0) {
      throw new Error('No API key provided for Cohere-Rerank.');
    }

    this.client = new CohereClient({ token: apiKey });
    this.model = model;
    this.topN = topN;
    this.maxChunksPerDoc = maxChunksPerDoc;
  }

  async rankDocuments(
    documents: string[],
    query: string,
    options?: { returnDocuments: boolean },
  ): Promise<
    Array<DocumentInterface> | Array<{ index: number; relevanceScore: number }>
  > {
    const { results } = await this.client.rerank({
      model: this.model,
      query,
      documents,
      topN: this.topN ?? documents.length,
      maxChunksPerDoc: this.maxChunksPerDoc,
    });

    if (options?.returnDocuments) {
      return results.map((result) => ({
        content: documents[result.index],
        score: { relevanceScore: result.relevanceScore },
      }));
    } 
      return results.map((result) => ({
        index: result.index,
        relevanceScore: result.relevanceScore,
      }));
  }
}
