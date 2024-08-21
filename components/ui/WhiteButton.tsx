"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

type WhiteButtonProps = {
  classNameProps?: string;
  href: string;
  text: string;
  target?: string;
};

const buttomAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.5,
    },
  },
};

const WhiteButton = ({
  classNameProps,
  href,
  text,
  target
}: WhiteButtonProps) => {
  return (
    <motion.button
      variants={buttomAnimation}
      className="w-fit mx-auto relative"
    >
      <Link
        href={href}
        className={cn("flex motion-safe:transition duration-300 ease-in-out font-bold text-xl rounded bg-blanco-oscuro border-4 border-marron text-marron outline-none focus:outline-none  hover:bg-marron hover:text-blanco-oscuro hover:scale-95 whiteButtonShadow", classNameProps)}
        target={target}
        // active:bg-marron active:text-blanco-oscuro
      >
        {text}
      </Link>
    </motion.button>
  );
};

export default WhiteButton;
