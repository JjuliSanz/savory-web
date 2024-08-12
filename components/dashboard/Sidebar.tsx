
import React from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { signOut } from "@/auth";

const Sidebar: React.FC = () => {
  // const pathname = usePathname();

  return (
    <div className="min-h-screen w-56 bg-marron flex flex-col fixed">
      <div className="flex items-center justify-center h-20 border-b border-blanco-oscuro">
        <Link href="/">
          <h1 className="text-3xl text-blanco-oscuro font-bold">SAVORY</h1>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li
            // className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
            //   pathname === "/dashboard/usuarios"
            //     ? "bg-blanco-oscuro text-marron"
            //     : "text-blanco-oscuro"
            // }`}
            className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron"
          >
            <Link
              href="/dashboard/usuarios"
              className="block py-2 px-4 text-xl font-medium"
            >
              Usuarios
            </Link>
          </li>
          <li
            // className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
            //   pathname === "/dashboard"
            //     ? "bg-blanco-oscuro text-marron"
            //     : "text-blanco-oscuro"
            // }`}
            className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron"
          >
            <Link
              href="/dashboard"
              className="block py-2 px-4 text-xl font-medium"
            >
              Menu
            </Link>
          </li>
          <li
            // className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
            //   pathname === "/dashboard/secciones"
            //     ? "bg-blanco-oscuro text-marron"
            //     : "text-blanco-oscuro"
            // }`}
            className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron"
          >
            <Link
              href="/dashboard/secciones"
              className="block py-2 px-4 text-xl font-medium"
            >
              Secciones
            </Link>
          </li>
          <li
            // className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
            //   pathname === "/dashboard/addProduct"
            //     ? "bg-blanco-oscuro text-marron"
            //     : "text-blanco-oscuro"
            // }`}
            className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron"
          >
            <Link
              href="/dashboard/addProduct"
              className="block py-2 px-4 text-xl font-medium"
            >
              Agregar Producto
            </Link>
          </li>
        </ul>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Sidebar;
