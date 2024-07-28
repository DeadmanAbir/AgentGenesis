import OpenAI from 'openai';
import { ClientOptions } from 'openai';
import { RequestOptions } from 'openai/core.mjs';
import {
  ChatCompletion,
  ChatCompletionMessageParam,
  ChatModel,
} from 'openai/resources/index.mjs';
import { ChatCompletionChunk } from 'openai/src/resources/index.js';
import { Stream } from 'openai/streaming.mjs';

type ChatOpenAICompletionProps = {
  stream?: boolean;
  max_tokens?: number;
};
interface ChatOpenAiArgs extends ClientOptions {
  model:
    | ChatModel
    | 'text-moderation-latest'
    | 'text-moderation-stable'
    | 'text-moderation-007';
}

interface OpenAICallProps {
  prompt: string;
  context?: string;
  systemInstruction?: string;
  outputFormat?: string;
  chatHistory?: Record<'assistant' | 'user', string>[];
  temperature?: number;
  options?: ChatOpenAICompletionProps;
}

interface ChatCompletionOutput {
  prompt_tokens: number;
  completion_tokens: number;
  output: string;
}

interface OpenAiThreatDetectionProps {
  input: string;
  options?: RequestOptions;
}

export class ChatOpenAI {
  private client: OpenAI;
  private model:
    | ChatModel
    | 'text-moderation-latest'
    | 'text-moderation-stable'
    | 'text-moderation-007';

  constructor(props: ChatOpenAiArgs) {
    const { apiKey, model } = props;

    if (!apiKey || apiKey.length === 0) {
      throw new Error('No API key provided for OpenAI.');
    }

    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async chat(
    props: OpenAICallProps,
  ): Promise<
    Stream<ChatCompletionChunk> | ChatCompletion | ChatCompletionOutput
  > {
    const {
      prompt,
      context,
      outputFormat,
      options,
      chatHistory,
      temperature,
      systemInstruction,
    } = props;

    const userMessages: Array<ChatCompletionMessageParam> = [];

    if (systemInstruction) {
      userMessages.push({ role: 'system', content: systemInstruction });
    }

    if (chatHistory && chatHistory.length > 0) {
      chatHistory.forEach((chat) => {
        userMessages.push({ role: 'user', content: chat.user });
        userMessages.push({ role: 'assistant', content: chat.assistant });
      });
    }

    const content = this.createContext(prompt, context, outputFormat);
    userMessages.push({ role: 'user', content });

    const chatCompletion = await this.client.chat.completions.create({
      messages: userMessages,
      model: this.model,
      temperature: temperature ?? 0.5,
      ...options,
    });

    if (!options?.stream) {
      return {
        // @ts-ignore
        prompt_tokens: chatCompletion.usage?.prompt_tokens ?? 0,
        // @ts-ignore
        completion_tokens: chatCompletion.usage?.completion_tokens ?? 0,
        output:
          // @ts-ignore
          chatCompletion.choices[0].message?.content
            .replace('```json\n', '')
            .replace('\n```', '') ?? '',
      };
    }

    return chatCompletion;
  }

  async detectThreat(
    props: OpenAiThreatDetectionProps,
  ): Promise<OpenAI.Moderations.ModerationCreateResponse> {
    const { input, options } = props;

    const moderation = await this.client.moderations.create({
      input,
      model: this.model,
      ...options,
    });

    return moderation;
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
