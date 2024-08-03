// components/NavBar.tsx
import React from "react";
import { useCategory } from "@/hooks/useCategory";
import { MenuType } from "@/types";
import { cafeteria, promociones, tortas_delicias } from "@/constants";

const menuTabs: MenuType[] = [
  { title: "Promociones", value: "promociones", data: promociones },
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

export const DashboardNavBar = () => {
  const { selectedCategory, handleCategoryChange } = useCategory();

  return (
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
  );
};
