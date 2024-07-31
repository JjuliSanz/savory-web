"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuItem, MenuType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "promociones";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    if (!searchParams.get("category")) {
      router.replace(`/dashboard?category=promociones`);
    }
  }, []);

  const handleCategoryChange = (category: any) => {
    router.push(`/dashboard?category=${category}`);
  };

  const handleEdit = (item: MenuItem) => {
    setIsDrawerOpen(true)
    setSelectedItem(item)
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id:", id);
  };
  return (
    <main className="overflow-x-auto">
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
      <div className="items-center justify-between block sm:flex mt-10">
        <input
          type="text"
          placeholder="Buscar productos"
          className="bg-transparent text-marron placeholder-marron border-2 border-marron rounded-xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-marron"
        />
        <button className="px-3 py-2 border-2 border-marron text-marron text-lg font-bold rounded-xl hover:scale-95 transition duration-300 ease-in-out hover:bg-marron hover:text-blanco-oscuro">
          Agregar Producto
        </button>
      </div>
      <table className="min-w-full bg-blanco mt-10">
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
          {menuTabs
            .find((category) => category.value === selectedCategory)
            ?.data.map((item) => (
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
                <td className="px-6 py-4 border-b border-marron-clarito text-lg font-medium">
                  {item.title}
                </td>
                <td className="px-6 py-4 border-b border-marron-clarito">
                  {item.ingredients}
                </td>
                <td className="px-6 py-4 border-b border-marron-clarito">
                  {item.price}
                </td>
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
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isDrawerOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-1/3 h-full p-6 overflow-auto flex flex-col">
            <button onClick={handleCloseDrawer} className="w-[40px] text-red-500 font-bold justify-self-end self-end">
              <CloseIcon className=""/>
            </button>
            <h2 className="text-marron text-xl font-bold mb-4">Editar Producto</h2>
            <form>
              <div className="mb-4">
                <label className="block text-marron text-sm font-bold mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={selectedItem.title}
                  className="bg-transparent text-marron placeholder-marron border-2 border-marron rounded-xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-marron w-full"
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-marron text-sm font-bold mb-2">
                  Ingredientes
                </label>
                <input
                  type="text"
                  value={selectedItem.ingredients}
                  className="bg-transparent text-marron placeholder-marron border-2 border-marron rounded-xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-marron w-full"
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, ingredients: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-marron text-sm font-bold mb-2">
                  Precio
                </label>
                <input
                  type="text"
                  value={selectedItem.price}
                  className="bg-transparent text-marron placeholder-marron border-2 border-marron rounded-xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-marron w-full"
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, price: e.target.value })
                  }
                />
              </div>
              <button className="bg-marron text-white font-bold py-2 px-4 rounded">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
