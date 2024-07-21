import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Savory
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Savory
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
