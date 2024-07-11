import Banner from '@/components/banner';
import Footer from '@/components/footer';
import GridSection from '@/components/grid-section';
import { Icons } from '@/components/icons';
import ImageDisplay from '@/components/image-display';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import TestimonialSection from '@/components/testimonial-section';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <>
      <div className="container relative mt-20">
        <PageHeader>
          <PageHeaderHeading>
            Generate Images, Text and Videos with AI
          </PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/docs" className={cn(buttonVariants())}>
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
        <ImageDisplay />
        <TestimonialSection />
        <GridSection />
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;
