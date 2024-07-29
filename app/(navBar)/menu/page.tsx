"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuType } from "@/types";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

const menuTabs: MenuType[] = [
  {
    title: "Promociones",
    value: "promociones",
    data: promociones,
  },
  {
    title: "Cafetería",
    value: "cafeteria",
    data: cafeteria,
  },
  {
    title: "Frios",
    value: "frios",
    data: cafeteria,
  },
  {
    title: "Tortas y Delicias",
    value: "tortas_delicias",
    data: tortas_delicias,
  },
  {
    title: "Salados Clasicos",
    value: "salados_clasicos",
    data: tortas_delicias,
  },
  {
    title: "Tostones",
    value: "tostones",
    data: tortas_delicias,
  },
  {
    title: "Wraps",
    value: "wraps",
    data: tortas_delicias,
  },
  {
    title: "Sandwiches",
    value: "sandwiches",
    data: tortas_delicias,
  },
  {
    title: "Ensaladas",
    value: "ensaladas",
    data: tortas_delicias,
  },
  {
    title: "Postres Helados",
    value: "postres_helados",
    data: tortas_delicias,
  },
  {
    title: "Heladeria",
    value: "heladeria",
    data: tortas_delicias,
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

export default function Menu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "promociones";

  useEffect(() => {
    if (!searchParams.get("category")) {
      router.replace(`/menu?category=promociones`);
    }
  }, []);

  const handleCategoryChange = (category: any) => {
    router.push(`/menu?category=${category}`);
  };

  return (
    <main className="mt-[50px] pt-10 min-h-screen bg-blanco-oscuro">
      <nav className="w-fit max-w-3xl mx-auto flex justify-center p-4 bg-marron rounded">
        <ul className="flex flex-wrap justify-center gap-4">
          {menuTabs.map((category) => (
            <li
              key={category.value}
              className={`cursor-pointer text-lg font-semibold hover:text-blanco-oscuro duration-300 ease-in-out transition ${
                selectedCategory === category.value
                  ? "text-blanco-oscuro underline"
                  : "text-marron-claro"
              }`}
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
      <motion.section
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {menuTabs
          .find((category) => category.value === selectedCategory)
          ?.data.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={`${selectedCategory}-${index}`}
              className="bg-marron rounded-lg flex flex-col"
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
                  <h3 className="text-blanco text-lg font-bold">
                    {item.title}
                  </h3>
                  {item.ingredients && (
                    <p className="text-blanco-oscuro font-bold text-sm">
                      {item.ingredients}
                    </p>
                  )}
                </div>
                <p className="text-end text-blanco-oscuro font-bold text-base">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
      </motion.section>
    </main>
  );
}
