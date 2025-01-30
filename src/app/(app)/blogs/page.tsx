import Footer from '@/components/footer';
import { Blog } from '@/components/blog';

const Blogs = () => {
  return (
    <>
      <div className="container md:mt-32 mt-20 font-semibold flex flex-col items-center gap-20 ">
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
