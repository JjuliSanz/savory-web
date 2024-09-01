import { InstagramIcon, WhatsIcon } from "@/assets/icons";
import SavoryLogo from "@/assets/SavoryLogo";
import Link from "next/link";
import React from "react";

const ListItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="transition ease-in duration-150 hover:scale-95 hover:opacity-70"
      >
        {text}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer
      className="relative bg-negro rounded-lg mt-10 w-full max-w-lg mx-auto p-4 md:py-8 z-20"
      style={{ boxShadow: "0px 0px 10px 6px var(--marron)" }}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between ">
        <Link
          href="/"
          className="flex items-center transition ease-in duration-150 hover:scale-95 hover:opacity-70 text-2xl md:text-3xl font-semibold whitespace-nowrap text-blanco"
        >
          Sávory
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-medium text-blanco-oscuro ">
          <ListItem href="/nosotros" text="Nosotros" />
          <ListItem href="/menu?category=Promociones" text="Menú" />
          <ListItem href="/contacto" text="Contacto" />
          {/* Whatsapp */}
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=541137852214"
              target="_blank"
              className=""
            >
              <WhatsIcon className="w-5 md:w-8 transition ease-in duration-150 hover:scale-95 hover:opacity-70" />
            </Link>
          </li>
          {/* Instagram */}
          <li>
            <Link
              href="https://www.instagram.com/savoryheladoscafe/"
              target="_blank"
              className=""
            >
              <InstagramIcon className="w-5 md:w-8 transition ease-in duration-150 hover:scale-95 hover:opacity-70" />
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-blanco-oscuro mx-auto lg:my-4 " />
      <span className="block text-lg font-medium text-blanco-oscuro text-center ">
        © 2024 Sávory. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
