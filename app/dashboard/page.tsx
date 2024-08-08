"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuItem, MenuTab, MenuType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { connectDB } from "@/utils/mongoose";
import MenuItemModel from "@/models/MenuModel";
import TableRow from "@/components/dashboard/TableRow";
import ProductForm from "@/components/dashboard/Form";
import { PreviewModal } from "@/components/dashboard/PreviewModal";
import { Drawer } from "@/components/dashboard/Drawer";
import LoadingSkeleton from "@/components/dashboard/LoadingSkeleton";
import { revalidatePath } from "next/cache";

// async function loadMenu() {
//   connectDB();
//   const menu = await MenuItemModel.find();
//   return menu;
// }

const menuTabs: MenuTab[] = [
  {
    title: "Promociones",
    value: "Promociones",
  },
  {
    title: "Cafetería",
    value: "Cafeteria",
  },
  {
    title: "Frios",
    value: "Frios",
  },
  {
    title: "Yogurts",
    value: "Yogurts",
  },
  {
    title: "Tortas y Delicias",
    value: "Tortas_Delicias",
  },
  {
    title: "Salados Clasicos",
    value: "Salados_Clasicos",
  },
  {
    title: "Tostones",
    value: "Tostones",
  },
  {
    title: "Wraps",
    value: "Wraps",
  },
  {
    title: "Sandwiches",
    value: "Sandwiches",
  },
  {
    title: "Ensaladas",
    value: "Ensaladas",
  },
  {
    title: "Postres Helados",
    value: "Postres_Helados",
  },
  {
    title: "Heladeria",
    value: "Heladeria",
  },
];

const fetchMenuItems = async (category: string): Promise<MenuItem[]> => {
  try {
    const response = await fetch(`/api/menu?category=${category}`);
    if (!response.ok) {
      throw new Error("Error al cargar el menu");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error; // Throw the error so it can be handled where the function is called
  }
};

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "Promociones";
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const fetchMenuItems = async (category: string) => {
  //   try {
  //     const response = await fetch(`/api/menu?category=${category}`);
  //     if (!response.ok) {
  //       throw new Error("Error al cargar el menu");
  //     }
  //     const data = await response.json();
  //     setMenuItems(data);
  //   } catch (error) {
  //     console.error("Error fetching menu items:", error);
  //   }
  // };

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const data = await fetchMenuItems(selectedCategory);
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    loadMenuItems();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    router.push(`/dashboard?category=${category}`);
  };

  const handleFormOpen = () => {
    setIsOpen(!isOpen);
  };

  

  const handleEdit = (item: MenuItem) => {
    setIsDrawerOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  const handleSaveChanges = async (item: MenuItem) => {
    try {
      const response = await fetch(`/api/menu/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const updatedItem = await response.json();
      console.log(updatedItem, "updatedItem");

      if (!response.ok) {
        throw new Error("Error al editar el menu");
      }

      router.refresh();
      handleCloseDrawer();
    } catch (error) {
      console.error("Error updating item:", error);
    }
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
      try {
        const res = await fetch(`/api/menu/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error(`Error al borrar el item seleccionado`);
        }

        revalidatePath(`/dashboard?category=${selectedCategory}`)
        handleCloseDrawer();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <main
      className={`flex-1 ml-64 p-8 bg-blanco-oscuro ${
        isDrawerOpen ? "overflow-hidden" : ""
      }`}
    >
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
              Descripción
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito text-left leading-4 text-marron tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 border-b-2 border-marron-clarito"></th>
          </tr>
        </thead>
        <Suspense fallback={<LoadingSkeleton />}>
          <tbody>
            {menuItems.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handlePreviewOpen={handlePreviewOpen}
              />
            ))}
          </tbody>
        </Suspense>
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
          handleSaveChanges={handleSaveChanges}
        />
      )}

      {/* Add Product Form */}
      {isOpen && (
        <ProductForm isOpen={isOpen} handleFormOpen={handleFormOpen} />
      )}
    </main>
  );
}
