import { motion } from "framer-motion";

import { Suspense } from "react";


import LoadingSkeleton from "@/components/dashboard/LoadingSkeleton";


import CategoryDashboardSelector from "@/components/dashboard/CategoryDashboardSelector";
import ToTopButton from "@/components/dashboard/ToTopButton";
import MenuDashboardList from "../../components/dashboard/MenuDashboardList";
import SearchBar from "@/components/dashboard/SearchBar";
import Link from "next/link";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";


  return (
    <main className={`flex-1 ml-56 p-8 bg-blanco-oscuro`}>
      <CategoryDashboardSelector selectedCategory={selectedCategory} />
      <header className="items-center justify-between block sm:flex mt-10">
        <SearchBar placeholder="Buscar productos por su titulo" />

        {/* ADD PRODUCT */}
        <button className="px-3 py-2 border-2 border-marron text-marron text-lg font-bold rounded-xl hover:scale-95 transition duration-300 ease-in-out hover:bg-marron hover:text-blanco-oscuro">
          <Link href="/dashboard/addProduct">Agregar Producto</Link>
        </button>
      </header>
      <div className="min-w-full bg-blanco mt-10">
        <div className="w-full grid grid-cols-6 gap-2 border-b-2 border-marron-clarito px-6 py-3 text-left text-lg font-semibold text-marron tracking-wider">
          <div className="col-span-1 ">Imagen</div>
          <div className="col-span-1 ">Título</div>
          <div className="col-span-2 ">Descripción</div>
          <div className="col-span-1 ">Precio</div>
          <div className="col-span-1 ">Acciones</div>
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <MenuDashboardList selectedCategory={selectedCategory} query={query} />
        </Suspense>
      </div>
      <ToTopButton />
    </main>
  );
}
