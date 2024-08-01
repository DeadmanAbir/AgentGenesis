import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const tabData = [
  {
    value: 'codesnippets',
    label: 'Code Snippets',
    content: '/snippet.png',
    text: 'Explore various code snippets for different use cases.',
  },
  {
    value: 'chatmodels',
    label: 'Chat Models',
    content: '/chatModels.png',
    text: 'Learn about different chat models and their applications.',
  },
  {
    value: 'aiagents',
    label: 'AI Agents',
    content: '/componentpics/linkedin agent dark.png',
    text: 'Discover AI agents and how they can assist in various tasks.',
  },
];

const UseCasesTabs = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center relative ">
      <div className="md:text-7xl text-4xl text-center font-semibold mb-4 z-30">
        Use Cases
      </div>
      <div className="text-lg mb-6 z-30 text-center">
        One platform, endless possibilities. See some of the use cases
      </div>
      <Tabs defaultValue="codesnippets" className="w-full z-30">
        <TabsList className="w-full flex border-b p-0 ">
          {tabData.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              className={`relative h-10 w-full rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary dark:data-[state=inactive]:bg-background data-[state=inactive]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-none`}
              value={value}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map(({ value, content, text }) => (
          <TabsContent
            key={value}
            value={value}
            className="rounded-xl p-4 mt-5"
          >
            <p className="md:text-lg text-sm mb-4 w-full text-center">{text}</p>
            <Image
              src={content}
              alt={value}
              className="w-full h-auto rounded-2xl border-4 p-2   shadow-xl shadow-neutral-300 dark:shadow-neutral-700 bg-center "
              height={800}
              width={800}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default UseCasesTabs;
