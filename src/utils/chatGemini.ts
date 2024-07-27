import {
  Content,
  CountTokensResponse,
  GenerateContentStreamResult,
  GenerativeModel,
  GoogleGenerativeAI,
  RequestOptions,
} from '@google/generative-ai';

interface ChatGeminiArgs {
  apiKey: string;
  model: string;
}

interface GeminiChatProps {
  prompt: string;
  stream?: boolean;
  systemInstruction?: string;
  options?: RequestOptions;
  context?: string;
  outputFormat?: string;
}

interface GeminiChatWithHistoryProps extends GeminiChatProps {
  chatHistory: Record<'model' | 'user', string>[];
  maxOutputTokens?: number;
}

interface ChatGeminiResponse {
  content: string;
  promptTokenCount: number | null;
  candidatesTokenCount: number | null;
}

interface ChatGeminiHistoryCountTokensProps {
  chatHistory: Record<'model' | 'user', string>[];
  options?: RequestOptions;
}

interface ChatGeminiCountTokensProps {
  prompt: string;
  options?: RequestOptions;
  context?: string;
  outputFormat?: string;
}

export class ChatGemini {
  private client: GoogleGenerativeAI;
  private model: string;

  constructor(props: ChatGeminiArgs) {
    const { apiKey, model } = props;
    if (!apiKey || apiKey.length === 0) {
      throw new Error('No API key provided for Gemini AI.');
    }
    this.client = new GoogleGenerativeAI(apiKey);
    this.model = model;
  }

  async chat(
    props: GeminiChatProps,
  ): Promise<ChatGeminiResponse | GenerateContentStreamResult> {
    const {
      prompt,
      stream = false,
      options,
      systemInstruction,
      context,
      outputFormat,
    } = props;

    const client = this.createClient(this.model, systemInstruction, options);

    const content = this.createContext(prompt, context, outputFormat);

    if (!stream) {
      const result = await client.generateContent(content);
      const response = await result.response;
      const text = await response.text();

      return {
        content: text.replace('```json\n', '').replace('\n```', '') ?? '',
        promptTokenCount: response?.usageMetadata?.promptTokenCount ?? null,
        candidatesTokenCount:
          response?.usageMetadata?.candidatesTokenCount ?? null,
      };
    }

    const result = await client.generateContentStream(content);
    return result;
  }

  async chatWithHistory(
    props: GeminiChatWithHistoryProps,
  ): Promise<ChatGeminiResponse | GenerateContentStreamResult> {
    const {
      prompt,
      stream = false,
      options,
      systemInstruction,
      context,
      outputFormat,
      chatHistory,
      maxOutputTokens,
    } = props;

    const client = this.createClient(this.model, systemInstruction, options);

    const content = this.createContext(prompt, context, outputFormat);

    const history = this.createChatHistory(chatHistory);

    const chat = client.startChat({
      history,
      generationConfig: {
        maxOutputTokens,
      },
    });

    if (!stream) {
      const result = await chat.sendMessage(content);
      const response = await result.response;
      const text = await response.text();

      return {
        content: text.replace('```json\n', '').replace('\n```', '') ?? '',
        promptTokenCount: response?.usageMetadata?.promptTokenCount ?? null,
        candidatesTokenCount:
          response?.usageMetadata?.candidatesTokenCount ?? null,
      };
    }

    const result = await chat.sendMessageStream(content);
    return result;
  }

  async countChatHistoryTokens(
    props: ChatGeminiHistoryCountTokensProps,
  ): Promise<CountTokensResponse> {
    const { options, chatHistory } = props;

    const client = this.createClient(this.model, undefined, options);

    const history = this.createChatHistory(chatHistory);
    const chat = client.startChat({
      history,
    });

    const countResult = await client.countTokens({
      generateContentRequest: { contents: await chat.getHistory() },
    });

    return countResult;
  }

  async countTokens(
    props: ChatGeminiCountTokensProps,
  ): Promise<CountTokensResponse> {
    const { prompt, context, outputFormat, options } = props;

    const client = this.createClient(this.model, undefined, options);

    const content = this.createContext(prompt, context, outputFormat);

    const result = await client.countTokens(content);

    return result;
  }

  private createChatHistory(
    chatHistory: Record<'model' | 'user', string>[],
  ): Content[] {
    return chatHistory.flatMap((entry) => [
      { role: 'user' as const, parts: [{ text: entry.user }] },
      { role: 'model' as const, parts: [{ text: entry.model }] },
    ]);
  }

  private createClient(
    model: string,
    systemInstruction?: string,
    options?: RequestOptions,
  ): GenerativeModel {
    return this.client.getGenerativeModel({
      model,
      systemInstruction,
      ...options,
    });
  }

  private createContext(
    prompt: string,
    context?: string,
    outputFormat?: string,
  ): string {
    let content = prompt;

    if (context) {
      content += `\ncontext:\n${context}`;
    }

    if (outputFormat) {
      content += `\noutput format:\n${outputFormat}`;
    }

    return content;
  }
}
