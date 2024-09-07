import { ClientOptions, OpenAI as OpenAIClient } from 'openai';

export interface OpenAIEmbeddingsParams {
  modelName?: string;
  batchSize?: number;
  stripNewLines?: boolean;
  apiKey?: string;
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export class OpenAIEmbeddingClass {
  private modelName: string;
  private batchSize: number;
  private stripNewLines: boolean;
  private apiKey: string;
  private client: OpenAIClient;

  constructor(props: OpenAIEmbeddingsParams) {
    const { modelName, batchSize, stripNewLines, apiKey } = props;
    this.modelName = modelName ?? 'text-embedding-ada-002';
    this.batchSize = batchSize ?? 512;
    this.stripNewLines = stripNewLines ?? true;
    this.apiKey = apiKey ?? '';

    if (!this.apiKey) {
      throw new Error('API key is required');
    }

    const clientConfig: ClientOptions = {
      apiKey: this.apiKey,
    };

    this.client = new OpenAIClient(clientConfig);
  }

  async embedDocuments(texts: string[]): Promise<number[][]> {
    const batches = chunkArray(
      this.stripNewLines ? texts.map((t) => t.replace(/\n/g, ' ')) : texts,
      this.batchSize,
    );

    const batchRequests = batches.map((batch) => {
      const params = {
        model: this.modelName,
        input: batch,
      };
      return this.client.embeddings.create(params);
    });

    const batchResponses = await Promise.all(batchRequests);

    const embeddings: number[][] = [];
    for (const batchResponse of batchResponses) {
      for (const embedding of batchResponse.data) {
        embeddings.push(embedding.embedding);
      }
    }
    return embeddings;
  }

  async embedText(text: string): Promise<number[]> {
    const params = {
      model: this.modelName,
      input: this.stripNewLines ? text.replace(/\n/g, ' ') : text,
    };
    const response = await this.client.embeddings.create(params);
    return response.data[0].embedding;
  }
}
