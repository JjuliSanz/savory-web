"use client";
import { menuTabs } from "@/constants";
import { useRouter } from "next/navigation";

const CategoryDashboardSelector = ({
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
          <li
            key={category.value}
            className={`cursor-pointer text-lg font-semibold hover:text-blanco-oscuro duration-300 ease-in-out transition  ${
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
  );
};

export default CategoryDashboardSelector;
