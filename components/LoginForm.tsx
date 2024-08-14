"use client";
import { signIn } from "@/auth";
import { authenticate } from "@/utils/serverActions";
import Link from "next/link";
import React, { useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <div className="w-full flex gap-4">
      <button
        type="reset"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
        aria-disabled={pending}
      >
        Resetear
      </button>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro font-bold rounded-xl hover:bg-marron-claro transition duration-300"
        aria-disabled={pending}
      >
        {pending ? "Iniciando..." : "Enviar"}
      </button>
    </div>
  );
};

const LoginForm = () => {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className="w-full max-w-2xl">
      <div className="flex flex-col gap-6 rounded-lg bg-blanco-oscuro p-6">
        <h1 className="text-2xl text-marron font-bold">
          Please log in to continue.
        </h1>
        <div className="w-full flex flex-col gap-2">
          <div>
            <label
              className="mb-3 block text-base font-semibold text-marron"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="">
            <label
              className="mb-3 block text-base font-semibold text-marron"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        </div>
        {errorMessage &&
          errorMessage.errors.map((error: string) => (
            <div key={error} className="flex " aria-live="polite" aria-atomic="true">
              <p className="text-lg font-medium text-red-500">{errorMessage}</p>
            </div>
          ))}

        <div className="text-center">
          <p className="text-base font-medium text-marron mb-2">
            ¿No tienes una cuenta?
          </p>
          <Link
            href="/register"
            className="text-base font-semibold text-blue-500 hover:underline"
          >
            Registrarse
          </Link>
        </div>

        <Button />
      </div>
    </form>
  );
};

export default LoginForm;
