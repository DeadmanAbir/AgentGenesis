import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

const questions = [
  'What is AI?',
  'How does machine learning work?',
  'Tell me about Next.js',
];

const AnimatedChat = () => {
  const [messages, setMessages] = useState<
    { role: 'user' | 'ai'; text: string }[]
  >([]);
  const [input, setInput] = useState('');
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (index < questions.length) {
      const timer = setTimeout(() => {
        const question = questions[index];
        setInput(question);
        setMessages((prev) => [...prev, { role: 'user', text: question }]);
        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false);
          setMessages((prev) => [
            ...prev,
            { role: 'ai', text: `This is the AI response to: "${question}"` },
          ]);
          setIndex((prev) => prev + 1);
        }, 2000);
      }, 3000);

      return () => clearTimeout(timer);
    }
    // Restart animation when all questions are answered
    const restartTimer = setTimeout(() => {
      setMessages([]);
      setIndex(0);
      setInput('');
    }, 5000);

    return () => clearTimeout(restartTimer);
  }, [index]);

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto bg-neutral-900 h-80 relative p-4   flex flex-col">
        <div className="flex-1 space-y-4   h-80 overflow-y-auto p-3">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-xs ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-green-600 text-white'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end"
            >
              <div className="bg-green-600 text-white rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: '600ms' }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="sticky bottom-0 w-full bg-neutral-800 p-2 mt-4 flex items-center">
          <Input value={input} readOnly className="mr-2" />
          <Button disabled>Ask AI</Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChat;
