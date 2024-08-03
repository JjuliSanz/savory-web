
import { useState } from 'react';
import { MenuItem } from '../types';

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleEdit = (item: MenuItem) => {
    setIsDrawerOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id:", id);
  };

  return { isDrawerOpen, selectedItem, handleEdit, handleCloseDrawer, handleDelete, setSelectedItem };
};
