"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Heladeria = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-marron overflow-hidden">
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-4xl font-bold text-blanco mb-4"
        >
          Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
          Calidad
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
          className="text-xl font-medium text-blanco-oscuro mb-4"
        >
          Cada sorbo, cada cucharada de nuestro helado artesanal es una obra
          maestra de sabor y frescura. Nos dedicamos a seleccionar los
          ingredientes más finos y naturales, asegurando que cada lote sea una
          experiencia de indulgencia pura y satisfacción inigualable.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-xl font-medium text-blanco-oscuro mb-4"
        >
          Nuestros helados se elaboran con recetas cuidadosamente
          perfeccionadas. Desde la textura cremosa hasta los sabores intensos y
          auténticos, cada producto que sale de nuestra heladería lleva consigo
          el compromiso de proporcionar lo mejor a nuestros clientes.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="px-4 py-2 border-4 border-blanco-oscuro text-blanco-oscuro text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-blanco-oscuro hover:text-marron bg-marron"
        >
          <Link href="/menu">Menu</Link>
        </motion.button>
      </div>
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4">
          <motion.div
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
            className="relative w-full h-72 bg-marron"
          >
            <Image
              src="/sabores.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative w-full h-72 bg-marron"
          >
            <Image
              src="/food/helado.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <motion.div className="flex flex-col w-full">
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
          <motion.video
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
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
    </section>
  );
};

export default Heladeria;
