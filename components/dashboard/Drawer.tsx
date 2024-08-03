// components/Drawer.tsx
import React from "react";
import { motion } from "framer-motion";
import { useDrawer } from "@/hooks/useDrawer";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuItem } from "@/types";

interface DrawerProps {
  isDrawerOpen: boolean;
  handleCloseDrawer: () => void;
  selectedItem: MenuItem | null;
  setSelectedItem: (item: MenuItem | null) => void;
}

export const Drawer = ({
  isDrawerOpen,
  handleCloseDrawer,
  selectedItem,
  setSelectedItem,
}: DrawerProps) => {
  if (!isDrawerOpen || !selectedItem ) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-0">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="bg-white w-1/3 h-full p-6 overflow-auto flex flex-col z-10"
      >
        <button
          onClick={handleCloseDrawer}
          className="w-[40px] text-red-500 font-bold justify-self-end self-end"
        >
          <CloseIcon className="" />
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
                setSelectedItem({
                  ...selectedItem,
                  ingredients: e.target.value,
                })
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
      </motion.div>
    </div>
  );
};