'use client'; // Mark this file as a Client Component
import { useEffect } from 'react';
import Banner from '@/components/banner';
import { Beam, Beam2 } from '@/components/beam';
import Features from '@/components/features';
import Footer from '@/components/footer';
import GridSection from '@/components/grid-section';
import { Icons } from '@/components/icons';
import VideoDisplay from '@/components/video-display';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';

const IndexPage = () => {
  useEffect(() => {
    // Create and append the configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "CgIoEqUF_3FxcQasT8MFb",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    // Create and append the chatbot script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://www.chatbase.co/embed.min.js';
    chatbotScript.setAttribute('chatbotId', 'CgIoEqUF_3FxcQasT8MFb');
    chatbotScript.setAttribute('domain', 'www.chatbase.co');
    chatbotScript.setAttribute('defer', '');
    document.body.appendChild(chatbotScript);

    // Cleanup function to remove scripts on unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(chatbotScript);
    };
  }, []);

  return (
    <>
      <PageHeader className=" relative z-30  ">
        <Beam />
        <Beam2 />
        <div className="absolute inset-0 -z-10 h-full w-full  dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:30px_30px]  [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_20%,transparent_120%)]"></div>
        <div className="py-1 text-sm px-5 bg-neutral-700 rounded-full text-white flex items-center gap-2 group  hover:shadow-yellow-500 dark:hover:shadow-yellow-500 dark:shadow-slate-500 shadow-slate-300 cursor-pointer shadow-[0_5px_50px_rgba(8,_112,_184,_0.7)]">
          {' '}
          <Link
            href="https://github.com/DeadmanAbir/AgentGenesis"
            target="_blank"
          >
            We are Open-Source. Star Us
          </Link>{' '}
          <Star
            className="h-4 w-4 group-hover:scale-125 transition duration-300"
            fill="yellow"
          />
        </div>
        <PageHeaderHeading className="z-20 tracking-wide">
          Handy AI Components for Developers
        </PageHeaderHeading>
        <PageHeaderDescription className="z-20">
          Seamlessly build custom RAG flows and AI agents using open-source,
          copy-paste components.
        </PageHeaderDescription>
        <PageActions className="z-20">
          <Link href="/components" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <div className="container relative">
        <VideoDisplay />
        <Features />
        <GridSection />
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;
