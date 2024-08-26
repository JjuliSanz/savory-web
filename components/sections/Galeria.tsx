"use client";
import { motion, useInView } from "framer-motion";
import GalleryImage from "../GalleryImage";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import WhiteButton from "../ui/WhiteButton";
import { container, upItem } from "@/variants";
import Title from "../Title";

const leftImageItem = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -160, // Empezar con una rotación hacia la izquierda
    x: -100, // Empezar fuera del contenedor a la izquierda
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -5, // Terminar sin rotación
    x: 0, // Terminar en la posición original
    y: 0,
    transition: {
      type: "tween", // Especifica que el tipo de animación es tween
      ease: "easeInOut", // El easing más cercano a easeIn
      duration: 0.5, // Duración de la animación en segundos
    },
  },
};

const rightImageItem = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: 160, // Empezar con una rotación hacia la izquierda
    x: 100, // Empezar fuera del contenedor a la izquierda
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 5, // Terminar sin rotación
    x: 0, // Terminar en la posición original
    y: 0,
    transition: {
      type: "tween", // Especifica que el tipo de animación es tween
      ease: "easeInOut", // El easing más cercano a easeIn
      duration: 0.5, // Duración de la animación en segundos
    },
  },
};

const Galeria = () => {
  const images = [
    {
      src: "/barritas.jpeg",
      alt: "Barritas heladas",
      id: 1,
    },
    {
      src: "/tortas01.jpg",
      alt: "Tortas",
      id: 2,
    },
    {
      src: "/cubatones.jpeg",
      alt: "Cubatones",
      id: 3,
    },
    {
      src: "/food/sandwiches/sandwiches.jpeg",
      alt: "Sandwiches",
      id: 4,
    },
    {
      src: "/food/torta-oreo.jpg",
      alt: "Ensalada",
      id: 5,
    },
    {
      src: "/tostadosjyq.jpeg",
      alt: "Tostados jamon y queso",
      id: 6,
    },
    {
      src: "/food/conito-noche.jpeg",
      alt: "Conito noche",
      id: 7,
    },
    {
      src: "/food/yogurts.jpeg",
      alt: "Yogurts",
      id: 8,
    },
    {
      src: "/food/sandwiches/sandwiches.jpeg",
      alt: "Sandwiches",
      id: 9,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      ref={ref}
      id="galeria"
      className="min-h-screen py-20 bg-blanco-oscuro"
    >
      <div className="container mx-auto px-4 flex flex-col gap-10">
        <Title
          variants={upItem}
          title="Nuestra Galería"
          classNameProps="text-marron text-center"
        />
        <div className="w-full grid grid-cols-2 xl:grid-cols-3 place-items-center gap-6">
          {images.slice(0, 4).map((image) => (
            <div
              key={image.id}
              className="w-full h-[150px] 500:h-[190px] sm:h-[220px] md:h-[260px] lg:h-[300px]  bg-marron border-4 border-marron-clarito rounded "
            >
              <motion.div
                variants={image.id % 2 === 0 ? rightImageItem : leftImageItem}
                className="relative w-full h-full rounded"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-[140px] 500:h-[180px] sm:h-[210px] md:h-[250px] lg:h-[290px]  object-cover rounded "
                />
              </motion.div>
            </div>
          ))}
          <div className="w-full hidden 900:flex place-items-center 900:col-span-2 gap-6 ">
            {images.slice(4, 6).map((image) => (
              <div
                key={image.id}
                className="w-full h-[150px] 500:h-[190px] sm:h-[220px] md:h-[260px] lg:h-[300px]  bg-marron border-4 border-marron-clarito rounded "
              >
                <motion.div
                  variants={image.id % 2 === 0 ? rightImageItem : leftImageItem}
                  className="relative w-full h-full rounded"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-[140px] 500:h-[180px] sm:h-[210px] md:h-[250px] lg:h-[290px]  object-cover rounded "
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <WhiteButton
          href="https://www.instagram.com/savoryheladoscafe/"
          text="Seguinos en nuestro Instagram!"
          target="_blank"
          classNameProps="px-4 py-2"
        />
      </div>
    </motion.section>
  );
};

export default Galeria;
