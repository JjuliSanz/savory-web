import SearchBar from "@/components/dashboard/SearchBar";
import UsersList from "./UsersList";

const Usuarios = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || "";
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <SearchBar placeholder="Buscar usuarios por su nombre" />
      <div className="min-w-full bg-blanco mt-10">
        <div className="w-full grid grid-cols-6 gap-2 border-b-2 border-marron-clarito px-6 py-3 text-left text-lg font-semibold text-marron tracking-wider">
          <div className="col-span-1 ">Imagen</div>
          <div className="col-span-1 ">Nombre</div>
          <div className="col-span-2 ">Email</div>
          <div className="col-span-1 ">Rol</div>
          <div className="col-span-1 ">Acciones</div>
        </div>
        <UsersList query={query} />
      </div>
    </main>
  );
};

export default Usuarios;
