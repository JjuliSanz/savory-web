"use client"
import { MenuItem } from '@/types';
import Image from 'next/image';
import React from 'react'

const menuItems: MenuItem[] = [
  {
    id: 1,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Producto 1",
    ingredients: "Ingrediente 1, Ingrediente 2",
    price: "$10.00",
  },
  {
    id: 2,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Producto 2",
    ingredients: "Ingrediente 3, Ingrediente 4",
    price: "$15.00",
  },
  // Agrega más productos según sea necesario
];

const page = () => {
  const handleEdit = (id: number) => {
    console.log("Edit item with id:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id:", id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-blanco">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">
              Imagen
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">
              Título
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">
              Ingredientes
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito"></th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 border-b border-marron-clarito">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded"
                />
              </td>
              <td className="px-6 py-4 border-b border-marron-clarito">{item.title}</td>
              <td className="px-6 py-4 border-b border-marron-clarito">{item.ingredients}</td>
              <td className="px-6 py-4 border-b border-marron-clarito">{item.price}</td>
              <td className="px-6 py-4 border-b border-marron-clarito text-right">
                <button
                  onClick={() => handleEdit(item.id)}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page