"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuItem, State } from "@/types";
import { updateMenuItem } from "@/utils/serverActions";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (state?.message) {
      // Ejecutar la redirección y revalidación solo si hay un mensaje de éxito
      router.refresh();
      setIsDrawerOpen(false);
    }
  }, [state?.message, router]);

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
            <form ref={ref} action={formAction} className="flex flex-col gap-4">
              <div className="">
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
                  defaultValue={selectedItem.id}
                />
                <div id="id-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.id &&
                    state.errors.id.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="category"
                  className="block text-lg font-bold mb-2 text-marron"
                >
                  CATEGORÍA
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
                  defaultValue={selectedItem.category}
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  <option value="Promociones">Promociones</option>
                  <option value="Cafeteria">Cafetería</option>
                  <option value="Frios">Frios</option>
                  <option value="Yogurts">Yogurts</option>
                  <option value="Tortas">Tortas</option>
                  <option value="Tortas_Heladas">Tortas Heladas</option>
                  <option value="Dulces">Dulces</option>
                  <option value="Salados_Clasicos">Salados Clásicos</option>
                  <option value="Tostones">Tostones</option>
                  <option value="Wraps">Wraps</option>
                  <option value="Sandwiches">Sandwiches</option>
                  <option value="Ensaladas">Ensaladas</option>
                  <option value="Postres_Helados">Postres Helados</option>
                  <option value="Barras_Heladas">Barras Heladas</option>
                  <option value="Heladeria">Heladería</option>
                  <option value="Sabores_Helado">Sabores de Helado</option>
                </select>
                <div id="category-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.category &&
                    state.errors.category.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="">
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
                  defaultValue={selectedItem.title}
                />
                <div id="title-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.title &&
                    state.errors.title.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="">
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
                  defaultValue={selectedItem.description || ""}
                />
                <div
                  id="description-error"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {state.errors?.description &&
                    state.errors.description.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="">
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
                  defaultValue={selectedItem.imageSrc}
                />
                <div id="imageSrc-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.imageSrc &&
                    state.errors.imageSrc.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="">
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
                  defaultValue={selectedItem.price}
                />
                <div id="price-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.price &&
                    state.errors.price.map((error: string) => (
                      <p
                        className="text-base font-medium text-red-500"
                        key={error}
                      >
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <Button />
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};
