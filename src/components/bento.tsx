const BentoGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="md:text-6xl text-4xl text-balance text-center">
          Loved by people all over the universe
        </div>
        <p className="max-w-[500px] text-center">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 w-full py-10">
        <div className="bg-yellow-200 col-span-1 md:col-span-4 h-[500px]">
          1
        </div>
        <div className="bg-red-200 col-span-1 md:col-span-2 h-[500px]">2</div>
        <div className="bg-green-200 col-span-1 md:col-span-3 h-[300px]">3</div>
        <div className="bg-pink-200 col-span-1 md:col-span-3 h-[300px]">4</div>
      </div>
    </div>
  );
};

export default BentoGrid;
