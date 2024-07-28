import Image from "next/image";
import React from "react";

const Heladeria = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-marron">
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blanco mb-4">
          Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
          Calidad
        </h2>
        <p className="text-xl font-medium text-blanco-oscuro mb-4">
          Cada sorbo, cada cucharada de nuestro helado artesanal es una obra
          maestra de sabor y frescura. Nos dedicamos a seleccionar los
          ingredientes más finos y naturales, asegurando que cada lote sea una
          experiencia de indulgencia pura y satisfacción inigualable.
        </p>
        <p className="text-xl font-medium text-blanco-oscuro mb-4">
          Nuestros helados se elaboran con recetas cuidadosamente
          perfeccionadas. Desde la textura cremosa hasta los sabores intensos y
          auténticos, cada producto que sale de nuestra heladería lleva consigo
          el compromiso de proporcionar lo mejor a nuestros clientes.
        </p>

        <button className="px-4 py-2 border-4 border-blanco text-blanco text-xl font-bold rounded-xl hover:scale-95 transition duration-300 ease-in-out hover:bg-blanco hover:text-marron">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Menu
          </a>
        </button>
      </div>
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4">
          <div className="relative w-full h-72 bg-marron">
            <Image
              src="/sabores.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-full h-72 bg-marron">
            <Image
              src="/food/helado.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          {/* <div className="relative w-full h-72 bg-marron">
              <Image
                src="/food/helado-pote.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-72 bg-marron">
              <Image
                src="/food/kinder.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div> */}
          <video
            className="w-full h-full object-cover rounded-lg"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Heladeria;
