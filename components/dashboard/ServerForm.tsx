"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { addMenuItem, addTest, getLastId } from "@/utils/serverActions";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <div className="w-full flex gap-4">
      <button
        type="reset"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
        aria-disabled={pending}
      >
        Resetear
      </button>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
        aria-disabled={pending}
      >
        {pending ? "Creando..." : "Enviar"}
      </button>
    </div>
  );
};

const ServerForm = (nextId: any) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={addTest}
      className={`w-[400px] h-full overflow-auto overscroll-contain bg-blanco-oscuro p-6 rounded relative text-marron-claro`}
    >
      <button className="absolute top-0 right-0 text-marron w-8 hover:opacity-70 hover:scale-95 transition duration-300 ease-in-out">
        <CloseIcon />
      </button>

      <div className="mb-4">
        <label
          htmlFor="id"
          className="block text-sm font-bold mb-2 text-marron"
        >
          ID
        </label>
        <input
          type="text"
          id="id"
          name="id"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium cursor-not-allowed"
          required
          value={nextId}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="CATEGORY"
          className="block text-sm font-bold mb-2 text-marron"
        >
          CATEGORY
        </label>
        <select
          id="category"
          name="category"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
          required
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
          className="block text-sm font-bold mb-2 text-marron"
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-bold mb-2 text-marron"
        >
          Descripción (opcional)
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="imageSrc"
          className="block text-sm font-bold mb-2 text-marron"
        >
          URL de la Imagen
        </label>
        <input
          type="text"
          id="imageSrc"
          name="imageSrc"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-bold mb-2 text-marron"
        >
          Precio
        </label>
        <input
          type="text"
          id="price"
          name="price"
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default ServerForm;
