import { MenuItem } from "@/types";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedItem: MenuItem | null;
}

const DeleteModal = ({ isOpen, onClose, onConfirm, selectedItem }: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-marron p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-blanco text-lg font-semibold mb-4">Confirmar Eliminación</h2>
        <p className="text-blanco-oscuro text-base font-medium mb-6">¿Estás seguro de que deseas borrar el item: <span className="text-lg font-bold underline">{selectedItem?.title}?</span> </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
