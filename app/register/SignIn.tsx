import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="w-full py-2 px-4 bg-marron text-blanco-oscuro text-2xl font-bold rounded-xl hover:bg-marron-claro transition duration-300"
      >
        Iniciar Sesión con Google
      </button>
    </form>
  );
}
