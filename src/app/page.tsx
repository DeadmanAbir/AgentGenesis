'use client';
import { useEffect, useState } from 'react';
import { JoinTheWaitList } from './_components/joinTheWaitlist';
import ThankYouDialog from './_components/thankYouDialog';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <ThankYouDialog />
      <JoinTheWaitList />
    </>
  );
}
