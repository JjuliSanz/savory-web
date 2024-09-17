"use client";
import { State } from "@/types";
import { addMenuItem } from "@/utils/serverActions";
import React, { useRef, useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";

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

const CreateForm = ({ nextId, selectedCategory }: { nextId: number, selectedCategory: string }) => {
  const ref = useRef<HTMLFormElement>(null);
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(addMenuItem, initialState);
  return (
    <form
      ref={ref}
      action={formAction}
      className={`w-[600px] h-full overflow-auto overscroll-contain bg-blanco-oscuro rounded relative text-marron-claro mx-auto flex flex-col gap-4`}
    >
      <div className="flex space-x-4 ">
        <div className="w-1/3">
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
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold cursor-not-allowed"
            aria-describedby="id-error"
            value={nextId}
            readOnly
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
        <div className="w-2/3">
          <label
            htmlFor="category"
            className="block text-sm font-bold mb-2 text-marron"
          >
            CATEGORÍA
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
            aria-describedby="category-error"
            value={selectedCategory}
          >
            <option value="" disabled>
              Selecciona la categoría
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
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
          aria-describedby="title-error"
        />
      </div>
      <div id="title-error" aria-live="polite" aria-atomic="true" className="">
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
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
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
          aria-describedby="description-error"
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
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
          aria-describedby="imageSrc-error"
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
          className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-lg font-semibold"
          aria-describedby="price-error"
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

export default CreateForm;
