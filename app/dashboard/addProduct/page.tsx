import CreateForm from "@/components/dashboard/CreateForm";
import { getLastId } from "@/utils/serverActions";
import React from "react";

const AddProcut = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const nextId = await getLastId();
  const selectedCategory = searchParams?.category || "Promociones";
  return (
    <main className="flex-1 ml-56 p-8 bg-blanco-oscuro">
      <CreateForm nextId={nextId} selectedCategory={selectedCategory}/>
    </main>
  );
};

export default AddProcut;
