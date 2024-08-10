import { deleteMenuItem } from "@/utils/serverActions";
import React from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const deleteMenuItemID = deleteMenuItem.bind(null, id);
  return (
    <form action={deleteMenuItemID} className="w-fit">
      <button type="submit" className="text-red-500 hover:text-red-700 font-bold text-start rounded">
        BORRAR
      </button>
    </form>
  );
};

export default DeleteButton;
