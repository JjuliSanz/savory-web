import React from "react";
import { fetchMenuItems } from "@/utils/actions";
import TableRow from "@/components/dashboard/TableRow";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
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
          <p>No se encontraron produyctos </p>
        )}
      </div>
      {Array.isArray(menuItems) &&
        filteredMenuItems.map((item) => (
          <div
            key={item.id}
            className="w-full grid grid-cols-6 gap-2 px-6 py-4 border-b border-marron-clarito text-marron"
          >
            <div className="col-span-1 ">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={100}
                height={50}
                className="rounded-sm object-cover w-[100px]"
              />
            </div>
            <div className="col-span-1 text-xl font-semibold">
              {item.title}
            </div>
            <div className="col-span-2 text-lg font-medium">
              {item.description}
            </div>
            <div className="col-span-1 text-lg font-semibold">
              {item.price}$
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <EditButton _id={item._id} />

              <DeleteButton id={item._id} />
            </div>
          </div>
        ))}
    </>
  );
};

export default MenuList;
