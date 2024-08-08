import { MenuItem } from "@/types";
import Image from "next/image";
import React from "react";

interface TableRowProps {
  item: MenuItem;
  handleEdit: (item: MenuItem) => void;
  handleDelete: (id: number) => void;
  handlePreviewOpen: (item: MenuItem) => void;
}

const TableRow = ({
  item,
  handleEdit,
  handleDelete,
  handlePreviewOpen,
}: TableRowProps) => {
  return (
    <tr key={item.id}>
      <td className="pl-4 py-4 border-b border-marron-clarito">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={70}
          height={50}
          className="rounded-sm object-cover w-[100px]"
        />
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito text-marron text-lg font-medium">
        {item.title}
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito text-marron text-base font-medium">
        {item.description}
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito text-marron text-base font-medium flex items-center">{item.price} <span className="inline">$</span></td>
      <td className="px-6 py-4 border-b border-marron-clarito text-right">
        <button
          onClick={() => handleEdit(item)}
          className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded ml-2"
        >
          Borrar
        </button>
        <button
          onClick={() => handlePreviewOpen(item)}
          className="text-marron hover:opacity-80 font-bold py-2 px-4 rounded ml-2"
        >
          Preview
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
