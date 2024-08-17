import Faq from './_components/faq';
import PricingCard from './_components/pricing-card';
import TeamCard from './_components/team-card';

const Pricing = () => {
  return (
    <div className="container my-40  flex flex-col items-center gap-2 justify-center  ">
      <div className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
        The right price for you, with maximum value
      </div>
      <p className="text-center tracking-wide">
        Simple pricing that makes sense for your business. No hidden fees.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-5 gap-5 ">
        <PricingCard
          title="Components"
          description="pause or cancel anytime"
          price="$3499/mo"
          details="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
          features={[
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
          ]}
          buttonText="BUY"
        />
        <PricingCard
          title="Components"
          description="pause or cancel anytime"
          price="$3499/mo"
          details="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
          features={[
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
          ]}
          buttonText="BUY"
        />
        <PricingCard
          title="Components"
          description="pause or cancel anytime"
          price="$3499/mo"
          details="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
          features={[
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
            'One component at a time',
          ]}
          buttonText="BUY"
        />
      </div>
      <div className="w-full my-40  ">
        <div className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
          Frequently asked questions{' '}
        </div>
        <Faq />
      </div>
      <div className="w-full  ">
        <div className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
          Meet the team
        </div>
        <TeamCard />
      </div>
    </div>
  );
};

export default Pricing;
