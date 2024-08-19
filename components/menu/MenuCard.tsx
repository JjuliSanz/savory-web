"use client";
"use client";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import Image from "next/image";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="bg-marron rounded-lg flex flex-col h-[400px]"
    >
      <div className="relative w-full h-60">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={500}
          height={500}
          loading="lazy"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="w-full flex flex-col grow justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-blanco text-lg font-bold">{item.title}</h3>
          {item.description && (
            <p className="text-blanco-oscuro font-bold text-sm">
              {item.description}
            </p>
          )}
        </div>
        <p className="text-end text-blanco-oscuro font-bold text-base">
          {item.price} $
        </p>
      </div>
    </motion.div>
  );
};

export default MenuCard;
