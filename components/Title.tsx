import { cn } from "@/utils/cn";
import { Variants, motion } from "framer-motion";
import React from "react";

const Title = ({
  variants,
  title,
  classNameProps,
}: {
  variants: Variants;
  title: string;
  classNameProps?: string;
}) => {
  return (
    <motion.h2
      variants={variants}
      className={cn(`w-full text-4xl md:text-5xl font-bold `, classNameProps)}
    >
      {title}
    </motion.h2>
  );
};

export default Title;
