// hooks/useDeleteItem.ts
import { useRouter } from 'next/navigation';

export const useDeleteItem = () => {
  const router = useRouter();

  const handleDelete = async (id: number, handleCloseDrawer: () => void) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const res = await fetch(`/api/menu/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh(); // Refresca la página o el estado necesario
          // handleCloseDrawer(); // Cierra el drawer o hace otra acción si es necesario
        } else {
          console.error("Failed to delete item:", await res.text());
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return { handleDelete };
};
