"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuItem, MenuTab, MenuType } from "@/types";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import MenuList from "@/components/menu/MenuList";
import CategorySelector from "@/components/menu/CategorySelector";

const menuTabs: MenuTab[] = [
  {
    title: "Promociones",
    value: "Promociones",
  },
  {
    title: "Cafetería",
    value: "Cafeteria",
  },
  {
    title: "Frios",
    value: "Frios",
  },
  {
    title: "Yogurts",
    value: "Yogurts",
  },
  {
    title: "Tortas y Delicias",
    value: "Tortas_Delicias",
  },
  {
    title: "Salados Clasicos",
    value: "Salados_clasicos",
  },
  {
    title: "Tostones",
    value: "Tostones",
  },
  {
    title: "Wraps",
    value: "Wraps",
  },
  {
    title: "Sandwiches",
    value: "Sandwiches",
  },
  {
    title: "Ensaladas",
    value: "Ensaladas",
  },
  {
    title: "Postres Helados",
    value: "Postres_Helados",
  },
  {
    title: "Heladeria",
    value: "Heladeria",
  },
];

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
    },
  },
};

export default function Menu({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const router = useRouter();
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  const handleCategoryChange = (category: any) => {
    router.push(`/menu?category=${category}`);
  };

  return (
    <main className="mt-[50px] pt-10 min-h-screen bg-blanco-oscuro">
      <CategorySelector selectedCategory={selectedCategory} />
      <motion.section
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        <MenuList selectedCategory={selectedCategory} query={query} />
      </motion.section>
    </main>
  );
}
