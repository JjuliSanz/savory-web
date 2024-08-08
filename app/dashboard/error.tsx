"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="ml-64 w-full h-screen pt-10 flex flex-col items-center gap-2">
      <h2 className="text-xl text-marron font-semibold">Algo salió mal</h2>
      <p className="text-lg text-marron-claro font-medium">{error.message}</p>
      {/* <button onClick={() => reset()}></button> */}
    </div>
  );
}
