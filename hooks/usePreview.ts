
import { useState } from 'react';
import { MenuItem } from '../types';

export const usePreview = () => {
  const [visualizar, setVisualizar] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleVisualizar = (item: MenuItem) => {
    setVisualizar(true);
    setSelectedItem(item);
  };

  const handleCloseVisualizar = () => {
    setVisualizar(false);
    setSelectedItem(null);
  };

  return { visualizar, selectedItem, handleVisualizar, handleCloseVisualizar };
};
