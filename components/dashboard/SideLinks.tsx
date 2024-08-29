"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-4">
      <li
        className={`rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
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
        className={`rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 ${
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
