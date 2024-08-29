import LoginForm from "@/components/LoginForm";
import React from "react";
import SignIn from "../register/SignIn";

const Login = () => {
  return (
    <main className="min-h-screen py-10 flex flex-col items-center justify-center bg-marron-clarito">
      {/* <LoginForm /> */}
      <h3 className="text-marron text-3xl font-medium">Por favor Inicia Sesión para continuar</h3>
      <SignIn/>
    </main>
  );
};

export default Login;
