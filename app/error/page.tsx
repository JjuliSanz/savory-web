"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

enum Error {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  Default = "Default",
}

const errorMap = {
  [Error.Configuration]: (
    <>
      <p className="text-marron-clarito text-3xl font-medium">
        Hubo un problema con la configuración de la autenticación. Por favor,
        contacta con jjulisanz@gmail.com si este error persiste.
      </p>
      <p className="text-xl font-medium text-marron-clarito">
        Código de error único:{" "}
        <code className="text-lg bg-blanco p-1 rounded-sm">
          Configuration
        </code>
      </p>
    </>
  ),
  [Error.AccessDenied]: (
    <>
      <p className="text-marron-clarito text-3xl font-medium">
        Acceso denegado. Puede que no tengas los permisos necesarios para
        acceder a esta página. Por favor, contacta con jjulisanz@gmail.com si
        este problema persiste.
      </p>
      <p className="text-xl font-medium text-marron-clarito">
        Código de error único:{" "}
        <code className="text-lg bg-blanco p-1 rounded-sm">
          AccessDenied
        </code>
      </p>
    </>
  ),
  [Error.Verification]: (
    <>
      <p className="text-marron-clarito text-3xl font-medium">
        Hubo un problema al verificar tu cuenta. Por favor, intenta nuevamente o
        contacta con jjulisanz@gmail.com si el problema persiste.
      </p>
      <p className="text-xl font-medium text-marron-clarito">
        Código de error único:{" "}
        <code className="text-lg bg-blanco p-1 rounded-sm">
          Verification
        </code>
      </p>
    </>
  ),
  [Error.Default]: (
    <>
      <p className="text-marron-clarito text-3xl font-medium">
        Se produjo un error inesperado durante la autenticación. Por favor,
        contacta con jjulisanz@gmail.com si este error persiste.
      </p>
      <p className="text-xl font-medium text-marron-clarito">
        Código de error único:{" "}
        <code className="text-lg bg-blanco p-1 rounded-sm">Default</code>
      </p>
    </>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error") as Error;

  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-marron-clarito">
      <div className="max-w-2xl p-6 bg-blanco-oscuro border-2 border-marron rounded-lg shadow flex flex-col gap-6 text-center">
        <h5 className="text-4xl font-bold tracking-tight text-marron-claro">
          Ha ocurrido un error
        </h5>

        {errorMap[error] ||
          "Por favor, envía un correo a jjulisanz@gmail.com si el error persiste."}

        <Link
          href={"/login"}
          className="text-blue-500 underline text-lg font-medium"
        >
          Regresa a la página de inicio de sesión
        </Link>
      </div>
    </div>
  );
}
