import Image from "next/image";
import React from "react";

const FilaImagenes = () => {
  return (
    <div className="hidden sm:flex flex-row w-full h-auto md:gap-4 bg-gradient-to-b from-marron from-50% to-blanco-oscuro to-50%">
      <div className="relative w-1/3 h-[200px] md:h-[400px] rounded-lg">
        <Image
          src="/food/alfajor.jpeg"
          alt="Savory Heladería y Cafetería 5"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-1/3 h-[200px] md:h-[400px] rounded-lg">
        <Image
          src="/food/sandwiches/sandwiches.jpeg"
          alt="Savory Heladería y Cafetería 5"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-1/3 h-[200px] md:h-[400px] rounded-lg">
        <Image
          src="/capuccino-edit.jpg"
          alt="Savory Heladería y Cafetería 6"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FilaImagenes;
