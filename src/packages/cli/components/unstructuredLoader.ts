import { UnstructuredClient } from 'unstructured-client';
import { PartitionResponse } from 'unstructured-client/sdk/models/operations';
import {
  PartitionParameters,
  Strategy,
} from 'unstructured-client/sdk/models/shared';
import * as fs from 'fs';

interface UnstructuredLoaderProps {
  apiKey: string;
  baseUrl?: string;
}

interface LoadUnstructuredDirectoryDataParams {
  filePath: string;
  fileName: string;
  options?: Omit<PartitionParameters, 'files'>;
  returnText?: boolean;
}

interface LoadUnstructuredFileDataParams {
  fileContent: Uint8Array;
  fileName: string;
  returnText?: boolean;
  options?: Omit<PartitionParameters, 'files'>;
}

export class UnstructuredLoader {
  private client: UnstructuredClient;

  constructor(props: UnstructuredLoaderProps) {
    const { apiKey, baseUrl } = props;

    if (!apiKey || apiKey.trim().length === 0) {
      throw new Error('No API key provided for Unstructured!');
    }

    this.client = new UnstructuredClient({
      ...(baseUrl && baseUrl.trim().length !== 0 ? { serverURL: baseUrl } : {}),
      security: {
        apiKeyAuth: apiKey,
      },
    });
  }

  async loadUnstructuredDirectoryData(
    params: LoadUnstructuredDirectoryDataParams,
  ) {
    const { filePath } = params;
    const fileContent = fs.readFileSync(filePath);
    return this.processFileData({ ...params, fileContent });
  }

  async loadUnstructuredFileData(params: LoadUnstructuredFileDataParams) {
    return this.processFileData(params);
  }

  private async processFileData({
    fileContent,
    fileName,
    options,
    returnText,
  }: LoadUnstructuredFileDataParams) {
    try {
      const res: PartitionResponse = await this.client.general.partition({
        partitionParameters: {
          files: {
            content: fileContent,
            fileName,
          },
          strategy: options?.strategy ?? Strategy.Auto,
          ...options,
        },
      });

      if (res.statusCode !== 200) {
        throw new Error(`Unexpected status code: ${res.statusCode}`);
      }

      if (!res.elements || res.elements.length === 0) {
        throw new Error('No elements returned in the response');
      }

      return returnText ? this.extractText(res.elements) : res.elements;
    } catch (error: any) {
      throw new Error(`Error processing file data: ${error.message}`);
    }
  }

  private extractText(elements: Array<{ [k: string]: any }>): string {
    return elements
      .map((el) => el.text)
      .filter(Boolean)
      .join('\n');
  }
}
