import { cn } from "@/utils/cn";
import { Variants, motion } from "framer-motion";
import React from "react";

const Paragraph = ({
  variants,
  text,
  classNameProps,
}: {
  variants: Variants;
  text: string;
  classNameProps?: string;
}) => {
  return (
    <motion.p
      variants={variants}
      className={cn(`text-3xl xl:text-4xl font-medium`, classNameProps)}
    >
      {text}
    </motion.p>
  );
};

export default Paragraph;
