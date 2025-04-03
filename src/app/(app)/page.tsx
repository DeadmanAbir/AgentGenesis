import Banner from '@/components/banner';
import { Beam, Beam2 } from '@/components/beam';
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
import Link from 'next/link';
import Chatbot from '@/components/chatbot';
import StarBadge from '@/components/stars-badge';
import Features2 from '@/components/features-2';

const IndexPage = () => {
  return (
    <>
      <PageHeader className="relative z-30">
        <Beam />
        <Beam2 />
        <StarBadge />
        <div className="absolute inset-0 -z-10 h-full w-full dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_20%,transparent_120%)]"></div>

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
        <Features2 />
        <GridSection />
        <Chatbot /> {/* Integrate the Chatbot component */}
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;
