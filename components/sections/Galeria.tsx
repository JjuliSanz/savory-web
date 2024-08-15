import React from "react";
import GalleryImage from "../GalleryImage";
import Link from "next/link";
import Image from "next/image";

const Galeria = () => {
  const images = [
    {
      src: "/barritas.jpeg",
      alt: "Barritas heladas",
      width: 1440,
      height: 1440,
    },
    { src: "/tortas01.jpg", alt: "Tortas", width: 1080, height: 1080 },
    { src: "/cubatones.jpeg", alt: "Cubatones", width: 1440, height: 1440 },
    { src: "/pote.jpeg", alt: "Pote", width: 1440, height: 1800 },
    { src: "/ensalada.jpg", alt: "Ensalada", width: 1080, height: 1080 },
    {
      src: "/tostadosjyq.jpeg",
      alt: "Tostados jamon y queso",
      width: 1200,
      height: 1200,
    },
    {
      src: "/food/conito-noche.jpeg",
      alt: "Conito noche",
      width: 440,
      height: 800,
    },
    { src: "/food/yogurts.jpeg", alt: "Yogurts", width: 1440, height: 1080 },
    {
      src: "/food/sandwiches/sandwiches.jpeg",
      alt: "Sandwiches",
      width: 1440,
      height: 1080,
    },
  ];

  return (
    <section id="galeria" className="min-h-screen py-20 bg-blanco-oscuro">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-marron text-center">
          Nuestra Galería
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              className="relative w-full h-auto bg-blanco-oscuro rounded-lg overflow-hidden"
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <button className="px-4 py-2 w-fit mx-auto border-4 border-marron text-marron text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-marron hover:text-blanco-oscuro bg-blanco-oscuro">
          <Link
            href="https://www.instagram.com/savoryheladoscafe/"
            target="_blank"
          >
            Seguinos en nuestro Instagram!
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Galeria;
