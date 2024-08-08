"use client";
import { MenuTab } from "@/types";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    value: "Salados_Clasicos",
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
const CategorySelector = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const router = useRouter();
  const handleCategoryChange = (category: string) => {
    router.push(`/dashboard?category=${category}`);
  };
  return (
    <nav className="w-fit max-w-3xl mx-auto flex justify-center p-4 bg-marron rounded">
      <ul className="flex flex-wrap justify-center gap-4">
        {menuTabs.map((category) => (
          <motion.li
            key={category.value}
            className={`cursor-pointer text-lg font-semibold hover:text-blanco-oscuro duration-300 ease-in-out transition  ${
              selectedCategory === category.value
                ? "text-blanco-oscuro underline"
                : "text-marron-claro"
            }`}
            onClick={() => handleCategoryChange(category.value)}
          >
            <motion.div className="underline" layoutId="underline">
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default CategorySelector;
