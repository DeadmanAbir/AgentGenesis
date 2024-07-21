'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

function LinkedinAgent() {
  const [text, setText] = React.useState<string>('LinkedinAgent Click Here');

  const handleClick = async () => {
    setText('Loading...');
    try {
      const response = await fetch('/api/agent');
      const data = await response.json();
      setText(data.data);
    } catch (e: any) {
      setText(e.message);
    }
  };

  return (
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      {text}
    </Button>
  );
}

export default LinkedinAgent;
