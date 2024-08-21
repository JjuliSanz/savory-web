import { fetchMenuItems } from "@/utils/actions";
import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";

const MenuList = async ({
  query,
  selectedCategory,
  
}: {
  query: string;
  selectedCategory: string;
  
}) => {
  const menuItems = await fetchMenuItems(selectedCategory);

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredMenuItems = Array.isArray(menuItems)
    ? menuItems.filter((item) => {
        return normalizeString(item.title)
          .toLowerCase()
          .includes(normalizeString(query).toLowerCase());
      })
    : [];
  return (
    <>
      {Array.isArray(menuItems) && menuItems.length === 0 && (
        <div>
          <p className="text-xl font-semibold text-marron px-6 py-4">
            No se encontraron productos{" "}
          </p>
        </div>
      )}
      {Array.isArray(menuItems) &&
        filteredMenuItems.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))}
    </>
  );
};

export default MenuList;
