"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import Link from "next/link";
// import { ContactButton } from "../components/ui/ContactButton";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 10) {
      setHidden(true);
      setShowMenu(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <AnimatePresence mode="sync">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-negro px-4 w-full flex justify-between items-center text-xl font-bold bedaFont fixed top-0 z-50 h-[50px] text-blanco"
      >
        <hr className="absolute bottom-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-rojo-claro to-transparent bg-center" />
        {/* HOME */}
        <Link
          href="/"
          className={`hover:scale-95 motion-safe:transition ease-in-out duration-300 hover:opacity-70 `}
        >
          {/* <LogoIcon className="py-1 w-[40px] md:w-[50px] h-[40px] md:h-[50px] stroke-[5px] stroke-rojo-claro" /> */}
          SAVORY
        </Link>
        {/* DESKTOP MENU */}
        <Link
          href="#menu"
          className={`hidden sm:block hover:scale-95 motion-safe:transition ease-in-out duration-300 hover:opacity-70 `}
        >
          MENÚ
        </Link>
        {/* ABOUT US */}
        <Link
          href="#nosotros"
          className={`hidden sm:block hover:scale-95 motion-safe:transition ease-in-out duration-300 hover:opacity-70 `}
        >
          NOSOTROS
        </Link>
        {/* CONTACT */}
        <Link
          href="#info"
          className={`hidden sm:block hover:scale-95 motion-safe:transition ease-in-out duration-300 hover:opacity-70 `}
        >
          CONTACTO
        </Link>
        {/* GALLERY */}
        <Link
          href="#galeria"
          className={`hidden sm:block hover:scale-95 motion-safe:transition ease-in-out duration-300 hover:opacity-70`}
        >
          GALERÍA
        </Link>

        {/* MOBILE MENU ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list sm:hidden cursor-pointer hover:scale-110 motion-safe:transition ease-in-out duration-300"
          viewBox="0 0 16 16"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>

        {/* MOBILE MENU */}
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute w-fit mx-auto px-3 py-1 inset-x-0 rounded-xl border border-rojo flex items-center justify-center gap-8 500:gap-12 sm:gap-20 text-base 500:text-xl text-center bg-bordo-oscuro/30 backdrop-blur-md"
          >
            <a
              href="#menu"
              className="hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
            >
              MENÚ
            </a>
            <a
              href="#nosotros"
              className="hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
            >
              NOSOTROS
            </a>
            <a
              href="#contacto"
              className="hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
            >
              CONTACTO
            </a>
            <a
              href="#galeria"
              className="hover:scale-110 motion-safe:transition hover:opacity-70 ease-in-out duration-300"
            >
              GALERÍA
            </a>
          </motion.div>
        ) : (
          ""
        )}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
