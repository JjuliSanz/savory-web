import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-3xl font-bold">SAVORY</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className={`mb-4 ${pathname === '/usuarios' ? 'bg-gray-700' : ''}`}>
            <Link href="/usuarios">
              <a className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">
                Usuarios
              </a>
            </Link>
          </li>
          <li className={`mb-4 ${pathname === '/menu' ? 'bg-gray-700' : ''}`}>
            <Link href="/menu">
              <a className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">
                Menu
              </a>
            </Link>
          </li>
          <li className={`mb-4 ${pathname === '/secciones' ? 'bg-gray-700' : ''}`}>
            <Link href="/secciones">
              <a className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">
                Secciones
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
