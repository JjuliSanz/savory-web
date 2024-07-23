import React from "react";
import GalleryImage from "../components/GalleryImage";

const Galeria = () => {
  const images = [
    { src: "/barritas.jpeg", alt: "Barritas heladas", width: 1440, height: 1440 },
    { src: "/tortas01.jpg", alt: "Tortas", width: 1080, height: 1080 },
    { src: "/cubatones.jpeg", alt: "Cubatones", width: 1440, height: 1440 },
    { src: "/pote.jpeg", alt: "Pote", width: 1440, height: 1800 },
    { src: "/ensalada.jpg", alt: "Ensalada", width: 1080, height: 1080 },
    { src: "/tostadosjyq.jpeg", alt: "Tostados jamon y queso", width: 1200, height: 1200 },
    { src: "/food/conito-noche.jpeg", alt: "Conito noche", width: 1440, height: 1800 },
    { src: "/food/yogurts.jpeg", alt: "Yogurts", width: 1440, height: 1080 },
    { src: "/food/sandwiches.jpeg", alt: "Sandwiches", width: 1440, height: 1080 }
  ];

  return (
    <section className="min-h-screen py-20 bg-blanco-oscuro">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-marron text-center mb-10">
          Nuestra Galería
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
