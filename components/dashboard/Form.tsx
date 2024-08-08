"use client";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { createMenuItem } from "@/utils/actions";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Skeleton = () => (
  <div className="w-[400px] h-full bg-blanco-oscuro p-6 rounded-xl relative text-marron-claro">
    <div className="animate-pulse h-full grid grid-rows-6 grid-flow-row gap-4">
      <div className="row-span-1 bg-marron rounded-xl"></div>
      <div className="row-span-1 bg-marron rounded-xl"></div>
      <div className="row-span-1 bg-marron rounded-xl"></div>
      <div className="row-span-1 bg-marron rounded-xl"></div>
      <div className="row-span-1 bg-marron rounded-xl"></div>
      <div className="row-span-1 w-1/2 h-1/2 bg-marron rounded-xl justify-self-center place-self-center"></div>
    </div>
  </div>
);

interface FormData {
  id: string;
  category: string;
  title: string;
  description?: string;
  imageSrc: string;
  price: string;
}

interface ProductFormProps {
  selectedCategory: string;
}

const initialFormData: FormData = {
  id: "",
  category: "",
  title: "",
  description: "",
  imageSrc: "",
  price: "",
};

const ProductForm = ({ selectedCategory }: ProductFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const fetchNextId = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/menu/nextId");
      const data = await response.json();
      setFormData((prevData) => ({
        ...prevData,
        id: data.nextId.toString(),
      }));
    } catch (error) {
      console.error("Error fetching next ID:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAddFormOpen) {
      fetchNextId();
    }
  }, [isAddFormOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormOpen = () => {
    if (isAddFormOpen) {
      setFormData(initialFormData); // Reset form data when closing the form
    }
    setIsAddFormOpen(!isAddFormOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createMenuItem(formData, selectedCategory);
      setFormData(initialFormData);
      handleFormOpen();
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <button
        onClick={handleFormOpen}
        className="px-3 py-2 border-2 border-marron text-marron text-lg font-bold rounded-xl hover:scale-95 transition duration-300 ease-in-out hover:bg-marron hover:text-blanco-oscuro"
      >
        Agregar Producto
      </button>
      {isAddFormOpen && (
        <div
          onClick={handleFormOpen}
          className="fixed inset-0 py-4 bg-negro bg-opacity-80 flex justify-center items-center "
        >
          {loading ? (
            <Skeleton />
          ) : (
            <form
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit}
              className="w-[400px] h-full overflow-auto overscroll-contain bg-blanco-oscuro p-6 rounded relative text-marron-claro"
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
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium cursor-not-allowed"
                  required
                  disabled
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
                  value={formData.category}
                  onChange={handleChange}
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
                  value={formData.title}
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleChange}
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
                  value={formData.imageSrc}
                  onChange={handleChange}
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
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-marron rounded-xl focus:outline-none focus:border-marron text-base font-medium"
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
          )}
        </div>
      )}
    </>
  );
};

export default ProductForm;
