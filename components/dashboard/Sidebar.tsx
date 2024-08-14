import Link from "next/link";
import SideLinks from "./SideLinks";
import { auth, signIn, signOut } from "@/auth";

const Sidebar = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen w-56 bg-marron flex flex-col fixed">
      <div className="flex items-center justify-center h-20 border-b border-blanco-oscuro">
        <Link href="/">
          <h1 className="text-3xl text-blanco-oscuro font-bold">SAVORY</h1>
        </Link>
      </div>
      <nav className="flex-1 p-4 flex flex-col justify-between">
        <SideLinks />
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 text-blanco-oscuro">
              <div className="block py-2 px-4 text-xl font-medium">
                Cerrar Sesión
              </div>
            </button>
          </form>
        ) : (
          <button className="mb-4 rounded hover:bg-blanco-oscuro hover:text-marron transition-colors duration-300 text-blanco-oscuro">
            <Link
              href={"/login"}
              className="block py-2 px-4 text-xl font-medium"
            >Iniciar Sesión</Link>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
