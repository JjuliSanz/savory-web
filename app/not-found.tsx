import { SadIcon } from "@/assets/icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <SadIcon className="w-20 h-w-20 text-marron" />
      <h2 className="text-3xl text-marron font-semibold">
        No se ha encontrado la ruta
      </h2>

      <Link href="/" className="motion-safe:transition duration-300 ease-in-out text-3xl font-medium rounded bg-blanco-oscuro border-4 border-marron text-marron outline-none focus:outline-none  hover:bg-marron hover:text-blanco-oscuro hover:scale-95 px-4 py-2">
        Regresa al Inicio
      </Link>
    </div>
  );
}
