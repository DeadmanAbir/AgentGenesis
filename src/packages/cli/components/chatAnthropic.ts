import Anthropic from '@anthropic-ai/sdk';
import { ClientOptions } from '@anthropic-ai/sdk';
import {
  MessageParam,
  MessageStream,
} from '@anthropic-ai/sdk/resources/messages.mjs';

interface ChatAnthropicConfig extends ClientOptions {
  model:
    | 'claude-3-5-sonnet-20240620'
    | 'claude-3-opus-20240229'
    | 'claude-3-sonnet-20240229'
    | 'claude-3-haiku-20240307'
    | 'claude-2.1'
    | 'claude-2.0'
    | 'claude-instant-1.2'
    | (string & {});
}

interface AnthropicMessageOptions {
  chatHistory?: Array<{ assistant: string; user: string }>;
  prompt: string;
  stream?: boolean;
  outputFormat?: string;
  context?: string;
  maxTokens?: number;
  temperature?: number;
}

interface AnthropicMessageResult {
  text: string;
  inputTokens: number;
  outputTokens: number;
}

export class ChatAnthropic {
  private client: Anthropic;
  private model: string;

  constructor(config: ChatAnthropicConfig) {
    const { apiKey, model } = config;

    if (!apiKey || apiKey.length === 0) {
      throw new Error('No API key provided for Anthropic AI.');
    }

    this.client = new Anthropic({ apiKey, ...config });
    this.model = model;
  }

  async message(
    options: AnthropicMessageOptions,
  ): Promise<AnthropicMessageResult | MessageStream> {
    const {
      chatHistory,
      prompt,
      stream,
      context,
      outputFormat,
      maxTokens,
      temperature,
    } = options;
    const userMessages: MessageParam[] = [];

    if (chatHistory && chatHistory.length > 0) {
      chatHistory.forEach((chat) => {
        userMessages.push({ role: 'user', content: chat.user });
        userMessages.push({ role: 'assistant', content: chat.assistant });
      });
    }

    const messageContent = this.buildMessageContent(
      prompt,
      context,
      outputFormat,
    );
    userMessages.push({ role: 'user', content: messageContent });

    if (!stream) {
      const message = await this.client.messages.create({
        messages: userMessages,
        model: this.model,
        max_tokens: maxTokens ?? 1024,
        temperature: temperature ?? 1.0,
      });

      return {
        text:
          // @ts-ignore
          message.content[0].text
            .replace('```json\n', '')
            .replace('\n```', '') ?? '',
        inputTokens: message.usage.input_tokens,
        outputTokens: message.usage.output_tokens,
      };
    }

    const messageStream = await this.client.messages.stream({
      messages: userMessages,
      model: this.model,
      max_tokens: maxTokens ?? 1024,
      temperature: temperature ?? 1.0,
    });

    return messageStream;
  }

  private buildMessageContent(
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
