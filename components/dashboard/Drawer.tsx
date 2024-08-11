"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDrawer } from "@/hooks/useDrawer";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuItem, State } from "@/types";
import { editMenuItem } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { updateMenuItem } from "@/utils/serverActions";
import { useFormState, useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <div className="w-full flex gap-4">
      <button
        type="submit"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
        aria-disabled={pending}
      >
        {pending ? "Editando..." : "Enviar"}
      </button>
    </div>
  );
};

export const Drawer = ({ selectedItem }: { selectedItem: MenuItem }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const initialState: State = { message: null, errors: {} };
  const updatedMenuItem = updateMenuItem.bind(null, selectedItem._id!);
  const [state, formAction] = useFormState(updatedMenuItem, initialState);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleEdit = async (formData: FormData) => {
    await formAction(formData);
    handleCloseDrawer();
  };

  return (
    <>
      <button
        onClick={handleOpenDrawer}
        className="text-blue-500 hover:text-blue-700 font-bold text-start rounded"
      >
        EDITAR
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-0">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-blanco-oscuro w-1/3 max-h-screen pt-1 p-6 overflow-auto overscroll-contain flex flex-col z-10"
          >
            <div className="w-full flex justify-between mb-4">
              <h2 className="text-marron text-xl font-bold">Editar Producto</h2>
              <button
                onClick={handleCloseDrawer}
                className="w-[30px] text-red-500 font-bold"
              >
                <CloseIcon className="" />
              </button>
            </div>
            <form ref={ref} action={handleEdit} className="">
              <div className="mb-4">
                <label
                  htmlFor="id"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  ID
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  required
                  defaultValue={selectedItem.id}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="CATEGORY"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  CATEGORY
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  required
                  defaultValue={selectedItem.category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Promociones">Promociones</option>
                  <option value="Cafeteria">Cafetería</option>
                  <option value="Frios">Frios</option>
                  <option value="Tortas_Delicias">Tortas y Delicias</option>
                  <option value="Salados_Clasicos">Salados Clásicos</option>
                  <option value="Tostones">Tostones</option>
                  <option value="Wraps">Wraps</option>
                  <option value="Sandwiches">Sandwiches</option>
                  <option value="Ensaladas">Ensaladas</option>
                  <option value="Postres_Helados">Postres Helados</option>
                  <option value="Heladeria">Heladería</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  required
                  defaultValue={selectedItem.title}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  Descripción (opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  defaultValue={selectedItem.description}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imageSrc"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  URL de la Imagen
                </label>
                <input
                  type="text"
                  id="imageSrc"
                  name="imageSrc"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  required
                  defaultValue={selectedItem.imageSrc}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  Precio
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  required
                  defaultValue={selectedItem.price}
                />
              </div>
              <Button />
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};
