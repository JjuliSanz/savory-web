// components/PreviewModal.tsx
import React from "react";
import Image from "next/image";
import { usePreview } from "@/hooks/usePreview";
import { MenuItem } from "@/types";

interface PreviewModalProps {
  isPreviewOpen: boolean;
  handlePreviewClose: () => void;
  selectedItem: MenuItem | null;
}

export const PreviewModal = ({
  isPreviewOpen,
  handlePreviewClose,
  selectedItem
}: PreviewModalProps) => {

  if (!isPreviewOpen || !selectedItem) return null;

  return (
    <div
      className="fixed inset-0 bg-negro bg-opacity-80 flex justify-center items-center z-0"
      onClick={handlePreviewClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-marron rounded-lg flex flex-col h-[400px] w-[300px] z-10 relative"
      >
        <div className="relative w-full h-60">
          <Image
            src={selectedItem.imageSrc}
            alt={selectedItem.title}
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="w-full flex flex-col grow justify-between gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-blanco text-lg font-bold">
              {selectedItem.title}
            </h3>
            {selectedItem.ingredients && (
              <p className="text-blanco-oscuro font-bold text-sm">
                {selectedItem.ingredients}
              </p>
            )}
          </div>
          <p className="text-end text-blanco-oscuro font-bold text-base">
            {selectedItem.price}
          </p>
        </div>
      </div>
    </div>
  );
};
