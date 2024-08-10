import ServerForm from "@/components/dashboard/ServerForm";
import { getLastId } from "@/utils/serverActions";
import React from "react";

const AddProcut = async () => {
  const nextId = await getLastId();

  return (
    <main className="flex-1 ml-56 p-8 bg-blanco-oscuro">
      <ServerForm nextId={nextId} />
    </main>
  );
};

export default AddProcut;
