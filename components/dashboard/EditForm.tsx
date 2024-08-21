"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuItem } from "@/types";
import { updateMenuItem } from "@/utils/serverActions";
import React, { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { State } from "@/types";

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

const EditForm = ({ menuItem }: { menuItem: MenuItem }) => {
  const ref = useRef<HTMLFormElement>(null);
  const initialState: State = { message: null, errors: {} };
  const updatedMenuItem = updateMenuItem.bind(null, menuItem._id!);
  const [state, formAction] = useFormState(updatedMenuItem, initialState);

  return (
    <form
      ref={ref}
      action={formAction}
      className={`w-[600px] h-full overflow-auto overscroll-contain bg-blanco-oscuro rounded relative text-marron-claro mx-auto flex flex-col gap-4`}
    >
      <button className="absolute top-0 right-0 text-marron w-8 hover:opacity-70 hover:scale-95 transition duration-300 ease-in-out">
        <CloseIcon />
      </button>

      <div className="">
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
          defaultValue={menuItem.id}
        />
      </div>
      <div id="id-error" aria-live="polite" aria-atomic="true" className="">
        {state.errors?.id &&
          state.errors.id.map((error: any) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="">
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
          defaultValue={menuItem.category}
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
      <div
        id="category-error"
        aria-live="polite"
        aria-atomic="true"
        className=""
      >
        {state.errors?.category &&
          state.errors.category.map((error: string) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="">
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
          aria-describedby="title-error"
          defaultValue={menuItem.title}
        />
      </div>
      <div id="title-error" aria-live="polite" aria-atomic="true" className="">
        {state.errors?.title &&
          state.errors.title.map((error: any) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="">
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
          defaultValue={menuItem.description}
        />
      </div>
      <div
        id="description-error"
        aria-live="polite"
        aria-atomic="true"
        className=""
      >
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="">
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
          defaultValue={menuItem.imageSrc}
        />
      </div>
      <div
        id="imageSrc-error"
        aria-live="polite"
        aria-atomic="true"
        className=""
      >
        {state.errors?.imageSrc &&
          state.errors.imageSrc.map((error: string) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="">
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
          defaultValue={menuItem.price}
        />
      </div>
      <div id="price-error" aria-live="polite" aria-atomic="true">
        {state.errors?.price &&
          state.errors.price.map((error: string) => (
            <p className="text-base font-medium text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <Button />
    </form>
  );
};

export default EditForm;
