import ServerForm from "@/components/dashboard/ServerForm";
import { getLastId } from "@/utils/serverActions";
import React from "react";

const Usuarios = async () => {
  const { nextId } = await getLastId();
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <ServerForm nextId={nextId}/>
    </main>
  );
};

export default Usuarios;
