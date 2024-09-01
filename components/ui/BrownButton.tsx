"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { upItem } from "@/variants";

type BrownButtonProps = {
  classNameProps?: string;
  href: string;
  text: string;
};

const BrownButton = ({ classNameProps, href, text }: BrownButtonProps) => {
  return (
    <motion.button variants={upItem} className="w-fit mx-auto relative">
      <Link
        href={href}
        className={cn(
          "flex motion-safe:transition duration-300 ease-in-out text-3xl font-medium rounded bg-marron border-4 border-blanco-oscuro text-blanco-oscuro outline-none focus:outline-none hover:bg-blanco-oscuro hover:text-marron hover:scale-95 brownButtonShadow",
          classNameProps
        )}
        // active:bg-marron active:text-blanco-oscuro
      >
        {text}
      </Link>
    </motion.button>
  );
};

export default BrownButton;
