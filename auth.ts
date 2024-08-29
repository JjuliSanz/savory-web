import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") || [];

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/login", // Página personalizada para el inicio de sesión
    error: "/error", // Página personalizada para errores de autenticación
  },
  callbacks: {
    async signIn({ user }) {
      // Verifica si el correo electrónico del usuario está en la lista permitida
      if (allowedEmails.includes(user.email!)) {
        return true;
      } else {
        // Redirige a una página de error o muestra un mensaje de acceso denegado
        return false;
      }
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
});
