import Image from "next/image";
import React from "react";

const Galeria = () => {
  return (
    <section className="min-h-screen py-20 bg-blanco-oscuro">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-marron text-center mb-10">
          Nuestra Galería
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/barritas.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 1"
              width={1440}
              height={1440}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/tortas01.jpg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 2"
              width={1080}
              height={1080}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/cubatones.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 3"
              width={1440}
              height={1440}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/pote.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 4"
              width={1440}
              height={1800}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/ensalada.jpg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 5"
              width={1080}
              height={1080}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/tostadosjyq.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 6"
              width={1200}
              height={1200}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/food/conito-noche.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 4"
              width={1440}
              height={1800}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/food/yogurts.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 5"
              width={1440}
              height={1080}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="break-inside relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden">
            <Image
              src="/food/sandwiches.jpeg" // Reemplaza esta ruta con la imagen real
              alt="Descripción de la imagen 6"
              width={1440}
              height={1080}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
