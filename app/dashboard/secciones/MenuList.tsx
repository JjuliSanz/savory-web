import React from "react";
import { fetchMenuItems } from "@/utils/actions";
import TableRow from "@/components/dashboard/TableRow";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
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
          <div key={item.id} className="flex flex-col">
            <div className="flex space-x-6 items-center">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={100}
                height={100}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <Link href={`/dashboard/usuarios/${item._id}`}>EDITAR</Link>
              <p>{item._id}</p>
              <DeleteButton id={item._id} />
            </div>
          </div>
        ))}
      {/* <tbody>
        {menuItems.length === 0 ? (
          <tr>
            <td className="text-center text-lg font-semibold py-4 text-marron">
              No hay productos en esta categoría
            </td>
          </tr>
        ) : (
          menuItems.map((item) => <TableRow key={item.id} item={item} />)
        )}
      </tbody> */}
    </>
  );
};

export default MenuList;
