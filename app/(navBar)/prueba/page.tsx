import CategorySelector from "@/components/menu/CategorySelector";

export default function Prueba({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main className="mt-[50px] pt-10 min-h-screen bg-blanco-oscuro">
      <CategorySelector selectedCategory={selectedCategory} />
      <section
        key={selectedCategory}
        className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        
      </section>
    </main>
  );
}