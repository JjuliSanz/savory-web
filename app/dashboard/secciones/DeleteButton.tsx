import { deleteMenuItem } from "@/utils/serverActions";
import React from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const deleteMenuItemID = deleteMenuItem.bind(null, id);
  return (
    <form action={deleteMenuItemID}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        BORRAR
      </button>
    </form>
  );
};

export default DeleteButton;
