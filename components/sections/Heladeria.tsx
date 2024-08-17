"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

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

const leftItem = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.3,
    },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.3,
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

const Heladeria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-marron overflow-hidden"
    >
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
        <motion.h2
          variants={upItem}
          className="text-3xl md:text-4xl font-bold text-blanco "
        >
          Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
          Calidad
        </motion.h2>
        <motion.p
          variants={upItem}
          className="text-xl font-medium text-blanco-oscuro "
        >
          Cada sorbo, cada cucharada de nuestro helado artesanal es una obra
          maestra de sabor y frescura. Nos dedicamos a seleccionar los
          ingredientes más finos y naturales, asegurando que cada lote sea una
          experiencia de indulgencia pura y satisfacción inigualable.
        </motion.p>
        <motion.p
          variants={upItem}
          className="text-xl font-medium text-blanco-oscuro "
        >
          Nuestros helados se elaboran con recetas cuidadosamente
          perfeccionadas. Desde la textura cremosa hasta los sabores intensos y
          auténticos, cada producto que sale de nuestra heladería lleva consigo
          el compromiso de proporcionar lo mejor a nuestros clientes.
        </motion.p>

        <motion.button
          variants={upItem}
          className="px-4 py-2 border-4 border-blanco-oscuro text-blanco-oscuro text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-blanco-oscuro hover:text-marron bg-marron"
        >
          <Link href="/menu">Menu</Link>
        </motion.button>
      </div>
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4">
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 bg-marron"
          >
            <Image
              src="/sabores.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 bg-marron"
          >
            <Image
              src="/food/helado.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <motion.div className="flex flex-col w-full">
          <motion.video
            variants={rightItem}
            className="w-full h-full object-cover rounded-lg"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/video.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Heladeria;
