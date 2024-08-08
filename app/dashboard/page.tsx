
import { motion } from "framer-motion";

import { Suspense } from "react";

import TableRow from "@/components/dashboard/TableRow";
import ProductForm from "@/components/dashboard/Form";

import LoadingSkeleton from "@/components/dashboard/LoadingSkeleton";

import { fetchMenuItems } from "@/utils/actions";
import CategorySelector from "@/components/dashboard/CategorySelector";
import ToTopButton from "@/components/dashboard/ToTopButton";


export default async function Dashboard({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category || "Promociones";
  const menuItems = await fetchMenuItems(selectedCategory);


  return (
    <main className={`flex-1 ml-56 p-8 bg-blanco-oscuro`}>
      <CategorySelector selectedCategory={selectedCategory} />
      <header className="items-center justify-between block sm:flex mt-10">
        <input
          type="text"
          placeholder="Buscar productos"
          className="bg-transparent text-marron placeholder-marron border-2 border-marron rounded-xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-marron"
        />
        {/* ADD PRODUCT */}
        <ProductForm selectedCategory={selectedCategory} />
      </header>
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
            {menuItems.length === 0 ? (
              <tr>
                <td className="text-center text-lg font-semibold py-4 text-marron">
                No hay productos en esta categoría
                </td>
              </tr>
            ) : (
              menuItems.map((item) => <TableRow key={item.id} item={item} />)
            )}
          </tbody>
        </Suspense>
      </table>
      <ToTopButton/>
    </main>
  );
}
