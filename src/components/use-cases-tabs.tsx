import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tabData = [
  {
    value: 'account',
    label: 'Account',
    content: 'Make changes to your account here.',
  },
  {
    value: 'password',
    label: 'Password',
    content: 'Change your password here.',
  },
];

const UseCasesTabs = () => {
  return (
    <div className="py-5 flex flex-col items-center justify-center">
      <div className="text-7xl font-semibold mb-4">Use Cases</div>
      <div className="text-lg mb-6">
        One platform, endless possibilities. See some of the use cases
      </div>
      <Tabs className="w-full">
        <TabsList className="w-full flex border-b p-0">
          {tabData.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              className={`relative h-10 w-full  rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary dark:data-[state=inactive]:bg-background  data-[state=active]:text-foreground data-[state=active]:shadow-none  }`}
              value={value}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map(({ value, content }) => (
          <TabsContent key={value} value={value}>
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default UseCasesTabs;
