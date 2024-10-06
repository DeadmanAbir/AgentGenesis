import Blog from '@/app/(app)/blog/blogfinal';
import Footer from '@/components/footer';

const Blogs = () => {
  return (
    <div className="container mt-32 font-semibold flex flex-col items-center gap-20 justify-center  ">
      <div className="text-6xl">Blogs</div>
      <div className="text-3xl">
        <Blog />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 dark:from-pink-500 to-orange-600 dark:to-amber-400"></span>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
