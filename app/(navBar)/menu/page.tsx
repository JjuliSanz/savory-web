import MenuList from "@/components/menu/MenuList";
import CategorySelector from "@/components/menu/CategorySelector";
import ToTopButton from "@/components/ToTopButton";



export default function Menu({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main className="pt-10 min-h-screen bg-blanco-oscuro">
      <CategorySelector selectedCategory={selectedCategory} />
      <section
        key={selectedCategory}
        className="p-8 grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <MenuList
          selectedCategory={selectedCategory}
          query={query}
          
        />
      </section>
      <ToTopButton extraClass="lg:hidden" />
    </main>
  );
}
