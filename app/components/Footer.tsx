import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blanco-oscuro rounded-lg m-4 w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
        >
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-marron">
            Savory
          </span>
        </a>
        <ul className="flex flex-wrap items-center gap-4 mb-6 text-lg font-medium text-marron-claro sm:mb-0 ">
          <li>
            <a
              href="#"
              className="transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <WhatsIcon />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-marron-clarito sm:mx-auto lg:my-8" />
      <span className="block text-sm text-marron-claro sm:text-center">
        © 2024{" "}
        <a href="#" className="hover:underline">
          Savory
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
