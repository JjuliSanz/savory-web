"use client";

import { createUser } from "@/utils/serverActions";
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
  const [errorMessage, formAction] = useFormState(createUser, undefined);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Register</h1>
        <div className="w-full">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              aria-describedby="email-error"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Name Field */}
          <div className="mt-4">
            <label
              htmlFor="name"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-describedby="name-error"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label
              htmlFor="password"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              aria-describedby="password-error"
              minLength={6}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Confirm Password Field */}
          <div className="mt-4">
            <label
              htmlFor="confirmPassword"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              aria-describedby="confirmPassword-error"
              minLength={6}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Role Field */}
          <div className="mt-4">
            <label
              htmlFor="role"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              aria-describedby="role-error"
              className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div id="role-error" aria-live="polite" aria-atomic="true">
            {errorMessage.errors?.id &&
              errorMessage.errors.id.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <Button />
        {/* <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage &&
            errorMessage.errors.map((error: any) => (
              <p className="text-sm text-red-500" key={error}>
                {errorMessage}{" "}
              </p>
            ))}
        </div> */}
      </div>
    </form>
  );
};

export default RegisterForm;
