import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ThirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="md:text-6xl text-4xl text-balance text-center">
          Loved by people all over the universe
        </div>
        <p className="max-w-[500px] text-center">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
      </div>
      <div className="relative   h-[700px] w-full  grid md:grid-cols-3 grid-cols-1 overflow-hidden rounded-lg ">
        <div className="hidden md:block">
          <Marquee vertical className="[--duration:5s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="hidden md:block">
          <Marquee vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        <Marquee vertical className="[--duration:5s]">
          {ThirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
