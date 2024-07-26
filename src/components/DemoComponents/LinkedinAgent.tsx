'use client';

import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { ChevronUp } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// Function to find tables in the text
// Function to generate HTML tables

const LinkedinAgent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [mdxContent, setMdxContent] = useState<string>('');

  const handleClick = async () => {
    if (!inputValue.trim()) {
      return;
    }

    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch('/api/agent');
      const data = await response.json();
      console.log(data, 'response');
      setMdxContent(data.content);
    } catch (e) {
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative h-[400px] border rounded-md shadow-md">
      <div className="overflow-y-auto h-[340px] p-4">
        {loading && (
          <div className="text-center flex flex-col gap-2 text-gray-500">
            <Skeleton className="w-full h-[60px] rounded-md" />
            <Skeleton className="w-full h-[60px] rounded-md" />
            <Skeleton className="w-full h-[60px] rounded-md" />
            <Skeleton className="w-full h-[60px] rounded-md" />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: mdxContent }} />
      </div>
      <div className="flex items-center absolute bottom-0 w-full p-1 bg-white  dark:bg-black">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter profile URL or Company URL..."
          className="flex-grow rounded-r-none focus-visible:ring-0"
        />
        <div className="flex items-center">
          <Button
            className="rounded-l-none bg-white text-black border-2 dark:bg-black dark:text-white hover:bg-slate-200 border-r-0 rounded-r-none"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </Button>
          <Popover>
            <PopoverTrigger>
              <div className="border-2 h-10 px-1 py-2 flex items-center">
                <ChevronUp />
              </div>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              className="flex flex-col items-center gap-3 "
            >
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Input />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default LinkedinAgent;
