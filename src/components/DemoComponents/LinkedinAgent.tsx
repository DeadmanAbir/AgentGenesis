'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import Markdown from 'react-markdown';
interface Message {
  text: string;
  isUser: boolean;
}

function LinkedinAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    if (!inputValue.trim()) {
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, isUser: true },
    ]);
    setInputValue('');
    setLoading(true); // Start loading

    try {
      const response = await fetch('/api/agent');
      const data = await response.json();
      console.log(data, 'response');

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.content, isUser: false },
      ]);
    } catch (e) {
      console.log('Erro');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative h-[400px] border rounded-md shadow-md">
      <div className="overflow-y-auto h-[340px] p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md max-w-[70%] ${
              message.isUser
                ? 'bg-black dark:bg-neutral-600 text-white self-end ml-auto w-fit'
                : 'bg-black dark:bg-neutral-700 text-white mr-auto w-fit'
            }`}
          >
            <Markdown>{message.text}</Markdown>
          </div>
        ))}
        {loading && (
          <div className="text-center text-gray-500">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </div>
        )}
      </div>
      <div className="flex items-center absolute bottom-0 w-full p-1 bg-white">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter profile URL or Company URL..."
          className="flex-grow rounded-r-none focus-visible:ring-0"
        />
        <Button
          className="rounded-l-none"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
}

export default LinkedinAgent;
