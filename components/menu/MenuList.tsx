import { motion, useInView } from "framer-motion";
import { fetchMenuItems } from "@/utils/actions";
import Image from "next/image";
import React from "react";

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
      <div>
        {Array.isArray(menuItems) && menuItems.length === 0 && (
          <p className="text-xl font-semibold text-marron px-6 py-4">
            No se encontraron productos{" "}
          </p>
        )}
      </div>
      {Array.isArray(menuItems) &&
        filteredMenuItems.map((item) => (
          <div
            key={item.id}
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
          </div>
        ))}
    </>
  );
};

export default MenuList;
