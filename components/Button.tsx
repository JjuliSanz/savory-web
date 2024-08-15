"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import Link from "next/link";
const Button = ({ classNameProps }: { classNameProps?: string }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.5,
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      className={cn("w-fit mx-auto relative", classNameProps)}
    >
      <Link
        href="#menu"
        className="motion-safe:transition duration-300 ease-in-out font-bold bedaFont tracking-wider uppercase text-xl px-6 py-3 rounded-xl outline-none focus:outline-none hover:scale-90 flex items-center gap-2 bg-blanco-oscuro border-2 border-marron text-marron shadow-rojo-claro-xs box-shadow-rojo-xs hover:bg-marron-claro hover:text-blanco-oscuro hover:shadow-none hover:border-marron-claro active:bg-marron-clarito active:text-blanco-oscuro active:border-marron-clarito active:shadow-none"
      >
        MENU
      </Link>
    </motion.button>
  );
};

export default Button;
