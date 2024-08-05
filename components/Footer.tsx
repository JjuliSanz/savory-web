import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-negro rounded-lg m-4 w-full max-w-lg mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
        >
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-blanco">
            Savory
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-4 mb-6 text-lg font-medium text-blanco-oscuro sm:mb-0 ">
          <li>
            <Link
              href="/#nosotros"
              className="transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/menu?category=Promociones"
              className="transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/#info"
              className="transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=541137852214"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
            >
              <WhatsIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/savoryheladoscafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out duration-300 hover:scale-95 hover:opacity-70"
            >
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-blanco-oscuro sm:mx-auto lg:my-4" />
      <span className="block text-sm text-blanco-oscuro sm:text-center">
        © 2024 Savory . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
