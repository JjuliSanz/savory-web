import SearchBar from "@/components/dashboard/SearchBar";
import MenuList from "./MenuList";

const Secciones = ({ searchParams }: { searchParams?: { category?: string, query?: string } }) => {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <SearchBar placeholder="Buscar productos" />

      <MenuList query={query} selectedCategory={selectedCategory} />
    </main>
  );
};

export default Secciones;
