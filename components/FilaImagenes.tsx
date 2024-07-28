import Image from "next/image";
import React from "react";

const FilaImagenes = () => {
  return (
    <div className="flex flex-row w-full h-auto gap-4 bg-gradient-to-b from-marron from-50% to-blanco-oscuro to-50%">
      <div className="relative w-1/3 h-[400px] rounded-lg">
        <Image
          src="/food/alfajor.jpeg"
          alt="Savory Heladería y Cafetería 5"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-1/3 h-[400px] rounded-lg">
        <Image
          src="/food/sandwiches.jpeg"
          alt="Savory Heladería y Cafetería 5"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-1/3 h-[400px] rounded-lg">
        <Image
          src="/capuccino-edit.jpg"
          alt="Savory Heladería y Cafetería 6"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default FilaImagenes;
