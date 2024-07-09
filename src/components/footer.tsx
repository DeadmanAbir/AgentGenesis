const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r absolute inset-0 from-zinc-900 via-zinc-700 to-zinc-900 h-[1.5px] rounded-full "></div>
      <div className="max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between gap-7  items-start md:p-20 p-10">
        <div>
          <div className="text-2xl font-semibold">AgentGenesis</div>
          <div>@2024</div>
        </div>
        <div className="grid grid-cols-3  gap-10 items-start ">
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>{' '}
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 ">
        AGENTGENESIS
      </p>
    </div>
  );
};

export default Footer;
