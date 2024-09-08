/* eslint-disable no-unused-vars */
import weaviate, {
  BaseHybridOptions,
  BaseNearOptions,
  BaseNearTextOptions,
  Collection,
  CollectionConfigCreate,
  ConnectToCustomOptions,
  FetchObjectsOptions,
  generateUuid5,
  ReplaceObject,
  UpdateObject,
  WeaviateClient,
  WeaviateReturn,
} from 'weaviate-client';

export interface WeaviateConnectionConfig {
  type: 'Cloud' | 'Local' | 'Custom';
  WEAVIATE_INSTANCE_URL?: string;
  WEAVIATE_INSTANCE_API_KEY?: string;
  customConfig?: ConnectToCustomOptions;
}

export class WeaviateDb {
  private client: WeaviateClient | null = null;
  private readonly config: WeaviateConnectionConfig;

  private constructor(config: WeaviateConnectionConfig) {
    this.config = config;
  }

  static async create(config: WeaviateConnectionConfig): Promise<WeaviateDb> {
    const instance = new WeaviateDb(config);
    await instance.initializeClient();
    return instance;
  }

  private async initializeClient(): Promise<void> {
    try {
      switch (this.config.type) {
        case 'Cloud':
          if (
            !this.config.WEAVIATE_INSTANCE_URL ||
            !this.config.WEAVIATE_INSTANCE_API_KEY
          ) {
            throw new Error(
              'Instance URL and API Key are required for Cloud connection.',
            );
          }
          this.client = await weaviate.connectToWeaviateCloud(
            this.config.WEAVIATE_INSTANCE_URL,
            {
              authCredentials: new weaviate.ApiKey(
                this.config.WEAVIATE_INSTANCE_API_KEY,
              ),
              headers: this.config.customConfig?.headers,
              timeout: this.config.customConfig?.timeout,
              skipInitChecks: this.config.customConfig?.skipInitChecks,
            },
          );
          break;
        case 'Local':
          this.client = await weaviate.connectToLocal({
            host: this.config.customConfig?.httpHost,
            port: this.config.customConfig?.httpPort,
            grpcPort: this.config.customConfig?.grpcPort,
            authCredentials: new weaviate.ApiKey(
              this.config.WEAVIATE_INSTANCE_API_KEY || '',
            ),
            headers: this.config.customConfig?.headers,
            timeout: this.config.customConfig?.timeout,
            skipInitChecks: this.config.customConfig?.skipInitChecks,
          });
          break;
        case 'Custom':
          if (!this.config.customConfig) {
            throw new Error(
              'Custom configuration is required for Custom connection.',
            );
          }
          this.client = await weaviate.connectToCustom({
            ...this.config.customConfig,
            authCredentials: new weaviate.ApiKey(
              this.config.WEAVIATE_INSTANCE_API_KEY || '',
            ),
          });
          break;
        default:
          throw new Error('Unsupported connection type.');
      }
    } catch (error) {
      console.error('Failed to initialize Weaviate client:', error);
      throw error;
    }
  }

  private getClientOrThrow(): WeaviateClient {
    if (!this.client) {
      throw new Error('Client not initialized.');
    }
    return this.client;
  }

