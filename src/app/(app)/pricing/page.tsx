import Footer from '@/components/footer';
import Faq from './_components/faq';
import PricingCard from './_components/pricing-card';
import TeamCard from './_components/team-card';

const Pricing = () => {
  return (
    <div className="container my-40  flex flex-col items-center gap-2 justify-center  ">
      <div className="md:text-6xl text-4xl pt-8 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
        The perfect pricing to power your AI application development.
      </div>
      <p className="text-center tracking-wide pb-8">
        Straightforward pricing that fits your AI development needs. Suit the
        plan that suits you best and get started today.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-5 gap-5 ">
        <PricingCard
          title="Tools & Agents"
          description="Pause or cancel anytime"
          // price="$3499/mo"
          details="Fully customized AI agents built end-to-end, tailored to your specific needs, complete with the tools required to achieve your goals."
          features={[
            'Custom tool integration',
            'End-to-end development',
            'Highly efficient workflows',
            'Integrated security measures',
            'Tailored to your specific needs',
          ]}
          buttonText="Contact Us"
        />

        <PricingCard
          title="RAG Model Applications"
          description="Pause or cancel anytime"
          // price="$3499/mo"
          details="Comprehensive end-to-end RAG models, optimized for maximum efficiency and integrated security, tailored to your specific needs."
          features={[
            'Custom RAG model development',
            'Optimized for performance',
            'Integrated security protocols',
            'Scalable solutions',
            'Tailored to your specific needs',
          ]}
          buttonText="Conract Us"
        />

        <PricingCard
          title="Custom Solutions"
          description="Pause or cancel anytime"
          // price="$3499/mo"
          details="Your vision, our expertise. We craft highly customized AI applications, including multi-agent systems, RAG solutions, and more, tailored to meet your exact needs."
          features={[
            'Bespoke AI development',
            'Multi-agent system integration',
            'Custom RAG model solutions',
            'Tailored to specific business needs',
            'Ongoing support and optimization',
          ]}
          buttonText="Contact Us"
        />
      </div>
      <div className="w-full my-40  ">
        <div className="md:text-6xl text-4xl py-8 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
          Frequently asked questions{' '}
        </div>
        <Faq />
      </div>
      <div className="w-full  ">
        <div className="md:text-6xl text-4xl py-10 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
          Meet the team
        </div>
        <TeamCard />
      </div>
      <div className="container relative">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
