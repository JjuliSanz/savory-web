import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const GalleryImage = ({ src, alt, width, height }: Props) => {
  return (
    <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default GalleryImage;
