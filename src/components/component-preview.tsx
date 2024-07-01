import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReRankerDemo } from './DemoComponents/reRankerDemo';

interface ComponentPreviewProps {
  component?: string;
  code?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  component,
  code,
}) => {
  const renderComponent = () => {
    switch (component) {
      case 'accordion':
        return <ReRankerDemo />;
      default:
        return (
          <div className="flex items-center justify-center">
            Component does not exist
          </div>
        );
    }
  };

  return (
    <div className="component-preview">
      <Tabs defaultValue="Preview" className="w-full relative mt-6">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            value="Preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            value="code"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold border-2 rounded-lg p-20"
          value="Preview"
        >
          {renderComponent()}
        </TabsContent>
        <TabsContent value="code">{code}</TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentPreview;
