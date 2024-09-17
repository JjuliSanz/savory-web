import MenuList from "@/components/menu/MenuList";
import CategorySelector from "@/components/menu/CategorySelector";
import ToTopButton from "@/components/ToTopButton";
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";
import CardSkeleton from "@/components/menu/CardSkeleton";

import SearchBarMenu from "@/components/menu/SearchBarMenu";

export default function Menu({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main className="pt-10 pb-4 min-h-dvh relative bg-[url('/bg.webp')] bg-fixed bg-cover">
      <div className="absolute inset-0 bg-marron opacity-80 z-10"></div>
      <CategorySelector selectedCategory={selectedCategory} />

      <SearchBarMenu placeholder="Buscar productos por su titulo" />

      <section
        key={selectedCategory}
        className="p-8 grid grid-cols-1 600:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-20 relative"
      >
        <Suspense
          fallback={
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          }
        >
          <MenuList selectedCategory={selectedCategory} query={query} />
        </Suspense>
      </section>
      <ToTopButton extraClass="z-20" />
      <Footer />
    </main>
  );
}
