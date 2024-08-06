"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuItem, MenuTab, MenuType } from "@/types";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function Menu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "Promociones";
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  // useEffect(() => {
  //   if (!searchParams.get("category")) {
  //     router.replace(`/menu?category=promociones`);
  //   }
  // }, []);
  const fetchMenuItems = async (category: string) => {
    const response = await fetch(`/api/menu?category=${category}`);
    const data = await response.json();

    setMenuItems(data);
  };

  useEffect(() => {
    fetchMenuItems(selectedCategory);
  }, [selectedCategory]);

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
        {menuItems.length === 0 ? (
          <p className="col-span-full text-2xl text-marron font-bold">
            No se encontraron productos{" "}
          </p>
        ) : (
          menuItems.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={`${selectedCategory}-${index}`}
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
                  <h3 className="text-blanco text-lg font-bold">
                    {item.title}
                  </h3>
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
          ))
        )}
      </motion.section>
    </main>
  );
}
