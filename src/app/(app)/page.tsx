import Banner from '@/components/banner';
import { Beam } from '@/components/beam';
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
      <PageHeader className=" relative z-30  ">
        <Beam />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] dark:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_200%)]"></div>
        <PageHeaderHeading className="z-20">
          Generate Images, Text and Videos with AI
        </PageHeaderHeading>
        <PageHeaderDescription className="z-20">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions className="z-20">
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
      <div className="container relative">
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
