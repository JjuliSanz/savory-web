"use client";
import { MenuItem } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Drawer } from "./Drawer";
import { PreviewModal } from "./PreviewModal";
import DeleteAlert from "./DeleteAlert";

interface TableRowProps {
  item: MenuItem;

  // handleDeleteClick: (item: MenuItem) => void;
  // handlePreviewOpen: (item: MenuItem) => void;
}

const TableRow = ({
  item,
}: // handleDeleteClick,
// handlePreviewOpen,
TableRowProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  // EDIT
  const handleOpenDrawer = (item: MenuItem) => {
    setIsDrawerOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  // PREVIEW
  const handlePreviewOpen = (item: MenuItem) => {
    setIsPreviewOpen(!isPreviewOpen);
    setSelectedItem(item);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    setSelectedItem(null);
  };

  // DELETE
  const handleDeleteAlert = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDeleteAlertOpen(true);
  };

  const handleDeleteClose = () => {
    setIsDeleteAlertOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <tr key={item.id}>
        <td className="pl-4 py-4 border-b border-marron-clarito">
          <Image
            src={item.imageSrc}
            alt={item.title}
            width={70}
            height={50}
            className="rounded-sm object-cover w-[100px]"
          />
        </td>
        <td className="px-6 py-4 border-b border-marron-clarito text-marron text-lg font-medium">
          {item.title}
        </td>
        <td className="px-6 py-4 border-b border-marron-clarito text-marron text-base font-medium">
          {item.description}
        </td>
        <td className="px-6 py-4 border-b border-marron-clarito text-marron text-base font-medium">
          <div className="flex gap-1">
            {" "}
            {item.price} <span className="inline">$</span>
          </div>
        </td>
        <td className="px-6 py-4 border-b border-marron-clarito text-right">
          <button
            onClick={() => handleOpenDrawer(item)}
            className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded"
          >
            Editar
          </button>
          <button
            onClick={() => handleDeleteAlert(item)}
            className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded ml-2"
          >
            Borrar
          </button>
          <button
            onClick={() => handlePreviewOpen(item)}
            className="text-marron hover:opacity-80 font-bold py-2 px-4 rounded ml-2"
          >
            Preview
          </button>
        </td>
      </tr>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleCloseDrawer={handleCloseDrawer}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <PreviewModal
        isPreviewOpen={isPreviewOpen}
        handlePreviewClose={handlePreviewClose}
        selectedItem={selectedItem}
      />
      <DeleteAlert
        isDeleteAlertOpen={isDeleteAlertOpen}
        selectedItem={selectedItem}
        handleDeleteClose={handleDeleteClose}
        setIsDeleteAlertOpen={setIsDeleteAlertOpen}
      />
    </>
  );
};

export default TableRow;
