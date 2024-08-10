import Link from "next/link";
import React from "react";

const EditButton = ({ _id }: { _id: string }) => {
  return (
    <button className="text-blue-500 hover:text-blue-700 font-bold text-start rounded">
      <Link href={`/dashboard/usuarios/${_id}`}>EDITAR</Link>
    </button>
  );
};

export default EditButton;
