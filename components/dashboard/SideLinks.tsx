"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideLinks = () => {
  const pathname = usePathname();
  return (
    <ul>
      <li
        className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
          pathname === "/dashboard/usuarios"
            ? "bg-blanco-oscuro text-marron"
            : "text-blanco-oscuro"
        }`}
      >
        <Link
          href="/dashboard/usuarios"
          className="block py-2 px-4 text-xl font-medium"
        >
          Usuarios
        </Link>
      </li>
      <li
        className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
          pathname === "/dashboard"
            ? "bg-blanco-oscuro text-marron"
            : "text-blanco-oscuro"
        }`}
      >
        <Link href="/dashboard" className="block py-2 px-4 text-xl font-medium">
          Menu
        </Link>
      </li>
      <li
        className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
          pathname === "/dashboard/secciones"
            ? "bg-blanco-oscuro text-marron"
            : "text-blanco-oscuro"
        }`}
      >
        <Link
          href="/dashboard/secciones"
          className="block py-2 px-4 text-xl font-medium"
        >
          Secciones
        </Link>
      </li>
      <li
        className={`mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
          pathname === "/dashboard/addProduct"
            ? "bg-blanco-oscuro text-marron"
            : "text-blanco-oscuro"
        }`}
      >
        <Link
          href="/dashboard/addProduct"
          className="block py-2 px-4 text-xl font-medium"
        >
          Agregar Producto
        </Link>
      </li>
    </ul>
  );
};

export default SideLinks;
