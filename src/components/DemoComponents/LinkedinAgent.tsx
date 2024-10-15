'use client';

import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { Bot, ChevronDown, ChevronUp, Eye, EyeOff, Info } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import moment from 'moment';
const LinkedinAgent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    inputValue: '',
    type: '',
    model: '',
    modelKey: '',
    proxyCurlKey: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [mdxContent, setMdxContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showModelKey, setShowModelKey] = useState<boolean>(false);
  const [showProxyKey, setShowProxyKey] = useState<boolean>(false);

  const handleClick = async () => {
    const { inputValue, type, model, modelKey, proxyCurlKey } = formData;

    if (!inputValue.trim() || !type || !model || !modelKey || !proxyCurlKey) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: inputValue,
          type,
          model,
          apiKey: modelKey,
          proxyUrlKey: proxyCurlKey,
        }),
      });
      const data = await response.json();
      const responseData =
        data.data?.output?.replace(/```html\n|```/g, '') ??
        data.data?.content?.replace(/```html\n|```/g, '');
      if (data.success === true) {
        setMdxContent(responseData || '');
        return;
      }
      if (data.status === 429) {
        setError(
          `It looks like you've reached your daily limit. Please check back in ${moment(data.data.reset).fromNow()}`,
        );
      } else {
        setError('Error processing request, please try again.');
      }
    } catch (e) {
      console.error('Error:', e);
      setError('Error processing request, please try again.');
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      inputValue: '',
      type: '',
      model: '',
      modelKey: '',
      proxyCurlKey: '',
    });
  };
  const reset = () => {
    setFormData({
      inputValue: '',
      type: '',
      model: '',
      modelKey: '',
      proxyCurlKey: '',
    });
    setError(null);
    setMdxContent('');
  };
  return (
    <div className="relative h-[400px] border rounded-md shadow-md dark:bg-black bg-gray-100">
      <div className="overflow-y-auto h-[340px] p-4 z-10">
        {!loading && !mdxContent && !error && (
          <div className="flex flex-col-reverse items-center justify-center h-full">
            <span className="text-xl tracking-wider">LinkedIn Agent</span>
            <Bot className="h-16 w-16" />
          </div>
        )}
        {loading ? (
          <div className="text-center flex flex-col gap-2 text-gray-500">
            <Skeleton className="w-full h-[60px] rounded-md dark:bg-neutral-700 bg-neutral-300" />
            <Skeleton className="w-full h-[60px] rounded-md" />
            <Skeleton className="w-full h-[60px] rounded-md dark:bg-neutral-700 bg-neutral-300" />
            <Skeleton className="w-full h-[60px] rounded-md" />
          </div>
        ) : (
          <>
            {error && (
              <div className="flex items-center justify-center flex-col h-full">
                <div className=" text-center  flex flex-col gap-2 items-center justify-center ">
                  <Image
                    src="/error.svg"
                    alt="error"
                    height={200}
                    width={200}
                  />
                  {error}
                </div>
                <Button className="mt-2" onClick={reset}>
                  Reset
                </Button>
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: mdxContent }} />
          </>
        )}
      </div>
      {mdxContent && (
        <div className="flex items-center justify-center mt-2">
          {' '}
          <Button onClick={reset}>Retry</Button>
        </div>
      )}
      {!error && !mdxContent && (
        <div className="flex items-center absolute bottom-0 w-full p-1 bg-white dark:bg-black">
          <Input
            name="inputValue"
            value={formData.inputValue}
            onChange={handleInputChange}
            placeholder="Enter LinkedIn URL..."
            className="flex-grow rounded-r-none focus-visible:ring-0"
          />
          <div className="flex items-center">
            <Button
              className="rounded-l-none bg-white text-black border-2 dark:bg-black dark:text-white hover:bg-slate-200 border-r-0 rounded-r-none"
              onClick={handleClick}
              disabled={
                loading ||
                !formData.type ||
                !formData.model ||
                !formData.modelKey ||
                !formData.inputValue ||
                !formData.proxyCurlKey
              }
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
            <Popover modal={true} open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <div className="border-2 h-10 px-1 py-2 flex items-center">
                  {open ? <ChevronDown /> : <ChevronUp />}
                </div>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                className="flex flex-col items-center gap-3 md:w-[500px] w-[300px]"
              >
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">Company</SelectItem>
                    <SelectItem value="profile">Profile</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, model: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                    <SelectItem value="gemini-1.5-flash">
                      gemini-1.5-flash
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center w-full gap-1 relative">
                  <Input
                    name="modelKey"
                    type={showModelKey ? 'text' : 'password'}
                    placeholder="Enter your LLM Api key"
                    value={formData.modelKey}
                    onChange={handleInputChange}
                  />
                  <div className="absolute right-7">
                    <Button
                      className="rounded-l-none"
                      onClick={() => setShowModelKey(!showModelKey)}
                    >
                      {showModelKey ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>We don't store your keys anywhere.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center w-full gap-1 relative">
                  <Input
                    name="proxyCurlKey"
                    type={showProxyKey ? 'text' : 'password'}
                    placeholder="Enter your Proxy Curl API key"
                    value={formData.proxyCurlKey}
                    onChange={handleInputChange}
                  />
                  <div className="absolute right-7">
                    <Button
                      className="rounded-l-none"
                      onClick={() => setShowProxyKey(!showProxyKey)}
                    >
                      {showProxyKey ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>We don't store your keys anywhere.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedinAgent;
