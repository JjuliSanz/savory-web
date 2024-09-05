"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { libre } from "@/app/fonts";
import { CartIcon } from "@/assets/icons/CartIcon";
import Cart from "../Cart";

const ListItem = ({
  href,
  title,
  classNameProp,
  pathname,
}: {
  href: string;
  title: string;
  classNameProp?: string;
  pathname?: string;
}) => {
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          `w-fit hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70`,
          classNameProp,
          isActive ? "underline" : ""
        )}
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [borderMarron, setBorderMarron] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/nosotros" || pathname === "/galeria") {
      setBorderMarron(true);
    } else {
      setBorderMarron(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      <nav className="w-full h-fit bg-negro relative z-50 overflow-x-hidden py-2 px-2 sm:px-4">
        <ul className="w-full max-w-full px-2 h-full flex justify-between text-2xl font-medium text-blanco relative">
          {/* HOME */}
          <ListItem href="/" title="Sávory" pathname={pathname} />
          {/* DESKTOP MENU */}
          <ListItem
            href="/menu"
            title="Menú"
            classNameProp="hidden sm:block"
            pathname={pathname}
          />
          {/* ABOUT US */}
          <ListItem
            href="/nosotros"
            title="Nosotros"
            classNameProp="hidden sm:block"
            pathname={pathname}
          />
          {/* CONTACT */}
          <ListItem
            href="/contacto"
            title="Contacto"
            classNameProp="hidden sm:block"
            pathname={pathname}
          />
          {/* GALLERY */}
          <ListItem
            href="/galeria"
            title="Galería"
            classNameProp="hidden sm:block"
            pathname={pathname}
          />
          {/* CART */}
          <Cart/>
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
        {/* <hr className="absolute left-0 bottom-0 h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blanco to-transparent bg-center" /> */}
        {/* <hr className="absolute left-0 bottom-0 h-[2px] w-full bg-blanco bg-center" /> */}
      </nav>
      {/* MOBILE MENU */}
      {showMenu && (
        <motion.ul
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0 }}
          className={`w-fit absolute inset-x-0 top-10 z-50 mx-auto px-3 py-1 rounded border-2 ${
            borderMarron ? "border-marron" : "border-blanco"
          }  bg-negro/60 backdrop-blur-md flex items-center gap-4 text-2xl text-center text-blanco`}
        >
          <ListItem href="/menu?category=Promociones" title="Menú" />
          <ListItem href="/nosotros" title="Nosotros" />
          <ListItem href="/contacto" title="Contacto" />
          <ListItem href="/galeria" title="Galería" />
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
