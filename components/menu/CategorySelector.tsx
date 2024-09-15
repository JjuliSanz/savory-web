"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { menuTabs } from "@/constants";


const CategorySelector = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const router = useRouter();
  const handleCategoryChange = (category: string) => {
    router.push(`/menu?category=${category}`);
  };
  return (
    <nav className="w-full max-w-[80%] mx-auto flex justify-center p-4 border-2 border-blanco-oscuro bg-marron rounded-xl relative z-20">
      <ul className="flex flex-wrap justify-center gap-4 z-20">
        {menuTabs.map((category) => (
          <motion.li
            key={category.value}
            className={`cursor-pointer text-lg 500:text-xl sm:text-2xl font-semibold hover:text-blanco-oscuro duration-300 ease-in-out transition ${
              selectedCategory === category.value
                ? "text-blanco-oscuro underline"
                : "text-marron-claro"
            }`}
            onClick={() => handleCategoryChange(category.value)}
          >
            {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default CategorySelector;