  async getCollection(
    collectionName: string,
    opts?: FetchObjectsOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>> {
    const client = this.getClientOrThrow();
    return client.collections
      .get(collectionName)
      .query.fetchObjects({ ...opts });
  }

  async checkCollectionExists(collectionName: string): Promise<boolean> {
    const client = this.getClientOrThrow();
    return client.collections.exists(collectionName);
  }

  async deleteCollection(collectionName: string): Promise<void> {
    const exists = await this.checkCollectionExists(collectionName);
    if (exists) {
      const client = this.getClientOrThrow();
      await client.collections.delete(collectionName);
    }
  }

  async createCollection(
    props: CollectionConfigCreate<undefined, string>,
  ): Promise<Collection<undefined, string>> {
    const client = this.getClientOrThrow();
    return client.collections.create({ ...props });
  }

  async addDocuments(
    options: CollectionConfigCreate<undefined, string>,
    documents: string[],
    vectors?: number[][],
    ids?: string[],
  ): Promise<string[]> {
    const client = this.getClientOrThrow();

    if (!options.vectorizers && !vectors) {
      throw new Error(
        'Vectors are required when vectorizers are not provided.',
      );
    }

    await this.createCollection({ ...options });

    const documentIds =
      ids ?? documents.map((content) => generateUuid5(options.name, content));

    const batchSize = 100;
    const dataBatch = documents.map((document, index) => ({
      id: documentIds[index],
      vectors: options.vectorizers ? undefined : vectors![index],
      properties: { text: document },
    }));

    const collection = client.collections.get(options.name);
    for (let i = 0; i < dataBatch.length; i += batchSize) {
      await collection.data.insertMany(dataBatch.slice(i, i + batchSize));
    }

    return documentIds;
  }

  async fromCollection(
    type: 'VectorSearch',
    content: number[],
    collectionName: string,
    opts?: BaseNearOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>>;

  async fromCollection(
    type: 'TextSearch',
    content: string[] | string,
    collectionName: string,
    opts?: BaseNearTextOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>>;

  async fromCollection(
    type: 'HybridSearch',
    content: string,
    collectionName: string,
    opts?: BaseHybridOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>>;

  async fromCollection(
    type: 'ImageSearch',
    content: string | Buffer,
    collectionName: string,
    opts?: BaseNearOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>>;

  async fromCollection(
    type: 'ObjectSearch',
    content: string,
    collectionName: string,
    opts?: BaseNearOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>>;

  async fromCollection(
    type:
      | 'VectorSearch'
      | 'TextSearch'
      | 'HybridSearch'
      | 'ImageSearch'
      | 'ObjectSearch',
    content: number[] | string[] | string | Buffer,
    collectionName: string,
    opts?:
      | BaseNearOptions<undefined>
      | BaseNearTextOptions<undefined>
      | BaseHybridOptions<undefined>,
  ): Promise<WeaviateReturn<undefined>> {
    const client = this.getClientOrThrow();
    const myCollection = client.collections.get(collectionName);

    switch (type) {
      case 'VectorSearch':
        return myCollection.query.nearVector(
          content as number[],
          opts as BaseNearOptions<undefined>,
        );
      case 'TextSearch':
        return myCollection.query.nearText(
          content as string | string[],
          opts as BaseNearTextOptions<undefined>,
        );
      case 'HybridSearch':
        return myCollection.query.hybrid(
          content as string,
          opts as BaseHybridOptions<undefined>,
        );
      case 'ImageSearch':
        return myCollection.query.nearImage(
          content as string | Buffer,
          opts as BaseNearOptions<undefined>,
        );
      case 'ObjectSearch':
        return myCollection.query.nearObject(
          content as string,
          opts as BaseNearOptions<undefined>,
        );
      default:
        throw new Error('Invalid search type.');
    }
  }

  async updateCollection(
    type: 'Update',
    collectionName: string,
    objs: UpdateObject<undefined>,
  ): Promise<void>;

  async updateCollection(
    type: 'Replace',
    collectionName: string,
    objs: ReplaceObject<undefined>,
  ): Promise<void>;

  async updateCollection(
    type: 'Update' | 'Replace',
    collectionName: string,
    objs: UpdateObject<undefined> | ReplaceObject<undefined>,
  ): Promise<void> {
    const client = this.getClientOrThrow();
    const myCollection = client.collections.get(collectionName);

    if (type === 'Update') {
      await myCollection.data.update(objs as UpdateObject<undefined>);
    } else {
      await myCollection.data.replace(objs as ReplaceObject<undefined>);
    }
  }
}
