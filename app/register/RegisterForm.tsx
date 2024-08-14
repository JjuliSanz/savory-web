"use client";

import { State } from "@/types";
import { createUser } from "@/utils/serverActions";
import Link from "next/link";
import React from "react";
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
        {pending ? "Creando..." : "Enviar"}
      </button>
    </div>
  );
};

const RegisterForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [errorMessage, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction} className="w-full max-w-2xl">
      <div className="flex flex-col gap-6 rounded-lg bg-blanco-oscuro p-6">
        <h1 className="text-2xl text-marron font-bold">Registrarse</h1>
        <div className="w-full flex flex-col gap-2">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="mb-3 block text-base font-semibold text-marron"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email address"
              aria-describedby="email-error"
              className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
            />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="text-base font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Name Field */}
          <div className="">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-semibold text-marron"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-describedby="name-error"
              className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="text-base font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          {/* Password Field */}
          <div className="">
            <label
              htmlFor="password"
              className="mb-3 block text-base font-semibold text-marron"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              aria-describedby="password-error"
              className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
            />
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="text-base font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Confirm Password Field */}
          <div className="">
            <label
              htmlFor="confirmPassword"
              className="mb-3 block text-base font-semibold text-marron"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              aria-describedby="confirmPassword-error"
              className="peer block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
            />
          </div>
          <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="text-base font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Role Field */}
          <div className="">
            <label
              htmlFor="role"
              className="mb-3 block text-base font-semibold text-marron"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              aria-describedby="role-error"
              className="block w-full rounded-md border-2 border-marron-clarito py-2 px-4 text-lg font-medium text-marron placeholder:text-marron"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div id="role-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="text-base font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-base font-medium text-marron mb-2">
            ¿Ya tienes una cuenta?
          </p>
          <Link
            href="/login"
            className="text-base font-semibold text-blue-500 hover:underline"
          >
            Inicia sesión
          </Link>
        </div>
        
        <Button />
      </div>
    </form>
  );
};

export default RegisterForm;
