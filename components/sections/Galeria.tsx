"use client";
import { motion, useInView } from "framer-motion";
import GalleryImage from "../GalleryImage";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Orquesta las animaciones con un retraso de 0.5 segundos entre cada elemento
    },
  },
};

const upItem = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.5,
    },
  },
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.5,
    },
  },
};
const Galeria = () => {
  const images = [
    {
      src: "/barritas.jpeg",
      alt: "Barritas heladas",
      width: 1440,
      height: 1440,
      id: 1,
    },
    { src: "/tortas01.jpg", alt: "Tortas", width: 1080, height: 1080, id: 2 },
    {
      src: "/cubatones.jpeg",
      alt: "Cubatones",
      width: 1440,
      height: 1440,
      id: 3,
    },
    { src: "/pote.jpeg", alt: "Pote", width: 1440, height: 1800, id: 4 },
    { src: "/ensalada.jpg", alt: "Ensalada", width: 1080, height: 1080, id: 5 },
    {
      src: "/tostadosjyq.jpeg",
      alt: "Tostados jamon y queso",
      width: 1200,
      height: 1200,
      id: 6,
    },
    {
      src: "/food/conito-noche.jpeg",
      alt: "Conito noche",
      width: 440,
      height: 800,
      id: 7,
    },
    {
      src: "/food/yogurts.jpeg",
      alt: "Yogurts",
      width: 1440,
      height: 1080,
      id: 8,
    },
    {
      src: "/food/sandwiches/sandwiches.jpeg",
      alt: "Sandwiches",
      width: 1440,
      height: 1080,
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
        <motion.h2
          variants={upItem}
          className="text-4xl font-bold text-marron text-center"
        >
          Nuestra Galería
        </motion.h2>

        <div className="w-full grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              variants={imageItem}
              className="relative w-full h-full bg-blanco-oscuro rounded-lg overflow-hidden"
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
        <motion.button
          variants={upItem}
          className="px-4 py-2 w-fit mx-auto border-4 border-marron text-marron text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-marron hover:text-blanco-oscuro bg-blanco-oscuro"
        >
          <Link
            href="https://www.instagram.com/savoryheladoscafe/"
            target="_blank"
          >
            Seguinos en nuestro Instagram!
          </Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Galeria;
