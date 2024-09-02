import MenuList from "@/components/menu/MenuList";
import CategorySelector from "@/components/menu/CategorySelector";
import ToTopButton from "@/components/ToTopButton";
import Footer from "@/components/ui/Footer";

export default function Menu({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main
      className="pt-10 pb-4 min-h-screen relative bg-[url('/bg.jpg')] bg-fixed bg-cover"
      
    >
      <div className="absolute inset-0 bg-marron opacity-80 z-10"></div>
      <CategorySelector selectedCategory={selectedCategory} />
      <section
        key={selectedCategory}
        className="p-8 grid grid-cols-1 600:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-20 relative"
      >
        <MenuList selectedCategory={selectedCategory} query={query} />
      </section>
      <ToTopButton extraClass="lg:hidden z-20" />
      <Footer/>
    </main>
  );
}
