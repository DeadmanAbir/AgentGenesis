import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import type { EmbedContentRequest } from '@google/generative-ai';

export interface GeminiAIEmbeddingsParams {
  model: string;

  removeNewLines?: boolean;

  apiKey: string;
}

export class GeminiEmbeddings {
  private apiKey: string;

  private model = 'embedding-001';

  private removeNewLines = true;

  private maxBatchSize = 100;

  private client: GenerativeModel;

  constructor(fields: GeminiAIEmbeddingsParams) {
    this.model = fields.model;

    this.apiKey = fields.apiKey;

    if (!this.apiKey || this.apiKey.length === 0) {
      throw new Error(
        'Please set an API key for Google GenerativeAI ' +
          'in the environment variable GEMINI_API_KEY ' +
          'or in the `apiKey` field of the ' +
          'GeminiEmbeddings constructor',
      );
    }

    this.client = new GoogleGenerativeAI(this.apiKey).getGenerativeModel({
      model: this.model,
    });
  }
  private chunkArray = <T>(arr: T[], chunkSize: number) =>
    arr.reduce((chunks, elem, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      const chunk = chunks[chunkIndex] || [];
      // eslint-disable-next-line no-param-reassign
      chunks[chunkIndex] = chunk.concat([elem]);
      return chunks;
    }, [] as T[][]);

  private convertToContent(text: string): EmbedContentRequest {
    const cleanedText = this.removeNewLines ? text.replace(/\n/g, ' ') : text;
    return {
      content: { role: 'user', parts: [{ text: cleanedText }] },
    };
  }

  private async embedSingleQueryContent(text: string): Promise<number[]> {
    const req = this.convertToContent(text);
    const res = await this.client.embedContent(req);
    return res.embedding.values ?? [];
  }

  private async embedMultipleDocumentsContent(
    documents: string[],
  ): Promise<number[][]> {
    const batchEmbedChunks: string[][] = this.chunkArray<string>(
      documents,
      this.maxBatchSize,
    );

    const batchEmbedRequests = batchEmbedChunks.map((chunk) => ({
      requests: chunk.map((doc) => this.convertToContent(doc)),
    }));
    const responses = await Promise.allSettled(
      batchEmbedRequests.map((req) => this.client.batchEmbedContents(req)),
    );

    const embeddings = responses.flatMap((res, idx) => {
      if (res.status === 'fulfilled') {
        return res.value.embeddings.map((e) => e.values || []);
      } 
        return Array(batchEmbedChunks[idx].length).fill([]);
    });

    return embeddings;
  }

  embedSingleQuery(document: string): Promise<number[]> {
    return this.embedSingleQueryContent(document);
  }

  embedMultipleDocuments(documents: string[]): Promise<number[][]> {
    return this.embedMultipleDocumentsContent(documents);
  }
}
