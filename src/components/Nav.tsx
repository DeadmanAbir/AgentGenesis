import Link from 'next/link';
import { getPublication } from '@/lib/publication';
import Container from '@/components/Container';

export default async function Nav() {
  const publication = await getPublication();

  return (
    <nav className="py-8">
      <Container className="max-w-7xl flex justify-between items-center flex-col md:flex-row">
        <p className="text-center mb-4 md:mb-0">
          <Link
            href="/"
            className="text-3xl font-bold text-zinc-900 dark:text-white hover:text-zinc-900 dark:hover:text-gray-100 drop-shadow-[0_2px_0px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_0px_rgba(0,0,0,1)]"
          >
            {publication ? publication.title : 'Loading...'}
          </Link>
        </p>
        <ul className="flex m-0">
          {publication.preferences?.navbarItems?.map((item) => (
            <li key={item.id} className="mr-6">
              <Link
                href={item.url.replace(
                  `https://${process.env.NEXT_PUBLIC_HASHNODE_HOST}`,
                  '',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
