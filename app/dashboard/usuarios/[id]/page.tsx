import { getMenuItemById } from "@/utils/serverActions";
import React from "react";
import EditForm from "../EditForm";
import { MenuItem } from "@/types";
import { notFound } from "next/navigation";

const Edit = async ({ params }: { params: { id: string } }) => {
  const _id = params.id;
  const menuItem = await getMenuItemById(_id);

  if (!menuItem) {
    notFound();
  }
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <EditForm menuItem={menuItem} />
    </main>
  );
};

export default Edit;
