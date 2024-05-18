import SiteHeader from '@/components/site-header';
import React from 'react';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SiteHeader />

      {children}
    </section>
  );
}
