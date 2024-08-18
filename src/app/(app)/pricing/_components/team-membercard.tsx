import { Github, Globe, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Teammembercard = ({
  imageSrc,
  name,
  role,
  description,
  socials = {},
}: {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}) => {
  return (
    <div className="gap-5 grid md:grid-cols-2 grid-cols-1">
      <div className="w-full relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-50 animate-scan h-10"></div>

        <Image
          src={imageSrc}
          alt={`${name}-image`}
          height={400}
          width={400}
          className="object-cover rounded-lg transition duration-500 h-80 w-80"
        />
      </div>

      <div className="animate-text-animate-2 flex flex-col gap-3 justify-between items-center md:items-start">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="text-4xl font-bold">{name}</div>
          <div className="text-xl text-gray-500">{role}</div>
          <div className="text-lg text-gray-500 text-center md:text-left">
            {description}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {socials.github && (
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-zinc-800 rounded-xl text-white p-2 hover:scale-125 duration-200 transition-transform"
            >
              <Github />
            </Link>
          )}
          {socials.linkedin && (
            <Link
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-zinc-800 rounded-xl text-white p-2 hover:scale-125 duration-200 transition-transform"
            >
              <Linkedin />
            </Link>
          )}
          {socials.twitter && (
            <Link
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-zinc-800 rounded-xl text-white  p-2 hover:scale-125 duration-200 transition-transform"
            >
              <Twitter />
            </Link>
          )}
          {socials.website && (
            <Link
              href={socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-zinc-800 rounded-xl text-white p-2 hover:scale-125 duration-200 transition-transform"
            >
              <Globe />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teammembercard;
