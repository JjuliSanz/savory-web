"use client";
import { deleteMenuItem } from "@/utils/serverActions";
import React, { useState } from "react";

const DeleteButton = ({ id, title }: { id: string; title: string }) => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const deleteMenuItemID = deleteMenuItem.bind(null, id);

  const handleDeleteAlertOpen = () => {
    setIsDeleteAlertOpen(true);
  };

  const handleDeleteAlertClose = () => {
    setIsDeleteAlertOpen(false);
  };
  return (
    <>
      <button
        onClick={handleDeleteAlertOpen}
        className="text-red-500 hover:text-red-700 font-bold text-start rounded "
      >
        BORRAR
      </button>

      {isDeleteAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-marron p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-blanco text-lg font-semibold mb-4">
              Confirmar Eliminación
            </h2>
            <p className="text-blanco-oscuro text-base font-medium mb-6">
              ¿Estás seguro de que deseas borrar el item:{" "}
              <span className="text-lg font-bold underline">{title}?</span>{" "}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDeleteAlertClose}
                className="py-2 px-4 bg-blanco-oscuro text-marron rounded hover:bg-opacity-80 transition duration-200"
              >
                CANCELAR
              </button>

              <form action={deleteMenuItemID} className="w-fit">
                <button
                  type="submit"
                  className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
                >
                  BORRAR
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;