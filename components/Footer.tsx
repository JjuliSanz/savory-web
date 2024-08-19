import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-negro rounded-lg my-4 w-full max-w-lg mx-auto p-4 md:py-8 "
      style={{ filter: "drop-shadow(0px 10px 10px var(--negro))" }}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between">
        <Link
          href="/"
          className="flex items-center transition ease-in duration-150 hover:scale-95 hover:opacity-70 text-2xl md:text-3xl font-semibold whitespace-nowrap text-blanco"
        >
          Savory
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-lg sm:text-xl font-medium text-blanco-oscuro  ">
          <li>
            <Link
              href="/#nosotros"
              className="transition ease-in duration-150 hover:scale-95 hover:opacity-70"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/menu?category=Promociones"
              className="transition ease-in duration-150 hover:scale-95 hover:opacity-70"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/#info"
              className="transition ease-in duration-150 hover:scale-95 hover:opacity-70"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=541137852214"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <WhatsIcon className="w-5 md:w-8 transition ease-in duration-150 hover:scale-95 hover:opacity-70"/>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/savoryheladoscafe/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <InstagramIcon className="w-5 md:w-8 transition ease-in duration-150 hover:scale-95 hover:opacity-70"/>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-blanco-oscuro mx-auto lg:my-4" />
      <span className="block text-sm text-blanco-oscuro text-center">
        © 2024 Savory . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
