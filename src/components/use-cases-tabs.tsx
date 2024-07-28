import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const tabData = [
  {
    value: 'account',
    label: 'Account',
    content: '/dashboard1.webp',
  },
  {
    value: 'password',
    label: 'Password',
    content:
      'https://assets.lummi.ai/assets/QmerqxSqpqBcJSs17BVsQbhEARYGbwZL9VGj2x4QDGBJbm?auto=format&w=1500',
  },
  {
    value: 'account1',
    label: 'Account1',
    content: '/dashboard1.webp',
  },
  {
    value: 'password1',
    label: 'Password1',
    content:
      'https://assets.lummi.ai/assets/QmerqxSqpqBcJSs17BVsQbhEARYGbwZL9VGj2x4QDGBJbm?auto=format&w=1500',
  },
];

const UseCasesTabs = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center relative ">
      <div className="text-7xl font-semibold mb-4 z-30">Use Cases</div>
      <div className="text-lg mb-6 z-30">
        One platform, endless possibilities. See some of the use cases
      </div>
      <Tabs defaultValue="account" className="w-full z-30">
        <TabsList className="w-full flex border-b p-0 ">
          {tabData.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              className={`relative h-10 w-full  rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary dark:data-[state=inactive]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none`}
              value={value}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map(({ value, content }) => (
          <TabsContent key={value} value={value} className="">
            <Image
              src={content}
              alt={value}
              className="w-full h-auto"
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
