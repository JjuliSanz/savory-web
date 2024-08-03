"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormData {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
  price: string;
}

interface ProductFormProps {
  isOpen: boolean;
  handleFormOpen: () => void; // Prop para manejar el cierre del formulario
}

const ProductForm = ({ isOpen, handleFormOpen }: ProductFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    title: "",
    description: "",
    imageSrc: "",
    price: "",
  });
  const router = useRouter();
  const [error, setError] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createMenuItem = async () => {
    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      handleFormOpen();
      const data = res.json();
      console.log(data);

      if (res.status === 200) {
        router.refresh();
      }
    } catch (error: any) {
      console.log(error);
      setError(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMenuItem();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleFormOpen}
      className="fixed inset-0 bg-negro bg-opacity-80 flex justify-center items-center "
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-[400px] bg-blanco-oscuro p-6 rounded-lg relative "
      >
        <button
          onClick={handleFormOpen}
          className="absolute top-0 right-0 text-marron w-8 hover:opacity-70 hover:scale-95 transition duration-300 ease-in-out"
        >
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
            value={formData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron"
            required
          />
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
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron"
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
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron"
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
            value={formData.imageSrc}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron"
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
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron"
            required
          />
        </div>
        {error && (
          <div className="mb-4">
            <p className="text-red-500 text-base text-medium">
              Ha habido un error al intentar crear el item del menu
            </p>
          </div>
        )}

        <div className="w-full flex gap-4">
          <button
            type="reset"
            className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
          >
            Resetear
          </button>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
