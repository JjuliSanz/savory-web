import { SadIcon } from '@/assets/icons/SadIcon';
import Link from 'next/link';

 
export default function NotFound() {
  return (
    <main className="ml-64 w-full h-screen pt-10 flex flex-col items-center gap-2">
      <SadIcon className="w-10 h-10 text-marron" />
      <h2 className="text-marron text-xl font-semibold">404 Not Found</h2>
      <p className='text-marron-claro text-lg font-medium'>Could not find the requested invoice.</p>
      <Link
        href="/dashboard?category=Promociones"
        className="mt-4 rounded-md border border-marron bg-transparent px-4 py-2 text-sm text-marron transition-colors hover:bg-marron hover:text-blanco-oscuro"
      >
        Go Back
      </Link>
    </main>
  );
}