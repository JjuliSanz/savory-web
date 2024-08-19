"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AnimatePresence mode="sync">
      <nav className="w-full h-fit bg-negro  z-50 overflow-x-hidden py-2 px-2 sm:px-4">
        <ul className="w-full max-w-full px-2 h-full flex justify-between text-xl font-bold bedaFont text-blanco relative">
          {/* HOME */}
          <li>
            <Link
              href="/"
              className="w-fit hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70"
            >
              SAVORY
            </Link>
          </li>
          {/* DESKTOP MENU */}
          <li>
            <Link
              href="/menu?category=Promociones"
              className="w-fit hidden sm:block hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70"
            >
              MENÚ
            </Link>
          </li>
          {/* ABOUT US */}
          <li>
            <Link
              href="/#nosotros"
              className="w-fit hidden sm:block hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70"
            >
              NOSOTROS
            </Link>
          </li>
          {/* CONTACT */}
          <li>
            <Link
              href="/#info"
              className="w-fit hidden sm:block hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70"
            >
              CONTACTO
            </Link>
          </li>
          {/* GALLERY */}
          <li>
            <Link
              href="/#galeria"
              className="w-fit hidden sm:block hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70"
            >
              GALERÍA
            </Link>
          </li>
          {/* MOBILE MENU ICON */}
          <li className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list block w-8 h-8 sm:hidden cursor-pointer active:scale-95 active:opacity-70 motion-safe:transition ease-in duration-150"
              viewBox="0 0 16 16"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </li>
        </ul>
        <hr className="absolute left-0 bottom-0 h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blanco to-transparent bg-center" />

        {/* MOBILE MENU */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            className="w-fit absolute inset-x-0 z-50 mx-auto px-3 py-1 rounded-xl border border-blanco bg-negro/60 backdrop-blur-md "
          >
            <ul className="flex items-center  gap-4 text-base md:text-xl text-center text-blanco">
              <li>
                <Link
                  href="/menu?category=Promociones"
                  className="w-fit hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
                >
                  MENÚ
                </Link>
              </li>
              <li>
                <Link
                  href="/#nosotros"
                  className="w-fit hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
                >
                  NOSOTROS
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="w-fit hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
                >
                  CONTACTO
                </Link>
              </li>
              <li>
                <Link
                  href="/#galeria"
                  className="w-fit hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
                >
                  GALERÍA
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </AnimatePresence>
  );
};

export default Navbar;
