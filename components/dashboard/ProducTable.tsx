// components/ProductTable.tsx
import React from 'react';
import Image from 'next/image';
import { useCategory } from '@/hooks/useCategory';
import { MenuItem, MenuType } from '@/types';
import { cafeteria, promociones, tortas_delicias } from '@/constants';

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

interface ProductTableProps {
  handleEdit: (item: MenuItem) => void;
  handleDelete: (id: number) => void;
  handleVisualizar: (item: MenuItem) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({ handleEdit, handleDelete, handleVisualizar }) => {
  const { selectedCategory } = useCategory();

  return (
    <table className="min-w-full bg-blanco mt-10">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">Imagen</th>
          <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">Título</th>
          <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">Ingredientes</th>
          <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">Precio</th>
          <th className="px-6 py-3 border-b-2 border-marron-clarito"></th>
        </tr>
      </thead>
      <tbody>
        {menuTabs.find((category) => category.value === selectedCategory)?.data.map((item) => (
          <tr key={item.id}>
            <td className="pl-4 py-4 border-b border-marron-clarito">
              <Image src={item.imageSrc} alt={item.title} width={70} height={50} className="rounded-sm object-cover w-[100px]" />
            </td>
            <td className="px-6 py-4 border-b border-marron-clarito text-lg font-medium">{item.title}</td>
            <td className="px-6 py-4 border-b border-marron-clarito">{item.ingredients}</td>
            <td className="px-6 py-4 border-b border-marron-clarito">{item.price}</td>
            <td className="px-6 py-4 border-b border-marron-clarito text-right">
              <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded">Editar</button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded ml-2">Borrar</button>
              <button onClick={() => handleVisualizar(item)} className="text-marron hover:opacity-80 font-bold py-2 px-4 rounded ml-2">Preview</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
