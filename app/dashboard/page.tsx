"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuItem, MenuType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { connectDB } from "@/utils/mongoose";
import MenuItemModel from "@/models/MenuItemModel";
import TableRow from "@/components/dashboard/TableRow";
import ProductForm from "@/components/dashboard/Form";
import { PreviewModal } from "@/components/dashboard/PreviewModal";
import { Drawer } from "@/components/dashboard/Drawer";

// async function loadMenu() {
//   connectDB();
//   const menu = await MenuItemModel.find();
//   return menu;
// }

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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!searchParams.get("category")) {
  //     router.replace(`/dashboard?category=promociones`);
  //   }
  // }, [router, searchParams]);

  const handleFormOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (category: any) => {
    router.push(`/dashboard?category=${category}`);
  };

  const handleEdit = (item: MenuItem) => {
    setIsDrawerOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  const handlePreviewOpen = (item: MenuItem) => {
    setIsPreviewOpen(!isPreviewOpen);
    setSelectedItem(item);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete")) {
      const res = await fetch(`/api/menu/${id}`, {
        method: "DELETE",
      });
      router.refresh();
      handleCloseDrawer();
    }
  };
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
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
        <button
          onClick={() => handleFormOpen()}
          className="px-3 py-2 border-2 border-marron text-marron text-lg font-bold rounded-xl hover:scale-95 transition duration-300 ease-in-out hover:bg-marron hover:text-blanco-oscuro"
        >
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
              <TableRow
                key={item.id}
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handlePreviewOpen={handlePreviewOpen}
              />
            ))}
        </tbody>
      </table>

      {/* Preview Menu Item Card */}
      {isPreviewOpen && selectedItem && (
        <PreviewModal
          isPreviewOpen={isPreviewOpen}
          handlePreviewClose={handlePreviewClose}
          selectedItem={selectedItem}
        />
      )}

      {/* Edit Item Form */}
      {isDrawerOpen && selectedItem && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}

      {/* Add Product Form */}
      {isOpen && (
        <ProductForm isOpen={isOpen} handleFormOpen={handleFormOpen} />
      )}
    </main>
  );
}
