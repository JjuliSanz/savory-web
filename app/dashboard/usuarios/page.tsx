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
      <UsersList query={query} />
    </main>
  );
};

export default Usuarios;
