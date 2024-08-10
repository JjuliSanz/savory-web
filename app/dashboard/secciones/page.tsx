import SearchBar from "@/components/dashboard/SearchBar";
import MenuList from "./MenuList";

const Secciones = ({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) => {
  const selectedCategory = searchParams?.category || "Promociones";
  const query = searchParams?.query || "";

  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <SearchBar placeholder="Buscar productos" />
      <div className="min-w-full bg-blanco mt-10">
        <div className="w-full grid grid-cols-6 gap-2 border-b-2 border-marron-clarito px-6 py-3 text-left text-lg font-semibold text-marron tracking-wider">
          <div className="col-span-1 ">
            Imagen
          </div>
          <div className="col-span-1 ">
            Título
          </div>
          <div className="col-span-2 ">
            Descripción
          </div>
          <div className="col-span-1 ">
            Precio
          </div>
          <div className="col-span-1 ">
            Acciones
          </div>
        </div>
        <MenuList query={query} selectedCategory={selectedCategory} />
      </div>
    </main>
  );
};

export default Secciones;
