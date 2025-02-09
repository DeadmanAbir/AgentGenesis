import Footer from '@/components/footer';
import TeamCard from './_components/team-card';

const About = () => {
  return (
    <>
      <div className="container my-40  flex flex-col items-center gap-2 justify-center  ">
        {/* <div className="md:text-6xl text-4xl pt-8 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
        About
        </div> */}
        <div className="w-full  ">
          <div className="md:text-6xl text-4xl py-10 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-600 dark:to-gray-400">
            Meet the team
          </div>
          <TeamCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
