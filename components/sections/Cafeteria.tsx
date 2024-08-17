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
const Cafeteria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro"
    >
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4 pb-8">
          <motion.div
            variants={leftItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tostadosjyq.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            variants={leftItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/milkshake-varios.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full gap-4 pt-8">
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tostones-jugos.webp" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 3"
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tortas01.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 4"
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
        <motion.h2
          variants={upItem}
          className="w-full text-3xl md:text-4xl font-bold text-marron "
        >
          Delicias de la Cafetería en Savory
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-xl font-medium text-marron-claro  "
        >
          Savory no solo es reconocida por sus deliciosos helados, sino también
          por su variada y exquisita oferta de comidas y bebidas en su
          cafetería. Los clientes pueden disfrutar de una amplia selección de
          tortas y pasteles, perfectos para acompañar con una taza de café o té.
        </motion.p>
        <motion.p
          variants={upItem}
          className="text-xl font-medium text-marron-claro  "
        >
          Además ofrecemos una variedad de sándwiches, tanto fríos como
          calientes, que son ideales para un almuerzo rápido o una merienda
          sustanciosa. Entre las opciones de bebidas, los clientes pueden elegir
          entre cafés fríos y calientes, preparados con los mejores granos para
          satisfacer los gustos más exigentes.
        </motion.p>
        <motion.p
          variants={upItem}
          className="text-xl font-medium text-marron-claro "
        >
          Para aquellos con antojos más dulces, contamos con una deliciosa
          selección de panqueques, medialunas, alfajores, budines y muffins,
          todos preparados con ingredientes de alta calidad. O quizás los wraps,
          una opción fresca y ligera, perfecta para cualquier momento del día.
        </motion.p>

        <motion.button
          variants={upItem}
          className="px-4 py-2 border-4 border-marron text-marron text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-marron hover:text-blanco-oscuro bg-blanco-oscuro"
        >
          <Link href="/menu">Menu</Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Cafeteria;
